$(document).ready(function(){
   
   $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
   });

   $(window).on('load scroll',function(){
      $('#menu').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');
   });
});

const currentDate = new Date();
const year = currentDate.getFullYear();
document.getElementById("root").innerHTML = year;