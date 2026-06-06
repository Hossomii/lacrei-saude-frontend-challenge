<h3 align="center">
🏳️‍🌈 Front-end Challenge Lacrei Saúde
</h3>

<p align="center">
Aplicação desenvolvida para o processo seletivo de voluntariado da Lacrei Saúde
</p>

---

# Lacrei Saúde Challenge

Projeto desenvolvido como parte do processo seletivo para participação no projeto voluntário da **Lacrei Saúde**.

O desafio consistia em construir uma aplicação Front-end utilizando **Next.js**, **TypeScript** e **Styled Components**, seguindo as referências visuais disponibilizadas pela organização.

O objetivo foi demonstrar conhecimentos em:

- Componentização
- Responsividade
- Acessibilidade
- Design System
- Testes Automatizados
- Organização de Código
- Boas Práticas de Desenvolvimento Front-end

---

# Preview

<p align="center">
  <img src="https://raw.githubusercontent.com/Hossomii/lacrei-saude-frontend-challenge/main/public/screenshots/home.png" width="900"/>
</p>

> Home / Página inicial

---

# Objetivo do Projeto

A proposta foi criar uma aplicação moderna, acessível e acolhedora, inspirada na experiência apresentada pela Lacrei Saúde.

Além da implementação visual, o foco esteve em construir uma base sólida para futuras evoluções, mantendo:

- escalabilidade
- reutilização de componentes
- consistência visual
- manutenção simplificada
- acessibilidade

---

# O que foi Entregue

## 🏠 Home

- Hero institucional
- Seção de benefícios
- Apresentação da proposta da Lacrei Saúde
- CTA de conversão
- Banner de cookies funcional
- Responsividade

---

## 👩‍⚕️ Profissionais

- Página dedicada
- Busca visual simulada
- Dados mockados
- Cards reutilizáveis
- Responsividade

---

## 🧩 Componentes Compartilhados

- Header responsivo
- Footer institucional
- Sistema de botões reutilizáveis
- Theme Provider
- Design Tokens
- Estrutura componentizada

---

## ♿ Acessibilidade

- HTML semântico
- Labels acessíveis
- Estados de foco visíveis
- Navegação por teclado
- Componentes interativos com ARIA

---

# Destaques Técnicos

## Design System

O projeto utiliza Design Tokens centralizados para garantir consistência visual entre todos os componentes.

Incluindo:

- cores
- espaçamentos
- breakpoints
- tipografia
- bordas

---

## Componentização

A aplicação foi construída utilizando componentes independentes e reutilizáveis.

Essa abordagem torna o projeto:

- mais organizado
- mais escalável
- mais fácil de manter
- mais fácil de evoluir

---

## Testes Automatizados

Foram implementados testes utilizando **Jest** e **React Testing Library**.

Componentes testados:

- Button
- Header
- InfoCard

Executar testes:

```bash
npm run test
```

---

# Tecnologias Utilizadas

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=nextdotjs"/>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"/>
  <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white"/>
  <img src="https://img.shields.io/badge/Testing%20Library-E33332?style=for-the-badge&logo=testinglibrary&logoColor=white"/>
  <img src="https://img.shields.io/badge/React%20Icons-E91E63?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint"/>
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel"/>
</p>

---

# Estrutura do Projeto

```txt
src
├── app
│   ├── page.tsx
│   └── profissionais
│       └── page.tsx
│
├── components
│   ├── Button
│   ├── CookieBanner
│   ├── Footer
│   ├── Header
│   ├── Home
│   ├── InfoCard
│   └── Layout
│
├── data
│   └── professionals.ts
│
├── styles
│   ├── theme.ts
│   ├── GlobalStyles.ts
│   └── styled.d.ts
│
├── tests
│   └── test-utils.tsx
│
└── providers
```

---

# Executando Localmente

Instalar dependências:

```bash
npm install
```

Executar ambiente de desenvolvimento:

```bash
npm run dev
```

Gerar build de produção:

```bash
npm run build
```

Executar testes:

```bash
npm run test
```

---

# Limitações e Considerações

Durante o desenvolvimento não houve acesso ao Dev Mode do Figma nem possibilidade de exportação dos assets oficiais disponibilizados pela Lacrei Saúde.

Por esse motivo:

- alguns elementos visuais foram recriados utilizando CSS
- alguns componentes foram interpretados visualmente a partir das referências disponíveis
- os dados da página de profissionais foram simulados localmente
- ícones foram substituídos por alternativas open-source

Mesmo com essas limitações, buscou-se manter a experiência visual e estrutural proposta pelo desafio.

---

# Deploy

<p align="center">
  <a href="LINK_DO_DEPLOY">
    <img src="https://img.shields.io/badge/VER%20PROJETO-Vercel-black?style=for-the-badge&logo=vercel"/>
  </a>
</p>

<p align="center">
  https://lacrei-frontend-q28sylfgb-hossomiis-projects.vercel.app/
</p>

---

# Estratégia de Rollback

O projeto utiliza:

- Git para versionamento
- Vercel para deploy

Caso uma versão apresente problemas:

- restaurar deploy anterior pela Vercel
- reverter commits específicos pelo Git
- publicar nova versão corrigida

---

# Próximos Passos

Possíveis evoluções futuras:

- integração com API real
- busca funcional
- autenticação
- FAQ
- política de privacidade
- termos de uso
- filtros avançados

---

# Autor

<p align="center">

**Anthony Hossomi**

<a href="https://github.com/Hossomii">
GitHub
</a>
•
<a href="https://www.linkedin.com/in/anthony-hossomii-bugs/">
LinkedIn
</a>

</p>

---

<p align="center">
Desenvolvido para o Front-end Challenge da Lacrei Saúde.
</p>
