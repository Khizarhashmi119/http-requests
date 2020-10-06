const btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () => {
  fetch("/data/sample.txt")
    .then((res) => res.text())
    .then((data) => {
      document.querySelector("#text").innerHTML = data;
    });
});

const btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", () => {
  fetch("/data/sample.json")
    .then((res) => res.json())
    .then((data) => {
      let html = "";
      data.forEach(({ name, age, subject }) => {
        html += `
          <ul>
            <li>Name: ${name}</li>
            <li>Age: ${age}</li>
            <li>Subject: ${subject}</li>
          </ul>
        `;
      });
      document.querySelector("#json").innerHTML = html;
    });
});

const from = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch("/post", {
    method: "POST",
    headers: {
      // "Content-type": "application/json",
      "Content-type": "application/x-www-form-urlencoded",
    },
    // body: JSON.stringify({ name: document.querySelector("#name").value }),
    body: `name=${document.querySelector("#name").value}`,
  })
    .then((res) => res.text())
    .then((data) => {
      document.querySelector("#post-data").innerHTML = data;
    });
});
