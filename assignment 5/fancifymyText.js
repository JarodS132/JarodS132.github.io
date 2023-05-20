function biggerAlert() {
    document.getElementById("textarea").style.fontSize = "24pt";
}

function FancyShmancy() {
    document.getElementById("textarea").style.fontWeight = "bold";
    document.getElementById("textarea").style.color = "blue";
    document.getElementById("textarea").style.textDecoration = "underline";
}

function BoringBetty() {
    document.getElementById("textarea").style.fontWeight = "normal";
    document.getElementById("textarea").style.color = "";
    document.getElementById("textarea").style.textDecoration = "";
}

function Moo() {
    let textArea = document.getElementById("textarea");
    textArea.value = textArea.value.toUpperCase();
    let str = textArea.value;
    let parts = str.split(".");
    str = parts.join("Moo.");
    textArea.value = str;
    
}
