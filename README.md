# 🎓 Clone da Plataforma DIO

Este projeto é um clone da plataforma de ensino [DIO](https://www.dio.me/), desenvolvido com React. A aplicação simula a navegação e funcionalidades básicas da plataforma original.

## ⚙️ Funcionalidades

- **Página Inicial**: Introdução ao serviço, destacando os principais benefícios e botão para iniciar login.
- **Login**: Validação de e-mail e senha; redirecionamento para feed após autenticação.
- **Feed**: Lista de conteúdos e ranking de usuários, com postagens recentes e melhores classificados.
- **Registro**: Formulário para criação de conta com validação e mensagem sobre termos e políticas de privacidade.

## 🛠️ Tecnologias Usadas

- `React`: Biblioteca para construir interfaces baseadas em componentes.
- `react-router-dom`: Navegação e rotas para apps React web.
- `react-hook-form`: Controle e validação de formulários.
- `react-icons`: Biblioteca de ícones populares para React.
- `styled-components`: CSS dentro do JS com componentes estilizados.
- `axios`: Cliente HTTP para requisições assíncronas.
- `json-server`: Servidor fake para simular API REST local.

## 📦 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/JosielJrr/dio-clone.git
   cd dio-clone
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Caso não tenha o **JSON Server** instalado globalmente, instale com:

   ```bash
   npm install -g json-server
   ```
4. Inicie o servidor de desenvolvimento React:

   ```bash
   npm start
   ```
5. Inicie o servidor de dados JSON:
   ```bash
   npm run api
   ```

## 🔍 Observações

- Rode os dois servidores juntos, em terminais separados: **React** `npm start` e **JSON Server** `npm run api`, para a aplicação funcionar.
- Registro e login funcionam com API fake via `json-server`, dados persistidos localmente.
- Projeto focado no aprendizado prático das libs `styled-components` e `react-hook-form`.

> Este projeto foi desenvolvido como parte da Formação React Developer da [Digital Innovation One](https://www.dio.me/).
