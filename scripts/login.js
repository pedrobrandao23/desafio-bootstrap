const loginAlertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  loginAlertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Parabéns, você foi logado', 'success')
  })
}

// --------------
// alert no cadastro

const cadastroAlertPlaceholder = document.getElementById('cadastroAlertPlaceholder')

const cadastroAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  cadastroAlertPlaceholder.append(wrapper)
}

const cadastroAlertTrigger = document.getElementById('cadastroAlert')
if (cadastroAlertTrigger) {
  cadastroAlertTrigger.addEventListener('click', () => {
    alert('Produto cadastrado!', 'success')
  })
}

// ----------------
// alert no excluir

const excluirAlertPlaceholder = document.getElementById('excluirAlertPlaceholder')

const excluirAlert = (message, type) => {
  const wrapper = document.createElement('div');

  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')


  excluirAlertPlaceholder.append(wrapper);
};


const excluirAlertTrigger = document.getElementById('excluirAlert')
if (excluirAlertTrigger) {
  excluirAlertTrigger.addEventListener('click', () => {
    alert('Produto excluido', 'success')
  })
}