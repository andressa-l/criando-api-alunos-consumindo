# Criando API de Alunos e Consumindo via Fetch API

Este repositório é uma demonstração técnica de uma arquitetura de software desacoplada, focada na separação de responsabilidades e na integração entre um backend robusto em ASP.NET Core e um frontend dinâmico em JavaScript Vanilla.

## 1. Visão Geral da Arquitetura

O projeto abandona os paradigmas de renderização do lado do servidor (*Server-Side Rendering*) em favor de uma clara **Separação de Responsabilidades** (*Separation of Concerns*).

- **Backend:** Motor de processamento lógico responsável pela persistência, roteamento e regras de negócio.
- **Frontend:** Interface leve e reativa que opera no navegador, enviando e recebendo dados de forma assíncrona via JSON.

## 2. Objetivos de Aprendizado

- **APIs RESTful:** Design de endpoints seguindo a semântica HTTP.
- **Assincronicidade:** Uso da `Fetch API` para operações sem bloqueio da thread principal.
- **CORS:** Configuração de políticas de segurança para consumo entre diferentes origens.
- **Injeção de Dependência:** Uso de containers nativos do ASP.NET Core.
- **Manipulação do DOM:** Renderização dinâmica de componentes baseada em dados.

## 3. Stack Tecnológica

| Camada | Tecnologias / Protocolos |
| :--- | :--- |
| **Back-End** | C#, ASP.NET Core Web API, Entity Framework Core |
| **Front-End** | JavaScript (Fetch API), HTML5, CSS3 |
| **Infraestrutura** | Microsoft Visual Studio, Git |
| **Comunicação** | REST, HTTP/HTTPS, JSON |

## 4. Estrutura de Diretórios

```text
📦 criando-api-alunos-consumindo
┣ 📂 backend                      # Lógica de servidor e API
┃ ┗ 📂 CriandoWebApiAlunos      
┃   ┣ 📂 Controllers            # Mapeamento de rotas HTTP
┃   ┣ 📂 Models                 # Classes de domínio
┃   ┣ 📂 Data                   # Contexto de banco de dados e Migrations
┃   ┗ 📜 Program.cs             # Entry point e Injeção de Dependências
┣ 📂 frontend                     # Interface client-side
┃ ┗ 📂 javascript-fetch         
┃   ┣ 📜 index.html             # Estrutura HTML
┃   ┣ 📜 styles.css             # Estilização
┃   ┗ 📜 main.js                # Lógica de integração e Fetch
┗ 📜 README.md                   # Documentação do projeto

```

## 5. Guia de Configuração
### 5.1. Back-End (API)
A API deve ser iniciada primeiro para evitar erros de conectividade.

Bash
#### Navegue até o projeto
cd backend/CriandoWebApiAlunos

#### Restaure as dependências
dotnet restore

#### Execute a aplicação
dotnet run
A API ficará disponível geralmente em http://localhost:5000.

### 5.2. Front-End (Interface)
Inicie um servidor estático para evitar restrições de protocolo file://.

Bash
#### Navegue até a pasta do frontend
cd frontend/javascript-fetch

#### Exemplo de inicialização com npx
npx http-server -c-1
## 6. Endpoints da API (Contratos)

| Verbo | Rota | Descrição | Retorno |
| :--- | :--- | :--- | :--- |
| GET | /api/alunos | Lista todos os alunos | 200 OK (Array) |
| GET | /api/alunos/{id} | Busca aluno por ID | 200 OK / 404 |
| POST | /api/alunos | Matricula novo aluno | 201 Created |
| PUT | /api/alunos/{id} | Atualiza dados cadastrais | 204 No Content |
| DELETE | /api/alunos/{id} | Exclui cadastro | 200 OK |


## 7. Próximos Passos (Roadmap)
[ ] Autenticação: Implementar segurança via JWT.

[ ] Refatoração: Evoluir o frontend para React ou Next.js.

[ ] Cloud: Migrar persistência local para PostgreSQL em nuvem.

## 8. Contribuição
Faça o Fork do projeto.

Crie uma Branch para sua funcionalidade (git checkout -b feature/nova-funcao).

Faça o Commit (git commit -m 'Adicionando nova função').

Envie o Pull Request.
