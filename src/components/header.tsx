import { InfoIcon, MenuIcon, PhoneIcon, UserIcon, XIcon } from 'lucide-react'
import { useState } from 'react'
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import { PiInstagramLogoThin } from 'react-icons/pi'
import { Link, useLocation } from 'react-router-dom'

import { cn } from '../@config/lib/cn'
import { AcceptCookies } from './accept-cookies'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [hasToggleStripe, setHasToggleStripe] = useState(true)

  function setScroll() {
    if (window.scrollY > 0) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  window.addEventListener('scroll', setScroll)

  const { pathname } = useLocation()

  return (
    <header
      className={cn(
        'w-full border-b border-b-zinc-700 bg-gradient-to-r from-[#1c2545] to-[#1d41c2] transition-all duration-300 ease-in-out',
        isScrolled && 'fixed top-0 z-40 shadow-sm',
      )}
    >
      <AcceptCookies />

      {hasToggleStripe && (
        <div
          className={cn(
            'absolute left-0 top-3 z-50 flex w-full items-center justify-center gap-3 bg-white py-2 md:hidden',
          )}
        >
          <button
            onClick={() => setHasToggleStripe(false)}
            className="rounded-md bg-primary p-2 text-white transition-all hover:brightness-75"
          >
            <XIcon className="size-5" />
          </button>
          <h2 className="md:text-md text-sm">
            <span className="font-medium text-amber-600">Atenção!</span> A Ucred
            não solicita nenhum tipo <br /> de depósito antecipado para
            liberação de crédito.
          </h2>
        </div>
      )}

      {hasToggleStripe && (
        <div
          className={cn(
            'absolute left-0 top-[1.25rem] z-50 hidden w-full items-center justify-center bg-white py-2 md:flex',
          )}
        >
          <InfoIcon className="mr-2 hidden size-4 text-amber-600 md:block" />
          <h2 className="md:text-md text-center text-sm">
            <span className="font-medium text-amber-600">Atenção!</span> A Ucred
            não solicita nenhum tipo de depósito antecipado para liberação de
            crédito.
          </h2>

          <button
            type="button"
            className="ml-4 text-primary"
            onClick={() => setHasToggleStripe(false)}
          >
            <XIcon className="size-6" />
          </button>
        </div>
      )}

      <div className="container flex h-20 items-center justify-between">
        <div className="flex h-full items-center">
          <Link title="Clique para ir na tela de início" to="/">
            <img src="/logo-white.png" alt="Logo da UCRED" className="h-32" />
          </Link>

          <div className="mx-6 hidden h-full py-6 lg:block">
            <Separator
              orientation="vertical"
              className={cn('bg-white transition-colors')}
            />
          </div>

          <nav
            className={cn(
              'hidden items-center gap-5 font-semibold text-white transition-colors lg:flex',
            )}
          >
            <Link
              to="/cdc-para-estetica"
              className={cn(
                'transition-all hover:brightness-75',
                pathname === '/cdc-para-estetica' &&
                  'underline underline-offset-2',
              )}
              title="Clique para ver as opções de CDC para estética"
            >
              CDC para estética
            </Link>

            <Link
              to="/cdc-para-empresas"
              className={cn(
                'transition-all hover:brightness-75',
                pathname === '/cdc-para-empresas' &&
                  'underline underline-offset-2',
              )}
              title="Clique para ver as opções de CDC para empresas"
            >
              CDC para Empresas
            </Link>

            <Link
              to="/emprestimo-pessoal"
              className={cn(
                'transition-all hover:brightness-75',
                pathname === '/emprestimo-pessoal' &&
                  'underline underline-offset-2',
              )}
              title="Clique para ver as opções de empréstimo pessoal"
            >
              Empréstimo pessoal
            </Link>
          </nav>
        </div>

        {!hasToggleStripe && (
          <div className="flex items-center gap-4">
            <Link
              target="_blank"
              to="https://www3.ucred.net.br/login"
              className={cn(
                'text-md hidden items-center rounded-xl border border-white bg-transparent px-8 py-3 text-white transition-all hover:bg-white hover:text-primary sm:flex',
              )}
              title="Clique para acessar sua conta"
            >
              <UserIcon className="mr-2 size-4" />
              Acessar minha conta
            </Link>

            <Link
              to="https://api.whatsapp.com/send?phone=554131954559&text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
              target="_blank"
              title="Clique para saber mais"
              className={cn(
                'text-md hidden items-center rounded-xl bg-white px-8 py-3 text-primary transition-all hover:bg-gradient-to-r hover:from-secondary-1 hover:via-secondary-3 hover:to-secondary-4 hover:text-white xl:flex',
              )}
            >
              <PhoneIcon className="mr-2 size-4" />
              Fale conosco
            </Link>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  type="button"
                  size="icon"
                  className={cn(
                    'text-md size-12 rounded-xl bg-white text-primary transition-all hover:hover:bg-gradient-to-r hover:from-secondary-1 hover:via-secondary-3 hover:to-secondary-4 hover:text-white lg:hidden',
                    isScrolled && 'bg-primary text-white',
                  )}
                  title="Clique para abrir o cabeçalho"
                >
                  <MenuIcon className="size-5" />
                </Button>
              </SheetTrigger>

              <SheetContent className="border-zinc-800 bg-primary">
                <div className="pointer-events-none flex select-none items-center justify-center gap-4">
                  <img
                    alt="Logo do Lounge Brahma"
                    className="h-20 w-32 object-cover"
                    src="/logo-white.png"
                  />
                </div>

                <nav className="mt-4 flex flex-col gap-3 text-zinc-200">
                  <SheetClose asChild>
                    <Link
                      to="/cdc-para-estetica"
                      className={cn(
                        'flex items-center gap-3 rounded-lg bg-primary-lighter px-4 py-3 transition-all hover:brightness-75',
                        pathname === '/cdc-para-estetica' &&
                          'bg-gradient-to-r from-secondary-1 via-secondary-3 to-secondary-4 text-white',
                      )}
                    >
                      CDC para estética
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link
                      to="/cdc-para-empresas"
                      className={cn(
                        'flex items-center gap-3 rounded-lg bg-primary-lighter px-4 py-3 transition-all hover:brightness-75',
                        pathname === '/cdc-para-empresas' &&
                          'bg-gradient-to-r from-secondary-1 via-secondary-3 to-secondary-4 text-white',
                      )}
                    >
                      CDC para Empresas
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link
                      to="/emprestimo-pessoal"
                      className={cn(
                        'flex items-center gap-3 rounded-lg bg-primary-lighter px-4 py-3 transition-all hover:brightness-75',
                        pathname === '/emprestimo-pessoal' &&
                          'bg-gradient-to-r from-secondary-1 via-secondary-3 to-secondary-4 text-white',
                      )}
                    >
                      Empréstimo pessoal
                    </Link>
                  </SheetClose>
                </nav>

                <div className="my-7 flex flex-row gap-3">
                  <Link
                    target="_blank"
                    title="Clique para visitar nosso Instagram"
                    to="https://www.instagram.com/ucredfinanceira/"
                    className="flex size-10 items-center justify-center rounded-full border text-zinc-100 transition-all hover:text-white hover:brightness-75"
                  >
                    <PiInstagramLogoThin className="size-5" />
                  </Link>

                  <Link
                    target="_blank"
                    title="Clique para visitar nosso Facebook"
                    to="https://www.facebook.com/Ucredfinanceira"
                    className="hover:bg-brand-gold-500 flex size-10 items-center justify-center rounded-full border text-zinc-300 transition-all hover:text-white hover:brightness-75"
                  >
                    <FaFacebookF className="size-5" />
                  </Link>

                  <Link
                    target="_blank"
                    title="Clique para visitar nosso WhatsApp"
                    to="https://api.whatsapp.com/send?phone=554131954559&text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
                    className="flex size-10 items-center justify-center rounded-full border text-zinc-300 transition-all hover:text-white hover:brightness-75"
                  >
                    <FaWhatsapp className="size-5" />
                  </Link>
                </div>

                <div className="text-sm text-zinc-500">
                  <h2>
                    @{new Date().getFullYear()} | Todos os direitos reservados -{' '}
                    <Link
                      to="/"
                      target="_blank"
                      className="text-blue-500 underline"
                    >
                      Termos de serviço
                    </Link>{' '}
                    &{' '}
                    <Link
                      to="/"
                      target="_blank"
                      className="text-blue-500 underline"
                    >
                      Política de privacidade
                    </Link>
                  </h2>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        )}
      </div>
    </header>
  )
}
