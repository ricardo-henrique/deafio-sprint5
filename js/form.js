//class contato

class contato {}

function Post(form) {
  let data = new contato(
    form.elements.namedItem('nome').value,
    form.elements.namedItem('sobrenome').value,
    form.elements.namedItem('email').value,
    form.elements.namedItem('cpf').value,
    form.elements.namedItem('telefone').value,
    form.elements.namedItem('contato').value
  );
}

function Enviar() {
  let nome = document.getElementById('nomeid');

  if (nome.value != '') {
    alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
  }
}
