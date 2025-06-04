//class contato

class contato {
  constructor(name, surname, email, id, celphone, contact) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.id = id;
    this.celphone = celphone;
    this.contact = contact;
  }
}

function Post(form) {
  let data = new contato(
    form.elements.namedItem('nome').value,
    form.elements.namedItem('sobrenome').value,
    form.elements.namedItem('email').value,
    form.elements.namedItem('cpf').value,
    form.elements.namedItem('telefone').value,
    form.elements.namedItem('contato').value
  );

  return Enviar(data);
}

function Enviar(data) {
  if (data.name.length < 3) {
    alert('O nome deve ter pelo menos 3 caracteres');
    return false;
  }

  if (data.surname.length < 3) {
    alert('O sobrenome deve ter pelo menos 3 caracteres');
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    alert('Por favor, insira um email válido');
    return false;
  }

  const cpfClean = data.id.replace(/[^\d]/g, '');
  if (cpfClean.length !== 11) {
    alert('CPF inválido');
    return false;
  }

  const telefoneClean = data.celphone.replace(/[^\d]/g, '');
  if (telefoneClean.length < 10 || telefoneClean.length > 11) {
    alert('Telefone inválido');
    return false;
  }

  alert('Obrigado sr(a) ' + data.name + ' ' + data.surname + ' os seus dados foram encaminhados com sucesso');
  return true;
}
