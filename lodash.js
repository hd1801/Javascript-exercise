import _ from 'lodash'
import { members } from "./members.js";
const names = _.map(members,(member=>{
    return  _.split(member.name," ",2);
 }));

// 1. Get array of first names of everyone
const firstnames = _.map(names,name=>{
    return name[0];
})
// 2. Make everyone's last names in UPPERCASE in given array of objects
_.forEach(members,(member,i)=>{
    member.name = _.join([names[i][0],_.upperCase(names[i][1])],' ');
})
// 3. Get entries where age is between 41-60
const entries = _.filter(members, (member)=>_.inRange(member.age,41,60))
// 4. Get average age
const ages = _.map(members,(member)=>member.age)
_.mean(ages);
// 5. Get Person with maximum age
_.max(ages)
// 6. Divide persons in three groups, result should look like
//     {
//       'young': [],
//       'old': [],
//       'noage': []
//     }
//     Less than 35yrs is young, above 35 is old
let [hasage,noage]= _.partition(members, (member)=>member.age);
let [young,old]=_.partition(hasage,(member)=>member.age<35)
const groups={
    young,old,noage
}
// 7. add a new member to same members array instance at index 2
members.splice(2,0,{name:'Hardik DHAWAN',age:20})
// 8. extract first and second element using destructing
//no lodash function 
// 9. Create a new array instance adding a new member at index 0,
//    and keeping existing afterwards
const arr = _.concat({name:"KD",age:12},members);
// 14. Use reduce function on array and object
const namelist = _.reduce(members,(arr,member)=>{
    arr.push(member.name);
    return arr;
},[])
console.log(namelist);
