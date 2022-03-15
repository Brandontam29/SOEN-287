const input = document.getElementsByTagName("input")[0];
const table = document.getElementsByTagName("table")[0];
let hidden = true;

input.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("click");

    if (hidden) {
        table.style.display = "block";
    } else {
        table.style.display = "none";
    }

    hidden = !hidden;
});
