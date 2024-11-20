
/*--entries()
let a={
    eid:101,
    ename:'smith',
    sal:30000
}
console.log(a)
let b=Object.entries(a)
console.log(b)
-----*/

/*----fromEntries()
let a1=Object.fromEntries(b)
console.log(a1)
-----*/

//assign()
let e1={
    eid:111
}
console.log(e1)
let e2={
    ename:'smith'
}
console.log(e2)
console.log(Object.assign(e1,e2))


//hasOwn()
let e11={
    company:'tcs',
    salary:30000
}
console.log(Object.hasOwn(e11,'eid'))
console.log(Object.hasOwn(e11,'salary'))

//hasOwnProperty()
let e22={
    eid:111,
    ename:'smith'
}
console.log(e22)
console.log(e22.hasOwnProperty('eid'))
console.log(e22.hasOwnProperty('Ename'))

//defineProperty()
let s1={}
console.log(s1)
console.log(Object.defineProperty(s1,'sid',{value:111}))
console.log(Object.defineProperty(s1,'sname',{value:'john'}))

//defineProperties()
let s2={}
console.log(s2)
let s22=Object.defineProperties(s2,{
    sid:{value:111},
    sname:{value:'smith'}
})
console.log(s22)

//is()
let s111={
    sid:111,
    sname:'john'
}
let s222={
    sid:112,
    sname:'john'
}
console.log(Object.is(s111.sid,s222.sid))
console.log(Object.is(s111.sname,s222.sname))

//rest parameter
function demo(a,b)
{
    return a+b
}
console.log(demo(2,3))
console.log(demo(2,3,4,5))

function demo1(...input)
{
    let sum=0
    for(let i of input)
    {
        sum=sum+i
    }
    return sum
    
}
console.log(demo1(1,2,3,4,5)) //15
console.log(demo1(2,3))

//spread operator
let string="hello"
console.log(string)
console.log(...string)

let n1=[1,2,3]
let n2=[4,5,6]
console.log(...n1,...n2)