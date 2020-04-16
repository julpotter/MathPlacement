
window.onload = function() {

    document.htmlform.action = get_action();


    if (Math.random() < 0.33) {
        document.getElementById("a1").style.display = "compact";
        document.getElementById("a2").style.display = "none";
        document.getElementById("a3").style.display = "none";
    } else if (Math.random() < 0.66) {
        document.getElementById("a1").style.display = "none";
        document.getElementById("a2").style.display = "compact";
        document.getElementById("a3").style.display = "none";
    } else if (Math.random() < 1.00) {
        document.getElementById("a1").style.display = "none";
        document.getElementById("a2").style.display = "none";
        document.getElementById("a3").style.display = "compact";
    }

    if (Math.random() < 0.5) {
        document.getElementById("s1").style.display = "compact";
        document.getElementById("s2").style.display = "none";
    } else {
        document.getElementById("s1").style.display = "none";
        document.getElementById("s2").style.display = "compact";
    }
    if (Math.random() < 0.33) {
        document.getElementById("d1").style.display = "compact";
        document.getElementById("d2").style.display = "none";
        document.getElementById("d3").style.display = "none";
    } else if (Math.random() < 0.66) {
        document.getElementById("d1").style.display = "none";
        document.getElementById("d2").style.display = "compact";
        document.getElementById("d3").style.display = "none";
    } else if (Math.random() < 1.00) {
        document.getElementById("d1").style.display = "none";
        document.getElementById("d2").style.display = "none";
        document.getElementById("d3").style.display = "compact";
    }

    if (Math.random() < 0.5) {
        document.getElementById("m1").style.display = "compact";
        document.getElementById("m2").style.display = "none";
    } else {
        document.getElementById("m1").style.display = "none";
        document.getElementById("m2").style.display = "compact";
    }
}
function submit_by_name(){
    document.getElementById("htmlform").submit();
}

function get_action() {
    return "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdtM4Q2njyd9_gqEo-FqQ__cl2g_J8O8QQMVIMXPkzbz4lBbA/formResponse";
}




// function postToURL(a, b, c){
//     document.getElementById("mG61Hd").action = a;
//     document.getElementById("submission").name = b;
//     document.getElementById("submission").value = c;
//     document.getElementById("mG61Hd").submit();
// }

//write up a quiz that shows a multiplication, division, and subtraction problem.

