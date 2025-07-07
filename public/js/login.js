const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  console.log(email);

  const loginData = {
    email,
    password,
  };

  const res = await axios.post("http://localhost:3000/login", loginData);

  console.log(res.data);
});
