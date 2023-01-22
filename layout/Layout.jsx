import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { ROUTES } from '../utils/routes';

const links = [
  { href: ROUTES.HOME, label: 'Home', id: 'home' },
  { href: ROUTES.PORTFOLIO, label: 'Portfolio', id: 'portfolio' },
  { href: ROUTES.CONTACTS, label: 'Contacts', id: 'contacts' },
];

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='bg-slate-50 py-7'>
        <div className='container mx-auto flex items-center justify-between'>
          <h1 className='text-gray-600 text-center'>My Company</h1>

          <nav className='flex items-center gap-4'>
            {links &&
              links.map(({ href, label, id }) => (
                <Link key={id} href={href}>
                  <span className='text-gray-600 hover:text-gray-800'>
                    {label}
                  </span>
                </Link>
              ))}
          </nav>
        </div>
      </header>

      <main className='flex-grow'>
        <section className='py-20'>
          <div className='container mx-auto'>{children}</div>
        </section>
      </main>

      <footer className='bg-slate-50 py-5'>
        <p className='text-gray-600 text-center'>
          &copy; {new Date().getFullYear()} - My Company
        </p>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
