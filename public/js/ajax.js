const btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", function () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data/sample.txt", true);
  xhr.send();

  xhr.addEventListener("loadend", function () {
    if (this.status === 200) {
      document.querySelector("#text").innerHTML = this.responseText;
    }
  });
});

const btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", function () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data/sample.json", true);
  xhr.send();

  xhr.addEventListener("loadend", function () {
    if (this.status === 200) {
      const jsonData = JSON.parse(this.responseText);
      let output = "";

      jsonData.forEach((student) => {
        output += `<ul> 
            <li>Name:  
              ${student.name} 
            </li> 
            <li>Age: 
              ${student.age} 
            </li> 
            <li>Subject:
              ${student.subject} 
            </li>
          </ul>`;
      });

      document.querySelector("#json").innerHTML = output;
    }
  });
});

const form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
  const xhr = new XMLHttpRequest();
  const name = document.querySelector("#name").value;
  // const data = "name=" + name;
  const data = JSON.stringify({ name: name });
  event.preventDefault();
  xhr.open("POST", "/post", true);
  // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(data);

  xhr.addEventListener("loadend", function () {
    if (this.status === 200) {
      document.querySelector("#post-data").innerHTML = this.responseText;
    }
  });
});
