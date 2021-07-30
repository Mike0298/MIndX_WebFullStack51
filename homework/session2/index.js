let user = {};

const getUser = async () => {
  let input = document.getElementById("input").value;
  let button = document.getElementById("input-btn");

  if (input.trim() === "") {
    alert("Input cannot be empty");
    return;
  }

  try {
    button.disabled = true;
    let res = await axios.get(`https://api.github.com/users/${input}`);
    console.log(res.data);

    user.login = res.data.login;
    user.name = res.data.name;
    user.avatar = res.data.avatar_url;
    user.company = res.data.company;
    user.followers = res.data.followers;
    render();
  } catch (error) {
    console.log(error);
    alert("User not found");
  }
  button.disabled = false;
};

const render = () => {
  let name, email, company, followers, avatar, title;
  name = document.getElementById("name");
  email = document.getElementById("email");
  company = document.getElementById("company");
  followers = document.getElementById("followers");
  avatar = document.getElementById("avatar");
  title = document.getElementById("result-title");

  let nullValue = "Not avaliable";

  title.innerText = user.login;
  name.innerText = user.name ? user.name : nullValue;
  email.innerText = user.email ? user.email : nullValue;
  company.innerText = user.company ? user.company : nullValue;
  followers.innerText = user.followers ? user.followers : nullValue;
  avatar.src = user.avatar;
};
