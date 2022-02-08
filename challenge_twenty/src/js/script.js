//HEADER Scroll Fixed
document.addEventListener('scroll', e => {

  if(window.scrollY > 80) {
    Header.classList.add('fixed')
  } else {
    Header.classList.remove('fixed')
  }
  
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
const tabs = ExperienceTabs.querySelectorAll('nav .tabs .tab')

tabs.forEach(e => {

  e.addEventListener('click', () => {

    ExperienceTabs.querySelector('nav .tabs .tab.active').classList.remove('active')
    e.classList.add('active')

    let tabId = e.attributes.tab.value
    let TabSelected = ExperienceTabs.querySelector(`.contents #${tabId}`)

    ExperienceTabs.querySelector(`.contents .content.active`).classList.add('hide')
 
    setTimeout(() => {
      ExperienceTabs.querySelector(`.contents .content.active`).classList.remove('active')
      if(TabSelected.classList.contains('hide')){
        TabSelected.classList.remove('hide')
      }

      ExperienceTabs.querySelector(`.contents #${tabId}`).classList.add('active')
    }, 200);

  })
})