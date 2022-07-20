//Enter your code here..
function check(){
var result =new Promise((reslove,reject)=>
{
    var request=new XMLHttpRequest()
    request.open('GET','https://jsonplaceholder.typicode.com/users')
    request.onload=()=>{
        if(request.status==200)
        {
            reslove(request.response)
           
        }
        else{
            reject(Error(request.statusText))
           }
        }
            
        
        request.send();

    })

result.then( function(data)
{
        console.log(data);
         const result = JSON.parse(data);
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
            });
  document.getElementById('message').innerHTML=player;

}, function (error) {
    console.log('Promise rejected.');
    console.log(error.message);
});

}