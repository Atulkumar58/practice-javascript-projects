function calculateBMI(weight, height) {
    // Convert height from centimeters to meters
    height = height / 100;
    return weight / (height * height);
}

form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    weight= parseInt(document.querySelector('#weight').value);
    height= parseInt(document.querySelector('#height').value);

    if(height === '' || weight === '' || isNaN(height) || isNaN(weight)) {
        document.querySelector('#results').innerHTML = 'Please enter valid values for weight and height.';
        return;
    }
    bmi = calculateBMI(weight, height);
    document.querySelector('#results').innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
})

