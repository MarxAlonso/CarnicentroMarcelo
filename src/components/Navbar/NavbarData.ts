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
        link: '/productos/cerdo',
      },
      {
        title: 'Cortes Especiales',
        link: '/productos/especiales',
      },
    ],
  },
  {
    id: 3,
    title: 'Ofertas',
    link: '/ofertas',
  },
  {
    id: 4,
    title: 'Nosotros',
    link: '/nosotros',
  },
];