const logo_count = 11
let counter = 1

function changeImage(){
  document.querySelector(".main_logo").src = `image_assets/OSIRES_WEB_WIREFRAME_PROTO_TYPE-${counter}.png`
  if (counter < logo_count) {
    counter += 1
  }
  else {
    counter = 1
  }
  setTimeout("changeImage()", 600)
}

function fadeIn(){
  let fadeElements = document.querySelectorAll(".fade")
  fadeElements.forEach(element =>
    element.classList.add("fade_in")
  );
}

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.querySelector(".clock").innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}


window.onload = setTimeout("changeImage()", 1000)
window.onload = fadeIn()
window.onload = startTime()
