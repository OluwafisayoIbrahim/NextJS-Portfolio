import React from 'react';
import NavLink from './NavLink';

const MenuOverlay = ({ links, onLinkClick, activeLink }) => {
    return (
        <ul className="flex flex-col py-4 items-center">
            {links.map((link, index) => (
                <li key={index} onClick={() => onLinkClick(link.path)}>
                    <NavLink
                      href={link.path}
                      title={link.title}
                      isActive={activeLink === link.path}
                    />
                </li>
            ))}
        </ul>
    );
};

export default MenuOverlay;
