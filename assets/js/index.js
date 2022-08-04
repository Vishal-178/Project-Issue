let a = $(".eachLabel");

for (let i = 0; i < a.length; i++) {
  a[i].style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 200
  )},${Math.floor(Math.random() * 200)},${Math.floor(Math.random() * 200)})`;
  a[i].style.color = "white";
}
