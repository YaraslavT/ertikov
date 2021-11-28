function randomNumber (m,n)
{
  m = parseInt(m);
  n = parseInt(n);
  return Math.floor( Math.random() * (n - m + 1) + m ) ;
}

console.log(randomNumber(-5,-50));