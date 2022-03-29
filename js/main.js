const committeeData = [
  {
    name: "Jane Doe",
    img: "../img/placeholder.png",
    title: "President",
    linkedIn: "",
  },
  {
    name: "Jane Doe",
    img: "../img/placeholder.png",
    title: " Vice President",
    linkedIn: "",
  },
  {
    name: "John Doe",
    img: "../img/placeholder.png",
    title: "Secretary",
    linkedIn: "",
  },
  {
    name: "Jane Doe",
    img: "../img/placeholder.png",
    title: "Student Ambassador",
    linkedIn: "",
  },
  {
    name: "John Doe",
    img: "../img/placeholder.png",
    title: "Alumni Ambassador",
    linkedIn: "",
  },
];

const boardMembersData = [
  {
    name: "John Doe",
    img: "../img/placeholder.png",
    title: "",
    linkedIn: "",
  },
  {
    name: "John Doe",
    img: "../img/placeholder.png",
    title: "",
    linkedIn: "",
  },
  {
    name: "John Doe",
    img: "../img/placeholder.png",
    title: "",
    linkedIn: "",
  },
  {
    name: "John Doe",
    img: "../img/placeholder.png",
    title: "",
    linkedIn: "",
  },
  {
    name: "Jane Doe",
    img: "../img/placeholder.png",
    title: "",
    linkedIn: "",
  },
  {
    name: "John Doe",
    img: "../img/placeholder.png",
    title: "",
    linkedIn: "",
  },
  {
    name: "Jane Doe",
    img: "../img/placeholder.png",
    title: "",
    linkedIn: "",
  },
  {
    name: "Jane Doe",
    img: "../img/placeholder.png",
    title: "",
    linkedIn: "",
  },
];

function createCard(data) {
  // create elements
  const card = document.createElement("div");
  const profilePic = document.createElement("img");
  const nameTitleContainer = document.createElement("div");
  const profileName = document.createElement("p");
  const title = document.createElement("p");
  const link = document.createElement("a");
  const linkedInImg = document.createElement("img");

  // set class names per element
  card.className = "profileCard";
  profilePic.className = "profilePic";
  nameTitleContainer.className = "nameTitleContainer";
  profileName.className = "name";
  linkedInImg.className = "linkedInImg";

  // setting element values
  profilePic.src = data.img;
  profileName.innerText = data.name;
  title.innerText = data.title;
  link.href = data.linkedIn;
  linkedInImg.src = "../img/linkedin.png";

  // append elements
  card.appendChild(profilePic);
  card.appendChild(nameTitleContainer);
  nameTitleContainer.appendChild(profileName);
  nameTitleContainer.appendChild(title);
  card.appendChild(link);
  link.appendChild(linkedInImg);
  return card;
}

const committeeDiv = document.getElementById("committee");
const boardMembersDiv = document.getElementById("boardMembers");

committeeData.forEach((item) => {
  committeeDiv.appendChild(createCard(item));
});

boardMembersData.forEach((item) => {
  boardMembersDiv.appendChild(createCard(item));
});
