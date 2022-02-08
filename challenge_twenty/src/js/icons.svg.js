const style = document.createElement('style')
style.id="icons.svg.js"
style.textContent = `
  /*icons.svg.js*/
  i[icon]{
    display:flex;
    align-items:center;
    justify-content:center;
  }
`
document.head.append(style)

const svg = (element, path) => {
  element = document.getElementById(element)
  if(element) {
    element.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${element.attributes?.size?.value ?? 16}" height="${element.attributes?.size?.value ?? 16}" fill="currentColor" viewBox="0 0 16 16">
      ${path}
    </svg>
  `}
  if(element.attributes?.href){element.addEventListener('click', () => window.open(element.attributes?.href?.value))}
}
svg('IconLinkedIn', `<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>`)
svg('IconGitHub', `<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>`)
svg('IconList', `<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>`)
svg('IconEmail', `<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>`)
svg('IconDownload', `<path fill-rule="evenodd" d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z"/><path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>`)
svg('IconYoutube', `<path fill="none" stroke="currentColor" stroke-width="" stroke-linecap="round" stroke-linejoin="round" d="M15.1,4.1c-0.1-0.3-0.2-0.6-0.5-0.9c-0.2-0.2-0.5-0.4-0.8-0.5C12.7,2.5,8,2.5,8,2.5s-4.7,0-5.8,0.3C1.9,2.9,1.6,3.1,1.3,3.3C1.1,3.5,0.9,3.8,0.9,4.2C0.6,5.3,0.5,6.5,0.5,7.7c0,1.2,0.1,2.4,0.3,3.6c0.1,0.3,0.3,0.6,0.5,0.8c0.2,0.2,0.5,0.4,0.8,0.5C3.3,13,8,13,8,13s4.7,0,5.8-0.3c0.3-0.1,0.6-0.3,0.8-0.5c0.2-0.2,0.4-0.5,0.5-0.9c0.2-1.2,0.3-2.4,0.3-3.6C15.5,6.5,15.4,5.3,15.1,4.1L15.1,4.1z"/><path fill="none" stroke="currentColor" stroke-width="" stroke-linecap="round" stroke-linejoin="round" d="M6.5,10l4-2.2l-4-2.2V10z"/>`)
svg('IconFacebook', `<path fill="none" stroke="currentColor" stroke-width="" stroke-linecap="round" stroke-linejoin="round" d="M12,0.8H9.8c-1,0-1.9,0.4-2.5,1.1C6.6,2.5,6.2,3.5,6.2,4.4v2.2H4.1v2.9h2.2v5.7h2.9V9.4h2.2L12,6.6H9.1V4.4c0-0.2,0.1-0.4,0.2-0.5c0.1-0.1,0.3-0.2,0.5-0.2H12V0.8z"/>`)
svg('IconCodePen', `<path fill="none" stroke="currentColor" stroke-width="" stroke-linecap="round" stroke-linejoin="round" d="M8,0.7l7.3,4.7v5.1L8,15.3l-7.3-4.7V5.4L8,0.7z"/><path fill="none" stroke="currentColor" stroke-width="" stroke-linecap="round" stroke-linejoin="round" d="M8,15.3v-4.7"/><path fill="none" stroke="currentColor" stroke-width="" stroke-linecap="round" stroke-linejoin="round" d="M15.3,5.4L8,10.6L0.7,5.4"/><path fill="none" stroke="currentColor" stroke-width="" stroke-linecap="round" stroke-linejoin="round" d="M0.7,10.6L8,5.4l7.3,5.1"/><path fill="none" stroke="currentColor" stroke-width="" stroke-linecap="round" stroke-linejoin="round" d="M8,0.7v4.7"/>`)


