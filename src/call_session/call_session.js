//function to time call
function timing(){
    min = document.getElementById("minute").innerHTML;
    sec = document.getElementById("second").innerHTML;
    
    min = parseInt(min);
    sec = parseInt(sec);

    if(sec == 59){
        min ++;
        sec = 0;
    }
    else{
        sec ++;
    }

    document.getElementById("minute").innerHTML = pad2(min);
    document.getElementById("second").innerHTML = pad2(sec);
}
//display time
function pad2(number) {
   
    return (number < 10 ? '0' : '') + number
  
}
//end call
function call_done(){
	window.location.href = 'finished.html';
}

//child asks for script. show script in modal as iframe
function runHelp(){
	document.getElementById("myModal").style.display = "block";
	document.getElementById("modal_content").style.height = "350px";
	document.getElementById("advice").innerHTML = "<iframe id='helpPage' frameBorder='0' width='250' height='320' src='../script_page/script.html'></iframe>";
	

}

//child leaves modal
window.onclick = function(event) {
	if (event.target == document.getElementById("myModal")) {
		document.getElementById("myModal").style.display = "none";
	}
	
}