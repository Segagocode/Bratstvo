$(document).ready(function() { 
 
    //Раскрытие футера 
     
    $('#footer-open').click(function() {
    $('#footer').toggleClass('open3'); 
    }); 
     
    //Изменение содержимого diva при нажатии 
     
    $("#footer-open").toggle(
    function () {$("#footer-open").html('Закрыть <i class="fa fa-arrow-down"></i>');},
    function () {$("#footer-open").html('Открыть <i class="fa fa-arrow-up"></i>');}
    ); 
     
    });
    
    $(function(){
        $('#menu-icon').click(function(){
             var text = $(this).html();
             $(this).html(text == '<i class="fa fa-bars"></i>' ? '<i class="fa fa-times"></i>' : '<i class="fa fa-bars"></i>');
         })
     });