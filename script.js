const inputElement = document.getElementById("input");
const outputElement = document.getElementById("output");
const copyButton = document.getElementById("copy-button");

function formatText(text) {
    // Replace bell character (U+0007) with space
    let result = text.replace(/\u0007/g, " ");

    // Turn all whitespace into single spaces
    result = result.replace(/\s+/g, " ");

    return result;
}

inputElement.addEventListener("input", function () {
    const formattedText = formatText(this.value);
    outputElement.textContent = formattedText;
});

function copyToClipboard() {
    const textToCopy = outputElement.textContent;
    navigator.clipboard.writeText(textToCopy).catch(function (err) {
        console.error("Failed to copy to clipboard:", err);
    });
}

copyButton.addEventListener("click", copyToClipboard);

document.addEventListener("keydown", function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
        copyToClipboard();
    }
});
