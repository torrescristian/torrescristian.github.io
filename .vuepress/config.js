const nav = [
  {
    text: 'Inicio',
    link: '/',
  },
  {
    text: 'Proyectos',
    link: '/portfolio/',
  },
  {
    text: 'Sobre Mi',
    link: '/about/',
  },
];

const themeConfig = {
  nav,
  sidebar: nav,
  footer: {
    contact: [
      {
        type: 'github',
        link: 'https://github.com/torrescristian',
      },
    ],
  },
};

module.exports = {
  theme: '@vuepress/blog',
  themeConfig,
}