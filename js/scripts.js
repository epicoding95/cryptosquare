
var string = ('input#phrase');
//var openArray = string.split('');
var codedArray = [];
var square = (Math.ceil(Math.sqrt(string.length)));
//var col = Math.ceil(square);

function crypto(string){
  alert(square)
debugger;
  for ( i = 0; i<string.length; i+(square)) {
    string.slice(i,1).push(codedArray);
    if (square > 0){
      square --;

    alert(square);
  }
  codedArray.join('');
}
}
$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var string = $("input#phrase").val().split('');
    crypto(string);
    $("#output").text(output);
  });
});



//     for (var i of Object.keys(roman)) {
//
//       var q = Math.floor(num / roman[i]);
//
//       num -= q * roman[i];
//
//       str += i.repeat(q);
//     }
//
//     return str;
//   }
