import {
  Camera,
  Mesh,
  Plane,
  Program,
  Renderer,
  Texture,
  Transform,
} from "ogl";
import { useEffect, useRef } from "react";

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function lerp(p1, p2, t) {
  return p1 + (p2 - p1) * t;
}

function createCardTexture(gl, logoImg, { padding = 0.18 } = {}) {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, size, size);

  const inner = size * (1 - padding * 2);
  const ratio = Math.min(
    inner / logoImg.naturalWidth,
    inner / logoImg.naturalHeight,
  );
  const w = logoImg.naturalWidth * ratio;
  const h = logoImg.naturalHeight * ratio;
  const x = (size - w) / 2;
  const y = (size - h) / 2;
  ctx.drawImage(logoImg, x, y, w, h);

  const texture = new Texture(gl, { generateMipmaps: true });
  texture.image = canvas;
  return texture;
}

class Media {
  constructor({
    geometry,
    gl,
    image,
    index,
    length,
    renderer,
    scene,
    screen,
    viewport,
    bend,
    borderRadius = 0.15,
    gap = 0.9,
  }) {
    this.extra = 0;
    this.geometry = geometry;
    this.gl = gl;
    this.image = image;
    this.index = index;
    this.length = length;
    this.renderer = renderer;
    this.scene = scene;
    this.screen = screen;
    this.viewport = viewport;
    this.originalBend = bend;
    this.bend = bend;
    this.borderRadius = borderRadius;
    this.gap = gap;
    this.createShader();
    this.createMesh();
    this.onResize();
  }

  createShader() {
    const texture = new Texture(this.gl, { generateMipmaps: true });

    this.program = new Program(this.gl, {
      depthTest: false,
      depthWrite: false,
      vertex: `
        precision highp float;
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform sampler2D tMap;
        uniform float uBorderRadius;
        uniform float uGlow;
        uniform vec3 uGlowColor;
        varying vec2 vUv;

        float roundedBoxSDF(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b;
          return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
        }

        void main() {
          vec2 p = vUv - 0.5;
          float d = roundedBoxSDF(p, vec2(0.5 - uBorderRadius), uBorderRadius);

          float glow = exp(-d * 14.0) * uGlow;
          vec3 glowRgb = uGlowColor * glow;
          float glowA = clamp(glow, 0.0, 1.0);

          vec4 logo = texture2D(tMap, vUv);
          vec3 cardRgb = mix(vec3(1.0), logo.rgb, logo.a);

          float edge = 0.003;
          float cardA = 1.0 - smoothstep(-edge, edge, d);

          vec3 outRgb = mix(glowRgb, cardRgb, cardA);
          float outA = max(cardA, glowA);

          if (outA < 0.01) discard;
          gl_FragColor = vec4(outRgb, outA);
        }
      `,
      uniforms: {
        tMap: { value: texture },
        uBorderRadius: { value: this.borderRadius },
        uGlow: { value: 0 },
        uGlowColor: { value: [1.0, 0.55, 0.1] },
      },
      transparent: true,
    });

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = this.image;
    img.onload = () => {
      this.program.uniforms.tMap.value = createCardTexture(this.gl, img);
    };
  }

