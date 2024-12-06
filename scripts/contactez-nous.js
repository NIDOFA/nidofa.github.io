const inputs = document.querySelectorAll('.input');
const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const numberPattern = /^\+[0-9]{1,3}[0-9]{3}[0-9]{3}[0-9]{3}$|^\+[0-9]{1,3}[0-9]{3}\-[0-9]{6}$/;

document.getElementById("qstBtn").addEventListener("click", () => {
    document.getElementById("under-wrapper").style.display = "initial";
    document.getElementsByClassName("wrapper")[0].style.display = "initial";
    document.getElementsByClassName("wrapper")[0].classList.add("wrapper-display-yes-class");
    document.querySelector("#bluring-page").classList.add("blur");
    setTimeout(() => {
        document.getElementsByClassName("wrapper")[0].classList.remove("wrapper-display-yes-class");
    }, 400);
})

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.previousElementSibling.style.top = "0";
    });
    input.addEventListener('blur', () => {
        if (input.value == ""){
            if(input.id != "file") input.previousElementSibling.style.top = (input.id != "qst" ? "25px" : "45px");
        }
    });
});

document.getElementById("resetBtn").addEventListener("click", ()=>{
    setTimeout(()=> {
        inputs.forEach(input => {
            if (input.value == ""){
                if(input.id != "file") input.previousElementSibling.style.top = (input.id != "qst" ? "25px" : "45px");
            }
        });
    },1);
});

document.getElementById('file').addEventListener('change', function() {
    if(this.files.length > 0){
        document.getElementById('file-name').textContent = this.files[0].name;
        document.getElementById('file-name').previousElementSibling.textContent = "Changer le fichier";
    }
});

function close_wrapper(){
    document.getElementById("under-wrapper").style.display = "none";
    document.getElementsByClassName("wrapper")[0].classList.add("wrapper-display-none-class");
    document.querySelector("#bluring-page").classList.remove("blur");
    setTimeout(() => {
        document.getElementsByClassName("wrapper")[0].style.display = "none";
        document.getElementsByClassName("wrapper")[0].classList.remove("wrapper-display-none-class");
        inputs.forEach(input => {
            input.value = "";
        });
    }, 400);
}

document.getElementById("close-bnt").addEventListener("click", close_wrapper);

document.getElementById("under-wrapper").addEventListener("click", close_wrapper);

document.getElementById("submitBtn").addEventListener("click", (event) => {
    if(document.getElementById("form-agent").checkValidity()){
        close_wrapper();
        alert('Message envoyé');
    }
});

document.getElementById("form-agent").addEventListener("input", () => {
    if(!document.getElementById("form-agent").checkValidity()){
        document.getElementById("submitBtn").classList.add("invalid-input");
    }
    else{
        document.getElementById("submitBtn").classList.remove("invalid-input");
    }
});

document.getElementById("form-agent").addEventListener("submit", (event) => {
    document.getElementById("e-mail").setCustomValidity('');
    document.getElementById("tel").setCustomValidity('');
    if(!emailPattern.test(document.getElementById("e-mail").value)){
        event.preventDefault();
        document.getElementById("e-mail").setCustomValidity('Pleas enter a valid email in the format a@b.co');
    }
    if(!numberPattern.test(document.getElementById("tel").value.split(' ').join(''))){
        event.preventDefault();
        document.getElementById("tel").setCustomValidity('Pleas enter a valid number in the format +1 000 000 000 or +1 000-000000');
    }
});

document.getElementById("e-mail").addEventListener("input", () => {
    document.getElementById("e-mail").setCustomValidity('');
    if (!emailPattern.test(document.getElementById("e-mail").value)) {
        document.getElementById("e-mail").setCustomValidity('Please enter a valid email in the format a@b.co');
    }
});

document.getElementById("tel").addEventListener("input", () => {
    document.getElementById("tel").setCustomValidity('');
    if (!numberPattern.test(document.getElementById("tel").value.split(' ').join(''))) {
        document.getElementById("tel").setCustomValidity('Please enter a valid number in the format +1 000 000 000 or +1 000-000000');
    }
});