const body = document.querySelector("body");
const aside = document.querySelector("aside");
const responsiveBtn = document.querySelector(".responsive-btn");
const header = document.querySelector("header");

////////////////////  Aside Responsive/////////////////////////////////
const headerHeight = window.getComputedStyle(header).height;
const currentWindow = window.innerHeight;
let asideHeight = currentWindow - headerHeight;
aside.style.height = `${asideHeight + 100}px`;
responsiveBtn.addEventListener("click", () => {
  aside.classList.toggle("aside-hidden");
  body.style.overflowY = `${
    [...aside.classList].includes("aside-hidden") ? "visible" : "hidden"
  }`;
});

//---------------Nav Scroll--------------------------////
const skillsSection = document.querySelector(".skills");
const aboutMeRealSection = document.querySelector(".aboutMe-real");
const projectsSection = document.querySelector(".projects");
const contactSection = document.querySelector(".contact");

const navLinks = [...document.querySelectorAll("#nav-link")];

navLinks.forEach((link) =>
  link.addEventListener("click", (e) => {
    let value = e.target.textContent;
    e.preventDefault();
    console.log(value);
    switch (value) {
      case "Skills":
        skillsSection.scrollIntoView({ behavior: "smooth" });
        break;
      case "About Me":
        aboutMeRealSection.scrollIntoView({ behavior: "smooth" });
        break;

      case "Projects":
        projectsSection.scrollIntoView({ behavior: "smooth" });
        break;
      case "Contact Me":
        contactSection.scrollIntoView({ behavior: "smooth" });
    }
  })
);

//---------------Nav Scroll--------------------------////
//---------------Aside  Scroll--------------------------////
const asideLinks = [...document.querySelectorAll("#aside-link")];

asideLinks.forEach((link) =>
  link.addEventListener("click", (e) => {
    e.preventDefault();
    let value = e.target.textContent;
    body.style.overflow = "visible";
    aside.classList.add("aside-hidden");
    switch (value) {
      case "Skills":
        skillsSection.scrollIntoView({ behavior: "smooth" });
        break;
      case "About Me":
        aboutMeRealSection.scrollIntoView({ behavior: "smooth" });
        break;

      case "Projects":
        projectsSection.scrollIntoView({ behavior: "smooth" });
        break;
      case "Contact Me":
        contactSection.scrollIntoView({ behavior: "smooth" });
    }
  })
);
//---------------Aside  Scroll--------------------------////

//---------------Reload   Scroll--------------------------////

document.addEventListener("DOMContentLoaded", () => {
  header.scrollIntoView({ behavior: "smooth" });
});
//---------------Reload   Scroll--------------------------////

/////////////// cards Hover ////////////////////////////

const SkillsCards = document.querySelectorAll(".skills-cards .card");
const removeHover = function (a) {
  a.classList.remove("card-hover");
  let icon = [...a.children][0];
  let span = [...a.children][1];
  icon.classList.remove("card-inside-hover");
  span.classList.remove("card-inside-hover");
};

const addHover = function (a) {
  a.classList.add("card-hover");
  let icon = [...a.children][0];
  let span = [...a.children][1];
  icon.classList.add("card-inside-hover");
  span.classList.add("card-inside-hover");
};
console.log(SkillsCards);
let timer;
const startTimer = function (startNum) {
  timer = setInterval(() => {
    SkillsCards.forEach((a, index) => {
      if (index === startNum) {
        addHover(a);
      } else {
        removeHover(a);
      }
    });
    startNum < 4 ? startNum++ : (startNum = 0);
  }, 1000);
};

startTimer(0);

const stopTimer = function () {
  clearInterval(timer);
};

SkillsCards.forEach((card) =>
  card.addEventListener("mouseenter", (e) => {
    stopTimer();
    SkillsCards.forEach((card) => {
      card.classList.remove("card-hover");
      let icon = [...card.children][0];
      let span = [...card.children][1];
      icon.classList.remove("card-inside-hover");
      span.classList.remove("card-inside-hover");
    });

    addHover(e.target);
  })
);
SkillsCards.forEach((card) =>
  card.addEventListener("mouseleave", (e) => {
    SkillsCards.forEach((card) => {
      card.classList.remove("card-hover");
      let icon = [...card.children][0];
      let span = [...card.children][1];
      icon.classList.remove("card-inside-hover");
      span.classList.remove("card-inside-hover");
    });

    startTimer(+e.target.id);
  })
);

///////////////////////Testimonials Cards////////////////////////////////////////

const Testimonials = document.querySelectorAll(".testimonials .test-card");

