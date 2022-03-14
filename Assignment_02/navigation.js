const addNavigation = () => {
    const nav = document.createElement("nav");
    nav.innerHTML = /*html*/ `
        <a href="../index.html"> Home </a>
        <a href="../resume.html"> Resume </a>
        <a href="../projects.html"> Projects </a>
        <a href="../contact.html"> Contact </a>
        <a href="../social.html"> Social </a>
        <a href="../admin.html"> Admin </a>
    `;
    document.body.append(nav);
};

const addStyle = (styleString) => {
    const style = document.createElement("style");
    style.textContent = styleString;
    document.head.append(style);
};
addNavigation();
addStyle(/*css*/ `
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;

  font-size: 16px;
  line-height: 1.5;
  font-family: "Courier New", Courier, monospace;
}

body {
  display: flex;
}

nav {
  position: -webkit-sticky
  position: sticky;
  top: 0;
  left: 0;

  width: calc(30vw);
  max-width: 160px;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: clamp(1rem, 5vw, 1.5rem);
}

nav a {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  border: 1px solid black;
  border-bottom: 0;
  color: black;
  text-decoration: none;
}
`);
