// alert de exclusão de produto

const alertPlaceholder = document.getElementById('excluirAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('excluirAlertButton')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Produto excluído com sucesso!', 'success')
  })
}

//--------------------------------------------------------------------------------
// Alert de salvar alterações no produto

const cadastroAlertPlaceholder = document.getElementById('cadastroAlertPlaceholder')

const excludeAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  cadastroAlertPlaceholder.append(wrapper)
}

const modal = document.getElementById('verModal')
const cadastroAlertTrigger = document.getElementById('cadastroAlert')
if (cadastroAlertTrigger) {
    cadastroAlertTrigger.addEventListener('click', () => {
    
    alert('Produto cadastrado com sucesso!', 'success')
  })
}