
$(function(){

  // Player Show
  $('.list2 a').click(function(){
    $('.player').css('bottom', 10);
  })

  $('.fa-circle-stop').click(function(e){
    e.stopPropagation();
    $('.player').css('bottom', -80);
  })

  $('.player').click(function(){
    window.location.href = "content.html";
  })

  // Dark Mode Button
  $('.mode').click(function(){
    if(!$(this).children().attr('style')){
      $(this).css('background-color', '#999');
      $(this).children().css('left', 22);
      $('header img').attr('src', 'img/logo_white.svg');
      $('body, header').css({
        'background-image': 'linear-gradient(-45deg, rgba(2,0,36,1) 0%, rgba(23,23,42,1) 77%, rgba(70,0,156,1) 100%)',
        'color': '#fff',
      })
      $('a').css('color', 'white');
    }else{
      $(this).removeAttr('style');
      $(this).children().removeAttr('style');
      $('header img').attr('src', 'img/logo.svg');
      $('body, header').removeAttr('style');
      $('a').removeAttr('style');
    }
  })

  // $('#file-upload').change(function() {
  //   var i = $(this).prev('label').clone();
  //   var file = $('#file-upload')[0].files[0].name;
  //   $(this).next('p').text(file);
  //   $(this).next('p').css('color', '#333');
  // });

  // var imgInp = document.getElementById('img-upload-input');
  // var blah = document.getElementById('show-img');

  // imgInp.onchange = evt => {
  //   const [file] = imgInp.files
  //   if (file) {
  //     $('.img-upload p').css('display', 'none');
  //     blah.style.display = 'block';
  //     blah.src = URL.createObjectURL(file);
  //   }
  // }

})


















