const button = document.getElementsByTagName("button")[0];
button.addEventListener("click", (event) => {
    event.preventDefault();

    // Preparing content
    const filename = "adminResume.txt";
    const content =
        "Social Link 1\n" +
        document.getElementById("social_link_1").value +
        "\n\n";
    const content2 =
        "Social Link 2\n" +
        document.getElementById("social_link_2").value +
        "\n\n";
    const content3 =
        "Social Link 3\n" +
        document.getElementById("social_link_3").value +
        "\n\n";

    //File initialization
    const file = new Blob([content, content2, content3], {
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
