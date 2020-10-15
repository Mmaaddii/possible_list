// Create 2 elements with for loop


function displayMessage(msgText, msgType) {

	var html = document.querySelector('html');

	var panel = document.createElement('div');
	panel.setAttribute('class', 'msgBox');
	html.appendChild(panel);

	var msg = document.createElement('p');
	msg.textContent = msgText;
	panel.appendChild(msg);

	var closeBtn = document.createElement('button');
	closeBtn.textContent = 'x';
	panel.appendChild(closeBtn);

	closeBtn.onclick = function() {
	  panel.parentNode.removeChild(panel);
	}

	// msgType

	if ( msgType === 'warning' ) {
		msg.style.backgroundImage = 'url(icons/warning.png)';
		panel.style.backgroundColor = 'red';
	}else if( msgType === 'chat' ) {
		msg.style.backgroundImage = 'ulr(icons/chat.png)';
		panel.style.backgroundColor = 'blue';
	}else {
		msg.style.paddingLeft = "20px";
	}

}


// Add New Panel

var addPanelButton = document.querySelector('button');

addPanelButton.onclick = function() {
	displayMessage('this is a warning message' , 'chat');
}

// msgType

