function addItem() {
	var numberofdays = document.forms["todolist"]["days"].value;
	var task = document.forms["todolist"]["task"].value;
	
	
	var div = document.createElement("div");
	div.className = "col-auto";
	
	var div2 = document.createElement("div");
	
	
	if (numberofdays > 2 && numberofdays < 7) {
		div2.className = "alert alert-warning alert-dismissable";
	}
	
	if (numberofdays < 3) {
		div2.className = "alert alert-danger alert-dismissable";
	}
	
	if (numberofdays > 6) {
		div2.className = "alert alert-secondary alert-dismissable";
	}
	
	var para = document.createElement("span");
	para.innerHTML = task + "<br>";
	
	var para2 = document.createElement("span");
	para2.innerHTML = numberofdays + " day(s)";
		
	var butt = document.createElement("button");
	butt.type = "button";
	butt.className = "close";
	butt.setAttribute("data-dismiss", "alert");
	butt.setAttribute("aria-label", "Close");
	
	var para3 = document.createElement("span");
	para3.setAttribute("aria-hidden", "true");
	para3.innerHTML = "&nbsp;&nbsp;&times;";
	
	butt.appendChild(para3);
	
	div.appendChild(div2);
	div2.appendChild(butt);
	div2.appendChild(para);
	div2.appendChild(para2);
		
	document.getElementById("row").appendChild(div);
	
	
	return false;
}