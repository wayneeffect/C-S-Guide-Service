(function(){
  const key = 'site-theme';
  const btnId = 'theme-toggle';
  const root = document.documentElement;

  function setTheme(theme){
    if(theme === 'light'){
      root.classList.add('theme-light');
      btn.textContent = '🌙';
    } else {
      root.classList.remove('theme-light');
      btn.textContent = '☀️';
    }
    try{ localStorage.setItem(key, theme); }catch(e){}
  }

  const btn = document.getElementById(btnId);
  if(!btn) return;

  btn.addEventListener('click', ()=>{
    const current = localStorage.getItem(key) || (root.classList.contains('theme-light') ? 'light' : 'dark');
    const next = current === 'light' ? 'dark' : 'light';
    setTheme(next);
  });

  // initialize
  const saved = localStorage.getItem(key);
  if(saved) setTheme(saved);
  else setTheme('dark');
})();
