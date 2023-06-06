const projectsContainer = document.querySelector('.swiper-wrapper');
const templateProjects = document.querySelector('#template-projects').content;

function renderProjects(img, name, sity) {
  const cloneProjects = templateProjects.querySelector('.swiper-slide').cloneNode(true);
  const imageProjects = cloneProjects.querySelector('.slide-img');
  const titleProjects = cloneProjects.querySelector('.slide-title');
  const sityProjects = cloneProjects.querySelector('.slide-city');

  imageProjects.src = img;
  imageProjects.alt = name;
  titleProjects.textContent = name;
  sityProjects.textContent = sity;

  return cloneProjects;
}

function createProjects(img, name, sity) {
  const newProjects = renderProjects(img, name, sity);
  
  projectsContainer.append(newProjects);
}

initialProjects.forEach((item) => {
  const img = item.img;
  const name = item.name;
  const sity = item.city;
  
  createProjects(img, name, sity);
})

const swiper = new Swiper(".mySwiper", {
  rewind: true,
  slidesPerView: 3,
  spaceBetween: 15,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1600: {
      slidesPerView: 4,
    },
  }
});