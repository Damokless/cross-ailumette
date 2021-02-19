const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let lastPlayer = ''
let line1 = [' ', ' ', ' ', '|', ' ', ' ', ' ']
let line2 = [' ', ' ', '|', '|', '|', ' ', ' ']
let line3 = [' ', '|', '|', '|', '|', '|', ' ']
let line4 = ['|', '|', '|', '|', '|', '|', '|']

const recursiveAsyncReadLine = function (line1, line2, line3, line4) {
  displayGame(line1, line2, line3, line4)
  console.log('Your turn :')
  rl.question('Line :', (argline) => {
    rl.question('match :', (argmatch) => {
      switch (argline) {
        case '1':
          lastPlayer = 'Player'
          for (let index = 0; index < argmatch; index++) {
            const finder = line1.indexOf('|')
            line1[finder] = ' '
          }
          lastPlayer = 'Player'
          displayGame(line1, line2, line3, line4)
          gameStatus(line1, line2, line3, line4, lastPlayer)
          iaTurns(line1, line2, line3, line4)
          break

        case '2':
          for (let index = 0; index < argmatch; index++) {
            const finder = line2.indexOf('|')
            line2[finder] = ' '
          }
          lastPlayer = 'Player'
          displayGame(line1, line2, line3, line4)
          gameStatus(line1, line2, line3, line4, lastPlayer)
          iaTurns(line1, line2, line3, line4)
          break

        case '3':
          for (let index = 0; index < argmatch; index++) {
            const finder = line3.indexOf('|')
            line3[finder] = ' '
          }
          lastPlayer = 'Player'
          displayGame(line1, line2, line3, line4)
          gameStatus(line1, line2, line3, line4, lastPlayer)
          iaTurns(line1, line2, line3, line4)
          break

        case '4':
          for (let index = 0; index < argmatch; index++) {
            const finder = line4.indexOf('|')
            line4[finder] = ' '
          }
          lastPlayer = 'Player'
          displayGame(line1, line2, line3, line4)
          gameStatus(line1, line2, line3, line4, lastPlayer)
          iaTurns(line1, line2, line3, line4)
          break

        default:
          console.log('line undefined')
          break
      }
      rl.resume()
    })
  })
}

recursiveAsyncReadLine(line1, line2, line3, line4) // we have to actually start our recursion somehow

async function iaTurns (line1, line2, line3, line4) {
  const randomLine = Math.floor(Math.random() * (5 - 1)) + 1
  const randomMatch = Math.floor(Math.random() * (8 - 1)) + 1
  let results = ''
  switch (randomLine) {
    case 1:
      results = line1.filter(x => x.includes('|'))
      if (randomMatch > results.length) {
        iaTurns(line1, line2, line3, line4)
      } else {
        lastPlayer = 'AI'
        console.log('AI’s turn...')
        console.log(`AI removed ${randomMatch} match(es) from line ${randomLine}`)
        for (let index = 0; index < randomMatch; index++) {
          const finder = line1.indexOf('|')
          line1[finder] = ' '
        }
        gameStatus(line1, line2, line3, line4, lastPlayer)
        recursiveAsyncReadLine(line1, line2, line3, line4)
      }
      break
    case 2:
      results = line2.filter(x => x.includes('|'))
      if (randomMatch > results.length) {
        iaTurns(line1, line2, line3, line4)
      } else {
        lastPlayer = 'AI'
        console.log('AI’s turn...')
        console.log(`AI removed ${randomMatch} match(es) from line ${randomLine}`)
        for (let index = 0; index < randomMatch; index++) {
          const finder = line2.indexOf('|')
          line2[finder] = ' '
        }
        gameStatus(line1, line2, line3, line4, lastPlayer)
        recursiveAsyncReadLine(line1, line2, line3, line4)
      }
      break
    case 3:
      results = line3.filter(x => x.includes('|'))
      if (randomMatch > results.length) {
        iaTurns(line1, line2, line3, line4)
      } else {
        lastPlayer = 'AI'
        console.log('AI’s turn...')
        console.log(`AI removed ${randomMatch} match(es) from line ${randomLine}`)
        for (let index = 0; index < randomMatch; index++) {
          const finder = line3.indexOf('|')
          line3[finder] = ' '
        }
        gameStatus(line1, line2, line3, line4, lastPlayer)
        recursiveAsyncReadLine(line1, line2, line3, line4)
      }
      break
    case 4:
      results = line4.filter(x => x.includes('|'))
      if (randomMatch > results.length) {
        iaTurns(line1, line2, line3, line4)
      } else {
        lastPlayer = 'AI'
        console.log('AI’s turn...')
        console.log(`AI removed ${randomMatch} match(es) from line ${randomLine}`)
        for (let index = 0; index < randomMatch; index++) {
          const finder = line4.indexOf('|')
          line4[finder] = ' '
        }
        gameStatus(line1, line2, line3, line4, lastPlayer)
        recursiveAsyncReadLine(line1, line2, line3, line4)
      }
      break
  }
}

function gameStatus (line1, line2, line3, line4, lastPlayer) {
  const check1 = line1.filter(x => x.includes('|'))
  const check2 = line2.filter(x => x.includes('|'))
  const check3 = line3.filter(x => x.includes('|'))
  const check4 = line4.filter(x => x.includes('|'))
  if (check1.length !== 0 || check2.length !== 0 || check3.length !== 0 || check4.length !== 0) {
    return null
  } else {
    if (lastPlayer === 'Player') {
      console.log('You lost, too bad..')
      process.exit()
    } else {
      displayGame(line1, line2, line3, line4)
      console.log('I lost.. snif.. but I’ll get you next time!!')
      process.exit()
    }
  }
}

function displayGame(line1, line2, line3, line4) {
  console.log('* * * * * * * * ')
  console.log(`*${line1[0]} ${line1[1]} ${line1[2]} ${line1[3]} ${line1[4]} ${line1[5]} ${line1[6]}*`)
  console.log(`*${line2[0]} ${line2[1]} ${line2[2]} ${line2[3]} ${line2[4]} ${line2[5]} ${line2[6]}*`)
  console.log(`*${line3[0]} ${line3[1]} ${line3[2]} ${line3[3]} ${line3[4]} ${line3[5]} ${line3[6]}*`)
  console.log(`*${line4[0]} ${line4[1]} ${line4[2]} ${line4[3]} ${line4[4]} ${line4[5]} ${line4[6]}*`)
  console.log('* * * * * * * * ')
}
