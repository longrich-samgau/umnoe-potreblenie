document.querySelector('.cta')?.addEventListener('click', function () {
  const target = document.querySelector('#next');
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
