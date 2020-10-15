

var addPanel = document.querySelector('#addPanel');

addPanel.onclick = function() {
	let type = document.forms['panelForm'].type.value;
	let message = document.forms['panelForm'].message.value;
	displayMessage(message,type);
}


// displayMessage function 

function displayMessage(myMessage , typeMessage) {
	let notes = document.querySelector('.notes');
	let panel = document.createElement('div');

	panel.setAttribute('class' , 'msgBox');

	let icon = document.createElement('img');
		icon.setAttribute('class','icon');
	if (typeMessage === "chat") {
		icon.src = 'icons/chat.png';
		panel.classList.add('chat');

	}else if(typeMessage === "warning") {
		icon.src = 'icons/book.png';
		panel.classList.add('warning');
	}else {
		icon.src = 'icons/headphones.png';
		panel.classList.add('simple');
	}
	panel.appendChild(icon);

	let closeBtn = document.createElement('button');
	let closeIcon = document.createElement('img');
	closeIcon.src = 'icons/cancel.png';
	closeIcon.style.width = "32px";
	closeBtn.appendChild(closeIcon);
	closeBtn.setAttribute('class','close');

	panel.appendChild(closeBtn);

	let clearer = document.createElement('div');
	clearer.setAttribute('class','clear-fix');
	panel.appendChild(clearer);

	let divider = document.createElement('hr');
	panel.appendChild(divider);

	// let button = document.createElement('button');
	// button.textContent = "x";

	let text = document.createElement('p');
	text.textContent = myMessage;
	panel.appendChild(text);

	notes.prepend(panel);

	closeBtn.onclick = function() {
		this.parentNode.remove();
	}
}
// End displayMessage Function