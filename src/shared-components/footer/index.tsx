'use client';
import React from 'react';

const Footer = () => {
  return (
    // <ul>
    //   {items.map((item) => (
    //     <li key={item.id}>
    //       <a href={item.url}>{item.label}</a>
    //     </li>
    //   ))}
    // </ul>
    <footer
      style={{
        textAlign: 'center',
        fontStyle: 'italic',
        fontSize: 16,
        fontWeight: 500,
        height: '1.5rem',
      }}>
      @2024 Billy. All Rights Reserved
    </footer>
  );
};

export default Footer;
