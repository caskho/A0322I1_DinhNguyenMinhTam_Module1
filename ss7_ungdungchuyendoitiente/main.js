function chuyendoi () {
    let giatrivao = document.getElementById('dauvao').value;
    let select1 = document.getElementById('select1').value;
    let select2 = document.getElementById('select2').value;
    if (select1 == select2) {
        alert(giatrivao);
    }
    if (select1 == "a" && select2 =="b") {
        alert(giatrivao/24000);
    }
    if (select1 == "b" && select2 =="a") {
                alert(giatrivao *24000);
     }
}


//   code tinh nam nhuan 
// let year = parseInt(prompt('enter the year'));
// let isLearYear = false;

// if (year % 4 == 0) {
//     if (year % 100 == 0) {
//         if (year % 400 ==0) {
//             isLearYear = true;
             
//         }
//     } else {
//         isLearYear = true;
//     }
// }
// if (isLearYear) {
//     alert (year + 'is a LeapYear')
// } else {
//     alert(year + 'is not a leap year')
// }


// cau truc swith case 






switch (browser) {
    case 'Edge':
        alert ('you got the Edge!');
        break;
        case 'chrome' :
        case 'firefox' :
        case 'safari' :
            case 'opera' :
                alert ('okay we got support these browser');
                break;
                default :
                alert ('we hope that this page look oke')   

        

}

