const comment = document.querySelector(".comment");
const author = document.querySelector(".author");
const position = document.querySelector(".position");
const toggleBtn = document.querySelector(".toggle");
const heroImg = document.querySelector(".heroImg");

const edits = [
  {
    comment: `“ I’ve been interested in coding for a while but never taken the jump,until now. I couldn’t recommend this course enough. I’m now in the job
    of my dreams and so excited about the future. ”`,
    author: "Tanya Sinclair",
    position: "UX Engineer",
    heroImg: "images/image-tanya.jpg",
  },
  {
    comment: `“If you want to lay the best foundation possible I’d recommend taking this
    course. The depth the instructors go into is incredible. I now feel so
    confident about starting up as a professional developer. ”`,
    author: "John Tarkpor",
    position: "Junior Front-end Developer",
    heroImg: "images/image-john.jpg",
  },
];

let count = 0;

toggleBtn.addEventListener("click", () => {
  heroImg.src = edits[count].heroImg;
  comment.textContent = edits[count].comment;
  author.textContent = edits[count].author;
  position.textContent = edits[count].position;
  console.log(position);
  const toggle = count === 0 ? (count = 1) : (count = 0);
});
