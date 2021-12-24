const mult = (newArrNumber, operator) => {
    if (operator === "mult") {
        let result = newArrNumber.reduce((acc, elem) => {
            return acc * elem;
        })
        console.log(result)
    }
};

// const mult = () => {
// console.log('mult')
// };

module.exports = mult;