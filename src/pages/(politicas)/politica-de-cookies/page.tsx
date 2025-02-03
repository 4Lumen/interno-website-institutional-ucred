import { InfoIcon } from 'lucide-react'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { Footer } from '../../../components/footer'
import { Header } from '../../../components/header'

export function PoliticaDeCookiesPage() {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <main className="min-h-screen w-full">
      <Helmet title="Política de Cookies" />

      <Header />

      <div className="container py-14 text-lg text-zinc-600">
        <h2 className="text-2xl font-bold text-zinc-600">
          POLÍTICA DE COOKIES - UCRED
        </h2>

        <div className="my-4 flex items-start gap-3 rounded-md border bg-zinc-100 p-4">
          <InfoIcon className="relative top-1 size-4 shrink-0" />
          <p>
            Esta Política de Cookies foi atualizada pela última vez em 14 de
            Março de 2023. Acesse também o nosso{' '}
            <Link
              to="/termos-de-uso"
              className="text-primary underline underline-offset-2"
            >
              Termos de Uso
            </Link>{' '}
            e{' '}
            <Link
              to="/politica-de-privacidade"
              className="text-primary underline underline-offset-2"
            >
              Política de privacidade
            </Link>{' '}
          </p>
        </div>

        <p className="text-lg text-zinc-600">
          Criamos esta Política de Cookies da Ucred para deixar claro que temos
          forte compromisso com a segurança e privacidade das suas informações.
          Não deixe de ler toda esta Política de Cookies, pois ela descreve como
          os cookies serão utilizadas e armazenadas. O uso e acesso ao nosso
          site e serviços significa que você concorda e aceita todos os termos
          da nossa Política de Cookies.
        </p>

        <h2 className="mt-10 border-b pb-4 text-xl font-bold text-zinc-600">
          O que são Cookies
        </h2>

        <p className="text-lg text-zinc-600">
          Cookies são pequenos arquivos de texto ou fragmentos de informações
          que são baixados em seu dispositivo com acesso à internet quando você
          visita uma aplicação. Eles contêm informações sobre sua navegação em
          páginas da web e retêm apenas informações relacionadas às suas
          preferências.
          <br />
          <br />
          Ao armazenar e recuperar dados sobre seus hábitos de navegação, as
          páginas podem melhorar a experiência de uso para você. É importante
          destacar que os cookies não contêm informações pessoais específicas,
          como dados sensíveis ou bancários.
          <br />
          <br />
          Os cookies são armazenados no disco rígido do seu navegador, mas
          ocupam um espaço mínimo de memória, o que não afeta o desempenho do
          seu dispositivo. A maioria das informações é apagada assim que você
          encerra a sessão, como será discutido no próximo tópico.
        </p>

        <h2 className="mt-10 pb-4 text-xl font-bold text-zinc-600">
          Tipos de Cookies
        </h2>

        <p>
          Os cookies em relação aos seus proprietários podem ser divididos em
          dois tipos: cookies proprietários e cookies de terceiros.
        </p>

        <ul className="my-4 list-inside list-disc">
          <li>
            Os cookies proprietários são aqueles que são definidos por nós ou
            por terceiros em nosso nome.
          </li>
          <li>
            Os cookies de terceiros são aqueles que são definidos por terceiros
            confiáveis em nossa aplicação.
          </li>
        </ul>

        <p>
          Quanto ao tempo de vida, os cookies podem ser classificados em dois
          tipos: cookies de sessão ou temporários e cookies persistentes ou
          permanentes.
        </p>

        <ul className="my-4 list-inside list-disc">
          <li>
            Os cookies de sessão ou temporários são aqueles que expiram assim
            que você fecha o seu navegador, encerrando a sessão.
          </li>
          <li>
            Os cookies persistentes ou permanentes são aqueles que permanecem no
            seu dispositivo durante um período determinado ou até que você os
            exclua.
          </li>
        </ul>

        <p>
          Os cookies são classificados em três tipos, de acordo com sua
          finalidade: cookies de análise e desempenho, cookies de funcionalidade
          e cookies de publicidade.
        </p>

        <ul className="my-4 list-inside list-disc">
          <li>
            Os cookies de análise e desempenho permitem analisar como os
            usuários interagem com nossas aplicações e otimizar a forma como
            elas funcionam, coletando informações anônimas sobre as páginas
            visitadas.
          </li>
          <li>
            Os cookies de funcionalidade armazenam suas preferências e escolhas,
            como o endereço de e-mail, para melhorar sua experiência em nosso
            site.
          </li>
          <li>
            Por fim, os cookies de publicidade direcionam anúncios com base em
            seus interesses e limitam a frequência com que esses anúncios
            aparecem.
          </li>
        </ul>

        <h2 className="mt-10 border-b pb-4 text-xl font-bold text-zinc-600">
          Por que usamos Cookies?
        </h2>

        <p>
          A Ucred utiliza Cookies para oferecer uma melhor experiência de uso em
          nossas aplicações. Os Cookies nos ajudam a personalizar nossos
          serviços de acordo com suas escolhas e comportamento de navegação,
          tornando sua interação com nossa plataforma mais fácil e conveniente.
          <br />
          <br />
          Ao utilizar Cookies, buscamos entender como você utiliza nossas
          aplicações e ajustar o conteúdo para torná-lo mais relevante para
          você. Além disso, os Cookies nos permitem lembrar de suas
          preferências, para que possamos fornecer um serviço mais
          personalizado.
          <br />
          <br />
          Os Cookies desempenham um papel importante em todo esse processo,
          armazenando, lendo e executando os dados necessários para cumprir
          nosso objetivo de fornecer a melhor experiência de uso possível em
          nossas aplicações.
        </p>

        <h2 className="mt-10 border-b pb-4 text-xl font-bold text-zinc-600">
          Quais Cookies nós utilizamos?
        </h2>

        <p>
          Abaixo listamos todos os Cookies, Armazenamentos Locais e Service
          Workers que podem ser utilizados pela Ucred.
          <br />
          <br />
          É importante lembrar que você tem o controle sobre a permissão
          concedida para cada Cookie em seu navegador. Ressaltamos que os
          Cookies capturam dados sobre você, por isso recomendamos que leia
          atentamente nossa Política de Privacidade. Nela, você encontrará
          informações detalhadas sobre como coletamos, utilizamos e protegemos
          seus dados.
          <br />
          <br />
          Você pode acessar a nossa Política de Privacidade por meio deste link:{' '}
          <Link
            to="/politica-de-privacidade"
            className="text-primary underline underline-offset-2"
          >
            Política de Privacidade.
          </Link>
        </p>

        <h2 className="mt-10 pb-4 text-xl font-bold text-zinc-600">
          Tabela de Cookies
        </h2>

        <div className="overflow-x-auto overflow-y-hidden rounded-lg border text-sm">
          <table>
            <thead className="border-b">
              <tr>
                <th className="border-r px-3 py-2 text-left">Nome</th>
                <th className="border-r px-3 py-2 text-left">Classificação</th>
                <th className="border-r px-3 py-2 text-left">Propriedade</th>
                <th className="border-r px-3 py-2 text-left">Duração</th>
                <th className="border-r px-3 py-2 text-left">Definição</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="truncate border-r px-3 py-2 text-left">_zid</td>
                <td className="truncate border-r px-3 py-2 text-left">
                  Desempenho
                </td>
                <td className="truncate border-r px-3 py-2 text-left">
                  Próprio
                </td>
                <td className="truncate border-r px-3 py-2 text-left">
                  Quando terminar a sessão de navegação
                </td>
                <td className="truncate border-r px-3 py-2 text-left">
                  Gerencia a sessão do Zenvia Chat
                </td>
              </tr>
              <tr className="border-b">
                <td className="truncate border-r px-3 py-2 text-left">
                  cookieconsent_status
                </td>
                <td className="truncate border-r px-3 py-2 text-left">
                  Estritamente Necessário
                </td>
                <td className="truncate border-r px-3 py-2 text-left">
                  Próprio
                </td>
                <td className="truncate border-r px-3 py-2 text-left">1 ano</td>
                <td className="truncate border-r px-3 py-2 text-left">
                  Persiste a validação se o utilizador permite a política de
                  cookies
                </td>
              </tr>
              <tr className="border-b">
                <td className="truncate border-r px-3 py-2 text-left">
                  ARRAffinity, ARRAffinitySameSite
                </td>
                <td className="truncate border-r px-3 py-2 text-left">
                  Estritamente Necessário
                </td>
                <td className="truncate border-r px-3 py-2 text-left">
                  Próprio
                </td>
                <td className="truncate border-r px-3 py-2 text-left">
                  Quando terminar a sessão de navegação
                </td>
                <td className="truncate border-r px-3 py-2 text-left">
                  Roteia as solicitações feitas pelo usuário para garantir que
                  serão redirecionadas para o mesmo servidor
                </td>
              </tr>
              <tr>
                <td className="truncate border-r px-3 py-2 text-left">
                  __cf_bm
                </td>
                <td className="truncate border-r px-3 py-2 text-left">
                  Essencial
                </td>
                <td className="truncate border-r px-3 py-2 text-left">
                  Terceiros
                </td>
                <td className="truncate border-r px-3 py-2 text-left">
                  30 minutos
                </td>
                <td className="truncate border-r px-3 py-2 text-left">
                  Gerencia o tráfego de entrada que corresponde aos critérios
                  associados aos bots da CloudFare
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mt-10 border-b pb-4 text-xl font-bold text-zinc-600">
          Gerenciamento de Cookies
        </h2>

        <p>
          A instalação de cookies em nossas aplicações está sujeita à sua
          aprovação prévia. Embora a maioria dos navegadores esteja inicialmente
          configurada para aceitar cookies automaticamente, você tem a opção de
          revisar e modificar suas permissões a qualquer momento. Você pode
          escolher bloquear, aceitar ou receber notificações quando algum cookie
          for enviado para o seu dispositivo.
          <br />
          <br />
          Ao acessar nossas aplicações pela primeira vez, você será solicitado a
          aceitar a instalação dos cookies. Somente após a sua aprovação, eles
          serão ativados. É importante ressaltar que você pode gerenciar os
          cookies do seu navegador a qualquer momento sem nenhum custo. No
          entanto, a revogação do consentimento de determinados cookies pode
          afetar o funcionamento correto de alguns recursos da plataforma. Para
          gerenciar os cookies do seu navegador, basta acessar a área de gestão
          de cookies nas configurações do navegador.
        </p>

        <h2 className="mt-10 border-b pb-4 text-xl font-bold text-zinc-600">
          Considerações finais
        </h2>

        <p>
          A Ucred valoriza muito a privacidade e a confiança em nossa relação
          com você. Por isso, estamos sempre atualizando nossos processos e
          tecnologias para manter os mais altos padrões de segurança em nossas
          aplicações.
          <br />
          <br />
          É importante destacar que esta política pode ser revisada ou alterada
          a qualquer momento. Por isso, recomendamos que você verifique sempre
          esta página ao acessar um de nossos sites para se manter informado
          sobre possíveis mudanças.
          <br />
          <br />
          Ao continuar navegando em nossas aplicações após a entrada em vigor de
          uma nova política, você estará concordando com as novas condições
          estabelecidas. Por isso, é fundamental que você sempre verifique tanto
          esta política quanto a nossa Política de Privacidade.
          <br />
          <br />
          Mais uma vez, reforçamos nosso compromisso em manter a privacidade e a
          segurança de suas informações em todas as interações com a Ucred.
        </p>
      </div>

      <Footer />
    </main>
  )
}
