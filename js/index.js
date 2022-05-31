// fungsi yang digunakan untuk men-toggle layer navigasi pada hamburger button

function toggleHamburger() {
  let layer = document.getElementById("hamburger-layer");

  layer.style.display == "block"
    ? (layer.style.display = "none")
    : (layer.style.display = "block");
}
