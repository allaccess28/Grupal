



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

var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
var f=new Date();
document.write(diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());

