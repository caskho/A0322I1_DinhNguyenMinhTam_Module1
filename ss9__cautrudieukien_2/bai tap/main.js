 function calculateBMI() {
    let w = parseFloat(document.getElementById("weight").value);
      let h = parseFloat(document.getElementById("height").value);
     let bmi =  w/(Math.pow(h,2));
    if (bmi < 18)
        {document.getElementById("result").innerHTML = "Underweight";}
     else if (bmi < 25.0)
         {document.getElementById("result").innerHTML = "Normal";}
     else if (bmi < 30.0)
         {document.getElementById("result").innerHTML = "Overweight";}
    else
        {document.getElementById("result").innerHTML = "Obese";}
  }

