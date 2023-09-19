var form  = document.querySelector('form');
var user = prompt('Enter Your User Name: ');

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    var msg = document.getElementById('myInput').value
    var result = `${user}: ${msg}`
    var token = "6089962515:AAF_My6RRQGuJcsHfJ1u-2FXwKdBESIPcVw"
    var chat_id = 6194528557

    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${result}`

    api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    console.log(result)
    alert(`Message Successfully Sent By ${user}`)
})
