import { loadImage } from './utils.js';

export class Ground {
  static groundImg;
  width = 2000;
  height = 100;

  static async preloadImage() {
    Ground.groundImg = new Image();
    await loadImage(Ground.groundImg, './assets/ground.png');
  }

  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.x = 0;
    this.y = canvas.height - this.height;
  }

  draw() {
    this.ctx.drawImage(
      Ground.groundImg,
      this.x,
      this.y
    );
  }

  update(speed = 3) {
    this.x -= speed;
    if (this.x <= -this.width / 2) this.x = 0;
    this.draw();
  }
}