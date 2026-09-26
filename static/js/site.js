document.querySelectorAll('.prose pre').forEach((pre) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'copy-button';
  button.textContent = '复制';
  button.setAttribute('aria-label', '复制代码');
  button.setAttribute('aria-live', 'polite');
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText((pre.querySelector('code') || pre).textContent);
      button.textContent = '已复制';
    } catch {
      button.textContent = '请手动复制';
    }
    setTimeout(() => { button.textContent = '复制'; }, 2000);
  });
  pre.appendChild(button);
});
