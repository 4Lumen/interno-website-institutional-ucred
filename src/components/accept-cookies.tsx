import JSCookies from 'js-cookie'
import { CookieIcon } from 'lucide-react'

import { Button } from './ui/button'

export function AcceptCookies() {
  const isCookie = JSCookies.get('@ucred:cookie')

  function handleAcceptCookie() {
    JSCookies.set('@ucred:cookie', 'true')
    window.location.reload()
  }

  if (!isCookie) {
    return (
      <div className="fixed bottom-0 left-0 z-10 w-full rounded-md border-4 border-zinc-200 bg-zinc-100 p-3 shadow-lg md:bottom-3 md:left-3 md:max-w-[40rem]">
        <h2 className="flex items-center text-xl font-semibold text-zinc-600">
          <CookieIcon className="mr-2 size-4" />
          Esse site utiliza cookies
        </h2>
        <p className="mt-2 text-zinc-600">
          Nós armazenamos dados temporariamente para melhorar a sua experiência
          de navegação e recomendar conteúdo de seu interesse. Ao utilizar
          nossos serviços, você concorda com tal monitoramente.
        </p>

        <div className="flex justify-end">
          <div className="space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleAcceptCookie}
              title="Clique para recusar os Cookies"
              className="text-zinc-600 transition-all hover:bg-rose-500 hover:text-white hover:brightness-100"
            >
              Recusar
            </Button>

            <Button
              type="button"
              onClick={handleAcceptCookie}
              title="Clique para aceitar os Cookies"
              className="bg-primary text-white transition-all"
            >
              Aceitar
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
