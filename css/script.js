// Data menu (nama, harga, gambar, deskripsi) ada di index.html.
// File ini hanya mengatur pop-up detail dan tombol filter.
const $ = id => document.getElementById(id);

document.querySelectorAll('.item').forEach(card => {
  card.onclick = () => {
    const img = card.querySelector('img');
    $('dPic').innerHTML = `<img src="${img.getAttribute('src')}" alt="${img.alt}">`;
    $('dName').textContent = card.querySelector('.name').textContent;
    $('dPrice').textContent = card.querySelector('.price').textContent;
    $('dDesc').textContent = card.dataset.desc;
    $('dlg').showModal();
  };
});

$('closeBtn').onclick = () => $('dlg').close();
$('dlg').addEventListener('click', e => { if (e.target === $('dlg')) $('dlg').close(); });

document.querySelectorAll('.tab').forEach(t => t.onclick = () => {
  document.querySelectorAll('.tab').forEach(x => x.setAttribute('aria-pressed', x === t));
  const f = t.dataset.f;
  $('secF').hidden = f === 'd';
  $('secD').hidden = f === 'f';
});
