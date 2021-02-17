const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
const line1 = [' ', ' ', ' ', '|', ' ', ' ', ' ']
const line2 = [' ', ' ', '|', '|', '|', ' ', ' ']
const line3 = [' ', '|', '|', '|', '|', '|', ' ']
const line4 = ['|', '|', '|', '|', '|', '|', '|']

do {
  console.log('* * * * * * * * ')
  console.log(`*${line1[0]} ${line1[1]} ${line1[2]} ${line1[3]} ${line1[4]} ${line1[5]} ${line1[6]}*`)
  console.log(`*${line2[0]} ${line2[1]} ${line2[2]} ${line2[3]} ${line2[4]} ${line2[5]} ${line2[6]}*`)
  console.log(`*${line3[0]} ${line3[1]} ${line3[2]} ${line3[3]} ${line3[4]} ${line3[5]} ${line3[6]}*`)
  console.log(`*${line4[0]} ${line4[1]} ${line4[2]} ${line4[3]} ${line4[4]} ${line4[5]} ${line4[6]}*`)
  console.log('* * * * * * * * ')

  console.log('Your turn :')
  rl.question('Line :', (argline) => {
    rl.question('match :', (argmatch) => {
      console.log(`Player removed ${argmatch} match(es) from line ${argline}`)
      switch (argline) {
        case 1:
          for (let index = 0; index < argmatch; index++) {
            const finder = line1.findIndex(element => element = '|')
            line1[finder] = ' '
          }
          break

        case 2:
          break

        case 3:
          break

        case 4:
          break

        default:
          break
      }
    })
    rl.close()
  })
} while (false)
