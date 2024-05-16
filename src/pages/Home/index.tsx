export default function Home() {
  return (
    <><div className="h-screen">
      <div className="container ">
        <h1 className="text-3xl font-semibold text-center mb-5">
          Teste Técnico ClinCRM - Júnior
        </h1>

        <h2 className="text-2xl font-semibold">Introdução</h2>
        <p className="text-lg mb-5">
          Bem-vindo ao teste técnico para a posição de Desenvolvedor Júnior na
          ClinCRM. Neste teste, você demonstrará suas habilidades em React com
          TypeScript, utilizando as bibliotecas React Hook Form, Zod, Shadcn e
          Tailwind CSS. O objetivo é desenvolver uma aplicação simples que
          permita o gerenciamento de contas a receber e visualize as receitas
          através de um gráfico.
        </p>

        <h2 className="text-2xl font-semibold">Descrição do Projeto</h2>
        <p className="text-lg mb-5">
          Você deverá desenvolver uma aplicação que realiza o CRUD (Create,
          Read, Update, Delete) da entidade "Conta a Receber" e uma tela para
          visualização de receitas através de gráficos.
        </p>

        <div className="ml-5 mt-3">
          <h3 className="text-xl font-semibold">Entidade: Conta a Receber</h3>
          <ul className="ul-list-style mb-5">
            <li>
              <span className="strong-emphasis">id</span>: Identificador único da
              conta (string)
            </li>
            <li>
              <span className="strong-emphasis">nome do paciente</span>: Nome do
              paciente (string)
            </li>
            <li>
              <span className="strong-emphasis">operação feita</span>: Descrição da
              operação realizada (string)
            </li>
            <li>
              <span className="strong-emphasis">valor</span>: Valor da conta
              (number)
            </li>
            <li>
              <span className="strong-emphasis">forma de pagamento</span>: Forma de
              pagamento utilizada (string)
            </li>
            <li>
              <span className="strong-emphasis">data de emissão</span>: Data de
              emissão da conta (date)
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold">Requisitos</h2>
        <div className="ml-5 mb-5">
          <h3 className="text-xl font-semibold mt-3">Tecnologias Utilizadas</h3>
          <ul className="ul-list-style mb-5">
            <li>
              <span className="strong-emphasis">React</span> com{" "}
              <span className="strong-emphasis">TypeScript</span>
            </li>
            <li>
              <span className="strong-emphasis">React Hook Form</span> para
              manipulação de formulários
            </li>
            <li>
              <span className="strong-emphasis">Zod</span> para validação de dados
            </li>
            <li>
              <span className="strong-emphasis">Shadcn</span> para extensão de
              componentes pré prontos
            </li>
            <li>
              <span className="strong-emphasis">Tailwind CSS</span> para estilização
            </li>
          </ul>

          <h3 className="text-xl font-semibold">Funcionalidades</h3>
          <ul className="ul-list-style">
            <li>
              <span className="emphasis font-semibold">Tela de CRUD</span>
              <ul className="ul-list-style">
                <li>
                  <span className="strong-emphasis">Adicionar Conta</span>:
                  Formulário para adicionar uma nova conta a receber.
                </li>
                <li>
                  <span className="strong-emphasis">Listar Contas</span>: Exibição
                  de uma lista com todas as contas a receber.
                </li>
                <li>
                  <span className="strong-emphasis">Editar Conta</span>:
                  Funcionalidade para editar uma conta existente.
                </li>
                <li>
                  <span className="strong-emphasis">Deletar Conta</span>:
                  Funcionalidade para deletar uma conta existente.
                </li>
              </ul>
            </li>
            <li>
              <span className="emphasis font-semibold">Tela de Gráficos</span>
              <ul className="ul-list-style">
                <li>
                  <span className="strong-emphasis">Visualização de Receitas</span>:
                  Gráfico que mostra as receitas das contas a receber.
                </li>
                <li>
                  <span className="strong-emphasis">Filtragem por Data</span>:
                  Funcionalidade para filtrar as receitas por intervalo de
                  datas.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mb-3">Instruções de Desenvolvimento</h2>
        <ol className="ul-list-style">
          <li>
            <span className="strong-emphasis">Configuração do Projeto</span>
            <ul className="ul-list-style">
              <li>Inicialize um novo projeto React com TypeScript.</li>
              <li>Configure o Tailwind CSS para estilização.</li>
              <li>
                Instale e configure o React Hook Form e o Zod para validação de
                formulários.
              </li>
              <li>
                Utilize Shadcn para componentes adicionais conforme necessário.
              </li>
            </ul>
          </li>
          <li>
            <span className="strong-emphasis">Implementação do CRUD</span>
            <ul className="ul-list-style">
              <li>
                Crie componentes de formulário utilizando React Hook Form e Zod
                para adicionar e editar contas.
              </li>
              <li>
                Implemente a listagem de contas com opções para editar e
                deletar.
              </li>
              <li>Utilize Tailwind CSS para estilização dos componentes.</li>
            </ul>
          </li>
          <li>
            <span className="strong-emphasis">Implementação do Gráfico</span>
            <ul className="ul-list-style">
              <li>
                Escolha uma biblioteca de gráficos de sua preferência (por
                exemplo, Chart.js, Recharts) para visualização das receitas.
              </li>
              <li>
                Crie a funcionalidade para filtrar as receitas por intervalo de
                datas.
              </li>
            </ul>
          </li>
          <li>
            <span className="strong-emphasis">Validação e Testes</span>
            <ul className="ul-list-style">
              <li>
                Garanta que todos os campos do formulário estejam devidamente
                validados utilizando Zod.
              </li>
              <li>
                Teste todas as funcionalidades para garantir que o CRUD e a
                filtragem dos gráficos estejam funcionando corretamente.
              </li>
            </ul>
          </li>
          <li>
            <span className="strong-emphasis">Deploy</span>
            <ul className="ul-list-style">
              <li>Faça o deploy do projeto no Firebase Hosting.</li>
              <li>
                Inclua no README.md as instruções sobre como configurar e rodar
                o projeto localmente, além do link para acessar o projeto
                deployado no Firebase.
              </li>
            </ul>
          </li>
        </ol>

        <h2 className="text-2xl font-semibold pb-3 pt-3">Entrega</h2>
        <p className="text-lg mb-5">
          Ao finalizar o teste, envie o código-fonte do projeto em um
          repositório público no GitHub. Inclua um arquivo README.md com
          instruções claras sobre como configurar e rodar o projeto localmente.
          Além disso, forneça o link para o projeto deployado no Firebase
          Hosting.
        </p>

        <h2 className="text-2xl font-semibold pb-3 pt-3">Critérios de Avaliação</h2>
        <ul className="ul-list-style">
          <li>
            <span className="strong-emphasis">Funcionalidade</span>: Todas as
            funcionalidades descritas devem estar implementadas corretamente.
          </li>
          <li>
            <span className="strong-emphasis">Código Limpo</span>: Código bem
            organizado e seguindo boas práticas de desenvolvimento.
          </li>
          <li>
            <span className="strong-emphasis">Estilização</span>: Uso adequado do
            Tailwind CSS e shadcn para criar uma interface agradável e
            responsiva.
          </li>
          <li>
            <span className="strong-emphasis">Validação</span>: Implementação
            correta da validação de formulários com Zod.
          </li>
          <li>
            <span className="strong-emphasis">Documentação</span>: Instruções claras
            e detalhadas no arquivo README.md.
          </li>
          <li>
            <span className="strong-emphasis">Deploy</span>: Projeto devidamente
            deployado no Firebase Hosting e acessível via link fornecido.
          </li>
        </ul>

        <p className="text-lg">Boa sorte!</p>
      </div>
      </div>
    </>
  );
}
