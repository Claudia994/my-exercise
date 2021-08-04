// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99. 
//Find the largest palindrome made from the product of two 3-digit numbers. 
/*  first: i will create a function that will check if a number is palindrome */
function isPalindrome(x){
    x = x.toString().split('');
// (1) convert the number to an array of characters 
    var len = x.lenght;
// (2) get the lenght of the array;
    for(var i=0; i<len/2;i++){
// (3) loop through half the elements from the array
       if(x[i] !== x[len-1-i]){
 //(4)if the i-th element is not equal to the len-1-i-th element it means that the number is not palindrome,so return false.Else the loop continues till it terminates.then return true
        return false;
       }
    }
    return true;
}
/* Second: looping through all the pairs of 3digit numbers,multiplying them an check if the result is palindrome */
function largestPalindrome(){
    var largest = 0;
    for(var i=999;i>=100; i--){
        for(var j=999; j>=100; j--){
            var mult = i*j;
/*third: improve it by breaking out of thesecond loop if the product of i and j is less the palidrome we already have */
             if(mult < largest)
break;
            if(isPalindrome(mult)&& mult > largest){
                largest = mult;
            }
        }
    }
    return largest;
}
