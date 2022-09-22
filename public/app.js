function output(num) {
    const number = document.getElementById('current-calculator').innerHTML;
    document.getElementById('current-calculator').innerHTML = number + num;
}

 function AllClear() {
    document.getElementById('current-calculator').innerHTML = "";
 }

 function ClearEntity() {
    const CE = document.getElementById('current-calculator').innerHTML;
    document.getElementById('current-calculator').innerHTML = CE.substring(0, CE.length -1)
 }

 function calculate() {
   const result = document.getElementById('current-calculator').innerHTML;
   if(result) {
      document.getElementById('current-calculator').innerHTML = eval(result)
   }
   else {
      document.getElementById('current-calculator').innerHTML = "0";
   }
 }