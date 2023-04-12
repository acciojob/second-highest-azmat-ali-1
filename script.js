
let arr = [1,1,1];
function secondHighest(arr){
  let high=0,secondhigh=-Infinity;
  if(arr.length==1){
    return 1;
  }
  for(let index=0;index<arr.length;index++){
    if(high!=0&&high!=secondhigh){
      secondhigh=high;
    }
    if(arr[index]>high){
      high=arr[index];
    }
  }
  if(high==secondhigh){
    return -Infinity;
  }
  return secondhigh;
}
console.log(secondHighest(arr));