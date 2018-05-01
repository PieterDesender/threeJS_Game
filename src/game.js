

export default class Game {
  constructor() {
    this.maxFps = 30;
    this.lastRender = 0;
    this.lastUpdate = 0;
    this.timeStep = 1000 / this.maxFps;
    this.fps = 0;
    this.timeSinceLastSecond = 0;
    this.pauseGame = false;
  }

  launch(idToChange = "game", config) {
   
    return this;
  }

  startGame() {
    requestAnimationFrame(this.loop());
  }

  loop() {
    return timestamp => {
      requestAnimationFrame(this.loop());
      if (!this.pauseGame) {
        let deltaTSeconds = timestamp - this.lastUpdate;
        this.tick(deltaTSeconds * 0.001);
        if (this.timeStep <= timestamp - this.lastRender) {
          this.draw();
          this.lastRender = timestamp;
          this.fps++;
          if ((timestamp - this.timeSinceLastSecond) >= 1000) {
            console.log(this.fps);
            this.fps = 0;
            this.timeSinceLastSecond = timestamp;
          }
        }
      }
      this.lastUpdate = timestamp;
    };
  }



  tick(deltaTMs) {
    
  }

  draw() {

  }



}
