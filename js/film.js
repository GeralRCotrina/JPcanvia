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
}



function Cargarlista(){
	if(Lista){
		var subA = Lista[0].Lista1;
		var subB = subA[0];		
		for(var i = 0; i<=subA.length ; i++)
		{
			var subB = subA[i];
			var fila = '<tr>'+
						'<td><a href="#" id="9000'+subB[0]+'" class="text-info" onclick="Copiar(9000'+subB[0]+')">'+subB[0]+'</a></td>'+						
						'<td style="font-size:0.7em"><a href="#" id="8000'+subB[0]+'" class="text-success" onclick="Copiar(8000'+subB[0]+')">'+subB[1]+'</a></td><td></td>'+						
						'<td style="font-size:0.7em"><a href="#" id="7000'+subB[0]+'" onclick="Copiar(7000'+subB[0]+')">'+subB[2]+'</a></td><td></td>'+							
						'<td style="font-size:0.9em"><a href="#" id="6000'+subB[0]+'" class="text-dark" onclick="Copiar(6000'+subB[0]+')">'+subB[3]+'</a></td>'+
						'<td ><div class="btn-group"></td><td>'+
							'<a href="#tres" class="card-link collapsed text-warning" data-toggle="collapse" data-parent="#acordion" aria-expanded="false" onclick="Editar('+subB[0]+')"><i class="fas fa-edit"></i></a>'+
							'<i style="color:white;">_</i><a href="" class="text-danger" onclick="Eliminar('+subB[0]+')"><i class="fas fa-trash-alt"></i></a></div>'+
						'</td>'+
					'</tr>';
		var btn = document.createElement("TR");
		btn.innerHTML=fila;
		document.getElementById("tabla1").appendChild(btn);
		}
	}
	else{
		alert("NO LLEGÓ LA LISTA!!");
	}
}




function Editar(e){	

	var alp_edi = document.getElementsByName("alp_edi");
	var proy_edi = document.getElementsByName("proy_edi");
	var nom_edi = document.getElementsByName("nom_edi");
	var cel_edi = document.getElementsByName("cel_edi");

	var f = ""+e;
	var p = document.getElementById("8000"+f);
	var n = document.getElementById("7000"+f);
	var c = document.getElementById("6000"+f);
	
	alp_edi[0].value=e;
	proy_edi[0].value=p.text;
	nom_edi[0].value=n.text;
	cel_edi[0].value=c.text;
}



function Eliminar(e){
	alert("Seguro que desea eliminar: "+e);
}

function Actualizar(){
	alert("De momento se esta trabajando en una DB JSON por lo cual debe comunicarse con el administrador. Gracias!");

}
