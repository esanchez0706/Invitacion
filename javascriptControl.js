
$(document).ready(function(){    
  //Primeros eventos
  $('#mensajes').hide();
  $('#transiciones').hide();
  $('#fotomensaje').hide();
  $('#fondoArbol').hide();
  $('#informacionCarta').hide();
  $('#santa').hide();
  $("html, body").animate({ scrollTop: 0 }, 0);
  $("#hojaDeMensajes").attr("href", "styleGeneral.css");
  $("#hojaDeDeNieve").attr("href", "styleGeneral.css");
  $("#hojaDeSanta").attr("href", "styleGeneral.css");

  $('#mensaje6').hide();
  $('#mensaje7').hide();
  $('#mensaje8').hide();
  $('#mensaje9').hide();

 
  $('#notice').on('click', function(event) {
  
    $('.cuentaRegresiva').hide();
    $("#hojaDeCarta").attr("href", "styleGeneral.css");
    $("#hojaDeInformacion").attr("href", "styleGeneral.css");
    $("#hojaDeTexto").attr("href", "styleGeneral.css");
    
    $("#hojaDeMensajes").attr("href", "styleMensajes.css");
    $("#hojaDeTransiciones").attr("href", "styleTransiciones.css");

    $('#dribbble').hide();
    $('#transiciones').show();
    $('#mensajes').show();
    
    $("#animacion").trigger("click"); // activar boton
   
    setTimeout(function(){ 
      $("#animacion").trigger("click"); // activar boton 
      $('#fondoArbol').show();
   
    }, 14000);
    
    setTimeout(function(){
 
      $('#fondoArbol').hide();
      $('#mensaje1').hide();
      $('#mensaje2').hide();
      $('#mensaje3').hide();
      $('#mensaje4').hide();
      $('#mensaje5').hide();

      $('#mensaje6').show();
      $('#mensaje7').show();
      $('#mensaje8').show();
      $('#mensaje9').show();

  
      $("#animacion").trigger("click"); // activar boton de enviar formulario
      $('#fiestaPancho').show();
      
    }, 15000);

    setTimeout(function(){
      $('.cuentaRegresiva').show();
      $('#mensajes').hide();
      $("#animacion").trigger("click"); // activar boton de enviar formulario
      $('#fiestaPancho').hide();
      $("#hojaDeEstilofondo").attr("href", "styleNieve.css");
      $('#informacionCarta').show();

        
    }, 26000);

    setTimeout(function(){
      $("#hojaDeMensajes").attr("href", "styleGeneral.css");
      $("#hojaDeTransiciones").attr("href", "styleGeneral.css");
    
      $("#hojaDeDeNieve").attr("href", "styleNieve.css");
      $("#hojaDeInformacion").attr("href", "styleNieve.css.css");
      $("#hojaDeTexto").attr("href", "styleInformacion.css");
      $('#padin').hide();

      
    }, 26000);

	});

  $('#aceptar').on('click', function(event){
    $("#animacion").trigger("click"); // activar boton
    $('#transiciones').show();
    $("#hojaDeTransiciones").attr("href", "styleTransiciones.css");
    $("#hojaDeSanta").attr("href", "styleSanta.css");

    $("#hojaDeCarta").attr("href", "styleGeneral.css");
    $("#hojaDeMensajes").attr("href", "styleGeneral.css");
    $("#hojaDeGeneral").attr("href", "styleGeneral.css");
    $("#hojaDeDeContador").attr("href", "styleGeneral.css");
    $("#hojaDeDeNieve").attr("href", "styleGeneral.css");
    $("#hojaDeTexto").attr("href", "styleGeneral.css");
    $("#hojaDeInforacion").attr("href", "styleGeneral.css");

    $("#hojaDeInforacion").attr("href", "styleGeneral.css");


    $('#informacionCarta').hide();
    $('#santa').show();
    $('#cuerpo').hide();
    setTimeout(function(){  
    $("#animacion").trigger("click"); // activar boton
      location.reload();
    }, 5000);

  });

  $('#recargar, #recargar2').on('click', function(event){
    location.reload();
  });


  
});