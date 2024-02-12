export default class map{

    mapNumbers(numbers){
        const newNumbers = numbers.map(function (num){
            return num * 2;
        });
        return newNumbers;
    }
  
    // * forEach example 1
    // let newNums = [];
    // newNums = numbers.forEach(newDouble);
    // console.log(newNums);
    
    // function newDouble(x){
    //   newNums.push(x*2);
    // }
    
    // * forEach example 2
    // let newNums = [];
    // numbers.forEach(function(x){
    //   newNums.push(x*2);
    // })
    // console.log(newNums)
    
    // * map example 1
    
    // function double(x){
    //   return x * 2;
    // }
    
    // const newNumbers = numbers.map(double);
    // console.log(newNumbers);

}