// --- MOBILE MENU
// Assign Menu button, menu container and logo
const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const logo = document.getElementById('logo')

const navToggle = () => {
  btn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');

  if(menu.classList.contains('flex')){
    logo.setAttribute('src', './images/logo-bookmark-footer.svg')
  } else {
     logo.setAttribute('src', './images/logo-bookmark.svg')
  }
}

// Hamburger button event listener
btn.addEventListener('click', navToggle)

// --- FEATURES TABS
// Assign tabs and panels to variables
const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')

const onTabClick = (e) => {
  // Deactivate all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      'border-softRed',
      'border-b-4',
      'md:border-b-0'
    )
  })

  // Hide all panels
  panels.forEach((panel) => panel.classList.add('hidden'))

  // Activate the target tab
  e.target.classList.add('border-softRed', 'border-b-4')

  // Show corresponding panel
  const classString = e.target.getAttribute('data-target')
  document.getElementsByClassName(classString)[0]
    .classList.remove('hidden')
}

// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener('click', onTabClick))
