const div = (newArrNumber, operator) => {
    if (operator === "div") {
        let result = newArrNumber.reduce((acc, elem) => {
            return acc / elem;
        })
        console.log(result)
    }
};

// const div = () => {
// console.log('div')
// };

module.exports = div;