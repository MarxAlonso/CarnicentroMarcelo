interface SubMenuItem {
  title: string;
  link: string;
}

interface MenuItem {
  id: number;
  title: string;
  link: string;
  submenu?: SubMenuItem[];
}

export const NavbarMenu: MenuItem[] = [
  {
    id: 1,
    title: 'Inicio',
    link: '/',
  },
  {
    id: 2,
    title: 'Productos',
    link: '#',
    submenu: [
      {
        title: 'Carne de Res',
        link: '/carneres',
      },
      {
        title: 'Carne de Cerdo',
        link: '/carnecerdo',
      },
      /*{
        title: 'Cortes Especiales',
        link: '/productos/especiales',
      },*/
    ],
  },
  {
    id: 3,
    title: 'Nosotros',
    link: '/nosotros',
  },
  {
    id: 4,
    title: 'Contacto',
    link: '/contacto',
  },
];