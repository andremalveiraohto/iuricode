//LOADING
document.body.insertAdjacentHTML('beforeend', `
  <div id="loading">
    <svg class="spinner" viewBox="0 0 50 50">
      <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="3"></circle>
    </svg>
  </div>
`)
window.addEventListener('load', () => {
  setTimeout(() => {
    loading.remove()
    app.removeAttribute('style')
  }, 300);

})




//HEADER Scroll Fixed
document.addEventListener('scroll', e => {
  if(window.scrollY > 80) {
    Header.classList.add('fixed')
  } else {
    Header.classList.remove('fixed')
  }
})




//THEME Toggle
let HTML = document.documentElement, isToggle = false;
let theme = {
  light: () => {
    HTML.setAttribute('theme', 'light')
    localStorage.setItem('theme', 'light')
    isToggle = true
    toggleTheme.classList.add('active')
    toggleThemeText.textContent = 'Dark'
  }, 
  dark: () => {
    HTML.setAttribute('theme', 'dark')
    localStorage.setItem('theme', 'dark')
    isToggle = false
    toggleTheme.classList.remove('active')
    toggleThemeText.textContent = 'Light'
  }
}
if(localStorage.getItem('theme') == 'light') {
  theme.light() 
}
toggleTheme.addEventListener('click', () => {
  if(!isToggle) theme.light() 
  else theme.dark()
})




//MENU Mobile
let menuVisible = false
IconList.addEventListener('click', () => {
  if(!menuVisible) {
    NavMenu.classList.add('show')
    menuVisible = true
  } else {
    NavMenu.classList.remove('show')
    menuVisible = false
  }
})




//Experience TABS
//const ExperienceTabs = document.querySelector('#ExperienceTabs')
const initExperienceTabs = () => {
  const tabs = ExperienceTabs.querySelectorAll('nav .tabs .tab')
  tabs.forEach(e => {
    let initial = 'active', final = 'hide';
  
    e.addEventListener('click', () => {
      ExperienceTabs.querySelector(`nav .tabs .tab.${initial}`).classList.remove(initial)
      e.classList.add(initial)
  
      let tabId = e.attributes.tab.value
      let TabSelected = ExperienceTabs.querySelector(`.contents #${tabId}`)
  
      ExperienceTabs.querySelector(`.contents .content.${initial}`).classList.add(final)
   
      setTimeout(() => {
        ExperienceTabs.querySelector(`.contents .content.${initial}`).classList.remove(initial)
        if(TabSelected.classList.contains(final)){
          TabSelected.classList.remove(final)
        }
  
        ExperienceTabs.querySelector(`.contents #${tabId}`).classList.add(initial)
      }, 200);
  
    })
  })
}
