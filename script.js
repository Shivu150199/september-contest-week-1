let data = [
  { name: 'john', age: 24, profession: 'developer' },
  { name: 'jane', age: 27, profession: 'admin' },

]

// 1. Print Developers
function printDeveloper() {
  console.log('Printing developers')
  let result=data.find((item)=>item.profession==='developer')
console.log(result)
}

// 2. Add Data
function addData() {
  let addData={}
  let name=prompt('what is your name?')
  let age=prompt('what is your age?')
  let profession=prompt('what is you profession?')
  addData.name=name;
  addData.age=age;
  addData.profession=profession;
  data.push(addData)
  console.log(data)
}

// 3. Remove Admins
function removeAdmin() {
console.log('Remove admins')
 let result= data.filter((item)=>item.profession !== 'admin')
  console.log(result)
}

// 4. Concatenate Array
function concatenateArray() {
  console.log(`Concatinating the data array and dummy array`)
  let data2 = [
    { name: 'shivam singh', age: 24, profession: 'developer' },
    { name: 'akshay', age: 27, profession: 'UI designer' },
  ]
  let result=[...data,...data2]
  console.log(result)
}

// 5. Average Age
function averageAge() {
  let age=0
data.forEach((item)=>age=age+item.age)
let averageAge = age / data.length
console.log(`Average age is ${averageAge}`)
}

// 6. Age Check
function checkAgeAbove25() {
  console.log('finding the person above age 25')
 let result= data.find((item)=>item.age>=25)
  console.log(result)
}

// 7. Unique Professions
function uniqueProfessions() {
let unique = []
data.forEach((item) => {
  if (!unique.includes(item.profession)) {
    unique.push(item.profession)
  }
})

console.log(`unique professions are => ${unique.join(',')}`)
}

// 8. Sort by Age
function sortByAge() {
  console.log('Sorting the data by age')
  data.sort((a,b)=>a.age-b.age)
  console.log(data)
}

// 9. Update Profession
function updateJohnsProfession() {
  console.log('Updating the profession of john from developer to manager ')
  data.forEach((item)=>{
    if(item.name=='john'){
      item.profession='Manager'
    }
  })
  console.log(data)
}

// 10. Profession Count
function getTotalProfessions() {
let unique=[]
data.forEach((item)=>{
  if(!unique.includes(item.profession)){
    unique.push(item.profession)
  }
})
console.log(`Total count of developers  and admin is ${unique.length}`)
}
