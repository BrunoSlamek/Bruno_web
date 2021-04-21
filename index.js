const navHeight = $("nav#nav").height();
console.log({ navHeight })
const $navGroup = $('nav .nav-group')
const navOrigPadding = ($navGroup.innerWidth() - $navGroup.width()) / 2;