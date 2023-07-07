import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Socials from "@components/Socials";
import Search from "@components/SearchInput";

import Logo from '@images/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHome, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const primaryMenu = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "About", href: "/about" },
  { id: 3, title: "Blog", href: "/blog" },
  { id: 4, title: "Lightroom presets", href: "/lightroom-presets" },
  { id: 5, title: "Press", href: "/press" },
  {
    id: 6, title: "Contact", subpages: [
      { id: 1, title: "Work with me", href: "/contact" },
      { id: 2, title: "Become a guest author", href: "/guest-author-submissions" },
      { id: 3, title: "Request a blog post", href: "/blog-post-request" }
    ]
  },
  { id: 7, title: "Faq", href: "/faq" }
];

const secondaryMenu = [
  { id: 1, ico: faHome, href: "/" },
  { id: 2, title: "Start here", href: "/start-here" },
  { id: 3, title: "Destinations", href: "/destinations" },
  { id: 4, title: "Type of trip", href: "/type-of-trip" },
  { id: 5, title: "Lifestyle", href: "/lifestyle" },
  { id: 6, title: "Photography", href: "/photography" },
  { id: 7, title: "Travel shop", href: "/travel-shop" },
  { id: 8, title: "Resources", href: "/resources" },
  { id: 9, ico: faCartShopping, href: "/cart" }
];

const Header = () => {
  const router = useRouter();
  const isActive = (href: string) => router.pathname === href;

  return (
    <header>
      <div className="top-menu">
        <div className="wrapper flex justify-between items-center">
          <nav className="primary-menu">
            <ul className="flex justify-between items-center">
              {primaryMenu.map((item) => (
                <li key={item.id} className={`menu-item flex justify-center items-center uppercase ${item.subpages ? "has-submenu" : ""}`}>
                  {!item.subpages ? (
                    <Link href={item.href} className={isActive(item.href) ? "active" : ""}>
                      <span>{item.title}</span>
                    </Link>
                  ) : (
                    <>
                      <span className="nohref">{item.title}</span>                        
                      <ul className="submenu">
                        {item.subpages.map((submenu) => (
                          <li key={submenu.id} className="submenu-item flex justify-start items-center uppercase">
                            <Link href={submenu.href} className={isActive(submenu.href) ? "active" : ""}>
                              <span>{submenu.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="inner flex justify-between items-center">
            <Socials />
            <Search />
          </div>
        </div>
      </div>
      <div className="logo">
        <div className="wrapper">
          <Link href='/' className="flex justify-center items-center">
            <img src={Logo.src} alt="logo" />
          </Link>
        </div>
      </div>
      <div className="bottom-menu">
        <div className="wrapper">
          <nav>
            <ul className="flex justify-center items-center">
              {secondaryMenu.map((item) => (
                <li key={item.id} className="flex justify-center items-center uppercase">
                  {item.title ? (
                    <Link href={item.href} className={isActive(item.href) ? "active" : ""}>
                      {item.title}
                    </Link>
                  ) : (
                    <Link href={item.href}>
                      <FontAwesomeIcon icon={item.ico as IconProp} />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;