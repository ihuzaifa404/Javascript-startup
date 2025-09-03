const accountId = 123                       /*can't change*/
let accountEmail= "Ahmad123@gmail.com"      /*can be changed*/
var accountPassword= 123455                  /*same as let but old method*/
let address="Lahore"


console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(address);

console.table([accountId,accountEmail,accountPassword,address])

const Name= "Ali";
const Department= "CS";
let coreSubject= "coding";
let  marksObtained="90%";
let fail;
coreSubject="Ai" 
console.table([Name, Department, coreSubject, marksObtained,fail])
