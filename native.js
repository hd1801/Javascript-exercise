import { members } from "./members.js";
const names = members.map((member=>{
   return  member.name.split(" ");
}));

// 1. Get arracurrentvalue of first names of evercurrentvalueone
const firstnames = names.map(name=>{
    return name[0];
})

// 2. Make evercurrentvalueone's last names in UPPERCASE in given arracurrentvalue of objects
for (let [i,member] of members.entries()){
    member.name = [names[i][0],names[i][1].toUpperCase()].join(" ") 
}

// 3. Get entries where age is between 41-60
const entries = members.filter(member => (member.age>=41 && member.age<=60))

const memberWithAge = members.filter(member=>member.age) // get array of members that have age property

// 4. Get average age
let averageAge = memberWithAge.reduce((value,member)=>member.age+value,0);
averageAge = averageAge/memberWithAge.length;
// 5. Get Person with maximum age
const maxAge = memberWithAge.reduce((value,member)=> member.age>value?member.age:value,0);
// 6. Divide persons in three groups, result should look like
const groups ={
'young': [],
'old': [],
'noage': []
}
for(let member of members){
    member.age
    ?(member.age<35? groups.young.push(member):groups.old.push(member))
    :groups.noage.push(member)
}
// 7. add a new member to same members array instance at index 2
members.splice(2,0,{name:'Hardik DHAWAN',age:20})
// 8. extract first and second element using destructing
const [first,second] = members;
// 9. Create a new array instance adding a new member at index 0,
//    and keeping existing afterwards
const newArr = [{name:"New MEMBER",age:32}, ...members]
// 10. Extract properties of object using destructuring
const [{name,age}]=members;
// 11. Rename extracted property of object while destructing
const [{name:memberName,age:memberAge}]=members;
// 12. Destructure any property of an object and use spread operator
// to get remaining properties in an object
const { name:user, ...rest}=members[2];
// 13. Create a new object by copying using spread operator, override
//     one of the properties to assign a new value in the same step
const overiddenMember = {...members[2],name:"HD"};
// 14. Use reduce function on array and object
const nameArray = members.reduce((arr,member)=>{
    arr.push(member.name);
    return arr;
},[])

