const input = document.getElementsByTagName("input")[0];
input.addEventListener("click", (event) => {
    event.preventDefault();
    myStorage = window.sessionStorage;

    myStorage.removeItem("admin_pannel");
});
