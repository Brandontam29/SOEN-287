const input = document.getElementsByTagName("input")[0];
input.addEventListener("click", (event) => {
    console.log("clicked");
    event.preventDefault();

    // Preparing content
    const filename = "adminResume.txt";
    const content =
        "Educational Qualifications\n" +
        document.getElementById("educational_qualifications").value +
        "\n\n";
    const content2 =
        "Skill Set\n" + document.getElementById("skill_set").value + "\n\n";
    const content3 =
        "Awards & Recognition\n" +
        document.getElementById("awards_and_recognition").value +
        "\n\n";
    const content4 =
        "Work Experience\n" +
        document.getElementById("work_experience").value +
        "\n\n";

    const content5 =
        "Referees\n" + document.getElementById("referees").value + "\n\n";

    //File initialization
    const file = new Blob([content, content2, content3, content4, content5], {
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
