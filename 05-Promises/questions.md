Level 1 – Basics
1. Delayed Greeting
Create a Promise that:
Uses setTimeout to resolve after 1 second
Resolves with the message: "Hello after 1 second"
Use .then() to log the message


2. Random Success or Failure
Create a Promise that:
Uses Math.random()
If the number is > 0.5 → resolve with "Success!"
Else → reject with "Failed!"
Handle both with .then() and .catch()


3. Wrap an Array in a Promise
Create a Promise that instantly resolves with the array [1, 2, 3]
In .then():
Log the array length
Log the sum of the numbers
(Hint: you can use Promise.resolve([...]).)


4. Simple Error Handling
Create a Promise that always rejects with: "Oops, error"
Use .catch() to:
Log "Caught an error:" and the actual error message