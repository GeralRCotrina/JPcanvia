
window.onload = function() {
  mostrarhora();

  Recargar();

};

function Filtrar() {
	  // Declare variables 
	  var input, filter, table, tr, td, i, j, visible;
	  input = document.getElementById("txt_buscar");
	  filter = input.value.toUpperCase();
	  table = document.getElementById("tabla2");
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

var tb=document.getElementById("tabla2");


var cont_p = 0;



function Recargar(){
	cont_p = 120;
	tb.innerHTML="";
	Cargarlista(); 
	setTimeout("Recargar()",120000);
}



function Cargarlista(){
	if(Lista_pandora){
		var subA = Lista_pandora[0].Lista1;
		var subB = subA[0];		
		for(var i = 0; i<subA.length ; i++)
		{
			var subB = subA[i];
			var fila = '<tr style="font-size:0.9em">'+
						'<td>'+subB[0]+'.- </td>'+
						'<td><a href="#" id="9000'+subB[0]+subB[1]+'" class="text-info" onclick="Copiar(9000'+subB[0]+subB[1]+')">'+subB[1]+'</a></td><td></td>'+						
						'<td><a href="#" id="8000'+subB[0]+subB[1]+'" class="text-success" onclick="Copiar(8000'+subB[0]+subB[1]+')">'+subB[2]+'</a></td><td></td>'+						
						'<td><a href="#" id="7000'+subB[0]+subB[1]+'" onclick="Copiar(7000'+subB[0]+subB[1]+')">'+subB[3]+'</a></td><td></td>';						
				
			var st = "01/01/2000 "+subB[4];
			var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
			var dt = new Date(st.replace(pattern,'$3-$2-$1'));

			var stl = "01/01/2000 "+subB[5];
			var patternl = /(\d{2})\.(\d{2})\.(\d{4})/;
			var dtl = new Date(stl.replace(patternl,'$3-$2-$1'));

			var dl = new Date();

			if(subB[3] =="Lunes a Viernes"){
				if(dl.getDay() == 0 || dl.getDay() == 6){
					fila += '<td><a href="#" id="6000'+subB[0]+subB[1]+'" class="text-dark" onclick="Copiar(6000'+subB[0]+subB[1]+')">'+subB[4]+'</a></td><td></td>'+
							'<td><a href="#" id="6000'+subB[0]+subB[1]+'" class="text-dark" onclick="Copiar(6000'+subB[0]+subB[1]+')">'+subB[5]+'</a></td><td></td>';
				}else{
					if ((dl.getHours()>=dt.getHours()) && (dl.getHours() < dtl.getHours())) {
						fila += '<td style="background: rgba(253, 99, 66, 0.5);"><a href="#" id="6000'+subB[0]+subB[1]+'" class="text-white"  onclick="Copiar(6000'+subB[0]+subB[1]+')">'+subB[4]+'</a></td><td></td>'+
								'<td style="background: rgba(253, 99, 66, 0.5);"><a href="#" id="6000'+subB[0]+subB[1]+'" class="text-white" onclick="Copiar(6000'+subB[0]+subB[1]+')">'+subB[5]+'</a></td><td></td>';
					}else{
						fila += '<td><a href="#" id="6000'+subB[0]+subB[1]+'" class="text-dark" onclick="Copiar(6000'+subB[0]+subB[1]+')">'+subB[4]+'</a></td><td></td>'+
								'<td><a href="#" id="6000'+subB[0]+subB[1]+'" class="text-dark" onclick="Copiar(6000'+subB[0]+subB[1]+')">'+subB[5]+'</a></td><td></td>';
					}
				}
			}
			else if(subB[3] =="Siempre Encendido"){
				fila += '<td style="background: rgba(253, 99, 66, 0.5);"><a href="#" id="6000'+subB[0]+subB[1]+'" class="text-white"  onclick="Copiar(6000'+subB[0]+subB[1]+')">'+subB[4]+'</a></td><td></td>'+
						'<td style="background: rgba(253, 99, 66, 0.5);"><a href="#" id="6000'+subB[0]+subB[1]+'" class="text-white" onclick="Copiar(6000'+subB[0]+subB[1]+')">'+subB[5]+'</a></td><td></td>';
				
			}else if(subB[3] =="Siempre Apagado"){
				fila += '<td><a href="#" id="6000'+subB[0]+subB[1]+'" class="text-dark" onclick="Copiar(6000'+subB[0]+subB[1]+')">'+subB[4]+'</a></td><td></td>'+
						'<td><a href="#" id="6000'+subB[0]+subB[1]+'" class="text-dark" onclick="Copiar(6000'+subB[0]+subB[1]+')">'+subB[5]+'</a></td><td></td>';
			}else if(subB[3] == "Diario"){
				if ((dl.getHours()>=dt.getHours()) && (dl.getHours() < dtl.getHours()))
				{
					fila += '<td style="background: rgba(253, 99, 66, 0.5);"><a href="#" id="6000'+subB[0]+subB[1]+'" class="text-white"  onclick="Copiar(6000'+subB[0]+subB[1]+')">'+subB[4]+'</a></td><td></td>'+
							'<td style="background: rgba(253, 99, 66, 0.5);"><a href="#" id="6000'+subB[0]+subB[1]+'" class="text-white" onclick="Copiar(6000'+subB[0]+subB[1]+')">'+subB[5]+'</a></td><td></td>';
				}else{
					fila += '<td><a href="#" id="6000'+subB[0]+subB[1]+'" class="text-dark" onclick="Copiar(6000'+subB[0]+subB[1]+')">'+subB[4]+'</a></td><td></td>'+
							'<td><a href="#" id="6000'+subB[0]+subB[1]+'" class="text-dark" onclick="Copiar(6000'+subB[0]+subB[1]+')">'+subB[5]+'</a></td><td></td>';
				}
			}else{
				console.log("err 1");
			}
			
			fila +='<td style="font-size:0.9em"><a href="#" id="6000'+subB[0]+subB[1]+'" class="text-dark" onclick="Copiar(6000'+subB[0]+subB[1]+')">'+subB[6]+'</a></td><td></td></tr>';

		var tr = document.createElement("TR");
		tr.innerHTML=fila;
		tb.appendChild(tr);
		}
	}
	else{
		alert("NO LLEGÓ LA LISTA!!");
	}
}






function mostrarhora(){ 

	cont_p -= 1;
	var d1 = 0;
	var m_d1 = 0;

	var progress = document.getElementById("progres");

	if(cont_p > 90 ){
		d1 = 25;
		m_d1= 120;
	}else if(cont_p > 60 ){
		d1 = 50;
		m_d1= 60;
	}else if(cont_p > 30 ){
		d1 = 75;
		m_d1= 30;
	}else if(cont_p > 10 ){
		d1 = 100;
		m_d1= 10;
	}else{
		console.log("> falló el progress");
	}

	progress.classList.remove("h-100");
	progress.classList.remove("h-75");
	progress.classList.remove("h-50");
	progress.classList.remove("h-25");
	progress.classList.remove("h-0");

	progress.classList.add("h-"+d1);
	progress.innerHTML=""+m_d1;





	var tt = document.getElementById("timer");
	var f=new Date();

	if (f.getMinutes() < 10) {
		cad=f.getHours()+":0"+f.getMinutes()+":"; 
	}else{
		cad=f.getHours()+":"+f.getMinutes()+":"; 
	}

	if (f.getSeconds() < 10) {
		cad+="0"+f.getSeconds(); 
	}else{
		cad+=f.getSeconds(); 
	}
	tt.innerHTML=cad;
	setTimeout("mostrarhora()",1000); 
}

