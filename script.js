window.addEventListener("load", init);

function init() {
  const articleELEM = document.querySelector("article");
  articleELEM.innerHTML = "<div><img src='kepek/R.jpg' alt='kep'></div>";
  const kep = document.querySelector("div");
  const gombb = document.querySelector("article");
  gombb

  kep.addEventListener("mouseover", () => {
    kep.style.border = "2px solid black";
    kep.style.backgroundColor = "red";
  });

  kep.addEventListener("mouseout", () => {
    kep.style.border = "";
    kep.style.backgroundColor = "";
  });

}
