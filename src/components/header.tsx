import { InfoIcon, MenuIcon, PhoneIcon, UserIcon } from 'lucide-react'
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
        'w-full bg-primary transition-all duration-300 ease-in-out',
        isScrolled && 'fixed top-0 z-50 bg-white shadow-sm',
      )}
    >
      <AcceptCookies />

      <div
        className={cn(
          'flex items-center justify-center bg-white py-2 md:hidden',
          isScrolled && 'bg-primary text-white',
        )}
      >
        <InfoIcon className="mr-2 hidden size-4 text-amber-600 md:block" />
        <h2 className="md:text-md text-center text-sm">
          <span className="font-medium text-amber-600">Atenção!</span> A Ucred
          não solicita nenhum tipo <br /> de depósito antecipado para liberação
          de crédito.
        </h2>
      </div>

      <div
        className={cn(
          'hidden items-center justify-center bg-white py-2 md:flex',
          isScrolled && 'bg-primary text-white',
        )}
      >
        <InfoIcon className="mr-2 hidden size-4 text-amber-600 md:block" />
        <h2 className="md:text-md text-center text-sm">
          <span className="font-medium text-amber-600">Atenção!</span> A Ucred
          não solicita nenhum tipo de depósito antecipado para liberação de
          crédito.
        </h2>
      </div>

      <div className="container flex h-20 items-center justify-between">
        <div className="flex h-full items-center">
          {isScrolled ? (
            <Link
              to="/"
              className="select-none"
              title="Clique para ir na tela de início"
            >
              <img
                src="/logo-color.svg"
                alt="Logo da UCRED"
                className="h-14 select-none"
              />
            </Link>
          ) : (
            <Link title="Clique para ir na tela de início" to="/">
              <img src="/logo.svg" alt="Logo da UCRED" className="h-14" />
            </Link>
          )}

          <div className="mx-6 hidden h-full py-6 lg:block">
            <Separator
              orientation="vertical"
              className={cn(
                'bg-white transition-colors',
                isScrolled && 'bg-primary',
              )}
            />
          </div>

          <nav
            className={cn(
              'hidden items-center gap-5 font-semibold text-white transition-colors lg:flex',
              isScrolled && 'text-primary',
            )}
          >
            <Link
              to="/credito-para-estetica"
              className={cn(
                'transition-all hover:brightness-75',
                pathname === '/credito-para-estetica' &&
                  'underline underline-offset-2',
              )}
              title="Clique para ver as opções de crédito para estética"
            >
              Crédito para estética
            </Link>

            <Link
              to="/credito-para-empresa"
              className={cn(
                'transition-all hover:brightness-75',
                pathname === '/credito-para-empresa' &&
                  'underline underline-offset-2',
              )}
              title="Clique para ver as opções de crédito para empresa"
            >
              Crédito para empresa
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

        <div className="flex items-center gap-4">
          <Link
            target="_blank"
            to="https://www3.ucred.net.br/login"
            className={cn(
              'text-md hidden items-center rounded-xl border border-white bg-transparent px-8 py-3 text-white transition-all hover:bg-white hover:text-primary sm:flex',
              isScrolled &&
                'border-primary text-primary hover:bg-primary hover:text-white',
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
              isScrolled && 'bg-primary text-white',
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
                  className="w-32 object-contain"
                  src="/logo.svg"
                />
              </div>

              <nav className="mt-4 flex flex-col gap-3 text-zinc-200">
                <SheetClose asChild>
                  <Link
                    to="/credito-para-estetica"
                    className={cn(
                      'flex items-center gap-3 rounded-lg bg-primary-lighter px-4 py-3 transition-all hover:brightness-75',
                      pathname === '/credito-para-estetica' &&
                        'bg-gradient-to-r from-secondary-1 via-secondary-3 to-secondary-4 text-white',
                    )}
                  >
                    Crédito para estética
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link
                    to="/credito-para-empresa"
                    className={cn(
                      'flex items-center gap-3 rounded-lg bg-primary-lighter px-4 py-3 transition-all hover:brightness-75',
                      pathname === '/credito-para-empresa' &&
                        'bg-gradient-to-r from-secondary-1 via-secondary-3 to-secondary-4 text-white',
                    )}
                  >
                    Crédito para empresa
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
      </div>
    </header>
  )
}
