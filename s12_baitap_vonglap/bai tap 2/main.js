var res = document.getElementById('result');
var btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    var number = document.getElementById('n').value;
    if (isNaN(number)) {
        res.innerHTML = 'input must be a number.'
    } else {
        let result = 1;
        for (var i = number; i > 0; i--) {
            result = result * i;
        }
        res.innerHTML = `${number}! = ${result}`
    }
})