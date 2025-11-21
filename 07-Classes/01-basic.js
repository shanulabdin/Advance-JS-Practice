class Person {
  constructor(name, age, city, country){
    this.name = name;
    this.age = age;
    this.city = city;
    this.country = country;
  }

  introduce(){
    return `Hi my name is ` + this.name + `, Im ` + this.age + ` years old, and i live in ` + this.city + `, ` +  this.country + `.`;
  }
}

const person1 = new Person('Shan', 18, 'Karachi', 'Pakistan');
console.log(person1.introduce());

const person2 = new Person('Sara', 17, 'Islamabad', 'Pakistan');
console.log(person2.introduce());