const allUsers = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" }
];

function findUser(allUsers, name){
  let user;
  for(let i = 0; i < allUsers.length; i++){
    if(allUsers[i].name === name){
      user = allUsers[i];
    }
  }
  return user;
}
console.log(findUser(allUsers, "Ali"));
console.log(findUser(allUsers, "Sara"));