function login() {
  let role = document.getElementById("role").value;

  if (role === "Student") {
    window.location.href = "dashboard.html";
  } else {
    window.location.href = "faculty.html";
  }
}
