
window.onload = function() {
    if (Math.random() < 0.5) {
        document.getElementById("q1").style.display = "compact";
        document.getElementById("q2").style.display =  "none";
    } else {
        document.getElementById("q2").style.display = "compact";
        document.getElementById("q1").style.display = "none";
    }
}

// function postToURL(a, b, c){
//     document.getElementById("mG61Hd").action = a;
//     document.getElementById("submission").name = b;
//     document.getElementById("submission").value = c;
//     document.getElementById("mG61Hd").submit();
// }

//write up a quiz that shows a multiplication, division, and subtraction problem.

