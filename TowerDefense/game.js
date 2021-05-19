import Model from './model.js'
import View from './view.js'




class Game {
    constructor() {
        console.log("WORKING")
        this.model = new Model();
        this.view = new View(this.model);
        //NEW CONTROLLER
    }

    onTimer() {
        // this.controller.update();
		// this.model.update();
		// this.view.update();
    }
  }

let game = new Game();

let timer = setInterval(function() {
      game.onTimer();
  }, 40);