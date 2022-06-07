const alertTrigger = document.getElementById('liveAlertBtn');

alertTrigger.onclick = ()=>{
  Toastify({
    text: "Parabéns, você logou com sucesso!",
    duration: 5000,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "#96c93d",
    }
  }).showToast()
}

