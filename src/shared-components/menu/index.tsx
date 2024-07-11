import ResponsiveAppBar from '@/components/app-bar';
import React from 'react';

interface MenuItem {
  id: number;
  label: string;
  url: string;
}

interface MenuProps {
  items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    // <ul>
    //   {items.map((item) => (
    //     <li key={item.id}>
    //       <a href={item.url}>{item.label}</a>
    //     </li>
    //   ))}
    // </ul>
    <ResponsiveAppBar items={items} />
  );
};

export default Menu;
