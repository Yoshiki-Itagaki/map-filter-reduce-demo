export default class find{
    findNumbers(numbers){
        const newNumber = numbers.find(function (num){
            return num > 40 && num < 50;
        })
        return newNumber
    }
}