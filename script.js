
const themeButton = document.getElementById('theme-button')
var darkTheme = 'dark-theme'
var iconTheme = 'bi-moon-stars-fill' 
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
themeButton.classList.add(localStorage.getItem('selected-icon'))


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => {
  if(localStorage.getItem('selected-icon')=='bi-brightness-high')
  {
    return 'bi-moon-stars-fill'
  }
  else{
    return 'bi-brightness-high'
  }

}

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bi-moon-stars-fill' ? 'add' : 'remove'](iconTheme)
 

}



themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    if(localStorage.getItem('selected-icon')=='bi-moon-stars-fill')
    {
      themeButton.classList.add('bi-brightness-high');
      themeButton.classList.remove('bi-moon-stars-fill');
    }
    else{
      themeButton.classList.add('bi-moon-stars-fill');
      themeButton.classList.remove('bi-brightness-high')
    }
   
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}




