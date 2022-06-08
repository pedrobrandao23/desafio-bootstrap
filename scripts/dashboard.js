// alert de exclusão de produto

function alertTrigger() {
  Toastify({
    text: "Produto excluído com sucesso!",
    duration: 5000,
    close: false,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "#96c93d",
      padding: "10px",
      color: "white"
    },
  }).showToast();
}

//--------------------------------------------------------------------------------
// Alert de salvar alterações no produto

const cadastroAlertTrigger = document.getElementById("cadastroAlert");

cadastroAlertTrigger.onclick = () => {
  Toastify({
    text: "Produto cadastrado!",
    duration: 3000,
    close: false,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "#96c93d",
      padding: "10px",
      color: "white"
    },
  }).showToast();
};
