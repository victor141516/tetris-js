import { Board } from './board'
import { Game } from './game'
import './style.css'

const game = new Game(new Board(40, 10), 'web')
game.on('lose', () => {
  console.log('por tonto')
})
game.start()
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') game.move('left')
  if (event.key === 'ArrowRight') game.move('right')
  if (event.key === 'ArrowDown') game.move('down')
  if (event.key === 'ArrowUp') game.rotate(1)
  if (event.key === 't') game.tick()
  if (event.key === 'Escape') {
    if (game.isPaused) game.resume()
    else game.pause()
  }
})
