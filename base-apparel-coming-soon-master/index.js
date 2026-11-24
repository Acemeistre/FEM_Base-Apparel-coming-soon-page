const form = document.querySelector("form")
const input = document.querySelector("input")
const errorIcon = document.querySelector(".error-icon")
const errorMsg = document.querySelector(".error-msg")
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (!emailPattern.test(input.value.trim())) {
        form.classList.add('error');
        errorMsg.classList.add('error');
        input.setAttribute(aria-invalid, "true")
        
    } else {
        form.classList.remove('error');
        errorMsg.classList.add('error');
        input.setAttribute(aria-invalid, "false"),
        input.value = ''
    }
}
)