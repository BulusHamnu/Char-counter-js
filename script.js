//

//let text = "";
const textBox = document.querySelector(".text-box");
const counts = document.querySelector(".counts");
const remains = document.querySelector(".remains");
let maxChars = 255;


textBox.addEventListener("input", countChar)


function countChar(){
    let text = this.value;
    if (text.length > 100 ) {
        textBox.value = textBox.value.substring(0, maxChars);
        return
    }
    counts.textContent = text.length;
    remains.textContent = maxChars - this.value.length;
}



