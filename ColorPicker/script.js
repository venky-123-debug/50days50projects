// JavaScript to handle color input changes
const colorPicker = document.getElementById("colorPicker")
colorPicker.addEventListener("input", (event) => {
  document.body.style.backgroundColor = event.target.value
})
