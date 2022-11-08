function primechecker(number){
  let factor=0;
  for(i=1;i<=number;i++){
    if(number%i==0){
      factor++;
    }
  }
  if(factor==2){
    console.log(number,"is a Prime Number");
  } else {
    console.log(number,"is not a prime number")
  }
}

primechecker(6);
