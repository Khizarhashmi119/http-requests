const btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () => {
  // axios({
  //   method: "GET",
  //   url: "/data/sample.txt",
  // }).then((res) => {
  //   console.log(res);
  //   document.querySelector("#text").innerHTML = res.data;
  // });
  axios.get("/data/sample.txt").then((res) => {
    console.log(res);
    document.querySelector("#text").innerHTML = res.data;
  });
});

const btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", () => {
  axios.get("/data/sample.json").then((res) => {
    console.log(res);
    let html = "";
    res.data.forEach(({ name, age, subject }) => {
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

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = document.querySelector("#name").value;
  // axios
  //   .post("/post", {
  //     name: value,
  //   })
  //   .then((res) => {
  //     console.log(res);
  //     document.querySelector("#post-data").innerHTML = res.data;
  //   });

  axios.post("/post", `name=${value}`).then((res) => {
    console.log(res);
    document.querySelector("#post-data").innerHTML = res.data;
  });
});

axios.interceptors.request.use(
  (config) => {
    console.log(config);
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
