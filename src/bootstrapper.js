import Game from "./game.js";
const game = (function wrapGameCode() {
  const inClosure = new Game();
  return {
    launch: inClosure.launch.bind(inClosure)
  };
}());
module.exports = game;