  createMesh() {
    this.plane = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program,
    });
    this.plane.setParent(this.scene);
  }

  update(scroll, direction) {
    this.plane.position.x = this.x - scroll.current - this.extra;

    const x = this.plane.position.x;
    const H = this.viewport.width / 2;

    if (this.bend === 0) {
      this.plane.position.y = 0;
      this.plane.rotation.z = 0;
    } else {
      const B_abs = Math.abs(this.bend);
      const R = (H * H + B_abs * B_abs) / (2 * B_abs);
      const effectiveX = Math.min(Math.abs(x), H);
      const arc = R - Math.sqrt(R * R - effectiveX * effectiveX);

      if (this.bend > 0) {
        this.plane.position.y = -arc;
        this.plane.rotation.z = -Math.sign(x) * Math.asin(effectiveX / R);
      } else {
        this.plane.position.y = arc;
        this.plane.rotation.z = Math.sign(x) * Math.asin(effectiveX / R);
      }
    }

    const distNorm = Math.min(Math.abs(x) / (this.baseScaleX * 0.9), 1);
    const targetGlow = 1 - distNorm;

    this.program.uniforms.uGlow.value = lerp(
      this.program.uniforms.uGlow.value,
      targetGlow * targetGlow,
      0.15,
    );

    const targetScale = 1 + (1 - distNorm) * 0.08;
    this.plane.scale.x = this.baseScaleX * targetScale;
    this.plane.scale.y = this.baseScaleY * targetScale;

    const planeOffset = this.plane.scale.x / 2;
    const viewportOffset = this.viewport.width / 2;

    this.isBefore = this.plane.position.x + planeOffset < -viewportOffset;
    this.isAfter = this.plane.position.x - planeOffset > viewportOffset;

    if (direction === "right" && this.isBefore) {
      this.extra -= this.widthTotal;
      this.isBefore = false;
      this.isAfter = false;
    }

    if (direction === "left" && this.isAfter) {
      this.extra += this.widthTotal;
      this.isBefore = false;
      this.isAfter = false;
    }
  }

  onResize({ screen, viewport } = {}) {
    if (screen) this.screen = screen;
    if (viewport) this.viewport = viewport;

    const isMobile = this.screen.width < 640;
    const isTablet = this.screen.width < 1024;

    if (this.originalBend === 0) {
      this.bend = 0;
    } else {
      const maxBend = isMobile ? 4 : isTablet ? 6 : Math.abs(this.originalBend);
      this.bend =
        Math.sign(this.originalBend) *
        Math.min(Math.abs(this.originalBend), maxBend);
    }

    const size = Math.min(
      this.viewport.height * (isMobile ? 0.34 : isTablet ? 0.38 : 0.42),
      this.viewport.width * (isMobile ? 0.42 : isTablet ? 0.24 : 0.16),
    );

    this.baseScaleX = size;
    this.baseScaleY = size;
    this.plane.scale.x = size;
    this.plane.scale.y = size;

    this.padding = isMobile
      ? this.gap * 0.55
      : isTablet
        ? this.gap * 0.8
        : this.gap;
    this.width = size + this.padding;
    this.widthTotal = this.width * this.length;
    this.x = this.width * this.index;
  }
}

class App {
  constructor(
    container,
    {
      items,
      bend,
      borderRadius = 0.15,
      gap = 0.9,
      scrollSpeed = 2,
      scrollEase = 0.05,
    } = {},
  ) {
    this.container = container;
    this.scrollSpeed = scrollSpeed;
    this.gap = gap;
    this.scroll = {
      ease: scrollEase,
      current: 0,
      target: 0,
      last: 0,
    };
    this.onCheckDebounce = debounce(this.onCheck.bind(this), 200);
    this.createRenderer();
    this.createCamera();
    this.createScene();
    this.onResize();
    this.createGeometry();
    this.createMedias(items, bend, borderRadius);
    this.update = this.update.bind(this);
    this.update();
    this.addEventListeners();
  }

  createRenderer() {
    this.renderer = new Renderer({
      alpha: true,
      antialias: true,
      dpr: Math.min(window.devicePixelRatio || 1, 2),
    });

    this.gl = this.renderer.gl;
    this.gl.clearColor(0, 0, 0, 0);
    this.container.appendChild(this.gl.canvas);
  }

  createCamera() {
    this.camera = new Camera(this.gl);
    this.camera.fov = 45;
    this.camera.position.z = 20;
  }

  createScene() {
    this.scene = new Transform();
  }

  createGeometry() {
    this.planeGeometry = new Plane(this.gl, {
      heightSegments: 1,
      widthSegments: 1,
    });
  }

  createMedias(items, bend = 3, borderRadius) {
    const galleryItems = items && items.length ? items : [];
    this.mediasImages = galleryItems.concat(galleryItems);
    this.medias = this.mediasImages.map(
      (data, index) =>
        new Media({
          geometry: this.planeGeometry,
          gl: this.gl,
          image: data.image,
          index,
          length: this.mediasImages.length,
          renderer: this.renderer,
          scene: this.scene,
          screen: this.screen,
          viewport: this.viewport,
          bend,
          borderRadius,
          gap: this.gap,
        }),
    );
  }

  onTouchDown(e) {
    this.isDown = true;
    this.scroll.position = this.scroll.current;
    this.start = e.touches ? e.touches[0].clientX : e.clientX;
  }

  onTouchMove(e) {
    if (!this.isDown) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const distance = (this.start - x) * (this.scrollSpeed * 0.025);
    this.scroll.target = this.scroll.position + distance;
  }

