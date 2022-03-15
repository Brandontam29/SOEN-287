const button = document.getElementsByTagName("button")[0];
button.addEventListener("click", (event) => {
    event.preventDefault();

    // Preparing content
    const filename = "adminIndex.txt";
    const content =
        "Professional Statement\n" +
        document.getElementById("professional_statement").value +
        "\n\n";
    const content2 =
        "Brief Biography\n" + document.getElementById("brief_biography").value;

    //File initialization
    const file = new Blob([content, content2], {
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
