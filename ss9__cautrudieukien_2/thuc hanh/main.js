let imhObj = null;
imhObj = document.getElementById('myImage');
function init () {
    imhObj = document.getElementById('myImage');
    imhObj.style.position = 'relative'
    imhObj.style.left = '2px';
}

function moveRight () {
    imhObj.style.left = parseInt(imhObj.style.left) + 10 + 'px';
}
window.onload = init;






// tinh can nang 
function calculateBMI() {
    let w = parseFloat (document.getElementById('weight').value );
    let h = parseFloat (document.getElementById ('height').value);
    let bmi = w /(Math.pow(h,2));
    if (bmi < 18) {
        document.getElementById ('result').innerHTML = 'underweight';
    } else if (bmi < 25.0) {
        document.getElementById('result').innerHTML = 'normal';
     } else if (bmi < 30.0) {
         document.getElementById ('result').innerHTML = 'overweight'; 
     } else {
         document.getElementById ('result').innerHTML = 'obese';
             }
}
// dung dung good fast cheap 
function switchGood () {
    var isGood = document.getElementById ('g').checked;
    var isCheap = document.getElementById ('c').checked;
    var isFast = document.getElementById ('f').checked;
    console.log(isGood, isFast, isCheap);
    if (isCheap && isFast) {
        if (Math.random () < 0.5) {
            document.getElementById('c').checked = false;
        } else {
            document.getElementById ('f').checked = false;
        }
    }
}
 function switchCheap () {
     var isGood = document.getElementById ('g').checked;
     var isCheap = document.getElementById ('c').checked;
     var isFast = document.getElementById ('f').checked;
     console.log (isGood, isFast, isCheap);
     if (isGood && isFast) {
         if (Math.random() < 0.5) {
             document.getElementById ('g').checked = false;

         } else {
             document.getElementById ('f').checked = false;
         }
     }
 }

 function switchFast () {
    var isGood = document.getElementById("g").checked;
    var isCheap = document.getElementById("c").checked;
    var isFast = document.getElementById("f").checked;
    console.log(isGood,isCheap,isFast);
    if (isGood && isCheap) {
        if (Math.random() < 0.5) {
            document.getElementById("c").checked = false
        } else {
            document.getElementById("f").checked = false
        }
    }
}
