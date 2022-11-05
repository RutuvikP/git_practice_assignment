function primechecker(a){
  let count=0;
  for(i=1;i<=a;i++){
    if(a%i==0){
      count++;
    }
  }
  if(count==2){
    console.log(a,"is a Prime Number");
  } else {
    console.log(a,"is not a prime number")
  }
}

primechecker(6);
