$(function(){
   var header = document.getElementById('header');
   var headroom = new Headroom(header);
   headroom.init();

   // menu responsive
   //Calcular el ancho de la pagina
   var ancho = $(window).width(),
       enlaces = $('#enlaces'),
       btnMenu = $('#btn-menu'),
       icono = $('#btn-menu .icono');

       if(ancho < 700){
          enlaces.hide(); // oculta los enlaces si el ancho es menor de 700 px
          icono.addClass('fa-bars');
       }

       btnMenu.on('click', function (e) { // si el usuario seleciona el icono sucedera lo siguiente
         enlaces.slideToggle();
         icono.toggleClass('fa-bars'); //las alterna si le da una ves aparecera la de times 
         icono.toggleClass('fa-times');//si le vuelve a dar otra vez aparecera la de bars 
          
       });

       $(window).on('resize', function () { // cuando alla un cambio de tamaño de la pag
            if($(this).width() > 700) { // this se refiere a window
               enlaces.show();
               icono.addClass('fa-times');
               icono.removeClass('fa-bars');
            } else{
               enlaces.hide();
               icono.addClass('fa-bars');
               icono.removeClass('fa-times');
            }
       });
});