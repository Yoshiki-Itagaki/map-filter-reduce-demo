export default class reduce{

    reduceNumbers(numbers){
        const newNumbers = numbers.reduce(function (accumulator, currentNumber){
            return accumulator + currentNumber;
        })
        return newNumbers;
    }
}