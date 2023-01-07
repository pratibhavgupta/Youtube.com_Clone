class User {
  constructor() {
    // this.name=n;
  }

  #checkUsername(username) {
    let value = username.includes("#") ? false : true;
    return value;
  }

  #checkPassword(password) {
    let value = password.length > 8 ? true : false;
    return value;
  }

  async Signup(n, e, u, p, m, d) {
    let isValidated = this.#checkUsername(u) && this.#checkPassword(p);
    if (isValidated) {
      this.name = n;
      this.email = e;
      this.username = u;
      this.password = p;
      this.mobile = m;
      this.description = d;

      let actual_data = JSON.stringify(this);
      console.log(actual_data);

      try {
        let res = await fetch(
          `https://masai-api-mocker.herokuapp.com/auth/register`,
          {
            method: "POST",
            body: actual_data,

            headers: {
              
              'Content-Type': 'application/json'
            },
          }
        );
        let data = await res.json();
        console.log(data);
        console.log("Registration Successfull");
      } catch (error) {
        console.log(error);
      }
    }
  }

  

 

}

let u1 = new User();
console.log(u1);
function Register() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const username = document.getElementById("username").value;
  const mobile = document.getElementById("mobile").value;
  const description = document.getElementById("description").value;

  u1.Signup(name, email, username, password, mobile, description);
}
 

 async function Login() {
    
    let login_data = {
      username: document.getElementById("login-username").value,
      password: document.getElementById("login-password").value,
    };

    try{
        let res= await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
            method: "POST",
            body: JSON.stringify(login_data),
            headers: {
              "Content-Type": "application/json",
            },
          });
          let data = await res.json();
          let token = data.token;
        //   getProfile(login_data.username, token);
          console.log(data)
          window.location.href="index.html"
    }catch(err){
        console.log(err);
    }  
  }

  // async function getProfile(username, token) {
  //   let token = data.token;
  //   let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Authorization: Bearer ${token}"
  //     },
  //   });

  //   let data = await res.json();
  //   console.log(data);
  // }

