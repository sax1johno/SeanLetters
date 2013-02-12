$(document).ready(function() {    
    $('#letter').hide().text("Sean!").fadeIn(500);
    var style = getParameterByName("style");
    if (style !== "") {
        if (style == 'jungle') {
            $('body').addClass('jungle');
        } else if (style == 'snow') {
            $('body').addClass('snow')
        } else if (style == 'silly') {
            $('body').addClass('silly');
        }
    }
    $('body').keydown(function(event) {
        var c = String.fromCharCode(event.which).toLowerCase();
        if (c.match(/\w/)) {
        $('#letter').fadeOut(250, function() {
            $(this).text(c).fadeIn(250);
//            console.log("sound = " + c + "sound" + $('#'+c+'sound').get(0));
            if ($('#'+c+'sound').get(0) !== undefined) {
                $('#'+c+'sound').get(0).load();
                $('#' + c + 'sound').get(0).play();
            }
        });
        }
    })

})

function getParameterByName(name)
{
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);
  if(results == null)
    return "";
  else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}