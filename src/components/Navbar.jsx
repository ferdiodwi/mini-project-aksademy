import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Beranda', href: '#', active: true },
  { name: 'Kategori', href: '#kategori', active: false },
  { name: 'Program', href: '#program', active: false },
  { name: 'Testimoni', href: '#testimoni', active: false },
];

// Searchable content — maps keywords to sections
const searchableItems = [
  { title: 'Beranda', description: 'Halaman utama Aksademy', href: '#', keywords: ['home', 'beranda', 'utama'] },
  { title: 'Kategori Belajar', description: 'Web Development, Graphic Design, Data Science, Accounting', href: '#kategori', keywords: ['kategori', 'web', 'design', 'data', 'science', 'accounting', 'belajar'] },
  { title: 'Bootcamp Profesional', description: 'Program intensif 3-6 bulan dengan penyaluran kerja', href: '#program', keywords: ['bootcamp', 'intensif', 'kerja', 'program', 'profesional'] },
  { title: 'Video Course', description: 'Belajar kapan saja dengan akses materi seumur hidup', href: '#program', keywords: ['course', 'video', 'belajar', 'fleksibel', 'on-demand'] },
  { title: 'Webinar & Workshop', description: 'Kelas interaktif bersama expert practitioner', href: '#program', keywords: ['webinar', 'workshop', 'live', 'kelas', 'interaktif'] },
  { title: 'Testimoni', description: 'Cerita sukses alumni Aksademy', href: '#testimoni', keywords: ['testimoni', 'review', 'alumni', 'cerita'] },
  { title: 'Web App Development', description: 'Front-end hingga Back-end dengan teknologi modern', href: '#kategori', keywords: ['web', 'frontend', 'backend', 'development', 'app'] },
  { title: 'Graphic Design', description: 'Kreativitas visual dengan tools desain profesional', href: '#kategori', keywords: ['graphic', 'design', 'desain', 'visual', 'kreatif'] },
  { title: 'Data Science', description: 'Analisis data dan Machine Learning', href: '#kategori', keywords: ['data', 'science', 'machine', 'learning', 'analisis'] },
  { title: 'Accounting & Tax', description: 'Pembukuan, laporan keuangan, dan perpajakan', href: '#kategori', keywords: ['accounting', 'tax', 'pajak', 'keuangan', 'pembukuan'] },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const searchInputRef = useRef(null);
  const mobileSearchInputRef = useRef(null);
  const searchContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ctrl+K / Cmd+K shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (searchInputRef.current) {
          searchInputRef.current.focus();
          setIsSearchFocused(true);
        } else if (mobileSearchInputRef.current) {
          setMobileSearchOpen(true);
          setTimeout(() => mobileSearchInputRef.current?.focus(), 100);
        }
      }
      if (e.key === 'Escape') {
        setIsSearchFocused(false);
        setSearchQuery('');
        searchInputRef.current?.blur();
        setMobileSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close search dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredResults = searchQuery.trim().length > 0
    ? searchableItems.filter(item => {
        const q = searchQuery.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.keywords.some(k => k.includes(q))
        );
      })
    : [];

  const handleResultClick = useCallback((href) => {
    setSearchQuery('');
    setIsSearchFocused(false);
    setMobileSearchOpen(false);
    searchInputRef.current?.blur();
    // Smooth scroll to section
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const navContainerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.8
      }
    }
  };

  const showResults = isSearchFocused && searchQuery.trim().length > 0;

  return (
    <motion.div
      variants={navContainerVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 w-full z-50 pointer-events-auto"
    >
      <Disclosure
        as="nav"
        className={classNames(
          isScrolled ? 'shadow-md border-b-transparent' : 'shadow-sm border-b border-gray-200',
          'bg-white transition-all duration-300'
        )}
      >
        {({ open }) => (
          <>
            <div className="mx-auto w-full max-w-[1440px] pl-4 pr-4 sm:pl-6 lg:pl-8 lg:pr-8">
              <div className="flex h-[88px] items-center justify-between gap-4">
                
                {/* Mobile menu button */}
                <div className="flex items-center lg:hidden">
                  <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#14427D]">
                    <span className="sr-only">Buka menu utama</span>
                    <Bars3Icon aria-hidden="true" className="block h-7 w-7 group-data-[open]:hidden" />
                    <XMarkIcon aria-hidden="true" className="hidden h-7 w-7 group-data-[open]:block" />
                  </DisclosureButton>
                </div>

                {/* Logo */}
                <div className="flex shrink-0 items-center cursor-pointer">
                  <img
                    alt="Aksademy"
                    src="/img/logo.png"
                    onError={(e) => { e.target.src = '/logo-primary.png' }}
                    className="h-9 sm:h-11 w-auto object-contain drop-shadow-sm mix-blend-multiply"
                  />
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex flex-1 items-center justify-center gap-2 xl:gap-3 ml-4 mr-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.active
                          ? 'relative px-5 py-2.5 rounded-xl bg-[#EAF1F8] text-[#14427D] font-bold'
                          : 'px-4 py-2 font-semibold text-gray-700 hover:text-[#14427D]',
                        'text-[15px] transition-colors'
                      )}
                    >
                      {item.name}
                      {item.active && <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#14427D] rounded-full"></span>}
                    </a>
                  ))}
                </div>

                {/* Search Bar & Buttons */}
                <div className="flex items-center gap-3 xl:gap-4 shrink-0 justify-end">
                  
                  {/* Desktop Search */}
                  <div ref={searchContainerRef} className="hidden md:block relative">
                    <div className={classNames(
                      'flex items-center border rounded-xl px-4 py-2.5 w-64 xl:w-80 bg-white ring-1 ring-inset transition-all',
                      isSearchFocused
                        ? 'ring-[#14427D] border-[#14427D] shadow-lg shadow-blue-500/10'
                        : 'ring-transparent border-gray-200 hover:border-gray-300'
                    )}>
                      <MagnifyingGlassIcon className={classNames(
                        'w-[18px] h-[18px] mr-2 shrink-0 stroke-2 transition-colors',
                        isSearchFocused ? 'text-[#14427D]' : 'text-gray-500'
                      )} />
                      <input
                        ref={searchInputRef}
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setIsSearchFocused(true)}
                        placeholder="Cari Produk..."
                        className="w-full bg-transparent border-none outline-none text-[14px] text-gray-700 placeholder:text-gray-400 font-medium"
                      />
                      {searchQuery.length > 0 ? (
                        <button
                          onClick={() => { setSearchQuery(''); searchInputRef.current?.focus(); }}
                          className="shrink-0 ml-2 p-0.5 rounded text-gray-400 hover:text-gray-600"
                        >
                          <XMarkIcon className="w-4 h-4" />
                        </button>
                      ) : (
                        <div className="hidden lg:flex items-center shrink-0 ml-3 text-gray-400 gap-1.5">
                          <span className="border border-gray-200 rounded shrink-0 flex items-center justify-center text-[11px] px-1.5 py-0.5 bg-gray-50 font-bold tracking-wider text-gray-400">⌘K</span>
                          <span className="text-sm font-medium">/</span>
                          <span className="border border-gray-200 rounded shrink-0 flex items-center justify-center text-[11px] px-1.5 py-0.5 bg-gray-50 font-bold tracking-wider text-gray-400">Ctrl K</span>
                        </div>
                      )}
                    </div>

                    {/* Search Results Dropdown */}
                    <AnimatePresence>
                      {showResults && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full mt-2 left-0 w-full bg-white rounded-xl shadow-xl ring-1 ring-black/5 overflow-hidden z-50"
                        >
                          {filteredResults.length > 0 ? (
                            <ul className="py-2 max-h-[320px] overflow-y-auto">
                              {filteredResults.map((item, idx) => (
                                <li key={idx}>
                                  <button
                                    onClick={() => handleResultClick(item.href)}
                                    className="w-full text-left px-4 py-3 hover:bg-[#EAF1F8] transition-colors group flex items-start gap-3"
                                  >
                                    <MagnifyingGlassIcon className="w-4 h-4 text-gray-400 group-hover:text-[#14427D] shrink-0 mt-0.5 stroke-2" />
                                    <div>
                                      <p className="text-[14px] font-semibold text-gray-800 group-hover:text-[#14427D]">{item.title}</p>
                                      <p className="text-[12px] text-gray-500 mt-0.5">{item.description}</p>
                                    </div>
                                  </button>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <div className="px-4 py-6 text-center">
                              <p className="text-sm text-gray-500">Tidak ada hasil untuk "<span className="font-semibold text-gray-700">{searchQuery}</span>"</p>
                              <p className="text-xs text-gray-400 mt-1">Coba kata kunci lain</p>
                            </div>
                          )}
                          <div className="border-t border-gray-100 px-4 py-2 flex items-center justify-between text-[11px] text-gray-400 bg-gray-50/50">
                            <span>Tekan <kbd className="font-bold border border-gray-200 rounded px-1 py-0.5 bg-white text-gray-500">ESC</kbd> untuk menutup</span>
                            <span>{filteredResults.length} hasil</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Mobile Search Icon */}
                  <button
                    className="md:hidden p-2 text-gray-600 hover:text-[#14427D] rounded-lg"
                    onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
                  >
                    <MagnifyingGlassIcon className="w-6 h-6 stroke-2" />
                  </button>

                  <a href="https://github.com/ferdiodwi/mini-project-aksademy" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-gray-300 text-[15px] font-bold text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                    Source Code
                  </a>

                  <button className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-[#031435] text-[15px] font-bold text-white hover:bg-[#062054] shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                    <span className="relative z-10">Daftar</span>
                    <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Search Panel */}
            <AnimatePresence>
              {mobileSearchOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                >
                  <div className="px-4 py-3">
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </div>
                      <input
                        ref={mobileSearchInputRef}
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Cari Produk..."
                        className="block w-full rounded-xl border-0 py-3 pl-11 pr-10 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#14427D] text-[15px] shadow-sm bg-gray-50 font-medium"
                      />
                      {searchQuery && (
                        <button
                          onClick={() => { setSearchQuery(''); mobileSearchInputRef.current?.focus(); }}
                          className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400"
                        >
                          <XMarkIcon className="w-5 h-5" />
                        </button>
                      )}
                    </div>

                    {/* Mobile Search Results */}
                    {searchQuery.trim().length > 0 && (
                      <div className="mt-2 divide-y divide-gray-100">
                        {filteredResults.length > 0 ? (
                          filteredResults.map((item, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleResultClick(item.href)}
                              className="w-full text-left px-3 py-3 flex items-start gap-3 hover:bg-gray-50 rounded-lg"
                            >
                              <MagnifyingGlassIcon className="w-4 h-4 text-gray-400 shrink-0 mt-0.5 stroke-2" />
                              <div>
                                <p className="text-[14px] font-semibold text-gray-800">{item.title}</p>
                                <p className="text-[12px] text-gray-500 mt-0.5">{item.description}</p>
                              </div>
                            </button>
                          ))
                        ) : (
                          <p className="py-4 text-center text-sm text-gray-500">Tidak ada hasil untuk "{searchQuery}"</p>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Mobile menu panel */}
            <DisclosurePanel className="lg:hidden bg-white border-t border-gray-100 shadow-md w-full left-0 z-40 relative">
              <div className="space-y-1 px-4 pb-6 pt-4">

                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.active
                        ? 'bg-[#EAF1F8] text-[#14427D] font-bold'
                        : 'text-gray-700 font-semibold hover:bg-gray-50',
                      'block rounded-lg px-4 py-3 text-base'
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}

                <div className="mt-6 pt-6 border-t border-gray-100 sm:hidden flex flex-col gap-3">
                  <a href="https://github.com/ferdiodwi/mini-project-aksademy" target="_blank" rel="noopener noreferrer" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base font-bold text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                    Source Code
                  </a>
                  <button className="w-full rounded-xl bg-[#031435] px-4 py-3 text-base font-bold text-white hover:bg-[#062054]">
                    Daftar
                  </button>
                </div>
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </motion.div>
  );
}
