var form  = document.querySelector('form');
form.addEventListener("submit", (e)=> {
    e.preventDefault();

    var msg = document.getElementById('myInput').value

    var token = "6089962515:AAF_My6RRQGuJcsHfJ1u-2FXwKdBESIPcVw"
    var chat_id = 6194528557

    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${msg}`

    api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    console.log("Message send Successfully!!")
    alert("Message Sent Successfully !! check here https://t.me/red_msg_bot")
})