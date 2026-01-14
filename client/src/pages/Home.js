import "./new.css";
import { login, register } from "../api/auth.js";

export function renderHome() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="auth-wrapper">

      <!-- LEFT -->
      <div class="auth-left">
        <div class="auth-left-content">
          <h1>Examination Management System</h1>
          <p>
            A secure and modern platform for conducting online examinations,
            managing students, teachers, and evaluating results efficiently.
          </p>
        </div>
      </div>

      <!-- RIGHT -->
      <div class="auth-right">

        <!-- LOGIN -->
        <div class="auth-box" id="login-box">
          <h2>Login</h2>
          <p class="sub-text">Use your email account</p>

          <form id="login-form">
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />

            <select name="role" required>
              <option value="" disabled selected>Select Role</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>

            <button type="submit">LOGIN</button>
          </form>

          <p class="switch-text">
            New here?
            <span id="show-register">Create an account</span>
          </p>
        </div>

        <!-- REGISTER -->
        <div class="auth-box hidden" id="register-box">
          <h2>Create Account</h2>

          <form id="register-form">
            <div class="row">
              <input name="firstName" placeholder="First Name" required />
              <input name="lastName" placeholder="Last Name" required />
            </div>

            <input name="institution" placeholder="Institution" required />

            <div class="row">
              <input type="date" name="dateOfBirth" required />
              <select name="gender" required>
                <option value="" disabled selected>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div class="row">
              <input name="fieldOfStudy" placeholder="Field of Study" required />
              <select name="userType" required>
                <option value="" disabled selected>Select User Type</option>
                <option value="student">Student</option>
                <!--<option value="teacher">Teacher</option>--!>
              </select>
            </div>

            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />

            <button type="submit">REGISTER</button>
          </form>

          <p class="switch-text">
            Already have an account?
            <span id="show-login">Login</span>
          </p>
        </div>

      </div>
    </div>
  `;

  // toggle
  document.getElementById("show-register").onclick = () => {
    document.getElementById("login-box").classList.add("hidden");
    document.getElementById("register-box").classList.remove("hidden");
  };

  document.getElementById("show-login").onclick = () => {
    document.getElementById("register-box").classList.add("hidden");
    document.getElementById("login-box").classList.remove("hidden");
  };

  // login
  document.getElementById("login-form").onsubmit = async (e) => {
    e.preventDefault();
    const f = e.target;
    await login({
      email: f.email.value,
      password: f.password.value,
      role: f.role.value,
    });
  };

  // register
  document.getElementById("register-form").onsubmit = async (e) => {
    e.preventDefault();
    const f = e.target;
    await register({
      firstName: f.firstName.value,
      lastName: f.lastName.value,
      institution: f.institution.value,
      dateOfBirth: f.dateOfBirth.value,
      gender: f.gender.value,
      fieldOfStudy: f.fieldOfStudy.value,
      email: f.email.value,
      password: f.password.value,
      userType: f.userType.value,
    });
  };
}
