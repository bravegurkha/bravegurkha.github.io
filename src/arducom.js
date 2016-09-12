$(document).ready(function(){
  $('#python_arducom').hide();
});

function getCpp(){
    $('#cpp_arducom').show();
    $('#python_arducom').hide();
}

function getPython(){
  $('#cpp_arducom').hide();
  $('#python_arducom').show();

}
