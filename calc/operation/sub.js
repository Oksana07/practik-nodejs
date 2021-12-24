const sub = (newArrNumber, operator) => {
    if (operator === "sub") {
        let result = newArrNumber.reduce((acc, elem) => {
            return acc - elem;
        }, 0)
        console.log(result)
    }
};

// const sub = () => {
// console.log('sub')
// };

module.exports = sub;