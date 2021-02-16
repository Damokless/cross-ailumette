const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let line1 = [' ', ' ', ' ', '|', ' ', ' ', ' ']
let line2 = [' ', ' ', '|', '|', '|', ' ', ' ']
let line3 = [' ', '|', '|', '|', '|', '|', ' ']
let line4 = ['|', '|', '|', '|', '|', '|', '|']
let line1status = true
let line2status = true
let line3status = true
let line4status = true

console.log('* * * * * * * * ')
console.log(`*${line1[0]} ${line1[1]} ${line1[2]} ${line1[3]} ${line1[4]} ${line1[5]} ${line1[6]}*`)
console.log(`*${line2[0]} ${line2[1]} ${line2[2]} ${line2[3]} ${line2[4]} ${line2[5]} ${line2[6]}*`)
console.log(`*${line3[0]} ${line3[1]} ${line3[2]} ${line3[3]} ${line3[4]} ${line3[5]} ${line3[6]}*`)
console.log(`*${line4[0]} ${line4[1]} ${line4[2]} ${line4[3]} ${line4[4]} ${line4[5]} ${line4[6]}*`)
console.log('* * * * * * * * ')

for (let index = 0; index < 4; index++) {
  index += 1
  switch (index) {
    case 1:
        const found = line1.find(element => element > 10);
      break
    case 2:
        const found = line2.find(element => element > 10);
    break
    case 3:
        const found = line3.find(element => element > 10);
    break
    case 4:
        const found = line4.find(element => element > 10);
    break

    default:
      break
  }
}

rl.close()

/* rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`)

  rl.close()
}) */
