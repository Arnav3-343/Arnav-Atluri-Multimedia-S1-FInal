// subtle gold dust in hero using animated gif overlay
(() => {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const layer = document.createElement('div');
  layer.style.position = 'absolute';
  layer.style.inset = '0';
  layer.style.pointerEvents = 'none';
  layer.style.backgroundImage = 'url("assets/img/gold-dust.gif")';
  layer.style.backgroundSize = 'cover';
  layer.style.backgroundPosition = 'center';
  layer.style.mixBlendMode = 'screen';
  layer.style.opacity = '0.38';
  hero.appendChild(layer);
})();
