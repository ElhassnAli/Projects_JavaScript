//get data from input when click save and save it in variable
document.getElementById("savedata").addEventListener("click", (event) => {
    event.preventDefault();
    
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value)/100
    
    
    if (isNaN(weight) || isNaN(height) || height === 0) {
        alert("Please enter valid weight and height values.");
        return;
    }
    
    const bmi = (weight / (height * height)).toFixed(1);
    let bmiCategory;
    
    if (bmi < 18) {
        bmiCategory = "Underweight";
    } else if (bmi < 24.9) {
        bmiCategory = "Normal Weight";
    } else if (bmi < 29.9) {
        bmiCategory = "Overweight";
    } else if (bmi < 34.9) {
        bmiCategory = "Obesity Class I";
    } else if (bmi < 39.9) {
        bmiCategory = "Obesity Class II";
    } else {
        bmiCategory = "Obesity Class III";
    }
    
    // Display BMI and category
    document.getElementById("result").textContent = bmi;
    document.getElementById("Massage").textContent = bmiCategory;
});