const  messageButton = document.getElementById("recommend_btn");
const Message = document.getElementById("new_message");
function getinputVal(){
    console.log(Message.value);
}
messageButton.addEventListener("click",getinputVal);