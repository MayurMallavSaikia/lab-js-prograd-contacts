![Image description](https://i1.faceprep.in/ProGrad/prograd-logo.png)

# ProGrad Lab | JS | PROGRAD-CONTACTS

We have learned promise works in JavaScript. Now lets work with our promise lab, applying all of the concepts we have just learned.

## What should you do
```
Fork this repo
Clone this repo
Practice fetch,axios,api Features
```

## How To Submit
```
Upon completion, run the following commands:

git add .
git commit -m "ProGrad ID"
git push origin master

And finally, create a pull request so your ProGrad Mentor (PM) can review your work.
```

### Progression 1: PROMISE ME
Create a promise call which fetches data from (https://jsonplaceholder.typicode.com/users). When the promise gets resolved display the data in browser console.

### Progression 2: SHOW MY PROMISE
Once the promise gets resolved, Display it in the form of list as shown in the output.
Use the code snippet below for reference
```
var player='<h2>Lists of Users</h2>';
                    result.forEach(function(user) {
                     player+=
                    `<div class="player">
                      <div class="strength">Name : ${user.name}</div>
                      <div>Email   : ${user.email}</div>
                      <div>Phone   : ${user.phone}</div>
                      <div>Website : ${user.website}</div>
                      <div>Company : ${user.company.name}</div>
                      <div>City    : ${user.address.city}</div>
                      <div>Zipcode : ${user.address.zipcode}</div>
                     </div>`
```
### Progression 3: REJECT ME
When the promise call is rejected then throw an error.

```
(error) => {
    console.log('Promise rejected.');
    console.log(error.message);
  });
```

![Image description]()

### Progression 2: TIME TO VALIDATE
Validate the form as per the rules given below.
**Validation rules**
- username should not be empty.
- username should contain a minimum of 8 characters and a maximum of 15 characters.
- password should not be empty.
- password must contain 1 uppercase letter, 1 lowercase letter, atleast 1 number.
- password must contain the following special characters ```!@#$%^&*()```.
- Email should contain @, .(dot) or underscore.
- Phone number should be numerical in nature.
- Should not contain any special characters.
- Should be a ten digit number.


![Image description]()



![Image description]()
Happy Coding ProGrads❤️