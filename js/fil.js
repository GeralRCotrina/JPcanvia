function Filtrar() {
	  // Declare variables 
	  var input, filter, table, tr, td, i, j, visible;
	  input = document.getElementById("txt_buscar");
	  filter = input.value.toUpperCase();
	  table = document.getElementById("tabla1");
	  tr = table.getElementsByTagName("tr");

	  // Loop through all table rows, and hide those who don't match the search query
	  for (i = 0; i < tr.length; i++) {
		visible = false;
		/* Obtenemos todas las celdas de la fila, no sólo la primera */
		td = tr[i].getElementsByTagName("td");
		for (j = 0; j < td.length; j++) {
		  if (td[j] && td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
			visible = true;
		  }
		}
		if (visible === true) {
		  tr[i].style.display = "";
		} else {
		  tr[i].style.display = "none";
		}
	  }
}




window.onload = function() {
  Cargarlista();
};


function Cargarlista(){
	if(Lista){
		var subA = Lista[0].Lista1;
		var subB = subA[0];		
		for(var i = 0; i<=subA.length ; i++)
		{
			var subB = subA[i];
			var fila = '<tr>'+
						'<td>'+subB[0]+'.- </td>'+
						'<td><a href="#" id="9000'+subB[0]+subB[1]+'" class="text-info" onclick="Copiar(9000'+subB[0]+subB[1]+')">'+subB[1]+'</a></td>'+						
						'<td style="font-size:0.7em"><a href="#" id="8000'+subB[0]+subB[1]+'" class="text-success" onclick="Copiar(8000'+subB[0]+subB[1]+')">'+subB[2]+'</a></td><td></td>'+						
						'<td style="font-size:0.7em"><a href="#" id="7000'+subB[0]+subB[1]+'" onclick="Copiar(7000'+subB[0]+subB[1]+')">'+subB[3]+'</a></td><td></td>'+							
						'<td style="font-size:0.9em"><a href="#" id="6000'+subB[0]+subB[1]+'" class="text-dark" onclick="Copiar(6000'+subB[0]+subB[1]+')">'+subB[4]+'</a></td><td></td>'+
						'<td ><div class="btn-group">'+							
								'<button class="btn btn-outline-success" onclick="CopiarT('+subB[0]+subB[1]+')"><i class="fas fa-project-diagram"></i>'+
								'_<i class="fas fa-signature"></i>_<i class="fas fa-user-tag"></i>_<i class="fas fa-phone-square"></i></button></div>'+
						'</td></tr>';
					
		var btn = document.createElement("TR");
		btn.innerHTML=fila;
		document.getElementById("tabla1").appendChild(btn);
		}
	}
	else{
		alert("NO LLEGÓ LA LISTA!!");
	}
}




function SeePassword(){
	var eye = document.getElementById("eye-password");
	var passw = document.getElementById("password");

	var classEye = eye.className.split(" ");
	if(classEye[1] == "fa-eye"){
		eye.classList.remove("fa-eye");
		eye.classList.add("fa-eye-slash");
		passw.type = "text";
	}else{
		eye.classList.remove("fa-eye-slash");
		eye.classList.add("fa-eye");
		passw.type = "password";
	}
}


