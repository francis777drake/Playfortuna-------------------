const GlobalConfigs = {
  pageTitle: "Playfortuna бонус без депозита",
  navigationType: ProjectConsts.allNavigationTypes.singlePage,  //can be hamburger, singlePage, listMenu
  useIFramesEverywhere: false,
  homeSitePageUrl: "http://sitelite.top/",
  menuItems: [
    //{icon: 'home', text: 'Главная', url:"http://sitelite.top/"},
    {
      icon: 'list', text: 'Видео',
      url: "http://sitelite.top/", notLoadToIFrame: true
    },
    //{icon: 'photo', text: 'Игры',
    // url:"http://sitelite.top/"},
    {
      icon: 'info', text: 'О нас',
      url: "http://sitelite.top/"
    },
    {
      icon: 'mail', text: 'Контакты',
      url: "http://sitelite.top/"
    },
    {
      icon: 'group', text: 'О разработчике', url: "",
      onClick: function () {
        CSharp.AboutDeveloper();
      }
    }
  ],
  styling: {
    isDarkTheme: 0,
    menuColor: "red darken-1", //from https://vuetifyjs.com/style/colors
    showLogo: false,
    showTitleInMenu: true,
    isMenuFlat: false
  }
}



