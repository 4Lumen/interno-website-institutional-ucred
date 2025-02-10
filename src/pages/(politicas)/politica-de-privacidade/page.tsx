import { InfoIcon } from 'lucide-react'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { Footer } from '../../../components/footer'
import { Header } from '../../../components/header'

export function PoliticaDePrivacidadePage() {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <main className="min-h-screen w-full">
      <Helmet title="Política de privacidade" />

      <Header />

      <div className="container py-14 text-lg text-zinc-600">
        <h2 className="text-xl font-bold text-zinc-600 md:text-2xl">
          POLÍTICA DE PRIVACIDADE - UCRED
        </h2>

        <div className="my-4 flex items-start gap-3 rounded-md border bg-zinc-100 p-4">
          <InfoIcon className="relative top-1 size-4 shrink-0" />
          <p>
            Esta Política de Privacidade foi atualizada pela última vez em 06 de
            Outubro de 2020. Acesse também o nosso{' '}
            <Link
              to="/termos-de-uso"
              className="text-primary underline underline-offset-2"
            >
              Termos de Uso
            </Link>{' '}
            e{' '}
            <Link
              to="/politica-de-cookies"
              className="text-primary underline underline-offset-2"
            >
              Política de Cookies
            </Link>{' '}
          </p>
        </div>

        <p className="text-lg text-zinc-600">
          Criamos esta Política de Privacidade Ucred para deixar claro que temos
          forte compromisso com a segurança e privacidade das suas informações.
          Não deixe de ler toda esta Política de Privacidade, pois ela descreve
          como as suas informações pessoais serão utilizadas e armazenadas, além
          de descrever como você deverá utilizar nossos serviços. O uso e acesso
          ao nosso site e serviços significa que você concorda e aceita todos os
          termos da nossa Política de Privacidade.
        </p>

        <h2 className="mt-10 border-b pb-4 text-xl font-bold text-zinc-600">
          Quem somos
        </h2>

        <p className="mt-5 text-lg text-zinc-600">
          Giro Sociedade de Crédito Direto S/A inscrita no CNPJ sob nº
          40.112.555/0001-40, com sede à Rua Visconde do Rio Branco, 1488 - Sala
          1006 - Centro - Curitiba - PR
          <br />
          <br />
          IWF Serviços de Apoio Administ. - Eireli, com nome fantasia UCRED
          inscrita no CNPJ sob nº 06376.451/0001-04, com sede à Rua Emiliano
          Perneta, 424 - Conj. 21/22 - Centro - Curitiba - PR
        </p>

        <h2 className="mt-10 pb-4 text-xl font-bold text-zinc-600">
          Como funciona
        </h2>

        <ol className="my-4 list-inside list-decimal space-y-5">
          <li>
            A Ucred solicita alguns de seus dados pessoais para realizar uma
            análise de risco do seu perfil, em conjunto com uma instituição
            financeira parceira e com um prestador de serviços de avaliação de
            risco de fraude.
          </li>
          <li>
            Para facilitar o processo de avaliação de risco do seu perfil,
            poderemos atribuir, de forma isenta e não vinculante, um Perfil de
            Crédito Ucred, vinculado a critérios de aprovação de limites de
            crédito e taxas de juros pré-determinadas.
          </li>
          <li>
            Caso você tenha um limite de crédito pré-aprovado e aceite as
            condições ofertadas, a Ucred solicitará dados pessoais específicos
            para finalizar o seu cadastro. Caso seja aprovado pela instituição
            financeira parceira da Ucred, esta instituição financeira será
            responsável pela concessão do seu crédito.
          </li>
          <li>
            Todos os seus dados pessoais são coletados de forma ética e legal e
            serão transferidos e armazenados de forma segura. Utilizamos
            processo de criptografia padrão da Internet.
          </li>
          <li>
            Você sempre será avisado sobre os dados coletados e você sempre terá
            a opção de fornecê-los ou não, bem como terá a opção de nos
            autorizar a consultar informações a seu respeito em bases de dados
            externas. O uso de seus dados é realizado em conformidade com os
            regulamentos nacionais, inclusive a Lei Geral de Proteção de Dados
            (Lei nº 13.709/2018).
          </li>
          <li>
            Nos comprometemos a não vender ou transferir esse tipo de informação
            a terceiros que não tenham relação com a sua solicitação de crédito.
            Todavia, precisamos ter o direito de compartilhar suas informações
            pessoais e de crédito com terceiros respeitáveis, tais como nossa
            instituição financeira parceira, órgãos reguladores, serviços de
            compensação e serviços de avaliação de perfil e risco de fraude, por
            exemplo.
          </li>
          <li>
            A Ucred somente utilizará as informações fornecidas por você para as
            finalidades e propósitos para as quais foram coletadas. Contudo, a
            Ucred estará obrigada a compartilhar suas informações, caso uma
            autoridade, agindo dentro de sua competência e no cumprimento de
            suas atribuições, solicite-as por meio de ordem que nos obrigue a
            fornecê-las.
          </li>
          <li>
            Podemos colher informações relacionadas a seu dispositivo de acesso,
            tais como IP da rede, códigos do dispositivo, data e hora dos
            acessos e a utilizar cookies¹. Tudo isso servirá para confirmar a
            sua identidade e personalizar o seu acesso.
          </li>
          <li>
            Não manipulamos as informações que você nos fornece, de forma a
            alterá-las ou desvirtuá-las. Suas informações são mantidas em seu
            estado original e a responsabilidade pela veracidade das informações
            fornecidas é inteiramente sua.
          </li>
          <li>
            Você pode alterar seus dados cadastrais a qualquer momento, bastando
            acessar a área personalizada, usando sua combinação de CPF e senha
            de acesso. Sua senha é pessoal e intransferível, portanto, não a
            transfira para terceiros, já que não nos responsabilizamos pelo uso
            indevido dessas informações por terceiros que tenham acesso a sua
            combinação de CPF e senha de acesso.
          </li>
          <li>
            Nossa comunicação com você é feita por meio de e-mails, SMS ou
            notificações enviadas diretamente ao seu smartphone (notificações
            push).
          </li>
          <li>
            O acesso às informações coletadas está restrito a funcionários
            autorizados para o uso adequado desses dados. Os funcionários que se
            utilizarem indevidamente dessas informações, violando esta Política
            de Privacidade, estarão sujeitos às penalidades previstas em nosso
            processo disciplinar e na lei.
          </li>
          <li>
            Nossos sites e aplicativos contêm links para outros sites externos
            cujos conteúdos e políticas de privacidade não são de
            responsabilidade da Ucred, ficando sob sua responsabilidade
            acessá-los e utilizá-los. A Ucred não se responsabiliza pelas
            políticas de privacidade de sites externos que venham a ser
            acessados por meio de links presentes em nosso site.
          </li>
          <li>
            Será exigida de toda organização contratada para prover serviços de
            apoio o cumprimento dos nossos padrões de privacidade e segurança da
            informação.
          </li>
          <li>
            Poderemos alterar essa Política de Privacidade quando julgarmos
            necessário, sem necessariamente notificá-lo. Sempre que acessar o
            nosso site, fique atento à última versão disponível desta Política
            de Privacidade, pois pode ser diferente da última consultada por
            você.
          </li>
          <li>
            Fica eleito o foro da Comarca de Curitiba, Estado do Paraná, Brasil,
            como competente para dirimir quaisquer controvérsias relacionadas à
            presente Política de Privacidade.
          </li>
          <li>
            Em caso de dúvidas, sugestões, reclamações entre em contato pelo
            canal de atendimento{' '}
            <a href="mailto:contato@ucred.net.br">contato@ucred.net.br</a> ou
            caso queira exercer os direitos relacionados aos seus dados
            pessoais, entre em contato com o Encarregado pelo e-mail{' '}
            <a href="mailto:contato@ucred.net.br">contato@ucred.net.br</a>.
          </li>
        </ol>

        <h2 className="mt-10 border-b pb-4 text-xl font-bold text-zinc-600">
          Considerações adicionais
        </h2>

        <p className="mt-5">
          A logomarca, imagens, textos, nome, domínio eletrônico, além de toda e
          qualquer expressão de propaganda ou sinal distintivo da Ucred estão
          protegidos por direitos autorais ou outros direitos de propriedade
          intelectual de titularidade da Ucred, não podendo ser usados, sob
          qualquer meio ou forma, por terceiros não autorizados. A Ucred não é
          uma instituição financeira, mas uma plataforma online que presta
          serviços de correspondente bancário da GIRO SOCIEDADE DE CRÉDITO S/A.
          Sociedade de Crédito Direto (SCD devidamente constituída e existente
          de acordo com as leis do Brasil, com sede na Cidade de Curitiba,
          Estado do Paraná, na Rua Visconde do Rio Branco, nº 1488, sala 1006,
          Centro, CEP: 80410000, inscrita no CNPJ/ME sob o nº
          40.112.555/0001-40.
        </p>
      </div>

      <Footer />
    </main>
  )
}
