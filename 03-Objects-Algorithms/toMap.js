const arrayObj = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" }
];

function toMap(users){
  let userIds = {};

  for(let i = 0; i < users.length; i++){
    userIds[users[i].id] = users[i];
  }

  return userIds;
}
console.log(toMap(arrayObj));

// const str = 'bana';

// let obj = {};
// obj.id = 5;
// obj[str[0]] = 6;

// console.log(obj)