/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import {
  ChevronDown,
  Loader2,
  MailIcon,
  PhoneIcon,
  SendHorizonalIcon,
} from 'lucide-react'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { PiFacebookLogo, PiInstagramLogo, PiWhatsappLogo } from 'react-icons/pi'
import { Link, useLocation } from 'react-router-dom'
import { z } from 'zod'

import { cn } from '../@config/lib/cn'
import { Reveal } from './reveal'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'
import { Button } from './ui/button'

const formContactSchema = z.object({
  Primeiro_Nome: z
    .string()
    .min(2, 'O primeiro nome deve ter pelo menos 2 caracteres'),
  Segundo_Nome: z
    .string()
    .min(2, 'O segundo nome deve ter pelo menos 2 caracteres'),
  E_mail: z.string().email('Digite um e-mail válido'),
  Telefone: z
    .string()
    .regex(/^\d+$/, 'O telefone deve conter apenas números')
    .min(10, 'O telefone deve ter pelo menos 10 dígitos'),
  Mensagem: z.string().min(5, 'A mensagem deve ter pelo menos 5 caracteres'),
})

export function Footer() {
  const { pathname } = useLocation()
  const refData: any = useRef()
  const refDataButton: any = useRef()

  const [hasToggleData, setHasToggleData] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm({
    resolver: zodResolver<z.infer<typeof formContactSchema>>(formContactSchema),
  })

  const onSubmit = (data: z.infer<typeof formContactSchema>) => {
    setIsLoading(true)
    const form = document.createElement('form')
    form.method = 'POST'
    form.action = 'https://formsubmit.co/3c85ddf1d6ba62ca74d4e428eb623be0'

    Object.entries({
      ...data,
      _next: window.location.origin,
      _subject: 'Novo contato do site!',
      _captcha: 'false',
      _autoresponse: 'Recebemos sua mensagem!',
      _template: 'table',
    }).forEach(([key, value]) => {
      const input = document.createElement('input')
      input.type = 'hidden'
      input.name = key
      input.value = value as string
      form.appendChild(input)
    })

    document.body.appendChild(form)
    form.submit()
  }

  return (
    <>
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
                  Como fazer o empréstimo pessoal?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg font-medium text-primary">
                    Acesse{' '}
                    <Link
                      to="www.ucred.net.br"
                      target="_blank"
                      className="underline underline-offset-2"
                    >
                      www.ucred.net.br
                    </Link>{' '}
                    e faça uma simulação preenchendo o valor e quantidade de
                    parcelas desejadas. <br />
                    Nossos processos de empréstimo são feitos somente pelo site
                    e não é cobrado nenhum valor antecipado. Todas as propostas
                    passam por uma análise e podem ou não ser aprovadas.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  Quais bancos são aceitos pela UCRED?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg font-medium text-primary">
                    Trabalhamos com contas dos bancos: Bradesco, Itaú,
                    Santander, Sicred e Nubank.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  É necessário pagar para liberar o empréstimo?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg font-medium text-primary">
                    Nenhum valor é cobrado antecipadamente pelo seu empréstimo
                    pessoal! A UCRED só começa a cobrar suas parcelas após a
                    aprovação da proposta e depois do dinheiro cair na conta. As
                    taxas e encargos serão incluídos no valor dos pagamentos
                    mensais. <br />
                    Caso alguém entre em contato se passando pela UCRED e
                    cobrando taxas antes de qualquer aprovação de crédito em
                    nossa plataforma, encerre o contato imediatamente, pois você
                    pode estar sendo vítima de uma tentativa de golpe.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  Como faço para antecipar o pagamento do meu empréstimo?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg font-medium text-primary">
                    Para antecipar parcelas do empréstimo ou quitar seu
                    contrato, basta enviar um e-mail para COBRANCA@UCRED.NET.BR,
                    informando qual(is) a(s) parcela(s) você deseja efetuar o
                    pagamento, ou entrar em contato com nossa central de
                    atendimento. número de parcelas. <br />
                    Você pode parcelar seu empréstimo em 6, 9, 10, 12, 15 ou 18
                    meses.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  Posso alterar a data de vencimento da parcela do meu
                  empréstimo pessoal?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg font-medium text-primary">
                    Não é possível alterar a data de vencimento da parcela do
                    seu empréstimo. Essa data é calculada automaticamente com
                    base na data em que você solicitou o empréstimo e em outros
                    critérios durante a análise de crédito. A data de vencimento
                    está definida no contrato.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
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

              <AccordionItem value="item-7">
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

              <AccordionItem value="item-8">
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

              <AccordionItem value="item-9">
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

              <AccordionItem value="item-10">
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

      <section className="rounded-t-[3rem] border-t-2 bg-zinc-100/60">
        <div className="container py-14">
          <div className="flex flex-col items-center pb-10">
            <Reveal>
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary-lighter text-white">
                <PhoneIcon className="size-6" />
              </div>
            </Reveal>
            <Reveal>
              <h2 className="mt-3 text-center text-xl font-semibold text-zinc-800 lg:text-4xl">
                Entre em contato
              </h2>
            </Reveal>

            <Reveal>
              <p className="mt-3 max-w-md text-center text-lg text-zinc-600">
                Estamos aqui para tirar qualquer dúvida que for necessário,
                entre em contato conosco agora!
              </p>
            </Reveal>
          </div>

          <form
            method="POST"
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-5 rounded-md border bg-zinc-50 p-5"
          >
            <div className="flex flex-col items-start gap-5 md:flex-row">
              <div className="w-full">
                <label className="text-zinc-600">Primeiro nome</label>
                <input
                  type="text"
                  {...form.register('Primeiro_Nome')}
                  placeholder="Digite seu primeiro nome"
                  disabled={isLoading}
                  className="mt-1 h-12 w-full rounded-md border px-4 outline-none transition-all focus:ring-4 focus:ring-primary"
                />
                {form.formState.errors.Primeiro_Nome && (
                  <p className="mt-2 text-sm text-red-500">
                    {form.formState.errors.Primeiro_Nome.message}
                  </p>
                )}
              </div>

              <div className="w-full">
                <label className="text-zinc-600">Segundo nome</label>
                <input
                  type="text"
                  {...form.register('Segundo_Nome')}
                  disabled={isLoading}
                  placeholder="Digite seu segundo nome"
                  className="mt-1 h-12 w-full rounded-md border px-4 outline-none transition-all focus:ring-4 focus:ring-primary"
                />
                {form.formState.errors.Segundo_Nome && (
                  <p className="mt-2 text-sm text-red-500">
                    {form.formState.errors.Segundo_Nome.message}
                  </p>
                )}
              </div>
            </div>

            <div className="w-full">
              <label className="text-zinc-600">Endereço de e-mail</label>
              <input
                type="text"
                {...form.register('E_mail')}
                disabled={isLoading}
                placeholder="Digite seu endereço de e-mail"
                className="mt-1 h-12 w-full rounded-md border px-4 outline-none transition-all focus:ring-4 focus:ring-primary"
              />
              {form.formState.errors.E_mail && (
                <p className="mt-2 text-sm text-red-500">
                  {form.formState.errors.E_mail.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <label className="text-zinc-600">Telefone/WhatsApp</label>
              <input
                type="text"
                {...form.register('Telefone')}
                disabled={isLoading}
                placeholder="Digite seu Telefone/WhatsApp"
                className="mt-1 h-12 w-full rounded-md border px-4 outline-none transition-all focus:ring-4 focus:ring-primary"
              />
              {form.formState.errors.Telefone && (
                <p className="mt-2 text-sm text-red-500">
                  {form.formState.errors.Telefone.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <label className="text-zinc-600">Mensagem</label>
              <textarea
                {...form.register('Mensagem')}
                disabled={isLoading}
                placeholder="Digite sua mensagem"
                className="mt-1 h-12 max-h-28 min-h-28 w-full resize-none rounded-md border p-4 outline-none transition-all focus:ring-4 focus:ring-primary"
              />
              {form.formState.errors.Mensagem && (
                <p className="mt-2 text-sm text-red-500">
                  {form.formState.errors.Mensagem.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="text-md h-12 w-full font-semibold text-white"
            >
              {isLoading ? (
                <Loader2 className="mr-2 size-4 animate-spin" />
              ) : (
                <SendHorizonalIcon className="mr-2 size-4" />
              )}
              Enviar mensagem
            </Button>
          </form>
        </div>
      </section>

      {/* <section className="relative border-t-2">
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
                Nossas localizações
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
      </section> */}

      <footer className="border-t-[25px] border-t-primary-lighter bg-primary">
        <div className="container grid w-full grid-cols-1 gap-10 py-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          <div className="flex">
            <div className="flex w-full flex-col items-center text-center md:items-start md:text-left">
              <h1 className="text-xl font-semibold text-zinc-200">Menu</h1>

              <div className="mt-4 flex flex-col items-center gap-2 text-zinc-200 md:items-start md:text-left">
                <Link
                  to="/cdc-para-estetica"
                  title="Crédito para estética"
                  className={cn(
                    'flex items-center gap-2 transition-all hover:ml-2',
                    pathname === '/cdc-para-estetica' &&
                      'underline underline-offset-2',
                  )}
                >
                  CDC para estética
                </Link>

                <Link
                  to="/cdc-para-empresas"
                  title="CDC para Empresas"
                  className={cn(
                    'flex items-center gap-2 transition-all hover:ml-2',
                    pathname === '/cdc-para-empresas' &&
                      'underline underline-offset-2',
                  )}
                >
                  CDC para Empresas
                </Link>

                <Link
                  to="/emprestimo-pessoal"
                  title="Empréstimo pessoal"
                  className={cn(
                    'flex items-center gap-2 transition-all hover:ml-2',
                    pathname === '/emprestimo-pessoal' &&
                      'underline underline-offset-2',
                  )}
                >
                  Empréstimo pessoal
                </Link>

                <Link
                  to="/termos-de-uso"
                  title="Termos de uso"
                  className={cn(
                    'flex items-center gap-2 transition-all hover:ml-2',
                    pathname === '/termos-de-uso' &&
                      'underline underline-offset-2',
                  )}
                >
                  Termos de uso
                </Link>

                <Link
                  to="/politica-de-privacidade"
                  title="Política de privacidade"
                  className={cn(
                    'flex items-center gap-2 transition-all hover:ml-2',
                    pathname === '/politica-de-privacidade' &&
                      'underline underline-offset-2',
                  )}
                >
                  Política de privacidade
                </Link>

                <Link
                  to="/politica-de-cookies"
                  title="Política de Cookies"
                  className={cn(
                    'flex items-center gap-2 transition-all hover:ml-2',
                    pathname === '/politica-de-cookies' &&
                      'underline underline-offset-2',
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
                  target="_blank"
                  title="Clique para ir ao nosso Instagram"
                  to="https://www.instagram.com/ucredfinanceira/"
                  className="flex items-center gap-2 transition-all hover:ml-2"
                >
                  <PiInstagramLogo className="size-6" />
                  Instagram
                </Link>
                <Link
                  target="_blank"
                  title="Clique para ir ao nosso Facebook"
                  to="https://www.facebook.com/Ucredfinanceira"
                  className="flex items-center gap-2 transition-all hover:ml-2"
                >
                  <PiFacebookLogo className="size-6" />
                  Facebook
                </Link>

                <Link
                  target="_blank"
                  title="Clique para ir ao nosso WhatsApp"
                  className="flex items-center gap-2 transition-all hover:ml-2"
                  to="https://api.whatsapp.com/send?phone=554131954559&text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
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
                  target="_blank"
                  to="mailto:contato@ucred.net.br"
                  title="Clique para ir ao nosso E-mail"
                  className="flex items-center gap-2 transition-all hover:ml-2"
                >
                  E-mail
                </Link>

                <Link
                  target="_blank"
                  title="Clique para ir ao nosso WhatsApp"
                  className="flex items-center gap-2 transition-all hover:ml-2"
                  to="https://api.whatsapp.com/send?phone=554131954559&text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
                >
                  WhatsApp
                </Link>

                <Link
                  target="_blank"
                  title="Clique para ir ao nosso endereço"
                  className="flex items-center gap-2 transition-all hover:ml-2"
                  to="https://www.google.com.br/maps/dir//Rua+Emiliano+Perneta,+424+-+21+22+-+Centro,+Curitiba+-+PR,+80420-080/@-25.4359179,-49.2785628,16.89z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94dce4724f5fdef7:0x44194fc3336198b4!2m2!1d-49.2760563!2d-25.4353889?entry=ttu&g_ep=EgoyMDI1MDIxMC4wIKXMDSoASAFQAw%3D%3D"
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
                disabled
                type="text"
                placeholder="Digite seu melhor e-mail"
                className="mt-3 h-10 rounded-md bg-primary-lighter px-4 text-sm text-zinc-200 outline-none transition-all placeholder:text-sm focus:ring-4 focus:ring-primary-lighter md:w-full"
              />
            </div>
          </div>
        </div>

        <div
          ref={refDataButton}
          className="flex justify-center border-t border-t-primary-lighter py-4"
        >
          <Button
            type="button"
            className="bg-transparent text-white"
            onClick={() => {
              setHasToggleData(!hasToggleData)

              if (hasToggleData) {
                setTimeout(() => {
                  window.scroll({
                    behavior: 'smooth',
                    top: refDataButton.current.offsetTop,
                  })
                }, 100)
              } else {
                setTimeout(() => {
                  window.scroll({
                    behavior: 'smooth',
                    top: refData.current.offsetTop,
                  })
                }, 100)
              }
            }}
          >
            <ChevronDown
              className={cn(
                'mr-2 size-4',
                hasToggleData && 'rotate-180 transition-all',
              )}
            />{' '}
            Visualizar dados da UCRED
          </Button>
        </div>

        <div ref={refData}>
          {hasToggleData && (
            <div className="border-t border-t-primary-lighter">
              <div className="container py-4">
                <p className="text-xs text-zinc-100">
                  IWF Serviços de Apoio Administrativo - Eireli, com nome
                  fantasia UCRED, inscrita no CNPJ sob nº 06.376.451/0001-04,
                  com sede na Rua Emiliano Perneta, 424 - Conj. 21/22, Centro,
                  Curitiba - PR.
                  <br />
                  <br />
                  A UCRED não é uma financeira; somos um correspondente bancário
                  da Giro Sociedade de Crédito Direto S/A, inscrita no CNPJ sob
                  nº 40.112.555/0001-40, com sede na Rua Visconde do Rio Branco,
                  1488 - Sala 1006, Centro, Curitiba - PR.
                  <br />
                  <br />
                  A UCRED não cobra nenhum valor antecipado para aprovar ou
                  depositar seu crédito. Caso você seja contatado por alguém se
                  passando pela UCRED e cobrando qualquer valor antecipado,
                  encerre o contato imediatamente e fale conosco. Você pode
                  estar sendo vítima de uma tentativa de fraude.
                  <br />
                  <br />
                  O atraso no pagamento das parcelas do seu empréstimo pessoal
                  pode resultar na inclusão do seu nome nos cadastros de
                  inadimplentes dos órgãos de proteção ao crédito, protesto de
                  títulos e, ainda, no ajuizamento de ações judiciais de
                  cobrança, entre outras medidas. Para evitar problemas e
                  restrições ao seu crédito, mantenha sempre o pagamento das
                  suas parcelas em dia.
                  <br />
                  <br />
                  Condições do crédito: nosso prazo mínimo é de 3 meses e máximo
                  de 24 meses. Nossa taxa de juros varia de 5,99% a 18,9% ao mês
                  (149% a 376,74% ao ano).
                  <br />
                  <br />
                  Exemplo de simulação: empréstimo de R$ 1.500,00, parcelado em
                  24 meses, com taxa de 13,90% ao mês (376,74% ao ano). Total de
                  24 parcelas de R$ 224,40. Valor total a pagar: R$ 5.385,60.
                </p>
              </div>
            </div>
          )}
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
    </>
  )
}
