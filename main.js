



function ConfirmDemo() {
//Ingresamos un mensaje a mostrar
var mensaje = confirm("¿Desea validar la Entrada");
//Detectamos si el usuario acepto el mensaje
if (mensaje) {
alert("¡Gracias por aceptar!")
window.location.href = 'respondercheqlist.html';
}
//Detectamos si el usuario denegó el mensaje
else {
alert("¡Has Cancelado!");
}
}


function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("text");
    var cont = 0;

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        text.style.display = "block";
        cont++;
    } else {
        
        text.style.display = "none";
    }

    var checkBox = document.getElementById("myCheck2");
    // Get the output text
    var text = document.getElementById("text2");
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        text.style.display = "block";
        cont++;
    } else {
        
        text.style.display = "none";
    }
    var checkBox = document.getElementById("myCheck3");
    // Get the output text
    var text = document.getElementById("text3");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        text.style.display = "block";
        cont++;
    } else {
        
        text.style.display = "none";
    }
    var checkBox = document.getElementById("myCheck4");
    // Get the output text
    var text = document.getElementById("text4");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        text.style.display = "block";
        cont++;
    } else {
        
        text.style.display = "none";
    }
    var checkBox = document.getElementById("myCheck5");
    // Get the output text
    var text = document.getElementById("text5");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        text.style.display = "block";
        cont++;
    } else {
        
        text.style.display = "none";
    }
    var checkBox = document.getElementById("myCheck6");
    // Get the output text
    var text = document.getElementById("text6");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        text.style.display = "block";
        cont++;
    } else {
        
        text.style.display = "none";
    }
    var checkBox = document.getElementById("myCheck7");
    // Get the output text
    var text = document.getElementById("text7");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        text.style.display = "block";
        cont++;
    } else {
        
        text.style.display = "none";
    }
    var checkBox = document.getElementById("myCheck8");
    // Get the output text
    var text = document.getElementById("text8");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        text.style.display = "block";
        cont++;
    } else {
        
        text.style.display = "none";
    }
    if (cont==0){
        alert("Seleccione al menos una opcion");
    }
}
var fechacompleta=document.getElementById("fechas");
var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
var f=new Date();
document.write(diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());

function validacionpago(){
    var payment= document.getElementById("monto").value;
    var colormonto=document.getElementById("monto");
    var rut=document.getElementById("rutero").value;
    var colorrut=document.getElementById("rutero");
    var datanio=document.getElementById("anio").value;
    var coloranio=document.getElementById("anio");
    var datames=document.getElementById("mes").value;
    var colormes=document.getElementById("mes");
    var cont=0;
    /*validacion pago como campo vacio*/
        if (payment == 0 || payment == null || payment==" "){
            alert("Error campos vacíos");
            colormonto.style.backgroundColor= "red";
            cont++;
            
        /*validacion pago como texto*/
        } else if(isNaN(payment)){
            alert("La cantidad no es un numero");
            colormonto.style.backgroundColor="red";
            cont++;

        /*validacion pago como monto incorrecto*/
        }else {var paymentnum = parseInt(payment);
            if ( paymentnum < 0 || paymentnum > 99999999 ){
            alert("Monto Incorrecto");
            colormonto.style.backgroundColor="red";
            cont++;}

        }
        
        if(datames == "- Mes -"){
            alert("No ha seleccionado un Mes");
            colormes.style.backgroundColor="red";
            cont++;
        }else{colormes.style.backgroundColor="white";}

        if(datanio == "- Año -"){
            alert("No ha seleccionado un Año");
            coloranio.style.backgroundColor="red";
            cont++;
        }else{coloranio.style.backgroundColor="white";}
        
        /*validacion rut como campo vacio*/
        if (rut==0 || rut==" " || rut==null){
            alert("Campo rut vacio");
            colorrut.style.backgroundColor="red";
            cont++;
        /*validacion rut como rango de numero*/
        }else {var rutnum = parseInt(rut);
            if (rutnum<999999 || rutnum.legnth>99999999){
            alert("el rut es incorrecto");
            colorrut.style.backgroundColor="red";
            cont++;
        }}
        if(cont==0){
        alert("Formulario validado");
        colormonto.style.backgroundColor= "white";
        colormes.style.backgroundColor="white";
        coloranio.style.backgroundColor="white";
        colorrut.style.backgroundColor="white";}
    
   
}    

$(document).ready(function () {
    $('#list1').click(function(){
        $('#lista1').fadeIn(500);

    }
    );
    $("#list1").click(function(){
            $('#lista1').fadeout(1000);
    }
    );
});

$(document).ready(function () {
    $("#cambiadorestilo").click(function(){
        $("cambioestilo1 cambioestilo2 cambioestilo3").toggleClass("egt");
    });
});    
