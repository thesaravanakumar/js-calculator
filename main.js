let sepo = true;

function displayNum(num) {
  if (sepo) {
   var currNum = $('#display').html();
    if (currNum == "0") {
      $('#display').html(num);
    } else {
      $('#display').html(currNum + num);
    } 
  } else {
    $('#display').toggleClass("shaky").delay(500).queue(function(next){
      $('#display').toggleClass("shaky");
      next();
    });
  }
  
}

function uguale() {
  var currNum = $('#display').html();
  var lastValString = currNum.charAt(currNum.length-1);
  var testRegex = /\D/;
  if (testRegex.test(lastValString)) {
    $('#display').toggleClass("shaky").delay(500).queue(function(next){
      $('#display').toggleClass("shaky");
      next();
    });
  } else {
      sepo = false;
      $('#display').html(parseFloat(eval(currNum).toFixed(5)));
  }
}

function clean() {
  sepo = true;
  $('#display').html("0");
}



function punto(num) {
  if (sepo) {
    var currNum = $('#display').html();
    var stringSplit = currNum.split(/[/*+-]/);
    var lastValString = stringSplit[stringSplit.length - 1];
    var testRegex = /\D/;
    if (testRegex.test(lastValString)) {
      $('#display').toggleClass("shaky").delay(500).queue(function(next){
        $('#display').toggleClass("shaky");
        next();
      });
    } else {
      if (currNum == "0") {
        $('#display').html('0'+num);
      } else {
        $('#display').html(currNum + num);
      }
    }
  } else {
    $('#display').toggleClass("shaky").delay(500).queue(function(next){
      $('#display').toggleClass("shaky");
      next();
    });
  }
  
  
}

function segni(num) {
  sepo = true;
  var currNum = $('#display').html();
  var lastValString = currNum.charAt(currNum.length-1);
  var penlastValString = currNum.charAt(currNum.length-2);
  var testRegex = /\D/;
  if (testRegex.test(lastValString) && lastValString != '-') {
    $('#display').html(currNum.slice(0, -1)  + num);
  } else if (testRegex.test(lastValString) && lastValString == '-' && !testRegex.test(penlastValString)) {
    $('#display').toggleClass("shaky").delay(500).queue(function(next){
      $('#display').toggleClass("shaky");
      next();
    });
  } else if (testRegex.test(lastValString) && lastValString == '-' && testRegex.test(penlastValString)) {
    $('#display').html(currNum.slice(0, -2)  + num);
  } else {
    if (currNum == "0") {
      $('#display').toggleClass("shaky").delay(500).queue(function(next){
        $('#display').toggleClass("shaky");
        next();
      });
    } else {
      $('#display').html(currNum + num);
    }
  }

}

function segnoMeno(num) {
  sepo = true;
  var currNum = $('#display').html();
  var lastValString = currNum.charAt(currNum.length-1);
  var testRegex = /\D/;
  if (testRegex.test(lastValString) && lastValString == '-') {
    $('#display').toggleClass("shaky").delay(500).queue(function(next){
      $('#display').toggleClass("shaky");
      next();
    });
  } else {
    if (currNum == "0") {
      $('#display').html(num);
    } else {
      $('#display').html(currNum + num);
    }
  }

}
