const signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = e.target.username.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  console.log(username);

  const signupData = {
    username,
    email,
    password,
  };

  const res = await axios.post("http://localhost:3000/signup", signupData);

  console.log(res.data);
});
