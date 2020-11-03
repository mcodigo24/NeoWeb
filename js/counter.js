(function () {
  const textArea = document.getElementById("stringBox");
  const labelRta = document.getElementById("parrafo");
  const btnClear = document.getElementById("btnLimpiar");
  const btnCopy = document.getElementById("btnCopiar");
  const labelCount = `Cantidad de caracteres: `;
  const initialValue = labelCount + `0`;

  var init = () => {
    labelRta.innerHTML = initialValue;
    bindEvents();
  };

  var bindEvents = () => {
    textArea.addEventListener("input", countCharacters);
    btnClear.addEventListener("click", clearBtn);
    btnCopy.addEventListener("click", copyBtn);
  };

  function countCharacters() {
    labelRta.innerHTML = labelCount + textArea.value.length;
  }

  function clearBtn() {
    textArea.value = "";
    textArea.focus();
    labelRta.innerHTML = initialValue;
  }

  function copyBtn() {
    textArea.select();
    textArea.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }

  init();
})();
