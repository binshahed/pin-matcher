document.getElementById('pin-generator-btn').addEventListener('click', function() {
    const random = Math.random();
    const randomPin = Math.round(1000 + random * 9000)
    console.log(randomPin)
    document.getElementById('screen1').value = randomPin;

})

document.getElementById('submit-btn').addEventListener('click', function() {
    const scree1 = document.getElementById('screen1')
    const scree2 = document.getElementById('screen2')
    const pinCorrect = document.getElementById('pin-correct')
    const pinInCorrect = document.getElementById('pin-in-correct')
    if (scree1.value == scree2.value) {
        pinCorrect.style.display = 'block';
        pinInCorrect.style.display = 'none';

    } else {
        pinInCorrect.style.display = 'block';
        pinCorrect.style.display = 'none';
    }
})