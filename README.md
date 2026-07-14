# 🚀 Projeto de Automação de Testes - QATestUp

## 📖 Sobre o Projeto

Este projeto tem como objetivo desenvolver e praticar testes automatizados utilizando **Playwright** e **TypeScript**, aplicando boas práticas de automação de testes e organização de código.

A aplicação utilizada para os testes é a **QATestUp**, um sistema criado por mim com o auxílio de Inteligência Artificial, desenvolvido especialmente para estudos, prática e evolução em testes automatizados.

O foco deste projeto é simular um ambiente real de automação, permitindo a criação de cenários de testes funcionais que possam ser expandidos continuamente.

---

## 🛠️ Tecnologias Utilizadas

* Playwright
* TypeScript
* Node.js
* Visual Studio Code

---

## 📂 Estrutura do Projeto

```text
├── pages/             # Page Objects
├── tests/             # Cenários de testes
├── playwright-report/ # Relatórios gerados pelo Playwright
├── test-results/      # Evidências das execuções
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Instalação

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Acesse a pasta do projeto:

```bash
cd nome-do-projeto
```

Instale as dependências:

```bash
npm install
```

---

## ▶️ Executando os Testes

Executar todos os testes:

```bash
npx playwright test
```

Executar um teste específico:

```bash
npx playwright test tests/login.spec.ts
```

Executar no modo UI:

```bash
npx playwright test --ui
```

Executar no modo Debug:

```bash
npx playwright test --debug
```

Executar em um navegador específico:

```bash
npx playwright test --project=chromium
```

---

## 📊 Relatórios

Após a execução dos testes, o relatório HTML pode ser aberto com o comando:

```bash
npx playwright show-report
```

---

## 🎯 Objetivos do Projeto

* Praticar automação de testes com Playwright.
* Aplicar o padrão **Page Object Model (POM)**.
* Desenvolver cenários de testes funcionais.
* Melhorar continuamente a organização e a qualidade do código.
* Simular um projeto próximo da realidade utilizada no mercado de QA.

---

## 🚧 Projeto em Desenvolvimento

Este projeto encontra-se em **desenvolvimento contínuo**.

Novas funcionalidades, páginas, cenários de testes, melhorias na arquitetura e boas práticas serão adicionadas gradualmente ao longo das próximas **sprints**.

O objetivo é que este repositório evolua de forma incremental, acompanhando meu aprendizado e servindo como um portfólio de automação de testes.

---

## 📅 Roadmap

### Sprint 1

* ✅ Estrutura inicial do projeto
* ✅ Configuração do Playwright com TypeScript
* ✅ Página de Login
* ✅ Primeiros testes automatizados

### Próximas Sprints

* ⏳ Página de Cadastro
* ⏳ Página de Produtos
* ⏳ Página de Carrinho
* ⏳ Testes de API
* ⏳ Fixtures
* ⏳ Massa de dados dinâmica
* ⏳ Integração Contínua (CI/CD)
* ⏳ Relatórios avançados
* ⏳ Testes Cross Browser
* ⏳ Testes Mobile

---

## 👨‍💻 Autor

**Tiago Marques**

Projeto desenvolvido para estudos, aperfeiçoamento profissional e construção de portfólio em **Qualidade de Software (QA)**, com foco em automação de testes utilizando **Playwright** e **TypeScript**.
