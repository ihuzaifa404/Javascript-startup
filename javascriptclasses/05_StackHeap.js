// **************** Stack(Premitive) & Heap Memory(Non-Premitive)****************************

// Stack   send a copy to others

let channelOne="abyoutube.com"
console.log(channelOne)

let channelTwo=channelOne
 channelTwo="Ali@youtube.com"

 console.log(channelTwo)

 channelOne=channelTwo
console.log(channelOne)


// Heap sent reference that's why by changing one value can change others  means value change in origional value

let user1={
    Email:"abc123@gmail.com"
}
let user2=user1
user2.Email="Hunzla123@.com"
console.log(user1.Email)
console.log(user2.Email)
