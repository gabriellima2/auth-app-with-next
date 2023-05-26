<h1 align="center">
    Auth App
</h1>

Este projeto é uma aplicação de autenticação de usuários criada com NextJS e Typescript. Ele inclui proteção de rotas privadas através de um middleware que verifica a integridade e validade do token JWT. Os dados dos usuários são armazenados em um banco de dados Postgres e a segurança do usuário é garantida através do uso de Password Hashing com Salt realizado com bcrypt.

# Objetivos

- Aperfeiçoar habilidades no uso do Docker e Docker Compose para gerenciamento de contêineres.
- Desenvolver um serviço de autenticação seguro.
- Explorar e utilizar as novas funcionalidades disponíveis no NextJS 13.

# Tecnologias

<p>Foram usadas as seguintes tecnologias:</p>

- [NextJS](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [TailwindCSS](https://styled-components.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [React Hook Form](https://react-hook-form.com/)
- [zod](https://zod.dev/)
- [pg](https://node-postgres.com/)
- [jose](https://www.npmjs.com/package/jose)
- [bcrypt](https://www.npmjs.com/package/bcrypt)

# Rodando o projeto

OBS: É necessário que o [Git](https://git-scm.com/) esteja instalado em sua máquina.

```bash
1. Clone o repositório:
$ git clone https://github.com/gabriellima2/auth-app-with-next.git
```

## Docker Compose

Caso escolha rodar via Docker, certifique-se que esteja instalado em sua máquina o [Docker](https://www.docker.com/) e o [Docker Compose](https://docs.docker.com/compose/)

```bash
2. Acesse a pasta e inicie a aplicação em modo de desenvolvimento:
$ docker-compose up

3. O servidor será aberto em http://localhost:3000
```

## NPM ou Yarn

Caso escolha rodar via Gerenciadores de Pacotes, certifique-se que esteja instalado em sua máquina o [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) ou [yarn](https://yarnpkg.com/)

```bash
2. Acesse a pasta e instale as dependências via terminal:
$ yarn || npm i

3. Inicie a aplicação em modo de desenvolvimento:
$ yarn dev || npm run dev

4. O servidor será aberto em http://localhost:3000
```

<p align="center">Projeto feito com 💙 por <a href="https://www.linkedin.com/in/gabriel-lima-860612236">Gabriel Lima</a></p>
