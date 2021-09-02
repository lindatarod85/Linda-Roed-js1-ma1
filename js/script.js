const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

//Question 1

const cat = {
  complain: function () {
    console.log("Meow");
  },
};

cat.complain();

//Question 2

const newHeading = "Updated heading";

const selectHeading = document.querySelector("h3");

selectHeading.innerHTML = newHeading;

//Question 3

selectHeading.style.fontSize = "2em";

//Question 4

selectHeading.className = "subheading";

console.log(selectHeading);

//Question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

//Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML += "<p>New paragraph</p>";
resultsContainer.style.background = "yellow";

//Question 7

function catsList(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

catsList(cats);

//Question 8

function createCats(cats) {
  let html = "";

  for (let i = 0; i < cats.length; i++) {
    let catsAge = "Age unknown";

    if (cats[i].age) {
      catsAge = cats[i].age;
    }

    html += `<div>
        <h5>Name: ${cats[i].name}</h5>
        <p>Age: ${catsAge}</p>
        </div>`;
  }
  return html;
}

const newHtml = createCats(cats);

const catContainer = document.querySelector(".cat-container");

catContainer.innerHTML = newHtml;
