import data from '../utils/data.js';
const navbar = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('#sidebar');
const date = document.querySelector('#date');
const sectionCenter = document.querySelector('.projects-page-center');
// add fixed class to navbar
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add('navbar-fixed');
  } else {
    navbar.classList.remove('navbar-fixed');
  }
});
// show sidebar
navBtn.addEventListener('click', function () {
  sidebar.classList.add('show-sidebar');
});
closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');
});
// set year
date.innerHTML = new Date().getFullYear();

// load projects

window.addEventListener('DOMContentLoaded', function () {
  let displayProject = data.map(function (p) {
    return p;
  });
  displayProjects(data);
});

function displayProjects(projects) {
  let displayProject = projects.map(function (project) {
    return `
    <article key=${project.id} class='single-project'>
      <a href=${project.url}>
        <div class='project-container'>
          <img src=${project.img} alt=${project.title} class='project-img' />
        </div>
        <div class='project-title'>
          <h3>${project.title}</h3>
          <div class='project-footer'>
          <i class="${project.icon}"></i>
            <a href=${project.src}>
              <i class='fab fa-github'></i>
            </a>
          </div>
        </div>
      </a>
    </article>`;
  });
  displayProject = displayProject.join('');

  sectionCenter.innerHTML = displayProject;
}

// fix scroll
const scrollLinks = document.querySelectorAll('.links');

scrollLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    // prevent default
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    // calculate the heights
    const navHeight = navbar.getBoundingClientRect().height;
    console.log(navHeight);
    const fixedNav = navbar.classList.contains('navbar-fixed');
    let position = element.offsetTop - navHeight;
    console.log(position);

    if (!fixedNav) {
      position = position - navHeight;
      console.log(position);
    }
    console.log(position);
    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});
