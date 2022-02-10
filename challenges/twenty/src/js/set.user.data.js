import user from '../../user.data.json' assert { type: "json" };

let HOME = user.name && user.stack ? true : null
let ABOUT = user.description && user.userimage ? true : null
let EXPERIENCES = user.experiences.length > 0 ? user.experiences : null
let PROJECTS = user.projects.length > 0 ? user.projects : null

//HEAD > TITLE && FAVICON && DESCRIPTION && IMAGE
const setHead = () => {
  let title = document.createElement('title')
  let favicon = document.createElement('link')
  let metaDescription = document.createElement('meta')
  let metaImage = document.createElement('meta')

  title.textContent = `${user.name} - @${user.username}`
  favicon.rel = 'shortcut icon'
  favicon.type = 'image/x-icon'
  favicon.href = user.userimage

  metaDescription.name = 'description'
  metaDescription.content = user.description

  metaImage.property = 'og:image'
  metaImage.content = user.userimage

  document.head.append(title)
  document.head.append(favicon)
  document.head.append(metaDescription)
  document.head.append(metaImage)
}

//HOME
const setHome = () => {
  let Container = () => `
    <main>
      <div class="container">
        <div class="text">
          <h2>Hi, I'm</h2>
          <h1 id="name">${user.name}</h1>
          <h2 id="stack">${user.stack}</h2>
        </div>  
        <div class="btns">
        ${user.socials.linkedin ?
          `<a id="linkedin" target="_blank" href="${user.socials.linkedin}">
            <div class="btn gradient-purple"><i id="IconLinkedIn" size="19"></i>LinkedIn</div>
          </a>` : ''
        }
        ${user.socials.github ?
          `<a id="gitHub" target="_blank" href="${user.socials.github}">
            <div class="btn gradient-pink"><i id="IconGitHub" size="19"></i>GitHub</div>
          </a>` : ''
        }
        </div>
      </div>
    </main>
  `
  home.querySelector('#main').innerHTML = Container()
  NavMenu.querySelector('a[href="#home"]').style.display = 'flex'
  svg('IconLinkedIn', icon.LinkedIn)
  svg('IconGitHub', icon.GitHub)
}

//ABOUT
const setAbout = () => {
  let Container = () => `
    <div class="container">
      <div class="card">
        <img id="userimage" src="${user.userimage}">
      </div>
      <div class="about-me">
        <h2>About Me</h2>
        <div class="text">
          <h3 id="location">${user.location}</h3>
          <p id="description">${user.description}</p>
        </div>
        <div class="social">
        ${user.socials.youtube ?`
          <a id="youtube" target="_blank" href="${user.socials.youtube}"><i icon id="IconYoutube" size="24"></i></a>
          `:''
        }
        ${user.socials.codepen ?`
          <a id="codepen" target="_blank" href="${user.socials.codepen}"><i icon id="IconCodePen" size="24"></i></a>
          `:''
        }
        ${user.socials.facebook ?`
          <a id="facebook" target="_blank" href="${user.socials.facebook}"><i icon id="IconFacebook" size="24"></i></a>
          `:''
        }
        </div>
        <div class="btns">
        ${user.socials.curriculum ?
          `<a id="curriculum" target="_blank" href="${user.socials.curriculum}"><div class="btn gradient-purple"><i id="IconDownload" size="22"></i>Curriculum</div></a>`
          :''
          }
          ${user.socials.email ?
          `<a id="email" href="${user.socials.email}"><div class="btn gradient-pink"><i id="IconEmail" size="19"></i>E-mail</div></a>`
          :''
          }
        </div>
      </div>
    </div>
  `
  if(ABOUT){
    about.innerHTML = Container()
    NavMenu.querySelector('a[href="#about"]').style.display = 'flex'
    svg('IconEmail', icon.Email)
    svg('IconDownload', icon.Download)
    svg('IconYoutube', icon.Youtube)
    svg('IconFacebook', icon.Facebook)
    svg('IconCodePen', icon.CodePen)
  } else {
    about.setAttribute('data','not-found')
  }

}

//EXPERIENCE
const setExperience = () => {
  let Container = (tabs, contents) => `
    <div class="container">
      <h2>Experience</h2>
      <div id="ExperienceTabs" class="table">
        <nav>
          <div id="Tabs" class="tabs">
            ${tabs}
          </div>
        </nav>
        <div class="contents">
            ${contents}
        </div>
      </div>
    </div>
  `
  let TabsHTML = '', ContentsHTML = '';

  user.experiences.forEach((experience, key)=> {
    TabsHTML += `<div tab="tab${key}" class="tab ${key == 0 ? 'active': ''}">${experience.company}</div>`

    ContentsHTML += `
      <div id="tab${key}" class="content ${key == 0 ? 'active': ''}">
        <div class="header"><h2>${experience.role}</h2><div class="date">${experience.date}</div></div>
        <div class="company">${experience.company}</div>
        <p>${experience.description}</p>
      </div>
    `
  })

  if(EXPERIENCES){
    experience.innerHTML = Container(TabsHTML, ContentsHTML)
    NavMenu.querySelector('a[href="#experience"]').style.display = 'flex'
    initExperienceTabs()
  } else {
    experience.setAttribute('data','not-found')
  }
}

//PROJECTS
const setProjects = () => {
  let Container = (children) => `
    <div class="container">
        <h2>Projects</h2>
        <div id="projectsContainer" class="projects">
          ${children}
        </div>
    </div>
  `
  let projectHTML = (project) => {
    let langs = project.langsUsed, langsHTML = '';
    langs.forEach(e => langsHTML += `<span>${e}</span>`)
    return `
    <div class="project">
      <div class="card" style="max-width:100%;height:12.5rem;">
        <img src="${project.image}" alt="" >
      </div>
      <div class="info">
        <div class="title">${project.name}</div>
        <p>${project.description}</p>
        <div class="langs">${langsHTML}</div>
      </div>
  
      <div class="btns"
      ${ project.url &&  project.repo 
        ? `style="justify-content: space-between;"`
        : ''
      }
      >
      ${ project.url ? 
        `
        <a href="${project.url}" target="_blank">
          <div class="btn gradient-purple">
          <i icon size="24" class="IconLink"></i> To View
          </div>
        </a>
        ` : ''
      }
        ${ project.repo ? 
          `
          <a href="${project.repo}" target="_blank">
            <div class="btn gradient-purple">
            <i icon size="24" class="IconLink"></i> Repository
            </div>
          </a>
          ` : ''
        }
      </div>
    </div>
  `}

  if(PROJECTS){
    let ProjectsHTML = '';
    PROJECTS.forEach(project => {
      ProjectsHTML += projectHTML(project)
    })
    projects.innerHTML = Container(ProjectsHTML)
    NavMenu.querySelector('a[href="#projects"]').style.display = 'flex'
    svg('IconLink', icon.Link)
  } else {
    projects.setAttribute('data','not-found')
  }
}

//FOOTER
footer
.querySelector('.left span')
.innerHTML = `<a target="_blank"href="${user.socials.github}">${user.name}</a>`


//verification and data entry 
HOME && ABOUT && setHead()
HOME && setHome()
setAbout()
setExperience()
setProjects()


