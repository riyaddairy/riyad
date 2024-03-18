function copyCode() {
  const code = document.querySelector('.container code');
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(code);
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand('copy');
  selection.removeAllRanges();
}