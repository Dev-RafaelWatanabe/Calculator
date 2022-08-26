function output(num) {
    var number = document.getElementById('current-calculator').innerHTML;
    document.getElementById('current-calculator').innerHTML = number + num;
}

 function AllClear() {
    document.getElementById('current-calculator').innerHTML = "";
 }

 function ClearEntity() {
    var CE = document.getElementById('current-calculator').innerHTML;
    document.getElementById('current-calculator').innerHTML = CE.substring(0, CE.length -1)
 }