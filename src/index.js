module.exports = function getZerosCount(number) {

  let a = 5, b = 5, c = 0;
  let int =(number / 5);
  let remain = 0;

  for (let i = 0; i < 20; i++) {
    c = a * b;
    a = c;

    remain += (number / c);
    console.log(remain);
  }

  let zeros = Math.round(int + remain);
  return zeros;
}


