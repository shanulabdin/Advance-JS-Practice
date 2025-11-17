const cars = {
  'toyota' : ['corola', 'vigo', 'chr'], 
  'honda' : ['civic', 'city', 'hero'], 
  'suzuki' : ['cultus', 'mehran', 'alto']
}

console.log(cars);
console.log(cars.toyota);
console.log(cars.toyota[1]);


// object inside object
const shaban = [10, 9, 11];
console.log(shaban);

const student = {
  student1 : {
    'name' : 'shaban',
    'age' : '18',
    'results' : [10, 9, 8],
    
    'subjects' : {
      'english' : 10,
      'urdu' : 9,
      'science' : 8
    }
  },
  student2 : {
    'name' : 'shan',
    'age' : '20',
    'results' : [8, 9, 7],
    
    'subjects' : {
      'english' : 8,
      'urdu' : 9,
      'science' : 7
    }
  },
  student3 : {
    'name' : 'laiba',
    'age' : '19',
    'results' : [10, 8, 7],
    
    'subjects' : {
      'english' : 10,
      'urdu' : 8,
      'science' : 7
    }
  }
}

console.log(student.student1)
console.log(student.student2)
console.log(student.student3.name)
console.log(student.student3.age)
console.log(student.student3.results[0])