// Function to calculate Simple Interest
function calculateSI() {

    // Getting input values
    var p = parseFloat(document.getElementById("principal").value);
    var r = parseFloat(document.getElementById("rate").value);
    var t = parseFloat(document.getElementById("time").value);

    // Calling calculation function
    var si = simpleInterest(p, r, t);

    // Display result
    document.getElementById("result").innerHTML = "Simple Interest: " + si;
}

// Function to compute SI (Formula implementation)
function simpleInterest(p, r, t) {

    // SI = (P × R × T) / 100
    return (p * r * t) / 100;
}