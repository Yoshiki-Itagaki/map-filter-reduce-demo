export default class filter{

    filterNumbers(numbers){
        const newNumbers = numbers.filter(function (num){
            return num > 10
        });
        return newNumbers;
    }
}