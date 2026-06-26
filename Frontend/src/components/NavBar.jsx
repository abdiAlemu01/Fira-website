// NavBar.jsx
import { useEffect, useState } from 'react'
import { Link, useResolvedPath } from 'react-router-dom'
import { ShoppingBagIcon, MenuIcon, XIcon, LogInIcon, LogOutIcon, ShieldCheckIcon } from 'lucide-react'
import ThemeSelector from './ThemeSelector'
import { useProductStore } from '../store/useProductStore';
import { useAuthStore } from '../store/useAuthStore';
import AuthModal from './AuthModal';
import NotificationBell from './NotificationBell';

function NavBar() {
  const products = useProductStore(state => state.products);
  const { user, logout } = useAuthStore();
  const { pathname } = useResolvedPath()
  const isHomePage = pathname === '/'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Mana', path: '/' },
    { name: "Waay'ee keenya", path: '/about' },
    { name: 'Tajaajiloota', path: '/services' },
    { name: 'Nu Qunamuuf', path: '/contact' },
    { name: "Galma'a ajajadha", path: '/track-order' },
  ];

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className='bg-base-100/95 backdrop-blur-md border-b border-base-content/10 sticky top-0 z-50 shadow-sm'>
        <div className='max-w-7xl mx-auto'>
            <div className='navbar px-2 sm:px-4 py-2 sm:py-3 min-h-[4rem] sm:min-h-[5rem]'>

              {/* LOGO */}
              <div className="flex-none">
                <Link to="/" className="hover:opacity-80 transition-opacity" onClick={handleNavLinkClick}>
                  <div className="flex items-center gap-1.5 sm:gap-3">
                    <img
                      src="/fi.jpg"
                      alt="Company Logo"
                      className="size-10 sm:size-12 md:size-14 object-contain shadow-md ring-2 ring-primary/20 flex-shrink-0"
                      onError={(e) => {
                        console.error('Image failed to load:', e);
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="hidden sm:flex flex-col min-w-0">
                      <span className="font-bold text-sm sm:text-lg md:text-xl leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary truncate">
                       
                      </span>
                      <span className="hidden sm:block text-xs md:text-sm text-base-content/70 font-medium truncate">
                       
                      </span>
                    </div>
                  </div>
                </Link>
              </div>

              {/* NAVIGATION LINKS - Desktop */}
              <div className="flex-1 hidden lg:flex justify-center">
                <ul className="menu menu-horizontal px-1 gap-2">
                  {navLinks.map((link) => (
                    <li key={link.path}>
                      <Link 
                        to={link.path}
                        className={`text-base font-semibold px-4 py-2 rounded-lg transition-all duration-200 ${
                          pathname === link.path 
                            ? 'bg-primary text-primary-content shadow-md' 
                            : 'hover:bg-primary/10 hover:text-primary'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* MOBILE MENU */}
              <div className="flex-1 lg:hidden flex justify-end relative">
                <button
                  type="button"
                  className="btn btn-ghost btn-square"
                  onClick={() => setMobileMenuOpen((open) => !open)}
                  aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={mobileMenuOpen}
                >
                  {mobileMenuOpen ? <XIcon className="size-6" /> : <MenuIcon className="size-6" />}
                </button>

                {mobileMenuOpen && (
                  <>
                    <button
                      type="button"
                      className="fixed inset-0 z-[55] bg-black/20 lg:hidden"
                      aria-label="Close menu"
                      onClick={() => setMobileMenuOpen(false)}
                    />
                    <ul className="absolute right-0 top-full z-[60] menu p-3 shadow-xl bg-base-100 rounded-box w-64 mt-2 border border-base-300">
                      {navLinks.map((link) => (
                        <li key={link.path}>
                          <Link 
                            to={link.path}
                            onClick={handleNavLinkClick}
                            className={`text-base font-semibold py-3 rounded-lg ${
                              pathname === link.path ? 'bg-primary text-primary-content' : ''
                            }`}
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              {/* RIGHT SECTION */}
              <div className="flex-none flex items-center gap-1 sm:gap-2">
                {/* Desktop: Always show notifications and theme */}
                <div className="hidden sm:flex items-center gap-2">
                  <NotificationBell />
                  <ThemeSelector />
                </div>
                
                {user ? (
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle btn-sm sm:btn-md avatar">
                      <div className="w-8 sm:w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <ShieldCheckIcon className="size-4 sm:size-5 text-primary" />
                      </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[60] p-3 shadow-xl menu menu-compact dropdown-content bg-base-100 rounded-box w-56 sm:w-64 border border-base-300">
                      <li className="menu-title px-2 py-1">
                        <span className="text-sm sm:text-base font-bold truncate">{user.full_name}</span>
                      </li>
                      <li className="disabled px-2 py-1">
                        <span className="text-xs text-base-content/60 capitalize flex items-center gap-2">
                          <ShieldCheckIcon className="size-4 flex-shrink-0" />
                          <span className="truncate">{user.role}</span>
                        </span>
                      </li>
                      <div className="divider my-1"></div>
                      
                      {/* Mobile-only: Show notification and theme in dropdown */}
                      <div className="sm:hidden">
                        <li className="pointer-events-none">
                          <div className="flex items-center justify-between py-2">
                            <span className="text-xs font-medium">Beeksisa</span>
                            <div className="pointer-events-auto">
                              <NotificationBell />
                            </div>
                          </div>
                        </li>
                        <li className="pointer-events-none">
                          <div className="flex items-center justify-between py-2">
                            <span className="text-xs font-medium">Theme</span>
                            <div className="pointer-events-auto">
                              <ThemeSelector />
                            </div>
                          </div>
                        </li>
                        <div className="divider my-1"></div>
                      </div>
                      
                      <li>
                        <button type="button" onClick={logout} className="text-error hover:bg-error/10 flex items-center gap-2 py-3">
                          <LogOutIcon className="size-4 flex-shrink-0" />
                          <span>Ba'i</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <>
                    {/* Mobile: Show notifications and theme when NOT logged in */}
                    <div className="flex sm:hidden items-center gap-1">
                      <NotificationBell />
                      <ThemeSelector />
                    </div>
                    
                    <button
                      type="button"
                      className="btn btn-primary btn-sm px-2 sm:px-4"
                      onClick={() => document.getElementById("auth_modal")?.showModal()}
                    >
                      <LogInIcon className="size-4" />
                      <span className="hidden sm:inline ml-1">SEENA</span>
                    </button>
                  </>
                )}
                
                {isHomePage && (
                  <Link to="/" className="indicator" onClick={handleNavLinkClick}>
                    <div className="btn btn-ghost btn-circle btn-sm sm:btn-md hover:bg-primary/10">
                      <ShoppingBagIcon className="size-5 sm:size-6" />
                      <span className="badge badge-xs sm:badge-sm badge-primary indicator-item font-bold">
                        {products?.length} 
                      </span>
                    </div>
                  </Link>
                )}
              </div>

            </div>
        </div>
        <AuthModal />
    </div>
  )
}

export default NavBar
