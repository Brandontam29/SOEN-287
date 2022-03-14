const input = document.getElementsByTagName("input")[0];
input.addEventListener("click", (event) => {
    console.log("clicked");
    event.preventDefault();

    // Preparing content
    const filename = "adminProjects.txt";
    const content =
        "My Projects\n" + document.getElementById("my_projects").value;
    //File initialization
    const file = new Blob([content], {
        type: "text/plain",
    });

    // Compatibility IE
    if (window.navigator.msSaveOrOpenBlob)
        window.navigator.msSaveOrOpenBlob(file, filename);
    else {
        // Download the file with a tag
        var a = document.createElement("a"),
            url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();

        // Remove a element
        setTimeout(function () {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
});
