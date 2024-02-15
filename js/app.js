import data from '../utils/data.js';
const navbar = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('#sidebar');
const date = document.querySelector('#date');
const sectionCenter = document.querySelector('.projects-container');
// add fixed class to navbar
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 40) {
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
    return `<section key=${project.id}  id="projects" class="section projects ${project.class} ">
      <div class="section-center projects-center">
      <a href=${project.url}>
        <article class="projects-img">
          <img
            src=${project.img} alt=${project.title} class="hero-photo"
          />
        </article>
      </a>
        <article class="projects-info">
          <div class="section-title projects-title">
            <h2>${project.title}</h2>
          </div>
          <p>${project.about}</p>
          <p>${project.build}</p>
          <a href=${project.url} class="btn links">Open site</a>
        </article>
      </div>
    </section>`;
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
