const timeline = document.querySelector(".timeline__events-line");
const timelineItems = timeline.querySelectorAll("li");
const timelineText = document.querySelector(".timeline__text");
const timelineIcon = document.querySelector(".timeline__icon");

const yearTextDictionary = {
  2004: "Hello world!",
  2011: "Got 1st personal computer. Sibling installed games and Adobe Flash Pro.",
  2013: "Part of My Little Pony community. Got 50k views on animated video.",
  2017: "Having 5 English classes a week while in middle school.",
  2019: `I love triplet "Diana + drawing + computers"! I'll become an animator! BB school, hi college!`,
  2021: "17-year-old game dev animator",
  "2022/1":
    "Boxville successfully released despite the war. Project work is done.",
  "2022/2":
    "Mastered 2D animation, but felt limited by the career landscape's reliance on social media for growth. Disliked the pressure to prioritize social media over work process.",
  "2023/1": `Decided to remove drawing from "Diana + drawing + computers" and become a third-generation developer in my family. Applied to Taras Shevchenko University with an associate degree diploma.`,
  "2023/2":
    "Decided to learn javascript and Node.js, captivated by its open-source ecosystem, the community, and available frameworks and ways of self-growth.",
  2024: `Completed JS roadmap, built Node.js + Express + EJS pet project <a href="https://github.com/luiqor/gather_videochat_app" target="_blank" class="timeline__link">GatherSpace</a>. Simultaneously honed my skills in SQL, Mongo, and CI/CD at university.`,
};

const yearIconDictionary = {
  2004: "🐣",
  2011: "👾",
  2013: "🦄",
  2017: "🧐",
  2019: "🫡",
  2021: "😎",
  "2022/1": "😌",
  "2022/2": "😔",
  "2023/1": "🫢",
  "2023/2": "😍",
  2024: "🤠",
};

const handleTimelineClick = function (e) {
  let target = e.target;
  if (target.nodeName === "SPAN") target = target.parentNode;

  if (target.nodeName !== "LI") return;

  timelineItems.forEach((item) => item.classList.remove("active"));
  target.classList.add("active");

  const year = target.querySelector("span").textContent;
  const yearText = yearTextDictionary[year];
  const yearIcon = yearIconDictionary[year];

  timelineText.innerHTML = yearText;
  timelineIcon.innerHTML = yearIcon;
};

timeline.addEventListener("click", handleTimelineClick);
