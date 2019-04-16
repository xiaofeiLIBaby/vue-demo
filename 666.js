function MoreThanHalfNum(arr) {
  arr.sort();
  if(arr.length%2===0){
    console.log(arr[arr.length/2])
  }else {
    console.log(arr[(arr.length-1)/2])
  }
}
var arr=[0,4,3,3,3,4];
MoreThanHalfNum(arr);
