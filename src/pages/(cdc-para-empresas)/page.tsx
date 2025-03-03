import {
  BuildingIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DollarSignIcon,
  EyeIcon,
  PhoneCallIcon,
  PhoneIcon,
  PlusIcon,
} from 'lucide-react'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { FaChartLine } from 'react-icons/fa'
import { MdOutlineWallet } from 'react-icons/md'
import { PiChartLineUp, PiContactlessPayment } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { cn } from '../../@config/lib/cn'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import { Reveal } from '../../components/reveal'
import { Button } from '../../components/ui/button'

export function CreditoParaEmpresaPage() {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <main className="min-h-screen w-full">
      <Helmet title="CDC para empresas" />

      <Header />

      <section className="overflow-hidden rounded-b-[3rem] bg-[#172D63] py-12 md:rounded-b-[5rem] lg:h-[calc(45rem-5rem)] lg:py-0">
        <div className="container relative mx-auto h-full bg-[url(/backgrounds/banner-empresa-mobile.png)] bg-cover bg-top bg-no-repeat lg:bg-[url(/backgrounds/banner-empresa.png)] lg:py-0">
          <div className="container flex h-full w-full flex-col items-center gap-12 lg:flex-row">
            <div className="h-[150px] lg:hidden" />

            <div className="w-full flex-[1.2]">
              <Reveal classes="hidden md:block">
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                  Transforme pagamentos <br /> parcelados em{' '}
                  <span className="bg-gradient-to-r from-secondary-1 via-secondary-3 to-secondary-4 bg-clip-text text-transparent">
                    dinheiro à vista
                  </span>
                </h2>
              </Reveal>

              <Reveal classes="block md:hidden">
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl xl:text-6xl xl:leading-[4rem]">
                  Transforme pagamentos <br /> parcelados em{' '}
                  <span className="bg-gradient-to-r from-secondary-1 via-secondary-3 to-secondary-4 bg-clip-text text-transparent">
                    dinheiro à vista
                  </span>
                </h2>
              </Reveal>

              <Reveal>
                <p className="mt-4 max-w-2xl text-lg text-zinc-200 md:text-xl lg:text-xl">
                  Facilitamos o acesso ao crédito para que sua empresa venda
                  mais e seus clientes tenham mais poder de compra. Seu cliente
                  acompanha os gastos em tempo real, enquanto você recebe o
                  valor total da venda de forma rápida e segura.
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
                  Quero saber mais
                </Button>
              </Reveal>
            </div>

            <div className="hidden flex-[0.6] lg:flex xl:flex-[0.8]" />
          </div>
        </div>
      </section>

      <section>
        <div className="container py-14">
          <div className="flex flex-col gap-5 border-b-2 pb-10 md:gap-20 lg:flex-row lg:items-start">
            <div>
              <Reveal classes="hidden md:block">
                <h2 className="mt-3 text-2xl font-extrabold text-zinc-600 lg:text-4xl xl:text-5xl">
                  Mais vendas, menos burocracia!
                </h2>
              </Reveal>

              <Reveal classes="block md:hidden">
                <h2 className="mt-3 text-2xl font-extrabold text-zinc-600 lg:text-4xl xl:text-5xl">
                  Mais vendas, menos burocracia!
                </h2>
              </Reveal>
              <Reveal>
                <p className="mt-4 text-lg font-medium text-zinc-600">
                  Com a Ucred, sua empresa oferece mais opções de pagamento para
                  os clientes, garantindo mais vendas e fluxo de caixa
                  previsível. Seu cliente parcela, mas você recebe o valor total
                  no próximo dia útil, sem preocupações com inadimplência.
                  <br />
                  <br />
                  Nosso sistema é 100% digital e intuitivo, permitindo que você
                  tenha controle total das operações e receba suporte
                  especializado sempre que precisar.
                  <br />
                  <br />
                  Atendemos diversos segmentos: <br />
                  <div className="mt-5 grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-4">
                    <div className="pointer-events-none inline-flex select-none items-center gap-4 rounded-full text-zinc-600">
                      <div className="flex size-20 shrink-0 items-center justify-center rounded-full border-4 border-zinc-400">
                        <img
                          src="/icons/maintenance.svg"
                          alt="Ícone"
                          className="size-10 opacity-75"
                        />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold md:text-xl">
                          Autocenters
                        </h2>
                        <p className="text-sm">
                          Facilite a manutenção <br /> veicular dos seus
                          clientes.
                        </p>
                      </div>
                    </div>{' '}
                    <div className="pointer-events-none inline-flex select-none items-center gap-4 rounded-full text-zinc-600">
                      <div className="flex size-20 shrink-0 items-center justify-center rounded-full border-4 border-zinc-400">
                        <img
                          src="/icons/stethoscope.svg"
                          alt="Ícone"
                          className="size-10 opacity-50"
                        />
                      </div>
                      <div>
                        <h2 className="truncate text-xl font-bold md:text-xl">
                          Clínicas veterinárias
                        </h2>
                        <p className="text-sm">
                          Opções acessíveis para os tutores
                        </p>
                      </div>
                    </div>{' '}
                    <div className="pointer-events-none inline-flex select-none items-center gap-4 rounded-full text-zinc-600">
                      <div className="flex size-20 shrink-0 items-center justify-center rounded-full border-4 border-zinc-400">
                        <img
                          src="/icons/fridge.svg"
                          alt="Ícone"
                          className="size-10 opacity-75"
                        />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold md:text-xl">
                          Móveis & Eletro
                        </h2>
                        <p className="text-sm">
                          Aumente as vendas com mais flexibilidade.
                        </p>
                      </div>
                    </div>{' '}
                    <div className="pointer-events-none inline-flex select-none items-center gap-4 rounded-full text-zinc-600">
                      <div className="flex size-20 shrink-0 items-center justify-center rounded-full border-4 border-zinc-400">
                        <img
                          src="/icons/botox.svg"
                          alt="Ícone"
                          className="size-10 opacity-75"
                        />{' '}
                      </div>
                      <div>
                        <h2 className="truncate text-xl font-bold md:text-xl">
                          Clínicas de estética
                        </h2>
                        <p className="text-sm">
                          Mais acessibilidade para tratamentos e pacotes.
                        </p>
                      </div>
                    </div>{' '}
                  </div>
                </p>
              </Reveal>
            </div>
          </div>

          {/* <Reveal classes="flex justify-center">
            <Link
              to="https://api.whatsapp.com/send?phone=554131954559"
              target="_blank"
              className={cn(
                'text-md flex shrink-0 items-center justify-center whitespace-nowrap rounded-xl bg-primary px-8 py-3 text-white transition-all hover:hover:bg-gradient-to-r hover:from-secondary-1 hover:via-secondary-3 hover:to-secondary-4 hover:text-white md:mt-0 md:mt-5',
              )}
              title="Clique para cadastrar minha empresa"
            >
              <PlusIcon className="mr-2 size-4" />
              Quero mais vendas!
            </Link>
          </Reveal> */}

          <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
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
                    A Ucred está ao lado de empresas em todo o país, oferecendo
                    crédito inteligente para impulsionar vendas e garantir mais
                    faturamento.
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
                    Somos especialistas em soluções financeiras, ajudando
                    negócios a crescerem sem preocupações.
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
                    Desde a contratação até o recebimento, nossa equipe garante
                    um processo ágil, seguro e sem burocracia.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-12 flex justify-center">
            <Reveal classes="w-full md:w-auto">
              <Link
                to="https://api.whatsapp.com/send?phone=554131954559"
                target="_blank"
                className={cn(
                  'text-md flex w-full shrink-0 items-center justify-center whitespace-nowrap rounded-xl bg-primary px-8 py-3 text-white transition-all hover:hover:bg-gradient-to-r hover:from-secondary-1 hover:via-secondary-3 hover:to-secondary-4 hover:text-white md:w-auto',
                )}
                title="Clique para entrar em contato conosco"
              >
                <FaChartLine className="mr-2 size-4" />
                Quero aumentar meu faturamento!
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-tl-[3rem] border-y-2 border-zinc-200 bg-zinc-100 md:rounded-br-[4rem] md:rounded-tl-[4rem]">
        <div className="container py-14">
          <div className="flex w-full flex-col justify-center lg:items-center">
            <Reveal>
              <span className="text-md rounded-full bg-primary px-3 py-1 font-semibold text-white lg:text-xl">
                CDC para sua empresa
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
                A Ucred facilita o acesso ao crédito do seu cliente, com
                aprovação online e sem burocracia. Mais praticidade para você e
                mais oportunidades para seus pacientes!
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
                    <strong className="text-lg text-zinc-800">
                      Faça seu cadastro
                    </strong>{' '}
                    <br />
                    Clique no botão &quot;Quero oferecer crédito&quot; e fale
                    com um de nossos especialistas.
                  </p>
                </div>
              </div>

              <div className="flex justify-center border bg-white p-5 lg:rounded-tr-xl lg:p-10">
                <div className="flex flex-1 items-start gap-4">
                  <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    2
                  </div>
                  <p>
                    <strong className="text-lg text-zinc-800">
                      Envie sua documentação
                    </strong>{' '}
                    <br />
                    Anexe os documentos necessários diretamente na plataforma de
                    forma simples e segura.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="lex mt-5 justify-center border bg-white p-5 lg:p-10">
              <div className="flex flex-1 items-start gap-4">
                <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  3
                </div>
                <p>
                  <strong className="text-lg text-zinc-800">
                    Aguarde nossa análise
                  </strong>{' '}
                  <br />
                  Nossa equipe avaliará suas informações e entrará em contato
                  rapidamente para dar início à parceria.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-5 flex flex-col justify-center gap-6 rounded-b-xl border bg-white p-5 lg:flex-row lg:items-end lg:gap-20 lg:p-10">
              <div className="flex flex-1 items-start gap-4">
                <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  4
                </div>
                <p className="font-semibold text-zinc-600 lg:text-xl">
                  <strong className="text-zinc-800">Aumente suas vendas</strong>{' '}
                  <br />
                  Com a Ucred, sua empresa oferece parcelamento aos clientes e
                  recebe o valor à vista, sem preocupação com inadimplência.
                </p>
              </div>

              <Reveal>
                <Link
                  to="https://api.whatsapp.com/send?phone=554131954559"
                  target="_blank"
                  className={cn(
                    'text-md mt-5 flex shrink-0 items-center justify-center whitespace-nowrap rounded-xl bg-primary px-8 py-3 text-white transition-all hover:hover:bg-gradient-to-r hover:from-secondary-1 hover:via-secondary-3 hover:to-secondary-4 hover:text-white md:mt-0',
                  )}
                  title="Clique para oferecer crédito"
                >
                  <PlusIcon className="mr-2 size-4" />
                  Quero oferecer crédito
                </Link>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container py-14">
          <div className="after:content=['*'] via-88% relative flex flex-col gap-1 from-secondary-1 via-secondary-2 via-50% to-secondary text-zinc-600 after:absolute after:h-full after:w-1 after:bg-gradient-to-b">
            <Reveal>
              <h2 className="pl-4 text-2xl font-bold md:pl-8 md:text-3xl">
                A solução que faltava <br /> para sua empresa crescer!
              </h2>
            </Reveal>
            <Reveal>
              <p className="max-w-3xl pl-4 text-sm font-medium md:pl-8 md:text-lg 2xl:text-lg">
                Mais clientes, mais vendas e mais lucro. Com a Ucred, você
                amplia suas oportunidades, oferece condições de pagamento
                atrativas e recebe o valor à vista. Tudo isso sem burocracia e
                com total segurança.
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
                      <PiChartLineUp className="size-6" />
                    </div>

                    <p className="text-xl font-bold text-zinc-600/80">
                      Aumentar as vendas e fechamento de serviços
                    </p>
                  </div>
                </Reveal>
              </SwiperSlide>

              <SwiperSlide className="rounded-xl border-2 border-[#DDDDDD] bg-[#F8F8F8] text-primary">
                <Reveal>
                  <div className="flex flex-col items-start gap-2 px-5 py-10">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-primary-lighter text-white">
                      <DollarSignIcon className="size-6" />
                    </div>

                    <p className="text-xl font-bold text-zinc-600/80">
                      Oferecer mais facilidade de pagamento para o cliente
                    </p>
                  </div>
                </Reveal>
              </SwiperSlide>

              <SwiperSlide className="rounded-xl border-2 border-[#DDDDDD] bg-[#F8F8F8] text-primary">
                <Reveal>
                  <div className="flex flex-col items-start gap-2 px-5 py-10">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-primary-lighter text-white">
                      <EyeIcon className="size-6" />
                    </div>

                    <p className="text-xl font-bold text-zinc-600/80">
                      Facilitar a realização de um sonho do cliente
                    </p>
                  </div>
                </Reveal>
              </SwiperSlide>

              <SwiperSlide className="rounded-xl border-2 border-[#DDDDDD] bg-[#F8F8F8] text-primary">
                <Reveal>
                  <div className="flex flex-col items-start gap-2 px-5 py-10">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-primary-lighter text-white">
                      <MdOutlineWallet className="size-6" />
                    </div>

                    <p className="text-xl font-bold text-zinc-600/80">
                      Disponibilizar um financiamento acessível
                    </p>
                  </div>
                </Reveal>
              </SwiperSlide>

              <SwiperSlide className="rounded-xl border-2 border-[#DDDDDD] bg-[#F8F8F8] text-primary">
                <Reveal>
                  <div className="flex flex-col items-start gap-2 px-5 py-10">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-primary-lighter text-white">
                      <PiContactlessPayment className="size-6" />
                    </div>

                    <p className="text-xl font-bold text-zinc-600/80">
                      Ter tranquilidade quando o assunto for pagamento.
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
                Quero os benefícios
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="rounded-bl-[3rem] rounded-tr-[3rem] bg-primary 2xl:rounded-br-[30rem] 2xl:rounded-tr-[30rem]">
        <div className="container flex flex-col items-start gap-10 py-14 lg:flex-row lg:gap-10">
          <div className="flex-1 lg:sticky lg:top-[50rem] lg:pb-[7rem]">
            <div className="after:content=['*'] via-88% relative flex flex-col gap-1 from-secondary-1 via-secondary-2 via-50% to-secondary text-zinc-100 after:absolute after:h-full after:w-1 after:bg-gradient-to-b">
              <Reveal>
                <h2 className="pl-4 text-2xl font-bold md:pl-8 md:text-3xl">
                  Transparência e Segurança
                </h2>
              </Reveal>
              <Reveal>
                <p className="max-w-3xl pl-4 text-sm font-medium md:pl-8 md:text-lg 2xl:text-lg">
                  Na Ucred, prezamos pela ética e pela segurança em todas as
                  etapas do processo. Confira como trabalhamos e proteja-se de
                  possíveis golpes.
                </p>
              </Reveal>
            </div>

            <Reveal>
              <Link
                to="https://api.whatsapp.com/send?phone=554131954559"
                target="_blank"
                className="text-md mt-6 inline-flex items-center rounded-xl bg-white px-8 py-3 text-primary transition-all hover:bg-gradient-to-r hover:from-secondary-1 hover:via-secondary-3 hover:to-secondary-4 hover:text-white"
                title="Clique para ser um parceiro UCRED"
              >
                <PlusIcon className="mr-2 size-4" />
                Quero ser um parceiro
              </Link>
            </Reveal>
          </div>
          <div className="flex-1 space-y-5">
            <Reveal>
              <div className="flex items-start gap-3">
                <p className="text-lg font-semibold text-zinc-200">
                  ✅ Sem taxas antecipadas
                  <br />
                  <br />
                  Jamais solicitamos pagamentos prévios para fechar contrato.
                  Caso ocorra, não conclua a negociação e denuncie em nossos
                  canais oficiais.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex items-start gap-3">
                <p className="text-lg font-semibold text-zinc-200">
                  🔎 Dúvidas sobre cobranças?
                  <br />
                  <br />
                  Se recebeu uma cobrança e não tem certeza da validade,
                  consulte nossa equipe antes de efetuar qualquer pagamento.
                  Acesse nosso Canal de Atendimento e verifique sua situação.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex items-start gap-3">
                <p className="text-lg font-semibold text-zinc-200">
                  🔒 Seus dados são sigilosos
                  <br />
                  <br />
                  Nunca entramos em contato solicitando senhas ou informações
                  sensíveis por e-mail ou telefone. Se isso acontecer, não
                  forneça e nos comunique imediatamente.
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