Testimonials.forEach((a) => {
  a.addEventListener("mouseenter", (e) => {
    a.classList.remove("test-card-hover");
    Testimonials.forEach((a) => a.classList.remove("test-card-hover"));
    let card = e.target.closest(".test-card");
    card.classList.toggle("test-card-hover");
  });
  a.addEventListener("mouseleave", () => {
    Testimonials.forEach((a) => a.classList.remove("test-card-hover"));
    Testimonials[1].classList.add("test-card-hover");
  });
});

/// ------------------------------Intersection Observer --------------------------------------------

//-----------Selectors---------------------------

const sectionTitle = document.querySelectorAll(".section-title");
sectionTitle.forEach((a) => a.classList.remove("section-title-show"));
const titles = [...sectionTitle];

const skillsCards = document.querySelector(".skills-cards");

const experienceSection = document.querySelector(".experience-section");
const experienceTabs = [...document.querySelectorAll(".experience")];
console.log(experienceTabs);
const aboutMeReal_rightContent = document.querySelector(
  ".aboutMe-real .content .right"
);
const aboutMeReal_image = document.querySelector(
  ".aboutMe-real .content .aboutMe-real-illustration"
);

const projectSection = document.querySelector(".projects");
const projectsCards = [...document.querySelectorAll(".project-card")];

const testimonialsSection = document.querySelector(".testimonials");
const testimonialsCards = [...document.querySelectorAll(".test-card")];

const leftContent = document.querySelector(".contact .left");
const rightContent = document.querySelector(".contact .right");

console.log(titles);
function observerFunc(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let id = entry.target.id;
      const className = [...entry.target.classList].at(0);
      if (entry.intersectionRatio >= 0.9) {
      } else if (entry.intersectionRatio >= 0.8) {
      } else if (entry.intersectionRatio >= 0.7) {
      } else if (entry.intersectionRatio >= 0.6) {
      } else if (entry.intersectionRatio >= 0.4) {
        switch (className) {
          case "proj-01":
            projectsCards.at(0).classList.add("projectCardShow");
            break;
          case "proj-02":
            projectsCards.at(1).classList.add("projectCardShow");
            break;
        }
        if (className === "left" || className === "right") {
          leftContent.classList.add("leftShow");
          rightContent.classList.add("rightShow");
        }
      } else if (entry.intersectionRatio >= 0.3) {
        switch (id) {
          case "1":
            testimonialsCards.at(0).classList.add("testCardShow");
            break;
          case "2":
            testimonialsCards.at(1).classList.add("testCardShow");
            break;
          case "3":
            testimonialsCards.at(2).classList.add("testCardShow");
            break;
        }

        if (className === "aboutMe-real") {
          aboutMeReal_rightContent.classList.add("rightShow");
          aboutMeReal_image.classList.add("aboutMeRealIllustrationShow");
        }
        skillsCards.classList.add("skills-cards-show");
      } else if (entry.intersectionRatio >= 0.2) {
        if (className === "skills") {
          titles.at(0).classList.add("section-title-show");
        }
        if (className === "experience-section") {
          titles.at(1).classList.add("section-title-show");
          experienceTabs.at(0).classList.add("experience-show");
        }
        if (className === "aboutMe-real") {
          titles.at(2).classList.add("section-title-show");
        }

        if (className === "projects") {
          titles.at(3).classList.add("section-title-show");
        }
        if (className === "testimonials") {
          titles.at(4).classList.add("section-title-show");
        }
      }
    }
  });
}

const observer = new IntersectionObserver(observerFunc, {
  root: null,
  threshold: [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
});

titles.forEach((title) => observer.observe(title));

observer.observe(skillsSection);

observer.observe(experienceSection);
experienceTabs.forEach((tab) => observer.observe(tab));

observer.observe(aboutMeRealSection);

observer.observe(projectSection);
projectsCards.forEach((card) => observer.observe(card));

observer.observe(testimonialsSection);
testimonialsCards.forEach((card) => observer.observe(card));

observer.observe(leftContent);
observer.observe(rightContent);

//// project cards links

const project1 = projectsCards.at(0);
const project2 = projectsCards.at(1);
const project1_link = "https://cloudhub-beta.vercel.app/";
const project2_link = "https://future-tech-sandy.vercel.app/";
project1.addEventListener("click", (e) => {
  e.preventDefault();
  const fullCard = e.target.closest(".project-card");
  window.open(project1_link, "_blank");
});
project2.addEventListener("click", (e) => {
  e.preventDefault();
  const fullCard = e.target.closest(".project-card");
  window.open(project2_link, "_blank");
});
