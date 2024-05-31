let cardDiv = document.querySelectorAll("#card-div");
let seeMoreBtn = document.querySelectorAll("#see-more");
let cardDivs;
cardDiv.forEach((a) => {
  seeMoreBtn.forEach((e) => {
    e.addEventListener("click", () => {
      if (
        (e.classList.contains("see-more1") &&
          a.classList.contains("card-div1")) ||
        (e.classList.contains("see-more2") &&
          a.classList.contains("card-div2")) ||
        (e.classList.contains("see-more3") && a.classList.contains("card-div3"))
      ) {
        a.classList.toggle("card-div");
        a.classList.toggle("activeme");
        if (a.classList.contains("activeme")) {
          e.innerText = "Less Features";
        } else {
          e.innerText = "See more Features";
        }
      }
    });
  });
});
