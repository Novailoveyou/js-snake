const SnakeCtrl = (() => {
  const moveTop = () => {
    setInterval(() => {
      const snake = document.querySelector('.snake')
      const uSnake = document.getElementById(
        `${+snake.id.split('-')[0] - 1}-${snake.id.split('-')[1]}`
      )
      snake.classList.remove('snake')
      uSnake.classList.add('snake')
    }, 1000)
  }

  const moveRight = () => {
    setInterval(() => {
      const snake = document.querySelector('.snake')
      const uSnake = document.getElementById(
        `${snake.id.split('-')[0]}-${+snake.id.split('-')[1] + 1}`
      )
      snake.classList.remove('snake')
      uSnake.classList.add('snake')
    }, 1000)
  }

  const moveBottom = () => {
    setInterval(() => {
      const snake = document.querySelector('.snake')
      const uSnake = document.getElementById(
        `${+snake.id.split('-')[0] + 1}-${snake.id.split('-')[1]}`
      )
      snake.classList.remove('snake')
      uSnake.classList.add('snake')
    }, 1000)
  }

  const moveLeft = () => {
    setInterval(() => {
      const snake = document.querySelector('.snake')
      const uSnake = document.getElementById(
        `${snake.id.split('-')[0]}-${+snake.id.split('-')[1] - 1}`
      )
      snake.classList.remove('snake')
      uSnake.classList.add('snake')
    }, 1000)
  }

  return {
    init: () => {
      const initialCell = document.getElementById('2-2')
      initialCell.classList.add('snake')
    },
    update: () => {
      document.addEventListener('keydown', e => {
        switch (e.key) {
          case 'ArrowUp':
            moveTop()
            break
          case 'ArrowRight':
            moveRight()
            break
          case 'ArrowDown':
            moveBottom()
            break
          case 'ArrowLeft':
            moveLeft()
            break
        }
      })
    }
  }
})()

const UICtrl = (() => {
  const UISelectors = {
    app: '#app'
  }

  return {
    populateWithBoard: () => {
      const rowsNColumns = 20
      const app = document.querySelector(UISelectors.app)
      app.innerHTML = /* html */ `
        <table id="board">
          <tbody>
            ${(() => {
              let output = ''
              for (let i = 0; i < rowsNColumns; i++) {
                output += /* html */ `
                  <tr class='row'>
                    ${(() => {
                      let output = ''
                      for (let j = 0; j < rowsNColumns; j++) {
                        output += /* html */ `
                          <th id=${`${i + 1}-${j + 1}`} class='cell'></th>
                        `
                      }
                      return output
                    })()}
                  </tr>
                `
              }
              return output
            })()}
          </tbody>
        </table>
      `
    },
    getUISelectors: () => UISelectors
  }
})()

const App = ((SnakeCtrl, UICtrl) => {
  return {
    init: () => {
      UICtrl.populateWithBoard()
      SnakeCtrl.init()
      SnakeCtrl.update()
    }
  }
})(SnakeCtrl, UICtrl)

App.init()
