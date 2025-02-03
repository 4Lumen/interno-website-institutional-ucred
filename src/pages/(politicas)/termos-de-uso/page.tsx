import { InfoIcon } from 'lucide-react'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { Footer } from '../../../components/footer'
import { Header } from '../../../components/header'

export function TermosDeUsoPage() {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <main className="min-h-screen w-full">
      <Helmet title="Termos de uso" />

      <Header />

      <div className="container py-14 text-lg text-zinc-600">
        <h2 className="text-2xl font-bold text-zinc-600">
          TERMOS DE USO - UCRED
        </h2>

        <div className="my-4 flex items-start gap-3 rounded-md border bg-zinc-100 p-4">
          <InfoIcon className="relative top-1 size-4 shrink-0" />
          <p>
            Esse termos de uso foi atualizado pela última vez em 28 de Outubro
            de 2020. Acesse também o nosso{' '}
            <Link
              to="/politica-de-privacidade"
              className="text-primary underline underline-offset-2"
            >
              Política de privacidade
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
          A Ucred convida o Usuário a fazer uso de sua plataforma digital e
          informa por meio deste Termo de Uso, o regramento, obrigações e
          responsabilidades ao acesso à Plataforma Ucred.
          <br />
          <br />
          Antes de acessar a Plataforma Ucred o Usuário deverá ler este
          documento, uma vez que o seu uso e/ou acesso implicarão na aceitação
          integral de todos os termos e condições previstos no Termo de Uso, que
          condicionará ao Usuário cuidados e responsabilidades pelo uso.
          <br />
          <br />A Ucred poderá estabelecer termos de uso específicos, aplicáveis
          a determinado serviço e/ou aplicativo, que complementarão e/ou
          prevalecerão sobre este Termo de Uso, conforme o caso.
        </p>

        <h2 className="mt-10 border-b pb-4 text-xl font-bold text-zinc-600">
          1. DEFINIÇÕES
        </h2>

        <p>
          <br />
          <br />
          1.1. Para os fins deste Termo de Uso, consideram-se:
          <br />
          <br />
          <strong>1.1.1. Autenticador de Dados:</strong> empresa terceirizada
          que presta serviços de autenticação de dados bancários e geração de
          relatórios para a análise de crédito dos seus usuários.
          <br />
          <br />
          <strong>1.1.2. Instituição Financeira Parceira:</strong> GIRO
          SOCIEDADE DE CRÉDITO DIRETO S/A., Sociedade de Crédito Direto (SCD)
          devidamente constituída e existente de acordo com as leis do Brasil,
          com sede na Cidade de Curitiba, Estado do Paraná, na Rua Visconde do
          Rio Branco, nº 1488, sala 1006, Centro, CEP: 80410000, inscrita no
          CNPJ/ME sob o nº 40.112.555/0001-40
          <br />
          <br />
          <strong>Giro Sociedade de Crédito Direto S/A</strong> inscrita no CNPJ
          sob nº 40.112.555/0001-40, com sede à Rua Visconde do Rio Branco, 1488
          - Sala 1006 - Centro - Curitiba - PR
          <br />
          <br />
          <strong>
            IWF Serviços de Apoio Administ. - Eireli, com nome fantasia UCRED
          </strong>
          inscrita no CNPJ sob nº 06376.451/0001-04, com sede à Rua Emiliano
          Perneta, 424 - Conj. 21/22 - Centro - Curitiba - PR
          <br />
          <br />
          <strong>1.1.4. Participantes:</strong> pessoas físicas, pessoas
          jurídicas ou quaisquer outros tipos de entidades, fundos, consórcios,
          sociedades e afins, com elevado grau de sofisticação e conhecimento do
          mercado financeiro que poderão adquirir da Instituição Financeira
          Parceira as Cédulas de Crédito Bancário (“CCBs”) emitidas em seu favor
          pelos Usuários.
          <br />
          <br />
          <strong>1.1.5. Plataforma Ucred:</strong> o domínio eletrônico
          https://www.ucred.net.br/ e o aplicativo Ucred, bem como todos os
          recursos e ferramentas que lhe são relacionadas, além de outros
          domínios que utilizem, de forma autorizada, a marca Ucred.
          <br />
          <br />
          <strong>1.1.6. Usuário:</strong> todas as pessoas físicas que
          utilizarem a Plataforma Ucred com a finalidade de tomar empréstimos.
          <br />
          <br />
          <strong>2. EMPRÉSTIMOS CONCEDIDOS ATRAVÉS DA PLATAFORMA UCRED</strong>
          <br />
          <br />
          2.1. Por meio da Plataforma Ucred, o Usuário terá acesso a
          determinados serviços e produtos do mercado financeiro, além de acesso
          aos meios eletrônicos de pagamento, em especial ao serviço de
          concessão de crédito, finalidade da Instituição Financeira Parceira
          (item 1.1.2.).
          <br />
          <br />
          2.2. O Usuário não necessitará de abrir conta corrente na Instituição
          Financeira Parceira para que possa tomar empréstimos por meio da
          Plataforma Ucred.
          <br />
          <br />
          2.3. O Usuário interessado em contratar um empréstimo deverá informar
          o seu interesse, especificando, dentre as opções oferecidas pela
          Plataforma Ucred, o valor, condições de prazo e pagamento. Em seguida,
          o Usuário deverá fornecer as informações pessoais solicitadas pela
          Plataforma Ucred, as quais, juntamente com informações de bases
          públicas e privadas de dados, servirão de fundamento para a análise do
          risco de crédito do Usuário.
          <br />
          <br />
          2.3.1 Ao Usuário poderá ser requisitado, dentre outras informações
          pessoais, os dados referentes a suas contas bancárias abertas em
          instituições financeiras, tais como, mas não se limitando, os dados da
          instituição bancária, número de agência bancária, número de conta da
          instituição bancária, bem como eventuais outros dados de contas
          correntes, contas de investimento e contas poupança do Usuário. Neste
          caso, a Plataforma Ucred utilizará os serviços de um Autenticador de
          Dados, cujo algoritmo de criptografia garante a confidencialidade e
          segurança dos dados divulgados pelo Usuário, tendo em vista a
          utilização de protocolo SSL (Secure Socket Layer).
          <br />
          <br />
          A) 2.3.1.1. Em Hipótese algum será solicitado a senha de acesso ao
          usuário, deste modo, não a forneça no aplicativo; ocorrendo a
          informação, será de exclusiva responsabilidade do Usuário eventuais
          prejuízo que uso indevido da senha venha a ocorrer.
          <br />
          <br />
          2.3.1.1 A Ucred, a Instituição Financeira Parceira e seus empregados
          não terão acesso aos dados de acesso às contas bancárias do Usuário,
          que serão processados diretamente pelo sistema do Autenticador de
          Dados para geração dos relatórios da situação financeira do Usuário.
          <br />
          <br />
          2.3.1.2 Os dados referidos no Item 2.3.1 serão utilizados única e
          exclusivamente para fins de visualização dos extratos bancários e
          correspondente análise do risco de crédito do Usuário através do
          acesso às suas informações financeiras pessoais geradas pelo
          <br />
          <br />
          2.3.1.3 A Ucred, a Instituição Financeira Parceria, o Autenticador de
          Dados ou qualquer outro terceiro envolvido no processo de avaliação de
          crédito e concessão do empréstimo ao Usuário não movimentarão ou de
          qualquer forma interferirão nas contas bancárias e nos ativos do
          Usuário, devendo observar estritamente o disposto neste Termo de Uso.
          <br />
          <br />
          2.3.1.4 AO CONCORDAR COM ESTE TERMO DE USO, O USUÁRIO AUTORIZA A
          UCRED, A INSTITUIÇÃO FINANCEIRA PARCEIRA, O AUTENTICADOR DE DADOS E
          QUALQUER OUTRO TERCEIRO ENVOLVIDO NO PROCESSO DE AVALIAÇÃO DE CRÉDITO
          E CONCESSÃO DO EMPRÉSTIMO A TER ACESSO A INFORMAÇÕES FINANCEIRAS
          PESSOAIS DO USUÁRIO MANTIDAS JUNTO ÀS INSTITUIÇÕES FINANCEIRAS CUJOS
          DADOS FORAM FORNECIDOS NA PLATAFORMA UCRED.
          <br />
          <br />
          2.3.1.5 Depois de utilizado os dados para consulta para a finalidade
          de avaliação de risco, os dados sensíveis do item 2.3.1. serão
          prontamente deletados da base da Ucred, em conformidade a Lei
          13.709/18.
          <br />
          <br />
          2.3.2 O Usuário que desejar obter uma proposta de crédito com a
          Instituição Financeira Parceira, por meio da Plataforma Ucred, deverá
          (i) autorizar o acesso da Instituição Financeira Parceira às
          informações que lhe são relativas e que constem do Sistema de
          Informações de Crédito do Banco Central (“SCR”), órgãos de proteção ao
          crédito, bases públicas e privadas de dados, sistemas de internet
          banking cujos dados foram fornecidos pelo Usuário nos termos do Item
          2.3.1 e demais consultas às informações pertinentes ou a quaisquer
          outras fontes que possam auxiliar na definição do risco de crédito do
          Usuário; (ii) autorizar o compartilhamento das informações coletadas
          pela Instituição Financeira Parceira com a Ucred e os Participantes,
          conforme previsto no Item 2.4; 2.4.; e (iii) autorizar a execução de
          procedimentos de Know Your Client (“KYC”) e Anti Money Laundering
          (“AML”), quando necessário ou adequado.
          <br />
          <br />
          2.3.3 O usuário que aceitar nossos Termos de Uso, declara que leu e
          nos autoriza a coletar, utilizar e tratar os seus dados cadastrais,
          pessoais, como dados bancários e endereço residencial e do seu
          dispositivo móvel (e-mail cadastrado, aplicativos instalados,
          histórico de navegação, calendário, ligações efetuadas e recebidas,
          rolo de câmera, contatos, uso de dados, marca, fabricante, número do
          telefone, IMEI, IMSI, endereço MAC de todas as interfaces da rede,
          endereço IP, localização, SMS, WIFI), nos termos da lei, bem como o
          compartilhamento com parceiros especializados para geração de perfis,
          de forma identificada, quando utilizados em nossos produtos e serviços
          com a finalidade de subsidiar análises de risco de crédito, para a
          concessão de crédito, o seu acompanhamento e cobrança, para a
          realização de negócios e prevenção à fraude ou de forma anonimizada,
          quando utilizados para o desenvolvimento e aprimoramento de modelos de
          perfis de crédito desses parceiros.
          <br />
          <br />
          2.3.4 O usuário está ciente de que poderá ter livre acesso a esses
          dados a qualquer momento. Caso não estejam corretos ou se não
          corresponderem à verdade, o usuário tem ciência de que poderá pedir a
          sua atualização, retificação, modificação, o seu cancelamento,
          gratuitamente, mediante requerimento escrito enviado para R. Marechal.
          Deodoro, 497 Andar 7 - Centro, Curitiba - PR, 80020-320
          <br />
          <br />
          2.3.5 O usuário responsabiliza-se integralmente pela exatidão e pela
          veracidade dos dados informados, tendo ciência e estando plenamente de
          acordo que eventuais divergências e/ou inconsistências desses dados
          poderão afetar a concessão de crédito, o que poderá impedir o acesso a
          todos ou a alguns dos serviços oferecidos pelo(a) Ucred em seus sites,
          como medida de segurança.
          <br />
          <br />
          2.4. As informações previstas no Item 2.3 e/ou o resultado da análise
          de crédito do Usuário poderão ser compartilhados entre a Instituição
          Financeira Parceira, a Ucred e/ou com terceiros que precisem ter
          acesso a tais informações, sempre que tal providência seja necessária
          para a avaliação do risco de crédito e/ou de risco de fraude do
          Usuário, para a concessão e/ou cobrança do empréstimo.
          <br />
          <br />
          2.5. A Instituição Financeira Parceira, auxiliada pela Ucred
          Pagamentos, efetuará avaliação do risco de crédito do Usuário, com
          base nas informações por ele fornecidas e/ou obtidas pela Instituição
          Financeira Parceira e pela Ucred.
          <br />
          <br />
          2.6. Com base na avaliação de crédito feita pela Ucred, o Usuário –
          caso tenha seu crédito pré-aprovado –, receberá um resumo das
          condições de seu empréstimo, contendo: (i) valor de principal; (ii)
          valor da tarifa de cadastro; (iii) valor do Imposto sobre Operações
          Financeiras (“IOF”); (iv) número de parcelas mensais; (v) data de
          vencimento das parcelas mensais; (vi) valor das parcelas mensais;
          (vii) taxa de juros do empréstimo; (viii) Custo Efetivo Total do
          Empréstimo (“CET”); e (ix) indicação da forma de pagamento das
          parcelas mensais.
          <br />
          <br />
          2.7. Caso aceite as condições do crédito pré-aprovado, o Usuário
          deverá realizar o preenchimento de dados pessoais como dados bancários
          e endereço residencial, bem como realizar o upload de via digitalizada
          de (i) seu documento de identificação (RG, CNH ou RNE), (ii) foto
          frontal do próprio rosto; e (iii) comprovante de endereço residencial,
          quando necessário. Por último, caso todas as informações prestadas
          pelo Usuário sejam consideradas válidas, este deverá assinar
          digitalmente as CCBs representativas do crédito pré-aprovado, que
          serão emitidas em favor da Instituição Financeira Parceira e
          formalizarão as condições previstas no Item 2.6.
          <br />
          <br />
          2.7.1. O Usuário autoriza a emissão de uma ou mais de uma CCBs para
          cada empréstimo – sendo todas necessariamente iguais àquelas por ele
          assinadas digitalmente. Não haverá qualquer limite de quantidade de
          CCBs emitidas para cada empréstimo, todavia, em todo e qualquer caso,
          o conjunto de CCBs emitidas em cada empréstimo jamais ultrapassará o
          valor total aprovado pela Instituição Financeira Parceira e aceito
          digitalmente pelo Usuário. Assim, as condições gerais do empréstimo
          serão necessariamente mantidas, ainda que este seja formalizado e
          representado por mais de uma CCB.
          <br />
          <br />
          2.7.2. A Instituição Financeira Parceira poderá emitir mais de uma CCB
          para cada empréstimo, tendo em vista que essa providência facilita a
          aquisição das CCBs pelos Participantes, diminui o risco daqueles que
          adquirem as CCBs e, em última instância, otimiza o processo de
          concessão do empréstimo ao Usuário.
          <br />
          <br />
          2.8. O cumprimento das condições impostas pelo Item 2.7 não significa
          que o Usuário teve seu empréstimo aprovado e/ou que receberá o valor
          do empréstimo imediatamente. A assinatura digital das CCBs significa
          apenas que o perfil de crédito do Usuário foi aprovado e que ele
          confirma sua manifestação de vontade, no sentido de tomar o empréstimo
          que seria formalizado pelas respectivas CCBs. O cumprimento das
          condições previstas no Item 2.7 representa, portanto, uma
          pré-autorização do Usuário para a concessão de empréstimo nas
          condições constantes das CCBs, ficando a concessão do empréstimo e a
          eficácia das CCBs assinadas digitalmente condicionadas: (i) à
          aprovação cadastral do Usuário pela Instituição Financeira Parceira; e
          (ii) à existência de Participantes interessados em adquirir as
          respectivas CCBs, que somente gerarão efeitos após o efetivo
          recebimento do respectivo valor do empréstimo pelo Usuário.
          <br />
          <br />
          2.9. As CCBs emitidas têm como previsão uma condição suspensiva –
          consistente na aprovação cadastral do Usuário pela Instituição
          Financeira Parceira e consistência dos dados bancários para
          recebimento do valor do empréstimo –, que deverá ser satisfeita em até
          2 (dois) dias. Após este prazo, caso a referida condição suspensiva
          não tenha sido implementada, as CCBs serão automaticamente extintas e
          canceladas. Nesse caso, o Usuário deverá solicitar o empréstimo
          novamente, o qual poderá – a depender do mercado de crédito – estar
          sujeito a novas condições, mais benéficas ou não. O Usuário declara-se
          ciente de que o cancelamento de uma ou mais CCBs já assinadas
          digitalmente por ele, não ensejará direito de indenização, aplicação
          de qualquer tipo de penalidade e/ou afins.
          <br />
          <br />
          2.10. Na hipótese de efetivação do empréstimo, o Usuário receberá os
          recursos financeiros correspondentes às CCBs, já líquidos do IOF e da
          tarifa de cadastro – cobrada pela Instituição Financeira Parceira –,
          em conta bancária de titularidade do próprio Usuário, conforme
          indicado em seu cadastro realizado pela Plataforma Ucred.
          <br />
          <br />
          2.11. O Usuário não se opõe e não se oporá à cessão, aos
          Participantes, das CCBs que vier a emitir inicialmente em favor da
          Instituição Financeira Parceira. O Usuário será notificado acerca do
          endosso ou cessão de crédito das CCBs que emitiu para um, ou mais,
          Participantes – sem, contudo, tomar conhecimento da identidade dos
          Participantes. A notificação ao Usuário, nos termos acima descritos,
          será realizada pela Ucred, mediante notificação push, pop up, e-mail
          e/ou notificação na área específica e pessoal atribuída aos Usuários
          na Plataforma Ucred.
          <br />
          <br />
          2.11.1. A Ucred possui o direito de inscrever o Usuário em órgãos de
          proteção ao crédito, caso este se torne inadimplente quanto ao
          pagamento do empréstimo, cessando tal direito somente quando o Usuário
          houver quitado integralmente o empréstimo. A negativação do Usuário
          perante os órgãos de crédito poderá ser feita a qualquer momento em
          que esteja configurada a inadimplência do Usuário.
          <br />
          <br />
          2.11.2. A Ucred poderá exercer a prerrogativa do subitem 2.11.1,
          independentemente da cessão das CCBs para terceiros.
          <br />
          <br />
          2.12. O USUÁRIO NÃO PODERÁ EXCLUIR SUA CONTA NA PLATAFORMA UCRED
          ENQUANTO NÃO HOUVER QUITADO INTEGRALMENTE O EMPRÉSTIMO A ELE CONCEDIDO
          POR MEIO DA PLATAFORMA UCRED. TODAVIA, CASO O USUÁRIO VENHA A EXCLUIR
          SUA CONTA – SEJA POR INICIATIVA PRÓPRIA, DETERMINAÇÃO JUDICIAL OU ERRO
          DE SISTEMA – CONTINUARÁ OBRIGADO AO PAGAMENTO NORMAL DO SALDO DEVEDOR
          E ENCARGOS DE SEU EMPRÉSTIMO, OS QUAIS CONTINUARÃO A SER NORMALMENTE
          COBRADOS PELA UCRED.
          <br />
          <br />
          2.13. Fica ressalvado o direito da Ucred de manter as informações,
          dados dos Usuários e/ou dos empréstimos a eles concedidos, cuja
          manutenção seja imposta à Ucred em razão de normas contratuais,
          legais, administrativas, regulamentares e de política interna ou,
          ainda, cuja manutenção seja necessária para cumprimento de ordem
          judicial ou administrativa. As referidas informações poderão ser
          mantidas pela Ucred, mesmo diante da exclusão da conta do Usuário na
          Plataforma Ucred.
          <br />
          <br />
          3. RESPONSABILIDADES DOS USUÁRIOS
          <br />
          <br />
          3.1. O Usuário se responsabiliza pela exatidão e veracidade das
          informações fornecidas à Ucred, ciente de que a inconsistência,
          fraude, dolo ou simulação pode implicar em erro na avaliação de
          crédito do Usuário pela Ucred e/ou Instituição Financeira Parceira,
          com a consequente responsabilização do Usuário, inclusive para fins
          civis e criminais.
          <br />
          <br />
          3.1.1. O Usuário se compromete a não informar na Plataforma Ucred
          qualquer outro número de CPF ou outros dados pessoais que não sejam os
          seus próprios, declarando estar ciente de que eventual violação dessa
          obrigação caracterizará falsidade ideológica, sujeita às sanções
          criminais, sem prejuízo de eventual indenização que a Ucred possa ter
          direito em razão do uso indevido da Plataforma Ucred.
          <br />
          <br />
          3.2. O perfil de crédito e as informações utilizadas para sua
          elaboração poderão ser compartilhados com a Instituição Financeira
          Parceira e/ou terceiros que precisem ter acesso a tais informações com
          a finalidade de concluir a operação de empréstimo ou cumprir normas
          que lhe são aplicáveis, tais como órgãos reguladores, serviços de
          compensação, serviços de avaliação de perfil e risco de fraude do
          Usuário, dentre outros que possam ser necessários durante o processo
          de concessão do crédito ao Usuário.
          <br />
          <br />
          3.3. O Usuário é exclusivamente responsável:
          <br />
          <br />
          (i) por todos e quaisquer atos ou omissões por ele incorridos a partir
          de seu acesso na Plataforma Ucred;
          <br />
          <br />
          (ii) por outorgar procurações em favor da Ucred para que os documentos
          assinados digitalmente possam ser assinados fisicamente, se for o
          caso, pela Ucred em seu nome;
          <br />
          <br />
          (iii) pela guarda e utilização da combinação de senha de acesso e
          login – necessários para acesso ao conteúdo restrito da Plataforma
          Ucred –, os quais são pessoais e intransferíveis, sendo o Usuário
          integralmente responsável pela sua guarda, sigilo e boa utilização,
          não se responsabilizando a Ucred pelo uso indevido da senha e login
          por terceiros;
          <br />
          <br />
          (iv) pela veracidade, exatidão, completude e precisão de toda e
          qualquer informação fornecida à Ucred, comprometendo-se a usar apenas
          os dados pessoais próprios;
          <br />
          <br />
          (v) pela reparação de todos e quaisquer danos, diretos ou indiretos
          (inclusive decorrentes de violação de quaisquer direitos de outros
          Usuários, de terceiros, inclusive direitos de propriedade intelectual,
          de sigilo e de personalidade), que sejam causados à Ucred, a qualquer
          outro Usuário, ou, ainda, a qualquer terceiro, inclusive em virtude do
          descumprimento do disposto neste Termo de Uso ou em virtude de
          qualquer ato praticado por meio do acesso à Plataforma Ucred; e
          <br />
          <br />
          (vi) por manter seu computador seguro, através de ferramentas como
          antivírus, firewall, dentre outras, contribuindo, assim, para a
          prevenção de riscos eletrônicos.
          <br />
          <br />
          3.4. Em nenhuma hipótese, a Ucred será responsável:
          <br />
          <br />
          (i) por qualquer ato ou omissão incorrido e/ou dano causado pelo
          Usuário em função de seu acesso à Plataforma Ucred;
          <br />
          <br />
          (ii) pelo uso indevido da Plataforma Ucred por qualquer Usuário ou
          terceiros, bem como pelos conteúdos carregados, enviados e/ou
          transmitidos à Plataforma Ucred pelo Usuário; e/ou
          <br />
          <br />
          (iii) por falhas, impossibilidades técnicas ou indisponibilidades do
          sistema.
          <br />
          <br />
          3.5. O Usuário declara estar ciente de que todos e quaisquer conteúdos
          enviados e/ou transmitidos à Plataforma Ucred por qualquer Usuário
          e/ou terceiros não representam, de nenhuma forma, a opinião ou a visão
          da Ucred.
          <br />
          <br />
          3.6. CASO O USUÁRIO DESCUMPRA QUAISQUER DISPOSIÇÕES DESTE TERMO DE
          USO, SEM PREJUÍZO DE OUTRAS MEDIDAS CABÍVEIS, A UCRED PODERÁ, A
          QUALQUER TEMPO E A SEU EXCLUSIVO CRITÉRIO, SEM NECESSIDADE DE QUALQUER
          AVISO OU NOTIFICAÇÃO PRÉVIA OU POSTERIOR A QUALQUER USUÁRIO OU A
          TERCEIRO, SUSPENDER OU LIMITAR O ACESSO À PLATAFORMA UCRED, ENCERRAR A
          CONTA DE QUALQUER USUÁRIO E/OU TOMAR OUTRAS PROVIDÊNCIAS QUE ENTENDER
          NECESSÁRIAS A FIM DE GARANTIR O CUMPRIMENTO DESTE TERMO DE USO E O BOM
          FUNCIONAMENTO DA PLATAFORMA UCRED.
          <br />
          <br />
          <strong>4. PROPRIEDADE INTELECTUAL</strong>
          <br />
          <br />
          4.1. A logomarca, imagens, textos, nome, domínio eletrônico, além de
          toda e qualquer expressão de propaganda ou sinal distintivo da Ucred,
          presentes na Plataforma Ucred estão protegidos por direitos autorais
          ou outros direitos de propriedade intelectual de titularidade da
          Ucred, não podendo ser usados, sob qualquer meio ou forma, pelos
          Usuários sem prévia e expressa autorização da Ucred.
          <br />
          <br />
          DISPOSIÇÕES GERAIS
          <br />
          <br />
          5.1. Eventual tolerância por parte da Ucred quanto ao descumprimento
          de quaisquer das disposições deste Termo de Uso pelo Usuário ou
          terceiro não constitui novação das obrigações estabelecidas neste
          Termo de Uso, tampouco constitui renúncia ao direito de exigir o
          cumprimento da obrigação, a qualquer tempo.
          <br />
          <br />
          5.2. Logo após a conclusão do empréstimo, o Usuário receberá as cópias
          digitais de todos os documentos assinados, as quais serão enviadas
          para o endereço de e-mail informado pelo Usuário no momento de seu
          cadastro na Plataforma Ucred.
          <br />
          <br />
          5.3. O Usuário reconhece que a Ucred será parte legítima para realizar
          a cobrança e recebimento mensal relativos ao pagamento das parcelas do
          empréstimo, de forma que toda e qualquer comunicação, questionamento,
          dúvida ou relacionamento do Usuário no que se refere ao empréstimo
          serão realizadas exclusivamente por intermédio da Ucred (e não
          diretamente com a Instituição Financeira Parceira).
          <br />
          <br />
          <strong>6. ALTERAÇÃO DO TERMO DE USO</strong>
          <br />
          <br />
          6.1. A Ucred reserva a si o direito de, a qualquer tempo e sem
          necessidade de qualquer aviso prévio ou posterior, alterar
          unilateralmente, a Plataforma Ucred, seu conteúdo, este Termo de Uso e
          a Política de Privacidade.
          <br />
          <br />
          6.2. Qualquer alteração e/ou atualização destes Termos de Uso e da
          Política de Privacidade passará a vigorar a partir da data de sua
          publicação na Plataforma Ucred e deverá ser integralmente observada
          pelos Usuários.
          <br />
          <br />
          <strong>7. LEGISLAÇÃO E FORO</strong>
          <br />
          <br />
          7.1. Este Termo de Uso é regido pela legislação brasileira. Quaisquer
          controvérsias oriundas de atos praticados no âmbito da utilização da
          Plataforma Ucred pelos Usuários, inclusive com relação ao
          descumprimento do Termo de Uso ou pela violação dos direitos da Ucred,
          de outros Usuários e/ou de terceiros, inclusive direitos de
          propriedade intelectual, de sigilo e de personalidade, terão como foro
          a Comarca de Curitiba, Estado do Paraná, Brasil, com a exclusão de
          qualquer outro foro, por mais privilegiado que seja.
        </p>
      </div>

      <Footer />
    </main>
  )
}
