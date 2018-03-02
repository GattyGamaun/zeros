module.exports = function getZerosCount(number) {
  // let number = 71619670;
  let a = 5, b = 5, c = 0;
  let int = Math.floor(number / 5);
  let remain = 0;

  for (let i = 0; i < 10; i++) {
    c = a * b;
    a = c;

    remain += Math.floor(number / c);
    console.log(remain);
  }

  let zeros = Math.round(int + remain);
  return zeros;
}
  //console.log(divideOnFive);
  //console.log(remain);
  // console.log(zeros);


