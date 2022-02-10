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


//set BACKGROUND-COLOR
window.addEventListener('load', () => {
  document.querySelectorAll('section[id]:not([data="not-found"])').forEach((e, key)=> {
    if(key % 2 == 0) {
        e.classList.add('bg-primary')
    } else {
        e.classList.add('bg-second')
    }
  })
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

//CONTACT Form
ContactForm.message.addEventListener('input', () => {
  let name = ContactForm.name.value
  let email = ContactForm.email.value
  let message = ContactForm.message.value

  if(name != '' && email != '' && message != ''){
    formBtns.enable()
    prepare(true)
  } else {
    formBtns.disable()
    prepare(false)
  }
})

const formBtns = {
  disable: () => {
    ContactForm.querySelector('.btns').classList.add('disabled')
  },
  enable: () => {
    ContactForm.querySelector('.btns').classList.remove('disabled')
  }
}
const warning = {
  success: (warn) => {
    setTimeout(() => {
      let warnelement = ContactForm.querySelector('.warning')
      warnelement.classList.add('success')
      warnelement.textContent = warn

      setTimeout(() => {
        warnelement.classList.remove('success')
        warnelement.textContent = ''
      }, 2000);
    }, 500);
  }
}
const prepare = (formFilled) => {
  if(formFilled) {
    ContactForm
    .querySelector('.btns .submit')
    .removeEventListener('click', sendForm, false)

    ContactForm
    .querySelector('.btns .submit')
    .addEventListener('click', sendForm, false)

    ContactForm
    .querySelector('.btns .cancel')
    .addEventListener('click', resetForm, false)
    
  }
}
const resetForm = () => {
  ContactForm.name.value = ''
  ContactForm.email.value = ''
  ContactForm.message.value = ''
  ContactForm.querySelector('.btns .submit').textContent = 'Send'
  formBtns.disable()
}
const sendForm = () => {
  ContactForm.querySelector('.btns .submit').innerHTML =
 `<svg class="spinner" viewBox="0 0 50 50">
    <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="3"></circle>
  </svg>`

  setTimeout(() => {
    console.log('Submit')
    resetForm()

    warning.success('Message sent successfully')
  }, 500);
}

//BTN ALL-PROJECTS
document.body.insertAdjacentHTML('beforeend', `
  <div class="all-projetcs-btn" title="All Projects">
    <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path></svg></a>
    <style>
      :root {
        --all-projetcs-btn-color: #fff;
      }
      [theme="light"] {
        --all-projetcs-btn-color: #333;
      }
      .all-projetcs-btn {
        position: fixed;
        color: var(--all-projetcs-btn-color);
        display: flex;
        z-index: 9;
        left: 1rem;
        top: 0.2rem;
        transition: ease 0.2s;
        border-radius: 50%;
        padding: 0.5rem;
      }
      .all-projetcs-btn a {display: flex;}
      .all-projetcs-btn:hover {
        background-color: rgba(0, 0, 0, 0.205);
      }
      .all-projetcs-btn:active {
        transform: scale(0.9);
      }
      @media (max-width: 720px) {
        .all-projetcs-btn {
          display: none;
        }
      }
    </style>
  </div>
`)