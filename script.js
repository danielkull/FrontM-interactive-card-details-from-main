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
  if (currentValue === "") {
    currentValue = defaultValue;
  }

  const previewElement = document.querySelector(previewSelector);
  previewElement.innerText = currentValue;
}
