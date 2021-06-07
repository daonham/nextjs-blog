import { useState } from 'react'

import Link from 'next/link'
import LanzoLogo from '@/img/lanzo-logo.png'
import CesaLogo from '@/img/cesa-logo.png'
import MiproLogo from '@/img/mipro-logo.png'
import OrgafreshLogo from '@/img/orgafresh-logo.png'
import UmbalaLogo from '@/img/umbala-logo.png'

export default function Header() {
  const [theme, setTheme] = useState(false)
  const [document, setDocument] = useState(false)

  return (
    <header className="flex justify-between items-center py-10">
      <div>
        <Link href="/">
          <a className="text-2xl font-semibold" aria-label="Alura Studio">AluraStudio</a>
        </Link>
      </div>
      <div className="hidden md:ml-6 md:flex md:items-center">
        <div className="relative">
          <button
            onClick={ () => {
              setTheme(!theme)
              setDocument( false )
            }}
            className="ml-4 inline-flex items-center text-sm font-medium px-3 py-2 rounded-md text-gray-500 hover:text-gray-900">
            <span>Themes</span>
            <svg className="ml-1 h-5 w-5 group-hover:text-gray-500 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
            </svg>
          </button>
          <div style={{display: theme ? 'block' : 'none'}} className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                 <a href="/lanzo" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                   <img className="flex-shrink-0 w-12" src={LanzoLogo} alt="Lanzo"></img>
                   <div className="ml-4">
                      <p className="text-base font-medium text-gray-900">Lanzo</p>
                      <p className="mt-1 text-sm text-gray-500">Gutenberg WooCommerce WordPress Theme</p>
                   </div>
                 </a>
                 <a href="/cesa" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                   <img className="flex-shrink-0 w-12" src={CesaLogo} alt="Cesa"></img>
                   <div className="ml-4">
                      <p className="text-base font-medium text-gray-900">Cesa</p>
                      <p className="mt-1 text-sm text-gray-500">Gutenberg WooCommerce WordPress Theme</p>
                   </div>
                 </a>
                 <a href="/mipro" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                   <img className="flex-shrink-0 w-12" src={MiproLogo} alt="Mipro"></img>
                   <div className="ml-4">
                      <p className="text-base font-medium text-gray-900">Mipro</p>
                      <p className="mt-1 text-sm text-gray-500">Minimal WooCommerce WordPress Theme</p>
                   </div>
                 </a>
                 <a href="/orgafresh" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                   <img className="flex-shrink-0 w-12" src={OrgafreshLogo} alt="Orgafresh"></img>
                   <div className="ml-4">
                      <p className="text-base font-medium text-gray-900">Orgafresh</p>
                      <p className="mt-1 text-sm text-gray-500">Organic and Food WooCommerce WordPress Theme</p>
                   </div>
                 </a>
                 <a href="/umbala" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                   <img className="flex-shrink-0 w-12" src={UmbalaLogo} alt="Umbala"></img>
                   <div className="ml-4">
                      <p className="text-base font-medium text-gray-900">Umbala</p>
                      <p className="mt-1 text-sm text-gray-500">Fashion and Clothing Store WooCommerce Theme</p>
                   </div>
                 </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <button
          onClick={ () => {
            setTheme(false)
            setDocument( ! document )
          }}
          className="ml-4 inline-flex items-center text-sm font-medium px-3 py-2 rounded-md text-gray-500 hover:text-gray-900">
            <span>Documentation</span>
            <svg className="ml-1 h-5 w-5 group-hover:text-gray-500 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
            </svg>
          </button>
          <div style={{display: document ? 'block' : 'none'}} className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-max sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
            <div className="rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="relative w-48 grid gap-4 bg-white px-1 py-2 sm:gap-3 sm:p-4">
                <a href="http://demo.alura-studio.com/documentation/lanzo" target="_blank" rel="noopener noreferrer" className="py-1 px-2 flex items-start rounded-lg hover:bg-gray-50 text-sm text-gray-600">Lanzo</a>
                <a href="http://demo.alura-studio.com/documentation/cesa" target="_blank" rel="noopener noreferrer" className="py-1 px-2 flex items-start rounded-lg hover:bg-gray-50 text-sm text-gray-600">Cesa</a>
                <a href="http://demo.alura-studio.com/documentation/mipro" target="_blank" rel="noopener noreferrer" className="py-1 px-2 flex items-start rounded-lg hover:bg-gray-50 text-sm text-gray-600">Mipro</a>
                <a href="http://demo.alura-studio.com/documentation/orgafresh" target="_blank" rel="noopener noreferrer" className="py-1 px-2 flex items-start rounded-lg hover:bg-gray-50 text-sm text-gray-600">Orgafresh</a>
                <a href="http://demo.alura-studio.com/documentation/umbala" target="_blank" rel="noopener noreferrer" className="py-1 px-2 flex items-start rounded-lg hover:bg-gray-50 text-sm text-gray-600">Umbala</a>
              </div>
            </div>
          </div>
        </div>
        <a href="https://themeforest.net/user/alurastudio/portfolio/" className="ml-4 text-gray-800 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-sm font-medium bg-gray-300 hover:bg-gray-100">
         <svg className="mr-1" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="-34.32047659 -70.74 659.48047659 705.28041072" width="18"><path d="m467 26.32c-82.74-97.06-350.5 90.93-348.33 333.27-.02 1.48-.33 2.93-.91 4.29a11.39 11.39 0 0 1 -2.44 3.62 11.19 11.19 0 0 1 -3.63 2.45c-1.35.58-2.8.89-4.27.91-.98-.01-1.94-.14-2.88-.4-.94-.25-1.84-.63-2.68-1.11s-1.62-1.07-2.32-1.75c-.69-.68-1.3-1.44-1.8-2.27-6.8-14.83-12.2-30.26-16.11-46.1s-6.32-32.01-7.19-48.3c-.88-16.29-.22-32.63 1.97-48.8 2.18-16.16 5.89-32.09 11.06-47.56.78-2.29.74-4.78-.12-7.05a10.45 10.45 0 0 0 -11.49-6.65c-2.38.4-4.56 1.6-6.16 3.42-11.03 11.77-20.93 24.56-29.57 38.19s-15.97 28.04-21.91 43.05a258.192 258.192 0 0 0 -13.47 46.39 257.972 257.972 0 0 0 -4.56 48.1c-.39 34.25 6.05 68.23 18.96 99.95a256.996 256.996 0 0 0 56.21 84.74 256.804 256.804 0 0 0 84.66 56.28 256.458 256.458 0 0 0 99.84 18.97c365.3-8.3 280.99-487.06 207.14-573.64z" fill="#81b441"/></svg>
          Profile &rarr;
        </a>
      </div>
    </header>
  )
}
