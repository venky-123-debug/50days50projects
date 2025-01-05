const deg = 6
const hour = document.querySelector(".hour")
const min = document.querySelector(".min")
const sec = document.querySelector(".sec")

const setClock = () => {
  let day = new Date()
  let hh = day.getHours() * 30
  let mm = day.getMinutes() * deg
  let ss = day.getSeconds() * deg

  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
  min.style.transform = `rotateZ(${mm}deg)`
  sec.style.transform = `rotateZ(${ss}deg)`

  let hours = String(day.getHours()).padStart(2, "0")
  let minutes = String(day.getMinutes()).padStart(2, "0")
  let seconds = String(day.getSeconds()).padStart(2, "0")

  document.getElementById("hours").textContent = hours
  document.getElementById("minutes").textContent = minutes
  document.getElementById("seconds").textContent = seconds
}

setInterval(setClock, 1000)

setClock()
