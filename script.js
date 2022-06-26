//average of n number//
let n =[2,6,8];
let a = 0;
let avg;
for(i = 0;i < n.length ; i++)
{
  a += n[i]; 
  console.log(a)
}
avg = a / n.length;
console.log("average", avg);
