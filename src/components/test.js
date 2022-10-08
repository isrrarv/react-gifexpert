const integers = [1,2,3,5];

function solution(A) {
  let newArray = A.sort();
//   console.log(newArray)
  let lowestNumber = 1;
  for (let i = 0; i < newArray.length; i++) {
    const n = newArray[i];
    console.log('Valor de n:',n)
    if (n > 0) {
        console.log('Entra al 1er if y num:',lowestNumber,'n:',n)
      if (lowestNumber < n) {
        console.log('entra al 2do if')
        return lowestNumber;
      } else {
        console.log('entra a else')
        lowestNumber = n + 1;
        console.log('nuevo num:',lowestNumber)
      }
    }
  }
  return lowestNumber;
}



console.log(solution(integers));

