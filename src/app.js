/*
Wrriten By Swornim Shrestha
September 9, 2016 Friday 8:14PM Nepal
Written For My Github Page
Email:srestaswrnm@gmail.com
*/


function repoShow(name,link,info){
  header = "<h4>"+name+" </h4>";
  footer = "<a class='btn btn-success' href='"+link+"'>View On Github</a>"
  body = "<p>"+info+"</p>";

  $('#repo_modal_header').html(header);
  $('#repo_modal_body').html(body);
  $('#repo_modal_footer').html(footer);
  $('#repo_modal').modal("show");
}

$.get('https://api.github.com/users/bravegurkhas/repos',function(data){
  $.each(data,function(i,j){
    if(j.fork == true){
      forkData =  "<div class='label label-success pull-right'><span class=\"fa fa-code-fork\"></span> Forked</div>";
    }else{
      forkData = " ";

    }
    htmlData = "<span class=\"fa fa-github \"></span> <a href='#' onclick=\"repoShow('"+j.full_name+"','"+j.html_url+"','"+j.description+"')\">"+j.full_name+"</a><br>"+forkData+"<p>"+j.description+"</p>";

    $('#github_repo').append(htmlData);

  });

});
