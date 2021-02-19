const line3 = [' ', '|', '|', '|', '|', '|', ' ']
const randomMatch = Math.floor(Math.random() * (8 - 1)) + 1

const results = line3.filter(x => x.includes('|'))
console.log(results)
if (randomMatch > results) {
  console.log('call function')
  iaTurns(line1, line2, line3, line4)
} else {
  lastPlayer = 'AI'
  console.log('AI’s turn...')
  console.log(`AI removed ${randomMatch} match(es) from line 3`)
  for (let index = 0; index < randomMatch; index++) {
    const finder = line3.indexOf('|')
    line3[finder] = ' '
  }
}
