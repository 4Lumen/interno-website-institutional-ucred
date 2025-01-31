import { format } from 'date-fns'
import {
  BuildingIcon,
  CalendarCheckIcon,
  CheckCheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  CopyIcon,
  CreditCardIcon,
  InfoIcon,
  MailIcon,
  MapPinIcon,
  MenuIcon,
  PercentIcon,
  PhoneIcon,
  PlusIcon,
  RssIcon,
  UserCircle2Icon,
  UserIcon,
  WindIcon,
} from 'lucide-react'
import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FaFacebookF, FaYoutube } from 'react-icons/fa'
import {
  PiFacebookLogo,
  PiInstagramLogo,
  PiInstagramLogoThin,
  PiWhatsappLogo,
} from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { cn } from '../@config/lib/cn'
import { Reveal } from '../components/reveal'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion'
import { Button } from '../components/ui/button'
import { Separator } from '../components/ui/separator'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '../components/ui/sheet'

export function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  function setScroll() {
    if (window.scrollY > 0) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  window.addEventListener('scroll', setScroll)

  return (
    <main className="min-h-screen w-full">
      <header
        className={cn(
          'w-full bg-primary transition-all duration-300 ease-in-out',
          isScrolled && 'fixed top-0 z-50 bg-white shadow-sm',
        )}
      >
        <div
          className={cn(
            'flex items-center justify-center bg-white py-2 md:hidden',
            isScrolled && 'bg-primary text-white',
          )}
        >
          <InfoIcon className="mr-2 hidden size-4 text-amber-600 md:block" />
          <h2 className="md:text-md text-center text-sm">
            <span className="font-medium text-amber-600">Atenção!</span> A Ucred
            não solicita nenhum tipo <br /> de depósito antecipado para
            liberação de crédito.
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
              <img src="/logo-color.svg" alt="Logo da UCRED" className="h-14" />
            ) : (
              <img src="/logo.svg" alt="Logo da UCRED" className="h-14" />
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
                to="#"
                className="transition-all hover:brightness-75"
                title="Clique para ver as opções de crédito para estética"
              >
                Crédito para estética
              </Link>

              <Link
                to="#"
                className="transition-all hover:brightness-75"
                title="Clique para ver as opções de crédito para empresa"
              >
                Crédito para empresa
              </Link>

              <Link
                to="#"
                className="transition-all hover:brightness-75"
                title="Clique para ver as opções de empréstimo pessoal"
              >
                Empréstimo pessoal
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button
              type="button"
              variant="outline"
              className={cn(
                'text-md hidden rounded-xl border-white bg-transparent px-8 py-6 text-white transition-all hover:bg-white hover:text-primary sm:flex',
                isScrolled &&
                  'border-primary text-primary hover:bg-primary hover:text-white',
              )}
              title="Clique para acessar sua conta"
            >
              <UserIcon className="mr-2 size-4" />
              Acessar minha conta
            </Button>

            <Button
              type="button"
              className={cn(
                'text-md hidden rounded-xl bg-white px-8 py-6 text-primary transition-all hover:hover:bg-gradient-to-r hover:from-secondary-1 hover:via-secondary-3 hover:to-secondary-4 hover:text-white xl:flex',
                isScrolled && 'bg-primary text-white',
              )}
              title="Clique para entrar em contato conosco"
            >
              <PhoneIcon className="mr-2 size-4" />
              Fale conosco
            </Button>

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
                      to="/"
                      title="Próximos jogos"
                      className="flex items-center gap-3 rounded-lg bg-primary-lighter px-4 py-3 transition-all hover:brightness-75"
                    >
                      Crédito para estética
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link
                      to="/"
                      title="Próximos jogos"
                      className="flex items-center gap-3 rounded-lg bg-primary-lighter px-4 py-3 transition-all hover:brightness-75"
                    >
                      Crédito para empresa
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link
                      to="/"
                      title="Próximos jogos"
                      className="flex items-center gap-3 rounded-lg bg-primary-lighter px-4 py-3 transition-all hover:brightness-75"
                    >
                      Empréstimo pessoal
                    </Link>
                  </SheetClose>
                </nav>

                <div className="my-7 flex flex-row gap-3">
                  <Link
                    to=""
                    target="_blank"
                    title="Clique para visitar nosso Instagram"
                    className="flex size-10 items-center justify-center rounded-full border text-zinc-100 transition-all hover:bg-red-600 hover:text-white hover:brightness-75"
                  >
                    <PiInstagramLogoThin className="size-5" />
                  </Link>

                  <Link
                    to=""
                    target="_blank"
                    title="Clique para visitar nosso Facebook"
                    className="hover:bg-brand-gold-500 flex size-10 items-center justify-center rounded-full border text-zinc-300 transition-all hover:text-white hover:brightness-75"
                  >
                    <FaFacebookF className="size-5" />
                  </Link>

                  <Link
                    to=""
                    target="_blank"
                    title="Clique para visitar nosso Youtube"
                    className="flex size-10 items-center justify-center rounded-full border text-zinc-300 transition-all hover:bg-red-600 hover:text-white hover:brightness-75"
                  >
                    <FaYoutube className="size-5" />
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

      <section className="bg-primary bg-banner bg-cover bg-center bg-no-repeat py-12 lg:h-[calc(45rem-5rem)] lg:py-0">
        <div className="relative h-full">
          <Swiper
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: '.custom-pag-main',
            }}
            modules={[Pagination]}
            navigation={{
              nextEl: '.custom-next-main',
              prevEl: '.custom-prev-main',
            }}
            loop
            className="h-full"
          >
            <SwiperSlide className="w-full">
              <div className="container flex h-full w-full flex-col items-center gap-12 lg:flex-row">
                <div className="w-full flex-[1.2]">
                  <Reveal classes="hidden md:block">
                    <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl xl:text-6xl xl:leading-[4rem]">
                      Seu cliente paga <br /> parcelado, mas a sua empresa
                      recebe à vista
                    </h2>
                  </Reveal>

                  <Reveal classes="block md:hidden">
                    <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl xl:text-6xl xl:leading-[4rem]">
                      Seu cliente paga parcelado, mas a sua empresa recebe à
                      vista
                    </h2>
                  </Reveal>

                  <Reveal>
                    <p className="mt-4 text-lg text-zinc-200 md:text-xl lg:text-2xl">
                      Financiamento de procedimentos estéticos, produtos ou
                      serviços é na UCRED!
                    </p>
                  </Reveal>

                  <Reveal>
                    <Button
                      type="button"
                      title="Clique para saber mais"
                      className="text-md mt-6 rounded-xl bg-white px-8 py-6 text-primary transition-all hover:bg-gradient-to-r hover:from-secondary-1 hover:via-secondary-3 hover:to-secondary-4 hover:text-white"
                    >
                      <PlusIcon className="mr-2 size-4" />
                      Saiba mais
                    </Button>
                  </Reveal>
                </div>

                <div className="flex h-full w-full flex-[1.2] items-end">
                  <img
                    src="/banner-hero-test.png"
                    className="h-full w-full object-contain object-bottom"
                    alt="Imagem de um homem no computador"
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="w-full">
              <div className="container flex h-full w-full flex-col items-center gap-12 lg:flex-row">
                <div className="w-full flex-[1.2]">
                  <Reveal classes="hidden md:block">
                    <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-4xl xl:text-5xl xl:leading-[3.5rem]">
                      Crédito rápido e prático <br /> para realizar os projetos
                      que você sempre sonhou
                    </h2>
                  </Reveal>

                  <Reveal classes="block md:hidden">
                    <h2 className="block text-2xl font-bold tracking-tight text-white md:hidden md:text-4xl lg:text-5xl xl:text-6xl xl:leading-[4rem]">
                      Crédito rápido e prático para realizar os projetos que
                      você sempre sonhou
                    </h2>
                  </Reveal>

                  <Reveal>
                    <p className="mt-4 text-lg text-zinc-200 md:text-xl lg:text-2xl">
                      Conte com a gente para realizar seus maiores sonhos junto
                      com quem você ama.
                    </p>
                  </Reveal>

                  <Reveal>
                    <Button
                      type="button"
                      title="Clique para saber mais"
                      className="text-md mt-6 rounded-xl bg-white px-8 py-6 text-primary transition-all hover:hover:bg-gradient-to-r hover:from-secondary-1 hover:via-secondary-3 hover:to-secondary-4 hover:text-white"
                    >
                      <PlusIcon className="mr-2 size-4" />
                      Saiba mais
                    </Button>
                  </Reveal>
                </div>

                <div className="flex h-full w-full flex-[1.2] items-end">
                  <img
                    src="/banner-hero-test.png"
                    className="h-full w-full object-contain object-bottom"
                    alt="Imagem de um homem no computador"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <Reveal classes="w-full ">
            <div className="container relative mt-10 flex justify-center lg:-mt-20 lg:block">
              <div className="z-20 inline-flex items-center gap-4 lg:absolute lg:left-4 lg:top-0">
                <button className="custom-prev-main flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-white text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-primary">
                  <ChevronLeftIcon className="size-4" />
                </button>

                <div className={`custom-pag-main flex gap-2 rounded-full`} />

                <button className="custom-next-main flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-white text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-primary">
                  <ChevronRightIcon className="size-4" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="h-5 w-full bg-gradient-to-r from-secondary via-secondary-2 to-secondary-4" />

      <section className="container py-10">
        <div className="grid grid-cols-1 gap-14 rounded-2xl bg-primary bg-benefits bg-cover bg-center bg-no-repeat p-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-0">
          <Reveal>
            <div className="flex flex-col items-center space-y-4 text-white md:items-start">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary-lighter">
                <CreditCardIcon className="size-6" />
              </div>
              <h2 className="text-lg font-bold">Crédito de até R$8.000,00</h2>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col items-center space-y-4 text-white md:items-start">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary-lighter">
                <CalendarCheckIcon className="size-6" />
              </div>
              <h2 className="text-lg font-bold">Até 24x meses para pagar</h2>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col items-center space-y-4 text-white md:items-start">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary-lighter">
                <PercentIcon className="size-6" />
              </div>
              <h2 className="text-lg font-bold">Taxa de 3,99% A.M</h2>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col items-center space-y-4 text-white md:items-start">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary-lighter">
                <UserIcon className="size-6" />
              </div>
              <h2 className="text-lg font-bold">Área do cliente exclusiva</h2>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="overflow-hidden rounded-tl-[3rem] border-y-2 border-zinc-200 bg-zinc-100 md:rounded-br-[4rem] md:rounded-tl-[4rem]">
        <div className="container flex flex-col gap-6 md:flex-row">
          <div className="flex w-full flex-[1.2] flex-col justify-center py-10">
            <Reveal>
              <span className="text-xl font-semibold text-primary lg:text-2xl">
                Soluções financeiras
              </span>
            </Reveal>
            <Reveal>
              <h2 className="mt-3 text-3xl font-extrabold text-zinc-600 lg:text-4xl xl:text-5xl">
                Na UCRED você pode <br /> confiar de olhos fechados
              </h2>
            </Reveal>

            <Reveal>
              <p className="mt-5 text-lg font-medium text-zinc-600">
                A UCRED Serviços Financeiros é uma correspondente bancária da
                GIROTECH que está atuando há 17 anos no mercado financeiro
                profissional.
                <br />
                <br />O nosso produto é o crédito pessoal, sem exigência de
                garantias, com taxas que variam em função do perfil de crédito
                de cada cliente.
              </p>
            </Reveal>
          </div>
          <div className="flex w-full flex-1 items-center justify-center bg-primary bg-about bg-cover bg-center bg-no-repeat pt-4 md:max-h-[29rem]">
            <img
              alt="Imagem uma mulher no telefone"
              src="/imagens/mulher-telefone.png"
              className="pointer-events-none h-full w-full select-none object-cover object-bottom"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container py-14">
          <div className="after:content=['*'] via-88% relative flex flex-col gap-1 from-secondary-1 via-secondary-2 via-50% to-secondary text-zinc-600 after:absolute after:h-full after:w-1 after:bg-gradient-to-b">
            <Reveal>
              <h2 className="pl-4 text-2xl font-bold md:pl-8 md:text-4xl">
                Agilidade e praticidade
              </h2>
            </Reveal>
            <Reveal>
              <p className="pl-4 text-sm font-medium md:pl-8 md:text-lg 2xl:text-lg">
                Confira algumas vantagens de ser UCRED
              </p>
            </Reveal>
          </div>

          <div className="mt-12">
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                },
                600: {
                  slidesPerView: 2,
                },
                900: {
                  slidesPerView: 3,
                },
                1300: {
                  slidesPerView: 4,
                },
              }}
              pagination={{
                clickable: true,
                el: '.custom-pag-advantages',
              }}
              modules={[Pagination, Autoplay]}
              autoplay={{
                delay: 7000,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                nextEl: '.custom-next-advantages',
                prevEl: '.custom-prev-advantages',
              }}
              loop
            >
              <SwiperSlide className="rounded-xl border-2 border-[#DDDDDD] bg-[#F8F8F8] text-primary">
                <Reveal>
                  <div className="flex flex-col items-start gap-2 px-5 py-10">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-primary-lighter text-white">
                      <RssIcon className="size-6" />
                    </div>

                    <p className="text-xl font-bold text-zinc-600/80">
                      Aprovação on-line <br /> do seu crédito
                    </p>
                  </div>
                </Reveal>
              </SwiperSlide>

              <SwiperSlide className="rounded-xl border-2 border-[#DDDDDD] bg-[#F8F8F8] text-primary">
                <Reveal>
                  <div className="flex flex-col items-start gap-2 px-5 py-10">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-primary-lighter text-white">
                      <PhoneIcon className="size-6" />
                    </div>

                    <p className="text-xl font-bold text-zinc-600/80">
                      Atendimento ao <br /> lojista credenciado
                    </p>
                  </div>
                </Reveal>
              </SwiperSlide>

              <SwiperSlide className="rounded-xl border-2 border-[#DDDDDD] bg-[#F8F8F8] text-primary">
                <Reveal>
                  <div className="flex flex-col items-start gap-2 px-5 py-10">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-primary-lighter text-white">
                      <ClockIcon className="size-6" />
                    </div>

                    <p className="text-xl font-bold text-zinc-600/80">
                      Aprovação em até <br /> 10 minutos pela mesa
                    </p>
                  </div>
                </Reveal>
              </SwiperSlide>

              <SwiperSlide className="rounded-xl border-2 border-[#DDDDDD] bg-[#F8F8F8] text-primary">
                <Reveal>
                  <div className="flex flex-col items-start gap-2 px-5 py-10">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-primary-lighter text-white">
                      <CheckCheckIcon className="size-6" />
                    </div>

                    <p className="text-xl font-bold text-zinc-600/80">
                      Pré análise para <br /> aprovação de crédito
                    </p>
                  </div>
                </Reveal>
              </SwiperSlide>

              <SwiperSlide className="rounded-xl border-2 border-[#DDDDDD] bg-[#F8F8F8] text-primary">
                <Reveal>
                  <div className="flex flex-col items-start gap-2 px-5 py-10">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-primary-lighter text-white">
                      <CalendarCheckIcon className="size-6" />
                    </div>

                    <p className="text-xl font-bold text-zinc-600/80">
                      Carnê digital <br /> personalizado
                    </p>
                  </div>
                </Reveal>
              </SwiperSlide>

              <SwiperSlide className="rounded-xl border-2 border-[#DDDDDD] bg-[#F8F8F8] text-primary">
                <Reveal>
                  <div className="flex flex-col items-start gap-2 px-5 py-10">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-primary-lighter text-white">
                      <UserIcon className="size-6" />
                    </div>

                    <p className="text-xl font-bold text-zinc-600/80">
                      Empréstimo pessoal <br /> sem garantia real
                    </p>
                  </div>
                </Reveal>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between md:flex-row">
            <Reveal>
              <div className="z-20 inline-flex items-center gap-4">
                <button className="custom-prev-advantages flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-primary text-primary transition-all duration-500 ease-in-out hover:bg-white hover:text-primary">
                  <ChevronLeftIcon className="size-4" />
                </button>

                <div
                  className={`custom-pag-advantages flex gap-2 rounded-full`}
                />

                <button className="custom-next-advantages flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-primary text-primary transition-all duration-500 ease-in-out hover:bg-white hover:text-primary">
                  <ChevronRightIcon className="size-4" />
                </button>
              </div>
            </Reveal>

            <Reveal>
              <Button
                type="button"
                className={cn(
                  'text-md mt-5 rounded-xl bg-white px-8 py-6 text-primary transition-all hover:hover:bg-gradient-to-r hover:from-secondary-1 hover:via-secondary-3 hover:to-secondary-4 hover:text-white md:mt-0',
                  isScrolled && 'bg-primary text-white',
                )}
                title="Clique para entrar em contato conosco"
              >
                <PhoneIcon className="mr-2 size-4" />
                Comece agora
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="rounded-bl-[3rem] rounded-tl-[3rem] bg-primary 2xl:rounded-bl-[30rem] 2xl:rounded-tl-[30rem]">
        <div className="container py-28">
          <div className="after:content=['*'] via-88% relative flex flex-col gap-1 from-secondary-1 via-secondary-2 via-50% to-secondary text-white after:absolute after:h-full after:w-1 after:bg-gradient-to-b">
            <Reveal>
              <h2 className="pl-4 text-2xl font-bold md:pl-8 md:text-4xl">
                Perfeito para vários segmentos
              </h2>
            </Reveal>
            <Reveal>
              <p className="pl-4 text-sm font-medium md:pl-8 md:text-lg 2xl:text-lg">
                Confira alguns segmentos que a UCRED trabalha
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
            <Reveal>
              <div className="flex items-start gap-5">
                <div className="flex size-16 shrink-0 items-center justify-center rounded-lg bg-primary-lighter text-white">
                  <BuildingIcon className="size-9" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    Para empresas
                  </h2>
                  <p className="text-md mt-1 font-medium text-zinc-100">
                    O serviço de crédito que a Ucred disponibiliza não se
                    restringe apenas a companhias de saúde e estética.
                  </p>

                  <Button
                    type="button"
                    className="text-md mt-5 rounded-xl bg-primary-lighter px-8 py-6 text-white transition-all hover:brightness-90"
                    title="Clique para saber mais"
                  >
                    <PlusIcon className="mr-2 size-4" />
                    Saiba mais
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex items-start gap-5">
                <div className="flex size-16 shrink-0 items-center justify-center rounded-lg bg-primary-lighter text-white">
                  <WindIcon className="size-9" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    Para estéticas
                  </h2>
                  <p className="text-md mt-1 font-medium text-zinc-100">
                    Agora as empresas de estética, beleza, saúde e bem-estar
                    podem contar com um sistema de crédito personalizado.
                  </p>

                  <Button
                    type="button"
                    className="text-md mt-5 rounded-xl bg-primary-lighter px-8 py-6 text-white transition-all hover:brightness-90"
                    title="Clique para saber mais"
                  >
                    <PlusIcon className="mr-2 size-4" />
                    Saiba mais
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex items-start gap-5">
                <div className="flex size-16 shrink-0 items-center justify-center rounded-lg bg-primary-lighter text-white">
                  <UserCircle2Icon className="size-9" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    Empréstimo pessoal
                  </h2>
                  <p className="text-md mt-1 font-medium text-zinc-100">
                    Além da pessoa jurídica, a pessoa física também tem direito
                    a utilizar o sistema de crédito personalizado da Ucred.
                  </p>

                  <Button
                    type="button"
                    title="Clique para saber mais"
                    className="text-md mt-5 rounded-xl bg-primary-lighter px-8 py-6 text-white transition-all hover:brightness-90"
                  >
                    <PlusIcon className="mr-2 size-4" />
                    Saiba mais
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container py-14">
        <Reveal>
          <h2 className="pb-10 text-center text-xl font-semibold text-zinc-800 lg:text-4xl">
            Perguntas frequentes
          </h2>
        </Reveal>

        <div className="flex items-center justify-center rounded-xl border-2 bg-zinc-50 p-5">
          <Reveal classes="w-full">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  Como tirar a segunda via do boleto?
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-inside list-disc space-y-2.5 text-lg font-medium text-primary">
                    <li>
                      Para tirar a 2ª via do boleto, só acessar a área do
                      cliente no site da Ucred e fazer a solicitação
                    </li>
                    <li>Através da unidade onde efetuou a sua compra</li>
                    <li>Ou através dos telefones de contato da cobrança</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  Como fazer antecipação do pagamento?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg font-medium text-primary">
                    Entrando em contato com o setor de cobrança é gerado um
                    boleto de antecipação único
                  </p>

                  <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-center">
                    <div className="flex items-center gap-2">
                      <div className="shrink-0 rounded-lg bg-primary p-3 text-white">
                        <PhoneIcon className="size-4" />
                      </div>
                      <h2 className="text-lg font-medium">(41) 99946-0468</h2>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="shrink-0 rounded-lg bg-primary p-3 text-white">
                        <PhoneIcon className="size-4" />
                      </div>
                      <h2 className="text-lg font-medium">(41) 99801-0077</h2>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="shrink-0 rounded-lg bg-primary p-3 text-white">
                        <MailIcon className="size-4" />
                      </div>
                      <h2 className="text-lg font-medium">
                        cobranca@ucredit.com.br
                      </h2>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Como fazer a atualização de um boleto
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-inside list-disc space-y-2.5 text-lg font-medium text-primary">
                    <li>
                      O boleto pode ser pago através de aplicativos bancários,
                      lotéricas e bancos, com até 60 dias de atraso
                    </li>
                    <li>
                      Após este período, será necessário ligar nos contatos de
                      cobrança e solicitar um boleto atualizado
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  Como proceder em caso de cancelamento do contrato
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg font-medium text-primary">
                    O cancelamento é tratado diretamente com o lojista
                    <br />
                    <br />
                    Em caso de dúvidas procurar o setor administrativo da Ucred
                  </p>

                  <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-center">
                    <div className="flex items-center gap-2">
                      <div className="shrink-0 rounded-lg bg-primary p-3 text-white">
                        <PhoneIcon className="size-4" />
                      </div>
                      <h2 className="text-lg font-medium">(41) 99946-0211</h2>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="shrink-0 rounded-lg bg-primary p-3 text-white">
                        <PhoneIcon className="size-4" />
                      </div>
                      <h2 className="text-lg font-medium">(41) 99525-0294</h2>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="shrink-0 rounded-lg bg-primary p-3 text-white">
                        <MailIcon className="size-4" />
                      </div>
                      <h2 className="text-lg font-medium">
                        administrativo@ucredit.com.br
                      </h2>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  Como proceder em caso de negativa de crédito?
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-inside list-disc space-y-2.5 text-lg font-medium text-primary">
                    <li>
                      Procure a unidade onde foi solicitado o crédito para
                      compreender o motivo específico
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Reveal>
        </div>
      </section>

      <section className="relative">
        <iframe
          width="100%"
          height="540"
          loading="lazy"
          className="pointer-events-none select-none"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.46301901558!2d-43.35699382384616!3d-21.762333980076995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989bec5f0efa97%3A0x37407cb0eaedc11!2sUCred!5e0!3m2!1spt-BR!2sbr!4v1737993445088!5m2!1spt-BR!2sbr"
        />

        <div className="container absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2">
          <div className="w-full rounded-2xl border-4 border-primary-lighter bg-primary p-7 backdrop-blur-sm md:w-[60%] lg:w-[40%]">
            <Reveal>
              <h1 className="text-2xl font-bold text-white">
                Nossa localização
              </h1>
            </Reveal>

            <Reveal>
              <div className="mt-4 flex w-full items-center justify-between gap-5 rounded-md bg-primary-lighter p-3">
                <h1 className="text-sm font-semibold text-white">
                  Rua Emiliano Perneta, 424 - Conj. 21/22 - Centro - Curitiba -
                  PR
                </h1>

                <CopyToClipboard
                  text="Rua Emiliano Perneta, 424 - Conj. 21/22 - Centro - Curitiba - PR"
                  onCopy={() => toast.success('Endereço copiado com sucesso')}
                >
                  <div
                    title="Clique para copiar o endereço"
                    className="scaled-95 cursor-pointer rounded-md bg-white p-2 text-primary transition-all hover:brightness-75"
                  >
                    <CopyIcon size={20} />
                  </div>
                </CopyToClipboard>
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-4 flex w-full items-center justify-between gap-5 rounded-md bg-primary-lighter p-3">
                <h1 className="text-sm font-semibold text-white">
                  Av. Ipanema, 165 - 6º andar - Empresarial 18 do Forte -
                  Barueri - SP
                </h1>

                <CopyToClipboard
                  text="Av. Ipanema, 165 - 6º andar - Empresarial 18 do Forte - Barueri - SP"
                  onCopy={() => toast.success('Endereço copiado com sucesso')}
                >
                  <div
                    title="Clique para copiar o endereço"
                    className="scaled-95 cursor-pointer rounded-md bg-white p-2 text-primary transition-all hover:brightness-75"
                  >
                    <CopyIcon size={20} />
                  </div>
                </CopyToClipboard>
              </div>
            </Reveal>

            <Reveal>
              <Link
                target="_blank"
                title="Clique para criar uma rota até a nossa localização"
                className="mt-3 flex w-full select-none items-center justify-center rounded-md bg-gradient-to-r from-secondary via-secondary-3 to-secondary-4 px-4 py-3 font-medium text-white hover:brightness-95"
                to="https://www.google.com.br/maps/dir//UCred+-+R.+Tiradentes,+781+-+n%C2%BA+301+-+Centro,+Juiz+de+Fora+-+MG,+36015-360/@-21.762334,-43.3569938,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x989bec5f0efa97:0x37407cb0eaedc11!2m2!1d-43.3544189!2d-21.762334!3e0?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
              >
                <MapPinIcon className="mr-2 size-4" />
                Criar rota para nossa localização
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="bg-primary">
        <div className="bg-primary-lighter">
          <div className="container flex flex-col gap-7 py-6 lg:flex-row lg:items-center lg:py-4">
            <Link
              to="/"
              title="Clique para voltar ao início"
              className="shrink-0"
            >
              <img className="h-12" alt="Logo da UCRED" src="/logo.svg" />
            </Link>

            <p className="text-md font-medium text-zinc-200">
              A UCRED Serviços Financeiros é uma correspondente bancária da
              GIROTECH que está atuando há 17 anos no mercado financeiro
              profissional. O nosso produto é o crédito pessoal, sem exigência
              de garantias, com taxas que variam em função do perfil de crédito
              de cada cliente.
            </p>
          </div>
        </div>

        <div className="container grid w-full grid-cols-1 gap-10 py-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          <div className="flex">
            <div className="flex w-full flex-col items-center text-center md:items-start md:text-left">
              <h1 className="text-xl font-semibold text-zinc-200">Menu</h1>

              <div className="mt-4 flex flex-col items-center gap-2 text-zinc-200 md:items-start md:text-left">
                <Link
                  to="/credito-para-estetica"
                  title="Crédito para estética"
                  className={cn(
                    'flex items-center gap-2 transition-all hover:ml-2',
                  )}
                >
                  Crédito para estética
                </Link>

                <Link
                  to="/credito-para-empresa"
                  title="Crédito para empresa"
                  className={cn(
                    'flex items-center gap-2 transition-all hover:ml-2',
                  )}
                >
                  Crédito para empresa
                </Link>

                <Link
                  to="/emprestimo-pessoal"
                  title="Empréstimo pessoal"
                  className={cn(
                    'flex items-center gap-2 transition-all hover:ml-2',
                  )}
                >
                  Empréstimo pessoal
                </Link>

                <Link
                  to="/termos-de-uso"
                  title="Termos de uso"
                  className={cn(
                    'flex items-center gap-2 transition-all hover:ml-2',
                  )}
                >
                  Termos de uso
                </Link>

                <Link
                  to="/politica-de-privacidade"
                  title="Política de privacidade"
                  className={cn(
                    'flex items-center gap-2 transition-all hover:ml-2',
                  )}
                >
                  Política de privacidade
                </Link>

                <Link
                  to="/politica-de-cookies"
                  title="Política de Cookies"
                  className={cn(
                    'flex items-center gap-2 transition-all hover:ml-2',
                  )}
                >
                  Política de Cookies
                </Link>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="flex w-full flex-col items-center text-center md:items-start md:text-left">
              <h1 className="text-xl font-semibold text-zinc-200">
                Redes sociais
              </h1>

              <div className="mt-4 flex flex-col items-center gap-2 text-zinc-200 md:items-start md:text-left">
                <Link
                  to=""
                  target="_blank"
                  title="Clique para ir ao nosso Instagram"
                  className="flex items-center gap-2 transition-all hover:ml-2"
                >
                  <PiInstagramLogo className="size-6" />
                  Instagram
                </Link>
                <Link
                  to=""
                  target="_blank"
                  title="Clique para ir ao nosso Facebook"
                  className="flex items-center gap-2 transition-all hover:ml-2"
                >
                  <PiFacebookLogo className="size-6" />
                  Facebook
                </Link>

                <Link
                  to=""
                  target="_blank"
                  title="Clique para ir ao nosso WhatsApp"
                  className="flex items-center gap-2 transition-all hover:ml-2"
                >
                  <PiWhatsappLogo className="size-6" />
                  WhatsApp
                </Link>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="flex w-full flex-col items-center text-center md:items-start md:text-left">
              <h1 className="text-xl font-semibold text-zinc-200">Contato</h1>
              <div className="mt-4 flex flex-col items-center gap-2 text-zinc-200 md:items-start md:text-left">
                <Link
                  to=""
                  target="_blank"
                  className="flex items-center gap-2 transition-all hover:ml-2"
                  title="Clique para ir ao nosso E-mail"
                >
                  E-mail
                </Link>

                <Link
                  to=""
                  target="_blank"
                  className="flex items-center gap-2 transition-all hover:ml-2"
                  title="Clique para ir ao nosso WhatsApp"
                >
                  WhatsApp
                </Link>

                <Link
                  to=""
                  target="_blank"
                  className="flex items-center gap-2 transition-all hover:ml-2"
                  title="Clique para ir ao nosso endereço"
                >
                  Endereço
                </Link>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="flex w-full flex-col items-center text-center md:items-start md:text-left">
              <h1 className="text-xl font-semibold text-zinc-200">
                Newsletter
              </h1>
              <p className="mt-2 text-sm text-zinc-200">
                Receba as últimas novidades
              </p>

              <input
                type="text"
                placeholder="Digite seu melhor e-mail"
                className="mt-3 h-10 rounded-md bg-primary-lighter px-4 text-sm text-zinc-200 outline-none transition-all placeholder:text-sm focus:ring-4 focus:ring-primary-lighter md:w-full"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-t-primary-lighter">
          <div className="container py-4">
            <p className="text-xs text-zinc-100">
              IWF Serviços de Apoio Administ. - Eireli, com nome fantasia UCRED,
              inscrita no CNPJ sob nº 06.376.451/0001-04, com sede à Rua
              Emiliano Perneta, 424 - Conj. 21/22 - Centro - Curitiba - PR{' '}
              <br />
              A Ucred não é uma financeira: somos um correspondente bancário
              Giro Sociedade de Crédito Direto S/A, inscrita no CNPJ sob nº
              40.112.555/0001-40, com sede à Rua Visconde do Rio Branco, 1488 -
              Sala 1006 - Centro - Curitiba - PR <br />
              A Ucred não cobra nenhum valor antecipado para aprovar ou
              depositar seu crédito. Caso você seja contatado por alguém, se
              passando pela Ucred, e cobrando qualquer valor antecipado, encerre
              o contato imediatamente e entre em contato com a gente. Você pode
              estar sendo vítima de uma tentativa de fraude. <br />O atraso no
              pagamento das prestações do seu empréstimo pessoal pode ter como
              consequência a inclusão do seu nome nos cadastros de inadimplentes
              dos órgãos de proteção ao crédito, o protesto de títulos e, ainda,
              o ajuizamento de ações judiciais de cobrança, dentre outras. Para
              evitar maiores problemas e restrições ao seu crédito, mantenha
              sempre o pagamento de suas parcelas em dia. <br />O período mínimo
              é de 3 meses e o máximo 24 meses. Taxa de juros: <br />A taxa
              varia entre 5,99% e 18,9% ao mês (149% a 376,74% ao ano). <br />
              Exemplo de um empréstimo: R$ 1.500,00, para pagar em 24 meses e
              taxa de juros de 13,90% ao mês (376,74% ao ano). Total de 24
              parcelas de R$ 224,40. Valor total a pagar igual a R$ 5.385,60.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center border-t border-t-primary-lighter py-4 text-xs text-white lg:flex-row">
          @{format(new Date(), 'yyyy')} UCRED | Todos os direitos reservados -
          Powered by
          <span className="ml-1">
            <Link
              to="/"
              target="_blank"
              className="underline underline-offset-2"
            >
              {' '}
              RP Desenvolvimentos & 4Lumen
            </Link>
          </span>
        </div>
      </footer>
    </main>
  )
}
