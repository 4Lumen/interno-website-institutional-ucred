import {
  BuildingIcon,
  CheckCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  PercentIcon,
  PhoneCallIcon,
  PhoneIcon,
  PlusIcon,
} from 'lucide-react'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { FaNetworkWired } from 'react-icons/fa'
import { FiInbox } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { cn } from '../../@config/lib/cn'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import { Reveal } from '../../components/reveal'
import { Button } from '../../components/ui/button'

export function EmprestimoPessoalPage() {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <main className="min-h-screen w-full">
      <Helmet title="Empréstimo pessoal" />

      <Header />

      <section className="rounded-b-[3rem] bg-primary bg-banner bg-cover bg-center bg-no-repeat py-12 md:rounded-b-[5rem] lg:h-[calc(45rem-5rem)] lg:py-0">
        <div className="relative h-full">
          <div className="container flex h-full w-full flex-col items-center gap-12 lg:flex-row">
            <div className="w-full flex-[1.2]">
              <Reveal classes="hidden md:block">
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl xl:text-6xl xl:leading-[4rem]">
                  Realize seu sonho <br /> junto com a{' '}
                  <span className="bg-gradient-to-r from-secondary-1 via-secondary-3 to-secondary-4 bg-clip-text text-transparent">
                    UCRED
                  </span>
                </h2>
              </Reveal>

              <Reveal classes="block md:hidden">
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl xl:text-6xl xl:leading-[4rem]">
                  Realize seu sonho <br /> junto com a{' '}
                  <span className="bg-gradient-to-r from-secondary-1 via-secondary-3 to-secondary-4 bg-clip-text text-transparent">
                    UCRED
                  </span>
                </h2>
              </Reveal>

              <Reveal>
                <p className="mt-4 text-lg text-zinc-200 md:text-xl lg:text-xl">
                  Disponibilizamos empréstimos de até R$8 mil para que homens e
                  mulheres, de 18 a 80 anos, de qualquer lugar do Brasil, possam
                  realizar, nas empresas que se filiaram ao nosso sistema de
                  financiamento, o serviço que sempre sonharam ou então,
                  obtenham um produto que sempre almejaram.
                </p>
              </Reveal>

              <Reveal>
                <Button
                  type="button"
                  onClick={() =>
                    window.scroll({
                      behavior: 'smooth',
                      top: 500,
                    })
                  }
                  title="Clique para saber mais"
                  className="text-md mt-6 rounded-xl bg-white px-8 py-6 text-primary transition-all hover:bg-gradient-to-r hover:from-secondary-1 hover:via-secondary-3 hover:to-secondary-4 hover:text-white"
                >
                  <PlusIcon className="mr-2 size-4" />
                  Saiba mais
                </Button>
              </Reveal>
            </div>

            <div className="h-full w-full flex-[1.2] items-end lg:hidden xl:flex">
              <img
                src="/banner-hero.png"
                className="h-full w-full object-contain object-bottom"
                alt="Imagem de um homem no computador"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-14">
          <div className="flex flex-col gap-20 border-b-2 pb-10 lg:flex-row lg:items-end">
            <div>
              <Reveal>
                <h2 className="mt-3 text-3xl font-extrabold text-zinc-600 lg:text-4xl xl:text-5xl">
                  Chegou a hora de <br /> realizar o grande sonho
                </h2>
              </Reveal>
              <Reveal>
                <p className="mt-4 text-lg font-medium text-zinc-600">
                  Com a Ucred Serviços Financeiros você tem mais chances de
                  realizar o seu sonho.
                  <br />
                  <br />
                  Disponibilizamos empréstimos de até R$8 mil para que homens e
                  mulheres, de 18 a 80 anos, de qualquer lugar do Brasil, possam
                  realizar, nas empresas que se filiaram ao nosso sistema de
                  financiamento, o serviço que sempre sonharam ou então,
                  obtenham um produto que sempre almejaram.
                  <br />
                  <br />
                  Através do nosso sistema totalmente digital, você tem mais
                  facilidade e praticidade para administrar o crédito obtido,
                  saber quanto pode gastar em cada estabelecimento, as formas de
                  parcelamento e muito mais!
                </p>
              </Reveal>
            </div>

            <Reveal>
              <Link
                to="https://www3.ucred.net.br/novo-cliente"
                target="_blank"
                className={cn(
                  'text-md mt-5 flex shrink-0 items-center whitespace-nowrap rounded-xl bg-primary px-8 py-3 text-white transition-all hover:hover:bg-gradient-to-r hover:from-secondary-1 hover:via-secondary-3 hover:to-secondary-4 hover:text-white md:mt-0',
                )}
                title="Clique para solicitar meu empréstimo"
              >
                <PlusIcon className="mr-2 size-4" />
                Solicitar meu empréstimo
              </Link>
            </Reveal>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
            <Reveal>
              <div>
                <div className="flex size-16 shrink-0 items-center justify-center rounded-lg bg-primary-lighter text-white">
                  <BuildingIcon className="size-9" />
                </div>
                <div className="mt-5">
                  <h2 className="text-xl font-semibold text-zinc-600">
                    Presença nacional
                  </h2>
                  <p className="text-md mt-1 font-medium text-zinc-600">
                    A UCRED está presente, oferecendo soluções de crédito
                    acessíveis e seguras para diversos segmentos do mercado.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <div className="flex size-16 shrink-0 items-center justify-center rounded-lg bg-primary-lighter text-white">
                  <PlusIcon className="size-9" />
                </div>
                <div className="mt-5">
                  <h2 className="text-xl font-semibold text-zinc-600">
                    Experiência
                  </h2>
                  <p className="text-md mt-1 font-medium text-zinc-600">
                    Com anos de atuação no mercado, a UCRED se consolidou como
                    referência em crédito, atendendo clínicas de estética.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <div className="flex size-16 shrink-0 items-center justify-center rounded-lg bg-primary-lighter text-white">
                  <PhoneCallIcon className="size-9" />
                </div>
                <div className="mt-5">
                  <h2 className="text-xl font-semibold text-zinc-600">
                    Suporte
                  </h2>
                  <p className="text-md mt-1 font-medium text-zinc-600">
                    Nosso time de especialistas está sempre disponível para
                    oferecer suporte completo em todas as etapas do processo.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-tl-[3rem] border-y-2 border-zinc-200 bg-zinc-100 md:rounded-br-[4rem] md:rounded-tl-[4rem]">
        <div className="container py-14">
          <div className="flex w-full flex-col justify-center lg:items-center">
            <Reveal>
              <span className="text-md rounded-full bg-primary px-3 py-1 font-semibold text-white lg:text-xl">
                Soluções financeiras
              </span>
            </Reveal>

            <Reveal classes="hidden lg:block">
              <h2 className="mt-3 text-3xl font-extrabold text-zinc-600 lg:text-4xl xl:text-4xl">
                Praticidade em apenas um click!
              </h2>
            </Reveal>

            <Reveal classes="block lg:hidden">
              <h2 className="mt-3 text-3xl font-extrabold text-zinc-600 lg:text-4xl xl:text-4xl">
                Praticidade em <br /> apenas um click!
              </h2>
            </Reveal>

            <Reveal>
              <p className="mt-3 max-w-xl text-xl font-medium text-zinc-600 lg:text-center">
                Na Ucred Serviços Financeiros oferecemos um atendimento ágil,
                com aprovação on-line e de forma facilitadora.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-10 flex flex-col items-center gap-5 lg:flex-row">
              <div className="flex justify-center rounded-tl-xl rounded-tr-xl border bg-white p-5 lg:rounded-tr-none lg:p-10">
                <div className="flex flex-[1.5] items-start gap-4">
                  <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    1
                  </div>
                  <p>
                    Após entrar em contato conosco através do nosso site, basta
                    clicar na aba direcionada para o lojista, preencher o
                    formulário que disponibilizamos na plataforma, anexar os
                    documentos necessários e pronto.
                  </p>
                </div>
              </div>

              <div className="flex justify-center border bg-white p-5 lg:rounded-tr-xl lg:p-10">
                <div className="flex flex-1 items-start gap-4">
                  <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    2
                  </div>
                  <p>
                    A equipe responsável em breve estará entrando em contato com
                    a empresa para começarmos a fechar nossa parceria.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-5 flex flex-col justify-center gap-6 rounded-b-xl border bg-white p-5 lg:flex-row lg:items-end lg:gap-20 lg:p-10">
              <div className="flex flex-1 items-start gap-4">
                <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  3
                </div>
                <p className="font-semibold text-zinc-600 lg:text-2xl">
                  Seremos o parceiro ideal para fazer a sua clínica de estética
                  obter mais clientes e conquistar melhores resultados.
                </p>
              </div>

              <Reveal>
                <Link
                  to="https://www3.ucred.net.br/novo-cliente"
                  target="_blank"
                  className={cn(
                    'text-md mt-5 flex shrink-0 items-center whitespace-nowrap rounded-xl bg-primary px-8 py-3 text-white transition-all hover:hover:bg-gradient-to-r hover:from-secondary-1 hover:via-secondary-3 hover:to-secondary-4 hover:text-white md:mt-0',
                  )}
                  title="Clique para solicitar meu empréstimo"
                >
                  <PlusIcon className="mr-2 size-4" />
                  Solicitar meu empréstimo
                </Link>
              </Reveal>
            </div>
          </Reveal>

          <h2 className="mt-10 text-2xl font-extrabold text-zinc-600 lg:text-2xl xl:text-2xl">
            Ah! E tem mais
          </h2>

          <p className="max-w-3xl text-lg">
            Para obter o empréstimo pessoal da Ucred Serviços Financeiros, basta
            fornecer um documento oficial com foto e CPF, comprovante de
            residência e comprovante de renda.
          </p>
        </div>
      </section>

      <section>
        <div className="container py-14">
          <div className="after:content=['*'] via-88% relative flex flex-col gap-1 from-secondary-1 via-secondary-2 via-50% to-secondary text-zinc-600 after:absolute after:h-full after:w-1 after:bg-gradient-to-b">
            <Reveal>
              <h2 className="pl-4 text-2xl font-bold md:pl-8 md:text-3xl">
                O serviço que sua <br /> clínica estava precisando
              </h2>
            </Reveal>
            <Reveal>
              <p className="max-w-3xl pl-4 text-sm font-medium md:pl-8 md:text-lg 2xl:text-lg">
                Quantas vezes você deixou de fechar um serviço com uma pessoa
                devido a falta de opções na forma de pagamento que você podia
                ofertar para o cliente?
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
              autoHeight
              loop
            >
              <SwiperSlide className="rounded-xl border-2 border-[#DDDDDD] bg-[#F8F8F8] text-primary">
                <Reveal>
                  <div className="flex flex-col items-start gap-2 px-5 py-10">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-primary-lighter text-white">
                      <FaNetworkWired className="size-6" />
                    </div>

                    <p className="text-xl font-bold text-zinc-600/80">
                      Realizar um serviço <br /> que você sempre sonhou
                    </p>
                  </div>
                </Reveal>
              </SwiperSlide>

              <SwiperSlide className="rounded-xl border-2 border-[#DDDDDD] bg-[#F8F8F8] text-primary">
                <Reveal>
                  <div className="flex flex-col items-start gap-2 px-5 py-10">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-primary-lighter text-white">
                      <FiInbox className="size-6" />
                    </div>

                    <p className="text-xl font-bold text-zinc-600/80">
                      Obter um produto <br /> que sempre quis
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
                      Facilidade para pagar, com aprovação em até 10 minutos
                    </p>
                  </div>
                </Reveal>
              </SwiperSlide>

              <SwiperSlide className="rounded-xl border-2 border-[#DDDDDD] bg-[#F8F8F8] text-primary">
                <Reveal>
                  <div className="flex flex-col items-start gap-2 px-5 py-10">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-primary-lighter text-white">
                      <PlusIcon className="size-6" />
                    </div>

                    <p className="text-xl font-bold text-zinc-600/80">
                      Obter um <br /> financiamento acessível
                    </p>
                  </div>
                </Reveal>
              </SwiperSlide>

              <SwiperSlide className="rounded-xl border-2 border-[#DDDDDD] bg-[#F8F8F8] text-primary">
                <Reveal>
                  <div className="flex flex-col items-start gap-2 px-5 py-10">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-primary-lighter text-white">
                      <PercentIcon className="size-6" />
                    </div>

                    <p className="text-xl font-bold text-zinc-600/80">
                      Mais tranquilidade com pagamento, taxas e juros.
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
              <Link
                to="https://api.whatsapp.com/send?phone=554131954559&text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
                target="_blank"
                className={cn(
                  'text-md mt-5 flex items-center rounded-xl bg-primary px-8 py-3 text-white transition-all hover:hover:bg-gradient-to-r hover:from-secondary-1 hover:via-secondary-3 hover:to-secondary-4 hover:text-white md:mt-0',
                )}
                title="Clique para entrar em contato conosco"
              >
                <PhoneIcon className="mr-2 size-4" />
                Comece agora
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="rounded-br-[3rem] rounded-tr-[3rem] bg-primary 2xl:rounded-br-[30rem] 2xl:rounded-tr-[30rem]">
        <div className="container flex flex-col items-start gap-10 py-14 lg:flex-row lg:gap-0">
          <div className="flex-1 lg:sticky lg:top-[50rem] lg:pb-[6rem]">
            <div className="after:content=['*'] via-88% relative flex flex-col gap-1 from-secondary-1 via-secondary-2 via-50% to-secondary text-zinc-100 after:absolute after:h-full after:w-1 after:bg-gradient-to-b">
              <Reveal>
                <h2 className="pl-4 text-2xl font-bold md:pl-8 md:text-3xl">
                  Observações
                </h2>
              </Reveal>
              <Reveal>
                <p className="max-w-3xl pl-4 text-sm font-medium md:pl-8 md:text-lg 2xl:text-lg">
                  Veja como a UCRED trabalha
                </p>
              </Reveal>
            </div>

            <Reveal>
              <Link
                target="_blank"
                to="https://www3.ucred.net.br/novo-cliente"
                title="Clique para solicitar meu empréstimo"
                className="text-md mt-6 inline-flex items-center rounded-xl bg-white px-8 py-3 text-primary transition-all hover:bg-gradient-to-r hover:from-secondary-1 hover:via-secondary-3 hover:to-secondary-4 hover:text-white"
              >
                <PlusIcon className="mr-2 size-4" />
                Solicitar meu empréstimo
              </Link>
            </Reveal>
          </div>
          <div className="flex-1 space-y-5">
            <Reveal>
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="relative top-1 size-5 shrink-0 text-amber-400" />
                <p className="text-lg font-semibold text-zinc-200">
                  A Ucred não cobra nenhum tipo de taxa antecipada para efetuar
                  o fechamento do contrato. Caso isso ocorra, não finalize o
                  trâmite e denuncie em um de nossos canais oficiais.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="relative top-1 size-5 shrink-0 text-amber-400" />
                <p className="text-lg font-semibold text-zinc-200">
                  Recebeu alguma cobrança e ficou com dúvida se ele é válido ou
                  não? Entre em contato com a nossa equipe antes de efetuar o
                  pagamento ou acesse o canal do cliente em nosso site oficial e
                  verifique se você tem alguma cobrança em aberto.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="relative top-1 size-5 shrink-0 text-amber-400" />
                <p className="text-lg font-semibold text-zinc-200">
                  Não entramos em contato via e-mail ou telefone solicitando
                  dados e senhas. Caso isso ocorra, não informe e nos notifique
                  imediatamente.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
