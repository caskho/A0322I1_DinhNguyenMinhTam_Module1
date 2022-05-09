function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById('out').innerHTML = (valNum -32 ) / 1.8;

}
temperatureConverter();