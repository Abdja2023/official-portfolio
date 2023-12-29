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
SkillsCards.forEach((a, index) => {
  let num = 0;
  removeHover(a);
  setInterval(() => {
    if (num === index) {
      addHover(a);
    } else {
      removeHover(a);
    }
    num < 4 ? num++ : (num = 0);
  }, 1000);
});

///////////////////////Testimonials Cards////////////////////////////////////////

const Testimonials = document.querySelectorAll(".testimonials .test-card");

Testimonials.forEach((a) => {
  a.addEventListener("mouseenter", (e) => {
    a.classList.remove("test-card-hover");
    // e.target.closest(".test-card").classList.toggle("test-card-hover");
    Testimonials.forEach((a) => a.classList.remove("test-card-hover"));
    let card = e.target.closest(".test-card");
    card.classList.toggle("test-card-hover");
  });
  a.addEventListener("mouseleave", () => {
    Testimonials.forEach((a) => a.classList.remove("test-card-hover"));
    Testimonials[1].classList.add("test-card-hover");
  });
});

///----------TITLE-------------------////////////

const sectionTitle = document.querySelectorAll(".section-title");
sectionTitle.forEach((a) => a.classList.remove("section-title-show"));
const titles = [...sectionTitle];

///-----------Skills Observer---------------------///////////

const skillsCards = document.querySelector(".skills-cards");

function skillsFunc(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.intersectionRatio >= 0.6) {
        // console.log("end");
      } else if (entry.intersectionRatio >= 0.3) {
        skillsCards.classList.add("skills-cards-show");
      } else if (entry.intersectionRatio >= 0.2) {
        titles.at(0).classList.add("section-title-show");
      }
    }
  });
}
const skillsOpt = {
  threshold: [0.2, 0.5, 0.6],
};
const skillsSectionObserver = new IntersectionObserver(skillsFunc, skillsOpt);

skillsSectionObserver.observe(skillsSection);

///-----------Experience Observer---------------------///////////
const experienceSection = document.querySelector(".experience-section");
const experienceTabs = [...document.querySelectorAll(".experience")];
console.log(experienceTabs);
function experienceFunc(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.intersectionRatio >= 0.9) {
        experienceTabs.at(2).classList.add("experience-show");
      } else if (entry.intersectionRatio >= 0.5) {
        experienceTabs.at(1).classList.add("experience-show");
      } else if (entry.intersectionRatio >= 0.2) {
        titles.at(1).classList.add("section-title-show");
        experienceTabs.at(0).classList.add("experience-show");
      }
    }
  });
}

const experienceObserver = new IntersectionObserver(experienceFunc, {
  root: null,
  threshold: [0.2, 0.5, 0.9],
});

experienceObserver.observe(experienceSection);
experienceTabs.forEach((tab) => experienceObserver.observe(tab));
///-----------Real About Me  Observer---------------------///////////
const aboutMeReal_rightContent = document.querySelector(
  ".aboutMe-real .content .right"
);
const aboutMeReal_image = document.querySelector(
  ".aboutMe-real .content .aboutMe-real-illustration"
);

function aboutMeRealFunc(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      aboutMeReal_rightContent.classList.add("rightShow");
      aboutMeReal_image.classList.add("aboutMeRealIllustrationShow");
      titles.at(2).classList.add("section-title-show");
    }
  });
}
const aboutMeRealObserver = new IntersectionObserver(aboutMeRealFunc, {
  root: null,
  threshold: 0.3,
});
aboutMeRealObserver.observe(aboutMeRealSection);

///-----------Projects Observer---------------------///////////
const projectsCards = [...document.querySelectorAll(".project-card")];
console.log(projectsCards);
function projectFunc(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.intersectionRatio >= 1) {
        projectsCards.at(2).classList.add("projectCardShow");
      } else if (entry.intersectionRatio >= 0.8) {
        projectsCards.at(1).classList.add("projectCardShow");
      } else if (entry.intersectionRatio >= 0.3) {
        projectsCards.at(0).classList.add("projectCardShow");
      } else if (entry.intersectionRatio >= 0.2) {
        titles.at(3).classList.add("section-title-show");
      }
    }
  });
}
const projectObserver = new IntersectionObserver(projectFunc, {
  root: null,
  threshold: [0.2],
});
projectObserver.observe(projectsSection);

function projectCardFunc(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const className = [...entry.target.classList].at(0);

      switch (className) {
        case "proj-01":
          projectsCards.at(0).classList.add("projectCardShow");
          break;
        case "proj-02":
          projectsCards.at(1).classList.add("projectCardShow");
          break;
        case "proj-03":
          projectsCards.at(2).classList.add("projectCardShow");
          break;
      }
    }
  });
}

const projectCardObserver = new IntersectionObserver(projectCardFunc, {
  root: null,
  threshold: 0.4,
});
projectsCards.forEach((card) => projectCardObserver.observe(card));

///--------------------Testimonials-----------------------////
const testimonialsSection = document.querySelector(".testimonials");
const testimonialsCards = [...document.querySelectorAll(".test-card")];

function testimonialsFunc(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      titles.at(4).classList.add("section-title-show");
    }
  });
}

const testimonialsObserver = new IntersectionObserver(testimonialsFunc, {
  root: null,
  threshold: 0.3,
});

function testCardFunc(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let id = entry.target.id;
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
    }
  });
}
const testCardObserver = new IntersectionObserver(testCardFunc, {
  root: null,
  threshold: 0.3,
});

testCardObserver.observe(testimonialsCards.at(0));
testCardObserver.observe(testimonialsCards.at(1));
testCardObserver.observe(testimonialsCards.at(2));

testimonialsObserver.observe(testimonialsSection);

//------Contact Observer--------------//

const leftContent = document.querySelector(".contact .left");
const rightContent = document.querySelector(".contact .right");

function contactFunc(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      leftContent.classList.add("leftShow");
      rightContent.classList.add("rightShow");
    }
  });
}

const contactObserver = new IntersectionObserver(contactFunc, {
  root: null,
  threshold: 0.8,
});

contactObserver.observe(contactSection);
