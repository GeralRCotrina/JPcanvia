
function Copiar(e){

	var enlace = document.getElementById(e);
	var inputFalso = document.createElement('input');
	inputFalso.setAttribute("value",enlace.innerHTML);
	
	document.body.appendChild(inputFalso);
	inputFalso.select();
	
	document.execCommand('copy');
	document.body.removeChild(inputFalso);

	ConfirAlert(enlace.innerHTML);
}



function CopiarT(e){

	var alp = "9000"+e;
	var py = "8000"+e;
	var jf = "7000"+e;
	var cl = "6000"+e;

	var alp1 = document.getElementById(alp);
	var py1 = document.getElementById(py);
	var jf1 = document.getElementById(jf);
	var cl1 = document.getElementById(cl);

	var str = e+" - "+py1.innerHTML+" - "+jf1.innerHTML+" - "+cl1.innerHTML;

	var inputFalso = document.createElement('input');
	inputFalso.setAttribute("value",str);

	document.body.appendChild(inputFalso);
	inputFalso.select();
	
	document.execCommand('copy');
	document.body.removeChild(inputFalso);

	ConfirAlert(str);
}
