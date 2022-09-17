$(document).ready(function(){

   $(".copy-btn").click(function(){
    $("#textArea").select();
    document.execCommand("copy");
   })
})