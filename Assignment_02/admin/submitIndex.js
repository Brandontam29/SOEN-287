console.log("submity index");

const inputButton = document.getElementsByTagName("input");

inputButton.addEventListener("onClick", (event) => {
    event.preventDefault();

    console.log("submitted");
    const fileName = "formSubmissions.txt";
    const content = document.getElementById("professional_statement").value;
    const content2 = document.getElementById("brief_biography").value;

    const data2Blob = new File([content, content2], fileName, {
        type: "text/plain",
    });

    console.log(data2Blob);
});
