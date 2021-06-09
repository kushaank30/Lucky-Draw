var degree = 1800;
var clicks = 0;

$(document).ready(function() {
  $('#spin').click(function() {
    
    clicks ++;
    var newDegree = degree * clicks;
    var extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
    totalDegree = newDegree + extraDegree;
    
    $('#wheel .sec').each(function() {
      var t = $(this);
      var noY = 0;
      
      var c = 0;
      var n = 700;
      var interval =  setInterval(function () {
        c++;
        if (c === n) {
          clearInterval(interval);
        }
        
        var aoY = t.offset().top;
        $('#txt').html(aoY);
        
        if(aoY < 23.89) {
          $('#spin').addClass('spin');
          setTimeout(function () {
            $("#spin").removeClass('spin');
          }, 100);
        }
      }, 10);
      
      $('#inner-wheel').css({'transform' : 'rotate(' + totalDegree + 'deg)'});
      
      noY = t.offset().top;
    });

    swal({
        title: "Congratulations, You have won 300 points",
        text: "To redeem take a screenshot of this window and share it with your seller!",
        icon: "success",
      });
  });
});
