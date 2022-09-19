let marker = document.querySelector("#marker");
let item = document.querySelectorAll("ul li a");

function indict(e) {
  marker.style.top = e.offsetTop + "px";
  marker.style.width = e.offsetWidth + 50 + "px";
}

item.forEach((link) => {
  link.addEventListener("mousemove", (e) => {
    indict(e.target);
  });
});
