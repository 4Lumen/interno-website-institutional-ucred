/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createBrowserRouter } from 'react-router-dom'

import { CreditoParaEmpresaPage } from '../pages/(cdc-para-empresas)/page'
import { CreditoParaEsteticaPage } from '../pages/(credito-para-estetica)/page'
import { EmprestimoPessoalPage } from '../pages/(emprestimo-pessoal)/page'
import { PoliticaDeCookiesPage } from '../pages/(politicas)/politica-de-cookies/page'
import { PoliticaDePrivacidadePage } from '../pages/(politicas)/politica-de-privacidade/page'
import { TermosDeUsoPage } from '../pages/(politicas)/termos-de-uso/page'
import { Home } from '../pages/home'

const router: any = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/credito-para-estetica',
    element: <CreditoParaEsteticaPage />,
  },
  {
    path: '/cdc-para-empresas',
    element: <CreditoParaEmpresaPage />,
  },
  {
    path: '/emprestimo-pessoal',
    element: <EmprestimoPessoalPage />,
  },
  {
    path: '/termos-de-uso',
    element: <TermosDeUsoPage />,
  },
  {
    path: '/politica-de-privacidade',
    element: <PoliticaDePrivacidadePage />,
  },
  {
    path: '/politica-de-cookies',
    element: <PoliticaDeCookiesPage />,
  },
])

export { router }
