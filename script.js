document.getElementById('button-header').addEventListener('click', () => {
  const email = document.getElementById('i-email').value;
  const senha = document.getElementById('input-senha').value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const botao = document.getElementById('submit-btn');
botao.disabled = true;
document.getElementById('agreement').addEventListener('click', () => {
  if (document.getElementById('agreement').value === '') {
    botao.disabled = true;
  } else {
    botao.disabled = false;

  }
});

// Atualizando minha branch
