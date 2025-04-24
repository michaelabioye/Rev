// get the string (message that was entered)
function getMessage() {
    let alertDiv = document.getElementById('alertDiv');
    alertDiv.classList.add('invisible');


    let inputElement = document.getElementById('msgInput');
    //find the <input id='msgInput' /> element

    let userString = inputElement.value;
    //get what the user typed out of the <input/> 
    //use the let element you used to get elementById 

    if (userString.length < 2) {
        //validate that the user typed atlest two characters
        //if not show a SWAL 
        swal.fire({
            backdrop: false,
            title: 'uh oh',
            text: 'please enter a message with at least 2 characters',
            icon: 'error'
        })

    } else {
        //return message is based off of the let 
        let revString = reverseMessage(userString);
        // let revString is a new variable that is assigned to reverseMessage 
        // the reverseMessage function has a parameter of userstring. userstring is the
        // <input/> element value (so whats inside the input element) 

        displayMessage(revString);//since revString is assigned to reverseMessege function
        // the only way to display the messege is by using revString as a parameter () for the
        // displayMessage function. so its actually saying 
        // displayMessege = reverseMesege(userString) 
    }
    //display the reversed message
}
//reverse the message

function reverseMessage(message) {
    let revWord = '';

    for (let idx = message.length - 1; idx >= 0; idx -= 1) {
        //this starts at the end of the word 
        //reWord += message[idx];
        let char = message[idx];
        //push is only for arrays
        //char reprsents characters you say let char = message [idx] which
        //is the letters index 


        revWord = revWord + char;
        //this is equivalent revWord.push
    }

    return revWord;


}
//display the reversed message
function displayMessage(reversedMessage) {
    //put in the html "your message reversed is:"

    let paragraphTag = document.getElementById('alertMsg');
    paragraphTag.innerHTML = `your reversed message is: <b>${reversedMessage}<b>`;
    let alertDiv = document.getElementById('alertDiv');
    alertDiv.classList.remove('invisible');
}