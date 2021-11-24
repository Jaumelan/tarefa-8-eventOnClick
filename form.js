
function getValues() {
    let userName = document.getElementById("user-name").value;
    let userEmail = document.getElementById("user-email").value;
    let userComment = document.getElementById("comment").value;
    
    const userValues = [
        userName,
        userEmail,
        userComment,
    ];

    document.getElementById("respostas").innerHTML = userValues;
    //console.log(userValues);
}


 