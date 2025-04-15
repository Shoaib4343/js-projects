function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const heightCm = parseFloat(document.getElementById("height").value);
    const result = document.getElementById("result");
  
    if (!weight || !heightCm || weight <= 0 || heightCm <= 0) {
      result.textContent = "Please enter valid values!";
      return;
    }
  
    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(2);
  
    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal weight";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obese";
  
    result.textContent = `Your BMI is ${bmi} (${category})`;
  }
  