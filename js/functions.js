function printMessage(msg, id){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById(id).appendChild(div);
}

function clearMessages(id){
	document.getElementById(id).innerHTML = '';
}