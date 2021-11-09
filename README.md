# Teste para vaga de Desenvolvedor Fullstack

## Desafio

Criar uma API REST capaz de cadastrar e buscar informações de Embarcadores, Transportadores, Ofertas e Lances.
Os dados recebidos deveriam ser armazenados em um banco de dados. Também deveria ser criado uma interface para que fosse possível visualizar os dados cadastrados.

---

## Stack

-   **Back-end**
    -   MongoDB
    -   Noje.js
        -   Express
        -   Mongoose
        -   Bcrypt
        -   JWT
        -   Joi
-   **Front-end**
    -   React JS
        -   Styled-components
        -   React-router-dom
        -   Hooks customizados para validação de formulário, autenticação de usuário e toggle de modal

---

## Endpoints API 🖥️

    --- AUTH 🔐 ---

    // Registro
    @POST - /api/auth/register
    body - email, password, doc, name, site, about

    // Login
    @POST - /api/auth/login
    body - email, password


    --- OFFERS 💰 ---

    // Nova Oferta
    @POST - /api/offer/new
    body - id_embarcador, from, to, initial_value, amount, amount_type

    // Novo Lance
    @POST - /api/offer/bid
    body - id_transportador, id_offer, value, amount

    // Todas as ofertas de um usuário
    @GET - /api/offer/all

    // Oferta única por ID
    @GET - /api/offer/:id

    // Todas as ofertas no banco de dados
    @GET - /api/offer

## Sobre o front-end 👁️

-   Validação de formulário com hook próprio para entregar uma boa experiência de usuário.
-   Utilização de paleta de cores próximas à da empresa
-   Pequenas animações em CSS para dar vida à certos componentes
-   Rotas privadas e sistema de autenticação parcial (não finalizado 100%)
-   Styled-components para a estilização 💅🏾

![Página de Login](https://i.ibb.co/ykmvgFT/localhost-3000-2.png) ![Dashboard](https://i.ibb.co/XXT5pDv/localhost-3000-3.png)

---

## Considerações

-   Considerei o desafio proposto de extrema importância para o entendimento geral das funções da empresa. Inclusive tive que relizar algumas pesquisas sobre o modelo de negócios para entender melhor o funcionamento, o que agregou bastante.
-   Devido ao período de tempo e demais atividades minhas, acredito que consegui construir um prótotipo interessante, porém algumas funcionalidades podem (e devem) ser melhoradas e aperfeiçoadas, principalmente na parte de formulários e comunicação de dados.
-   Apesar do resultado, foi um ótimo teste de estudo, onde pude fazer uma autoavaliação do que eu sabia e o que preciso melhorar nos próximos passos da carreira.

---

**Agradeço imensamente a oportunidade! Um abraço a todos.**
