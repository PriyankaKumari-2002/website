function address() {
    let addy = document.getElementById("address").value;
    let mappingAddy = document.getElementById("mapping");
    let baseKey = "https://www.google.com/maps/embed/v1/search?key=AIzaSyDs8nTKBMH27-BV7DIObPt1yHSohWwuqJE&q=hospitals+near+";
    mappingAddy.src = baseKey + addy;
}

document.getElementById("address").addEventListener("keyup", addyInput)

function addyInput(e) {
    e.preventDefault()
    if (e.keyCode === 13) {
        address();
    }
    document.getElementById("address").value = e.target.value
}