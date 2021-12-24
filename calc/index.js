// const operation = require('./operation')
// console.log(operation)
// operation.sum()
// operation.sub()
// operation.mult()
// operation.div()

// const { sum, mult, div, sub } = require('./operation')

const actionHandler = require('./action-handler')
let [operator, ...numbers] = process.argv.slice(2)
let newArrNumber = numbers.map((number) => Number(number));
actionHandler(newArrNumber, operator)

