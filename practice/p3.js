/* function count(value){
     a=value;
     b=a.split("");
     sum=0
     for(let i=0;i<b.length;i++){
        sum=sum+1;
     }
     console.log(sum)
}
count("darshan") */


function count(values){
   a=values
   b=values.sort()
   min_value=b[0];
   max_value=b[b.length-1]
   
   console.log(min_value)
   console.log(max_value)

}
count([1,-2,3,0,5])