  onTouchUp() {
    this.isDown = false;
    this.onCheck();
  }

  onWheel(e) {
    const delta = e.deltaY || e.wheelDelta || e.detail;
    this.scroll.target +=
      (delta > 0 ? this.scrollSpeed : -this.scrollSpeed) * 0.2;
    this.onCheckDebounce();
  }

  onCheck() {
    if (!this.medias || !this.medias[0]) return;
    const width = this.medias[0].width;
    const itemIndex = Math.round(Math.abs(this.scroll.target) / width);
    const item = width * itemIndex;
    this.scroll.target = this.scroll.target < 0 ? -item : item;
  }

  onResize() {
    this.screen = {
      width: this.container.clientWidth,
      height: this.container.clientHeight,
    };

    const isMobile = this.screen.width < 640;
    const isTablet = this.screen.width < 1024;

    this.camera.position.z = isMobile ? 30 : isTablet ? 24 : 20;

    this.renderer.setSize(this.screen.width, this.screen.height);
    this.camera.perspective({
      aspect: this.screen.width / this.screen.height,
    });

    const fov = (this.camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
    const width = height * this.camera.aspect;

    this.viewport = { width, height };

    if (this.medias) {
      this.medias.forEach((media) =>
        media.onResize({
          screen: this.screen,
          viewport: this.viewport,
        }),
      );
    }
  }

  update() {
    this.scroll.current = lerp(
      this.scroll.current,
      this.scroll.target,
      this.scroll.ease,
    );
    const direction = this.scroll.current > this.scroll.last ? "right" : "left";

    if (this.medias) {
      this.medias.forEach((media) => media.update(this.scroll, direction));
    }

    this.renderer.render({
      scene: this.scene,
      camera: this.camera,
    });

    this.scroll.last = this.scroll.current;
    this.raf = window.requestAnimationFrame(this.update);
  }

  addEventListeners() {
    this.boundOnResize = this.onResize.bind(this);
    this.boundOnWheel = this.onWheel.bind(this);
    this.boundOnTouchDown = this.onTouchDown.bind(this);
    this.boundOnTouchMove = this.onTouchMove.bind(this);
    this.boundOnTouchUp = this.onTouchUp.bind(this);

    window.addEventListener("resize", this.boundOnResize);
    this.container.addEventListener("wheel", this.boundOnWheel, {
      passive: true,
    });
    this.container.addEventListener("mousedown", this.boundOnTouchDown);
    window.addEventListener("mousemove", this.boundOnTouchMove);
    window.addEventListener("mouseup", this.boundOnTouchUp);
    this.container.addEventListener("touchstart", this.boundOnTouchDown, {
      passive: true,
    });
    window.addEventListener("touchmove", this.boundOnTouchMove, {
      passive: true,
    });
    window.addEventListener("touchend", this.boundOnTouchUp);
  }

  destroy() {
    window.cancelAnimationFrame(this.raf);
    window.removeEventListener("resize", this.boundOnResize);
    this.container.removeEventListener("wheel", this.boundOnWheel);
    this.container.removeEventListener("mousedown", this.boundOnTouchDown);
    window.removeEventListener("mousemove", this.boundOnTouchMove);
    window.removeEventListener("mouseup", this.boundOnTouchUp);
    this.container.removeEventListener("touchstart", this.boundOnTouchDown);
    window.removeEventListener("touchmove", this.boundOnTouchMove);
    window.removeEventListener("touchend", this.boundOnTouchUp);

    if (this.renderer?.gl?.canvas?.parentNode) {
      this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas);
    }
  }
}

export default function CircularGallery({
  items,
  bend = 3,
  borderRadius = 0.15,
  gap = 0.9,
  scrollSpeed = 2,
  scrollEase = 0.05,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const app = new App(containerRef.current, {
      items,
      bend,
      borderRadius,
      gap,
      scrollSpeed,
      scrollEase,
    });

    return () => app.destroy();
  }, [items, bend, borderRadius, gap, scrollSpeed, scrollEase]);

  return (
    <div
      data-aos="zoom-in-up"
      data-aos-delay="300"
      data-aos-duration="700"
      ref={containerRef}
      className="w-full h-full overflow-hidden cursor-grab active:cursor-grabbing"
      style={{ touchAction: "pan-y" }}
    />
  );
}
