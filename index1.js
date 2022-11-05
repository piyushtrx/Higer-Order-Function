const arr=[
    {name:"ram",add:"nsk",id:12},{name:"sita",add:"bsl",id:5}
]
const digit=[2,5,6,8,10,25,23]

// arr.forEach(arr1=>console.log(arr1.name))
// arr.map((arr2)=>console.log(arr2));
// const f=arr.filter((name1)=>name1.name==="sita")
// console.log(f);
// const d=digit.filter(age=>age>8)
// console.log(d);
// const r=digit.reduce((total,sum)=>total+sum,0);
// console.log(r);
// const s=digit.sort((c1,c2)=>c1>c2?-1:1)
//  console.log(s);
 const s1=arr.sort((c1,c2)=>c1.name >c2.name?-1:1)
 console.log(s1);