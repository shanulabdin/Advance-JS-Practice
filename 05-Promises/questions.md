Level 3 time 😈
Here are your next exercises (no solutions, just tasks):

7. Using finally
Create a Promise that:
Resolves after 1.5 seconds with "Done loading"
Use:
.then() to log the message
.finally() to log "Promise finished (success or fail)"
Then change it so the Promise rejects instead, and see how .finally() still runs.

8. Conditional Resolve/Reject Based on Input
Create a function:
function checkAge(age) {
  // returns a Promise
}

Inside:
If age >= 18 → resolve("You are an adult")
Else → reject("You are underage")
Then:
Call checkAge(20) and handle with .then() and .catch()
Also try checkAge(15) to see the rejection case.

9. Wrap a Function Result in a Promise
Make a normal function:
function add(a, b) {
  // returns a + b (just sync)
}

Create a Promise that instantly resolves with add(2, 3).
In .then(), log: "Result is: <value>"

10. Multiple Promises with Promise.all
Create two promises:
p1 resolves after 1 second with "First"
p2 resolves after 2 seconds with "Second"
Then:
Use Promise.all([p1, p2])
In .then(), log the result array (should be ["First", "Second"])