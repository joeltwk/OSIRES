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
  setTimeout("changeImage()", 300)
}

window.onload = setTimeout("changeImage()", 1000)
