function login() {
  const enteredPhone = document.getElementById("num").value;
  const enteredPass = document.getElementById("pass").value;
  const result = document.getElementById("res");

  const phone = 1234;
  const pass = "test";

  function onSuccess() {
    result.innerText = "Login Successful!";
    result.style.color = "green";
    alert("Login success");
  }

  function onFailure(reason) {
    result.innerText = reason;
    result.style.color = "red";
    alert(reason);
 

    document.getElementById("num").value = "";
    document.getElementById("pass").value = "";
  }

  checkPhone(enteredPhone, phone)
    .then(() => checkPass(enteredPass, pass))
    .then(onSuccess)
    .catch(onFailure);
}

function checkPhone(n, dbPhone) {
  return new Promise((resolve, reject) => {
    if (n == dbPhone) {
      resolve();
    } else {
      reject("Invalid phone number.");
    }
  });
}

function checkPass(p, dbPass) {
  return new Promise((resolve, reject) => {
    if (p == dbPass) {
      resolve();
    } else {
      reject("Invalid password.");
    }
  });

}
