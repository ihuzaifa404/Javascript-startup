// Convertion into Numbers

let id = "32";
console.log(typeof id)
let valueInNum = Number(id)
console.log(valueInNum)
console.log(typeof valueInNum)
let logIn = true
let fail = false
console.log(typeof logIn)

// covert boolean into 

let logIntoNumber = Number(logIn)
let failInNum = Number(fail)
console.log(logIntoNumber)
console.log(failInNum)

// convert string into number
let Name = "ALi"
console.log(typeof Name)
let stringInNum = Number(Name)
console.log(stringInNum) /*there is no standerd number for this string but change this type in number */
let Address = "32aaa"
console.log(Address)
let AddInNum = Number(Address)
console.log(AddInNum)

// Convert null into Number
let dep = null
let nullInNum = Number(dep)
console.log(nullInNum)

// Convert undefined into Number
let sub
console.log(typeof sub)
let subInNum = Number(sub)
console.log(subInNum)  /*No Number of undefined but change this type in number*/
console.log(typeof subInNum)
console.table([typeof id, typeof valueInNum, typeof logIn, typeof logIntoNumber, typeof fail, typeof failInNum, typeof Name, typeof stringInNum, typeof Address, typeof AddInNum, typeof dep, typeof nullInNum, typeof sub, typeof subInNum])
console.table([id, valueInNum, logIn, logIntoNumber, fail, failInNum, Name, stringInNum, Address, AddInNum, dep, nullInNum, sub, subInNum])

// // Convertion into String

// Number into String

let a=1
console.log(typeof a)
let aInString=String(a)
console.log(aInString)
console.log(typeof aInString)

// Boolean into String
let b=true
let bInString=String(b)
console.log(bInString)
console.log(typeof bInString)

let c=false
let cInString=String(c)
console.log(cInString)
console.log(typeof cInString)

// Null into String
let d=null
let dInString=String(d)
console.log(dInString)
console.log(typeof dInString)

// Undefined into String
let e
let eInString=String(e)
console.log(eInString)
console.log(typeof eInString)

console.table([a, aInString, b, bInString, c, cInString, d, dInString, e, eInString])
console.table([typeof a, typeof aInString, typeof b, typeof bInString, typeof c, typeof cInString, typeof d, typeof dInString, typeof e , typeof eInString])

// // Convertion Into Boolean

// String into Boolean
let f="Hello"
let fInBool=Boolean(f)
console.log(fInBool)
let g=""
let gInBool=Boolean(g)
console.log(gInBool)

// Number into Boolean
let h=1
let hInBool=Boolean(h)
console.log(hInBool)
let i=0
let iInBool=Boolean(i)
console.log(iInBool)

// Null into Boolean
let j=null
let jInBool=Boolean(j)
console.log(jInBool)

// Undefined into Boolean
let k
let kInBool=Boolean(k)
console.log(kInBool)

console.table([f, fInBool, g, gInBool, h, hInBool,i, iInBool, j, jInBool, k, kInBool])
console.table([typeof f,typeof fInBool,typeof g,typeof gInBool,typeof h,typeof hInBool,typeof i,typeof iInBool,typeof j,typeof jInBool,typeof k,typeof kInBool])

// // Convertion into Null

// String
let l="Ahmed"
 l=null
console.log(typeof l )

// Number 
let m=1
m=null
console.log(typeof m)
console.log(m)

// Boolean
let n=true
n=null
console.log(n)

// Undefined
let o
o=null
console.log(o)

console.table([typeof l, typeof m, typeof n, typeof o])
console.table([l, m, n , o])

// // convertion into Undefined

//  String
let p="A"
p=undefined
console.log(typeof p)

// Number
let q=1
q=undefined
console.log(typeof q)

// Boolean
let r=true
r=undefined
console.log(typeof r)

// Null
let s=null
s=undefined
console.log(typeof s)

console.table([typeof p, typeof q, typeof r, typeof s])
console.table([p,q,r,s])


// ****************************Operations************************************
let value=2
let negValue=-value
console.log(negValue)

console.log(2+2)
console.log(2-2)
console.log(2/2)
console.log(2*2)
console.log(2**2)
console.log(2%2)

let str1="Ali"
let str2=" Ahmed"
str3=str1+str2
console.log(str3);

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 3)
console.log(1 + "2" + 3)
console.log(1 + 2 + "3")
console.log(1 + 2 + "3" + 4)
console.log("1" + (2 + 3))

console.log(+true)
console.log(-true)
console.log(+"")
let int=100
++int
console.log(int)
let num1=100
num1--
console.log(`num1:${num1}`)

// Prefix and Postfix

let x=5
let y=++x
console.log(`x:${x},y:${y}`) 

let v=3
let w= v++
console.log(`v:${v},b:${w}`)
