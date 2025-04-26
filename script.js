const form = document.getElementById('bookingForm');
const bookings = [];  // Armazenando agendamentos

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;
  const servico = document.getElementById('servico').value;
  const data = document.getElementById('data').value;
  const hora = document.getElementById('hora').value;

  // Verificar se o horário já está reservado
  const isBooked = bookings.some(booking => booking.data === data && booking.hora === hora);

  if (isBooked) {
    alert(`O horário ${hora} já está reservado! Escolha outro horário.`);
  } else {
    bookings.push({ nome, telefone, servico, data, hora });
    alert(`✨ Agendamento realizado com sucesso!\n\nNome: ${nome}\nServiço: ${servico}\nData: ${data} às ${hora}\nContato: ${telefone}`);

    form.reset();
  }
});
