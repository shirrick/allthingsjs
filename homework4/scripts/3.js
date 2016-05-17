var string = prompt()
if(string.length > 20) {
    string = string.substring(0,20)+"...";
}
console.log(string);
