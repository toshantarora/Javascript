// Count number of digits
// Input - 123456
// Output - 6 

function countNumOfDigits(num, count = 0)
{
    if(num){
        return countNumOfDigits(Math.floor(num / 10), ++count);
     };
     return count;
}
function CountNumberOfDigitsRecursive(num)
{
    if(num / 10 === 0)
    {
        return 0;
    }

    return 1 + CountNumberOfDigitsRecursive(Math.floor(num / 10));
}

const OutputFirst =  countNumOfDigits(232323);
const OutputSecond = CountNumberOfDigitsRecursive(123456);

console.log({
    OutputFirst,
    OutputSecond
});