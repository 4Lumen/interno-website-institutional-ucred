import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  GlobeIcon,
  MapIcon,
  PercentIcon,
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

      <section className="overflow-hidden rounded-b-[3rem] bg-[#172D63] py-12 md:rounded-b-[5rem] lg:h-[calc(45rem-5rem)] lg:py-0">
        <div className="container relative mx-auto h-full bg-[url(/backgrounds/banner-pessoal-mobile.png)] bg-cover bg-top bg-no-repeat lg:bg-[url(/backgrounds/banner-pessoal.png)]">
          <div className="container flex h-full w-full flex-col items-center gap-12 lg:flex-row">
            <div className="h-[150px] lg:hidden" />

            <div className="w-full flex-[1.2]">
              <Reveal classes="hidden md:block">
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl xl:text-6xl xl:leading-[4rem]">
                  Realize seus <br />{' '}
                  <span className="bg-gradient-to-r from-secondary-1 via-secondary-3 to-secondary-4 bg-clip-text text-transparent">
                    sonhos agora!
                  </span>
                </h2>
              </Reveal>

              <Reveal classes="block md:hidden">
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl xl:text-6xl xl:leading-[4rem]">
                  Realize seus <br />{' '}
                  <span className="bg-gradient-to-r from-secondary-1 via-secondary-3 to-secondary-4 bg-clip-text text-transparent">
                    sonhos agora!
                  </span>
                </h2>
              </Reveal>

              <Reveal>
                <p className="mt-4 max-w-2xl text-lg text-zinc-200 md:text-xl lg:text-xl">
                  Dinheiro rápido e sem complicação para você conquistar o que
                  deseja. Empréstimos de até R$ 3,5 mil aprovados de forma
                  simples e segura, para que você possa investir em serviços ou
                  produtos sem pesar no bolso.
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
          <div className="flex flex-col gap-5 border-b-2 pb-10 md:gap-20 lg:flex-row lg:items-end">
            <div>
              <Reveal>
                <h2 className="mt-3 text-2xl font-extrabold text-zinc-600 lg:text-4xl xl:text-5xl">
                  Seu sonho começa agora!
                </h2>
              </Reveal>
              <Reveal>
                <p className="mt-4 text-lg font-medium text-zinc-600">
                  Com a Ucred, você tem o crédito que precisa para transformar
                  seus planos em realidade.
                  <br />
                  <br />
                  Com nosso sistema 100% digital, você acompanha seus gastos,
                  escolhe as melhores condições de parcelamento e usa seu
                  crédito com total controle e segurança.
                </p>
              </Reveal>
            </div>

            <Reveal>
              <Link
                to="https://www5.ucred.net.br"
                target="_blank"
                className={cn(
                  'text-md flex shrink-0 items-center justify-center whitespace-nowrap rounded-xl bg-primary px-8 py-3 text-white transition-all hover:hover:bg-gradient-to-r hover:from-secondary-1 hover:via-secondary-3 hover:to-secondary-4 hover:text-white md:mt-0',
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
                  <PlusIcon className="size-9" />
                </div>
                <div className="mt-5">
                  <h2 className="text-xl font-semibold text-zinc-600">
                    Empréstimos de até R$ 3,5 mil
                  </h2>
                  <p className="text-md mt-1 font-medium text-zinc-600">
                    Crédito rápido e sem burocracia para você investir no que
                    realmente importa. Com nosso parcelamento flexível, você
                    escolhe a melhor forma de pagamento para o seu bolso.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <div className="flex size-16 shrink-0 items-center justify-center rounded-lg bg-primary-lighter text-white">
                  <MapIcon className="size-9" />
                </div>
                <div className="mt-5">
                  <h2 className="text-xl font-semibold text-zinc-600">
                    Disponível em todo o Brasil
                  </h2>
                  <p className="text-md mt-1 font-medium text-zinc-600">
                    Não importa onde você esteja, nosso financiamento está ao
                    seu alcance. Faça sua solicitação online, com análise ágil e
                    liberação do crédito de forma prática.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <div className="flex size-16 shrink-0 items-center justify-center rounded-lg bg-primary-lighter text-white">
                  <GlobeIcon className="size-9" />
                </div>
                <div className="mt-5">
                  <h2 className="text-xl font-semibold text-zinc-600">
                    Acompanhe tudo online
                  </h2>
                  <p className="text-md mt-1 font-medium text-zinc-600">
                    Gerencie seu crédito, acompanhe pagamentos e controle suas
                    parcelas de onde estiver. Com a Ucred você tem
                    transparência, segurança e suporte em todas as etapas.
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
                Solicite seu empréstimo com um click!
              </h2>
            </Reveal>

            <Reveal classes="block lg:hidden">
              <h2 className="mt-3 text-3xl font-extrabold text-zinc-600 lg:text-4xl xl:text-4xl">
                Solicite seu empréstimo <br /> com um click!
              </h2>
            </Reveal>

            <Reveal>
              <p className="mt-3 max-w-xl text-xl font-medium text-zinc-600 lg:text-center">
                A Ucred te ajuda a realizar seus sonhos de forma rápida e sem
                burocracia!
              </p>
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-10 flex flex-col gap-5 lg:flex-row">
              <div className="flex flex-1 justify-center rounded-tl-xl rounded-tr-xl border bg-white p-5 lg:rounded-tr-none lg:p-10">
                <div className="flex flex-[1.5] items-start gap-4">
                  <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    1
                  </div>
                  <p>
                    <strong className="text-lg text-zinc-800">
                      Escolha o valor ideal para você
                    </strong>{' '}
                    <br />
                    Selecione um valor entre R$ 500 e R$ 3.500 para aliviar o
                    bolso ou realizar seus planos.
                  </p>
                </div>
              </div>

              <div className="flex flex-1 justify-center border bg-white p-5 lg:rounded-tr-xl lg:p-10">
                <div className="flex flex-1 items-start gap-4">
                  <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    2
                  </div>
                  <p>
                    <strong className="text-lg text-zinc-800">
                      Defina as parcelas que cabem no seu orçamento
                    </strong>{' '}
                    <br />
                    Pague de forma flexível em 6, 9, 10, 12 ou 15 vezes.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-5 flex flex-col items-center gap-5 lg:flex-row">
              <div className="flex flex-1 justify-center border bg-white p-5 lg:p-10">
                <div className="flex flex-[1.5] items-start gap-4">
                  <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    3
                  </div>
                  <p>
                    <strong className="text-lg text-zinc-800">
                      Cadastre-se de forma segura
                    </strong>{' '}
                    <br />
                    Preencha seus dados e aguarde a análise do seu crédito.
                    Certifique-se de que os dados bancários estão corretos para
                    um depósito rápido.
                  </p>
                </div>
              </div>

              <div className="flex flex-1 justify-center border bg-white p-5 lg:p-10">
                <div className="flex flex-1 items-start gap-4">
                  <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    4
                  </div>
                  <p>
                    <strong className="text-lg text-zinc-800">
                      Assine e confirme
                    </strong>{' '}
                    <br />
                    Após aprovação, realize a identificação biométrica e assine
                    o contrato digitalmente para liberar seu crédito.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-5 flex justify-center border bg-white p-5 lg:p-10">
              <div className="flex flex-1 items-start gap-4">
                <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  5
                </div>
                <p>
                  <strong className="text-lg text-zinc-800">
                    Receba o dinheiro na sua conta
                  </strong>{' '}
                  <br />
                  Após a assinatura, o valor será depositado automaticamente.
                  Simples, rápido e sem complicação!
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-5 flex flex-col justify-center gap-6 rounded-b-xl border bg-white p-5 lg:flex-row lg:items-end lg:gap-20 lg:p-10">
              <div className="flex flex-1 items-start gap-4">
                <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  6
                </div>
                <p className="font-semibold text-zinc-600 lg:text-2xl">
                  <strong className="text-zinc-800">Agora é com você!</strong>{' '}
                  <br />
                  Clique abaixo e solicite o seu crédito pessoal agora mesmo.
                </p>
              </div>

              <Reveal>
                <Link
                  to="https://www5.ucred.net.br"
                  target="_blank"
                  className={cn(
                    'text-md mt-5 flex shrink-0 items-center justify-center whitespace-nowrap rounded-xl bg-primary px-8 py-3 text-white transition-all hover:hover:bg-gradient-to-r hover:from-secondary-1 hover:via-secondary-3 hover:to-secondary-4 hover:text-white md:mt-0',
                  )}
                  title="Clique para solicitar meu empréstimo"
                >
                  <PlusIcon className="mr-2 size-4" />
                  Quero meu empréstimo agora
                </Link>
              </Reveal>
            </div>
          </Reveal>

          {/* <h2 className="mt-10 text-2xl font-extrabold text-zinc-600 lg:text-2xl xl:text-2xl">
            Ah! E tem mais
          </h2>

          <p className="max-w-3xl text-lg">
            Para obter o empréstimo pessoal da Ucred Serviços Financeiros, basta
            fornecer um documento oficial com foto e CPF, comprovante de
            residência e comprovante de renda.
          </p> */}
        </div>
      </section>

      <section>
        <div className="container py-14">
          <div className="after:content=['*'] via-88% relative flex flex-col gap-1 from-secondary-1 via-secondary-2 via-50% to-secondary text-zinc-600 after:absolute after:h-full after:w-1 after:bg-gradient-to-b">
            <Reveal>
              <h2 className="pl-4 text-2xl font-bold md:pl-8 md:text-3xl">
                O dinheiro que você <br /> precisa, sem complicação!
              </h2>
            </Reveal>
            <Reveal>
              <p className="max-w-3xl pl-4 text-sm font-medium md:pl-8 md:text-lg 2xl:text-lg">
                Já imaginou realizar aquele sonho ou resolver um imprevisto sem
                dor de cabeça? Com a Ucred, você consegue um empréstimo rápido,
                fácil e sem burocracia!
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
                      Transforme seu <br /> sonho em realidade
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
                      Compre sem <br /> preocupações
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
                      Crédito rápido <br /> e sem burocracia
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
                      Empréstimo <br /> acessível para você
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
                      Parcelas que fazem <br /> sentido para o seu bolso
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
                Quero minhas vantagens
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
                  Transparência e Segurança
                </h2>
              </Reveal>
              <Reveal>
                <p className="max-w-3xl pl-4 text-sm font-medium md:pl-8 md:text-lg 2xl:text-lg">
                  Na Ucred, prezamos pela ética e pela segurança em todas as
                  etapas do processo. Confira como trabalhamos e proteja-se de
                  possíveis golpes.{' '}
                </p>
              </Reveal>
            </div>

            <Reveal>
              <Link
                target="_blank"
                to="https://www5.ucred.net.br"
                title="Clique para saber mais"
                className="text-md mt-6 inline-flex items-center justify-center rounded-xl bg-white px-8 py-3 text-primary transition-all hover:bg-gradient-to-r hover:from-secondary-1 hover:via-secondary-3 hover:to-secondary-4 hover:text-white"
              >
                <PlusIcon className="mr-2 size-4" />
                Quero saber mais{' '}
              </Link>
            </Reveal>
          </div>
          <div className="flex-1 space-y-5">
            <Reveal>
              <div className="flex items-start gap-3">
                <p className="text-lg font-semibold text-zinc-200">
                  ✅ Sem taxas antecipadas <br />
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
                  🔎 Dúvidas sobre cobranças? <br />
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
                  🔒 Seus dados são sigilosos <br />
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
