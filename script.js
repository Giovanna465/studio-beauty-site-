
const form = document.getElementById('bookingForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;
  const servico = document.getElementById('servico').value;
  const data = document.getElementById('data').value;
  const hora = document.getElementById('hora').value;

  alert(`✨ Agendamento realizado com sucesso!\n\nNome: ${nome}\nServiço: ${servico}\nData: ${data} às ${hora}\nContato: ${telefone}`);

  form.reset();
});
