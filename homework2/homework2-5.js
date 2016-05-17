var name = prompt('enter your name?', '');
var text = (name == 'admin') ? 'Hi' :
    (name == 'manager') ? 'Hello' :
    (name == '') ? 'No login' :
    '';
alert(text);
