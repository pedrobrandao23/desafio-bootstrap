const alertTrigger = document.getElementById('liveAlertBtn');

alertTrigger.onclick = ()=>{
  Toastify({
    text: "Parabéns, você logou com sucesso!",
    duration: 3000,
    close: false,
    gravity: "bottom", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "#96c93d",
      padding: "10px",
      color: "white"
    }
  }).showToast()
}

