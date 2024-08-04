# Clone da Plataforma DIO

Este projeto é um clone da plataforma de ensino DIO, desenvolvido em React. A aplicação simula a navegação e funcionalidades básicas da plataforma original.

## Funcionalidades

- **Página Inicial (Home)**: Apresenta uma introdução ao serviço, destacando os principais benefícios e oferecendo um botão para iniciar o processo de login.
- **Login**: Permite que os usuários façam login na plataforma com validação de e-mail e senha. Se autenticado, o usuário é redirecionado para a página de feed.
- **Feed**: Mostra uma lista de conteúdos e um ranking de usuários, permitindo visualizar as postagens mais recentes e os melhores classificados.
- **Registro (Register)**: Facilita o registro de novos usuários, oferecendo um formulário para criação de conta e uma mensagem legal sobre os termos de uso e políticas de privacidade.

## Tecnologias Usadas

- React
- JavaScript
- HTML
- CSS

## Instalação

Para executar este projeto localmente, siga os seguintes passos:

1. Clone o repositório:
    ```bash
    git clone https://github.com/JosielJrr/dio-clone.git
    ```
2. Navegue para o diretório do projeto:
    ```bash
    cd dio-clone
    ```
3. Instale as dependências do projeto:
    ```bash
    npm install
    ```
4. Inicie o servidor de desenvolvimento:
    ```bash
    npm start
    ```
5. Inicialize o servidor de dados JSON (utilizando `json-server` para simular uma API):
    ```bash
    npm run api
    ```

## Scripts Disponíveis

No diretório do projeto, você pode executar:

- `npm start`: Inicia a aplicação em modo de desenvolvimento.
- `npm test`: Executa os testes em modo interativo.
- `npm run build`: Cria uma versão otimizada para produção da aplicação.
- `npm run eject`: Remove as dependências de configuração e permite personalizar o setup (opcional).
- `npm run api`: Inicializa o `json-server` para fornecer uma API local para a aplicação.

## Nota Adicional

- Este projeto foi desenvolvido como parte da Formação React Developer da [Digital Innovation One](https://www.dio.me/).
