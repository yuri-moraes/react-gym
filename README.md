# Gym Typescript Project

Este é um projeto de uma página web de academia desenvolvida com **React** e **TypeScript**, utilizando as melhores práticas de desenvolvimento moderno. O projeto utiliza **Vite** como bundler e **Tailwind CSS** para o estilo da interface.

Acesse o site: [Gym Typescript Live](https://86676157.react-gym-f52.pages.dev/)

## Funcionalidades Principais

- **Páginas de navegação suave** com o uso da biblioteca `react-anchor-link-smooth-scroll`.
- **Formulários dinâmicos** e validados utilizando `react-hook-form`.
- **Ícones interativos** com o uso de `react-icons`.
- **Animações** suaves para uma melhor experiência do usuário com `framer-motion`.
- Estilização responsiva e moderna com **Tailwind CSS**.

## Scripts Disponíveis

- **Iniciar o servidor de desenvolvimento:**
  ```bash
  npm run dev
  ```
  Isso irá iniciar o servidor local de desenvolvimento. O projeto será servido em [http://localhost:3000](http://localhost:3000).

- **Build para produção:**
  ```bash
  npm run build
  ```
  Esse comando irá criar uma versão otimizada para produção na pasta `dist`.

- **Visualizar o build:**
  ```bash
  npm run preview
  ```
  Isso permitirá visualizar o build de produção localmente.

- **Gerar o CSS com Tailwind:**
  ```bash
  npm run build:css
  ```
  Esse comando compila o arquivo `src/index.css` com Tailwind e o coloca na pasta `dist`.

- **Linting:**
  ```bash
  npm run lint
  ```
  Esse comando verifica o código com as regras configuradas no ESLint.

## Estrutura do Projeto

A estrutura do projeto foi organizada da seguinte forma:

- **src/assets**: Armazena os ativos, como imagens e logotipos.
- **src/hooks**: Contém hooks personalizados, como o `useMediaQuery`.
- **src/scenes**: Dividido em subpastas que correspondem às páginas da aplicação, como `benefits`, `home`, `contactUs`, `navbar`, etc.
- **src/shared**: Componentes e funções reutilizáveis que podem ser compartilhados entre várias partes do projeto, como botões, tipos e estilizações.

### Dependências

O projeto utiliza as seguintes bibliotecas e ferramentas:

- **React**: ^18.3.1
- **TypeScript**: ^5.2.2
- **Vite**: ^5.3.4
- **Tailwind CSS**: ^3.4.8
- **Framer Motion**: ^11.3.23
- **React Hook Form**: ^7.53.0
- **React Icons**: ^5.3.0

### Desenvolvimento e Boas Práticas

- **ESLint**: Utilizado para garantir a qualidade do código, com regras específicas para TypeScript e React.
- **Prettier**: Configurado com `prettier-plugin-tailwindcss` para manter a formatação consistente, especialmente para classes CSS.
- **Tailwind CSS**: Integração com PostCSS e autoprefixer para otimização do CSS.

## Como Contribuir

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-repositorio.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Crie uma nova branch para suas modificações:
   ```bash
   git checkout -b minha-nova-feature
   ```
4. Faça suas alterações e realize o commit:
   ```bash
   git commit -m "Adiciona nova feature"
   ```
5. Envie suas mudanças:
   ```bash
   git push origin minha-nova-feature
   ```

6. Abra um **Pull Request** para revisão.
