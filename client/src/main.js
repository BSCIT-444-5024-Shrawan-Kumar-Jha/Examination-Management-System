import "./styles/main.css";
import "./styles/user.css";
import "./styles/teacher-dashboard.css";
import "./styles/student-dashboard.css";

import { renderHome } from "./pages/Home.js";
import { renderTeacherDashboard } from "./pages/TeacherDashboard.js";
import { renderStudentExams } from "./pages/StudentDashboard.js";
import { renderExamEditor } from "./pages/ExamInterface.js";
import { renderStudentExam } from "./pages/StudentExamInterface.js";
import { renderStatisticsPage } from "./pages/StatisticsPage.js";

// ✅ NEW IMPORT
import { renderManageStudents } from "./pages/ManageStudents.js";

function router() {
  const path = window.location.pathname;
  const app = document.getElementById("app");

  // ===============================
  // TEACHER STATISTICS
  // ===============================
  if (path.match(/^\/teacher\/exams\/([^\/]+)\/statistics$/)) {
    const examId = path.split("/")[3];
    renderStatisticsPage(examId);
    return;
  }

  // ===============================
  // TEACHER EXAM EDITOR
  // ===============================
  if (path.match(/^\/teacher\/exams\/([^\/]+)$/)) {
    const examId = path.split("/")[3];
    renderExamEditor(examId);
    return;
  }

  // ===============================
  // STUDENT EXAM INTERFACE
  // ===============================
  if (path.startsWith("/exam/")) {
    const examId = path.split("/").pop();
    renderStudentExam(examId);
    return;
  }

  // ===============================
  // STATIC ROUTES
  // ===============================
  switch (path) {
    case "/":
      renderHome();
      break;

    case "/teacher/exams":
      renderTeacherDashboard();
      break;

    // ✅ NEW ROUTE (SAFE)
    case "/teacher/students":
      renderManageStudents();
      break;

    case "/student/exams":
      renderStudentExams();
      break;

    default:
      app.innerHTML = `<h1>404 - Page Not Found</h1>`;
  }
}

// ===============================
// SPA EVENTS
// ===============================
window.addEventListener("DOMContentLoaded", router);
window.addEventListener("popstate", router);

document.addEventListener("click", (e) => {
  if (e.target.tagName === "A" && e.target.dataset.link === "spa") {
    e.preventDefault();
    history.pushState(null, "", e.target.getAttribute("href"));
    router();
  }
});
