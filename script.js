function bindPreview(formFieldId, defaultValue) {
  const formField = document.querySelector("#" + formFieldId);
  formField.addEventListener("input", (e) => {
    previewCardField(e.target.value, defaultValue, "#preview-" + formFieldId);
  });
}

bindPreview("cardholder", "Jane Appleseed");
bindPreview("cardnumber", "0000 0000 0000 0000");
bindPreview("cvc", "123");
bindPreview("month", "00");
bindPreview("year", "00");

function previewCardField(inputValue, defaultValue, previewSelector) {
  let currentValue = inputValue;

  /*   if (previewSelector === "#preview-cardnumber") {
    currentValue = styleCardNumber(inputValue, previewSelector);
  } */

  if (currentValue === "") {
    currentValue = defaultValue;
  }

  const previewElement = document.querySelector(previewSelector);
  previewElement.innerText = currentValue;
}

function styleCardNumber(inputValue, previewSelector) {
  let styledNumber;

  let numberArr = inputValue.replaceAll(" ", "").split("");

  for (let i = 0; i < inputValue.length; i++) {
    /* an jede 4. Position ein Leerzeichen einfügen */
    /*Array wieder zu string zusammenfügen und als styled number zurückgeben */
  }
  return styledNumber;
}
