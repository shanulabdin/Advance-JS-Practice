Level 2 – Chaining
5. Double Then
Create a Promise that resolves to the number 10
In the first .then(), return double the value
In the second .then(), log: "Final value: <value>"
Expected final log: Final value: 20


6. Chain with a Rejection
Create a Promise that resolves to 3
In .then() multiply it by 2 and return it
In the next .then(), throw an error: throw new Error("Something broke")
Use .catch() at the end to log the error message
