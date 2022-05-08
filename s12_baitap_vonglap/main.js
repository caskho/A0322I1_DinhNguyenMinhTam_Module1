function fibonance(n) {
    if(n<2) {
        return 1;
    } else {
        return fibonance (n-2) + fibonance (n-1);
    }

}

function display() {
    let n = prompt ('nhap so luong fibonance dau tien can hien thi');
    let res = document.getElementById('result');
    let arrayOfibo =  ``;
    for (var i = 1; i <= 1; i++) {
        arrayOfibo +=  `${fibonance (i)} ;`;
    }
    res.innerHTML = arrayOfibo;
}
display();