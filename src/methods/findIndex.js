export default class findIndex{
    findIndexOfNumbers(numbers){
        const newNumber = numbers.findIndex(function (num){
            return num > 40 && num < 50;
        })
        return newNumber
    }
}