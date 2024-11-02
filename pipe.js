import { loadImage } from './utils.js';

export class Pipe {
  static width = 100;
  static topPipeImg;
  static bottomPipeImg;
  width = Pipe.width;
  spacing = 220;

  static async preloadImages() {
    Pipe.topPipeImg = new Image();
    Pipe.bottomPipeImg = new Image();
    await Promise.all([
      loadImage(Pipe.topPipeImg, './assets/top-pipe.png'),
      loadImage(Pipe.bottomPipeImg, './assets/bottom-pipe.png')
    ]);
  }

  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.canvasHeight = canvas.height;
    this.top = this.canvasHeight / 10 + Math.round(Math.random() * (this.canvasHeight / 3));
    this.bottom = this.top + this.spacing;
    this.x = canvas.width;
  }

  draw() {
    this.ctx.drawImage(
      Pipe.topPipeImg,
      this.x,
      this.top - Pipe.topPipeImg.height,
    );

    this.ctx.drawImage(
      Pipe.bottomPipeImg,
      this.x,
      this.bottom
    );
  }

  update(speed = 3) {
    this.x -= speed;
    this.draw();
  }

  isOffscreen() {
    return this.x < -this.width;
  }
}