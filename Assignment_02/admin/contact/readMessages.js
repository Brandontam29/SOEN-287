const input = document.getElementsByTagName("input")[0];
let hidden = true;

input.addEventListener("click", (event) => {
    event.preventDefault();

    const embed = document.getElementsByTagName("embed")[0];
    embed.style.property.display = "hidden";
});
