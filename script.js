function copyText() {
    const textarea = document.querySelector('textarea');
    textarea.select();
    document.execCommand('copy');
    alert("Text copied to clipboard!");
}
