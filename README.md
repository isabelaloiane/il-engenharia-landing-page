# Landing Page — IL Engenharia e Consultoria Ambiental

Landing page independente para campanhas de anúncios (Instagram / Meta Ads),
recuperada do projeto original do Replit ("il-engenharia-lp") e adaptada para
rodar fora do Replit, de forma 100% gratuita, no seu próprio subdomínio.

Site publicado (endereço temporário, já no ar agora): **https://isabelaloiane.github.io/il-engenharia-landing-page/**
Site publicado (endereço final, assim que o DNS abaixo for configurado): **https://lp.ilambiental.com.br**

Repositório no GitHub: **https://github.com/isabelaloiane/il-engenharia-landing-page**

---

## Como alterar WhatsApp, e-mail, Instagram ou textos de contato

Abra o arquivo `src/config.ts`. Todos os dados de contato da página estão
centralizados ali:

```ts
export const CONTATO = {
  whatsappNumero: "5591992723570",
  whatsappExibicao: "(91) 99272-3570",
  whatsappMensagemPadrao: "Olá! Vim pela landing page e gostaria de solicitar o Diagnóstico Vértice.",
  email: "contato@ilambiental.com.br",
  instagramArroba: "@ilambiental",
  ...
};
```

Basta editar o valor, salvar, e enviar a alteração para o GitHub
(`git add . && git commit -m "atualiza contato" && git push`). Em cerca de
1 minuto o site publicado já reflete a mudança automaticamente — não é
preciso fazer mais nada.

Para alterar textos, chamadas para ação (CTA) ou títulos da página, edite
`src/App.tsx` — o conteúdo de cada seção está em português simples, dentro
de cada função (`Hero`, `Problema`, `Solucao`, `Sentinela`, `Vertice`,
`ProvaSocial`, `Diferencial`, `ComoFunciona`, `CtaFinal`, `Footer`).

Para trocar imagens, coloque o novo arquivo dentro da pasta `public/` e
referencie o caminho (ex: `/minha-foto.jpg`) onde for necessário.

---

## Rodar localmente (para ver o resultado antes de publicar)

Requer [Node.js](https://nodejs.org) instalado.

```
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Gerar a versão de produção manualmente (opcional)

```
npm run build
```

Gera a pasta `dist/`, pronta para qualquer hospedagem estática. Na prática
você não precisa rodar isso manualmente: o GitHub já faz isso sozinho a
cada `git push` (ver abaixo).

---

## Como a publicação funciona (deploy automático)

Este projeto já vem com um "robô" configurado em
`.github/workflows/deploy.yml`: toda vez que uma alteração é enviada para o
GitHub (branch `main`), o GitHub automaticamente instala as dependências,
gera a versão de produção e publica no **GitHub Pages** — hospedagem
gratuita e sem limite de tempo (diferente do Replit, não depende de plano
pago para continuar no ar).

O arquivo `public/CNAME` já contém o subdomínio escolhido
(`lp.ilambiental.com.br`), então o GitHub Pages já sobe configurado para
usar esse endereço, assim que o DNS for apontado (ver seção seguinte).

---

## O que falta fazer (só você consegue fazer isso)

O GitHub Pages já está ativado e a página já está no ar no endereço
temporário acima. Falta apenas um passo, que só você pode fazer porque
exige acesso ao painel do seu domínio:

1. **Criar o registro de DNS do subdomínio.** No painel onde o domínio
   `ilambiental.com.br` está registrado (registro.br ou outro provedor),
   adicione um registro:
   - Tipo: `CNAME`
   - Nome/Host: `lp`
   - Valor/Aponta para: `isabelaloiane.github.io`

2. Depois de adicionar o registro DNS, vá em
   `Settings → Pages` no repositório e digite `lp.ilambiental.com.br` no
   campo "Custom domain" (se ainda não aparecer preenchido) e clique em
   "Save". O GitHub confirma o domínio automaticamente.

3. Aguardar a propagação do DNS (de alguns minutos a algumas horas) e o
   certificado HTTPS ser emitido automaticamente pelo GitHub (gratuito,
   renovação automática, sem nenhuma ação sua).

Depois disso, qualquer atualização futura é só `git push` — nada mais
precisa ser reconfigurado.

---

## O que foi alterado em relação à versão original do Replit

- Removidas dependências e plugins exclusivos do Replit (o projeto agora
  roda em qualquer computador ou serviço, sem ficar preso à plataforma).
- Número de WhatsApp corrigido: estava `(91) 99250-3317` (desatualizado),
  agora é `(91) 99272-3570`, igual ao site atual da IL Engenharia.
- Dados de contato centralizados em `src/config.ts` (antes estavam
  espalhados e repetidos dentro do código).
- Adicionado um botão flutuante de WhatsApp (visível o tempo todo, inclusive
  no celular), já que a página até então só tinha botões de WhatsApp no
  topo e no final — em uma campanha de Instagram a maior parte do tráfego é
  mobile, e ter o WhatsApp sempre acessível aumenta a conversão.
- Adicionadas tags de SEO básico e de compartilhamento (meta description,
  Open Graph) que não existiam no HTML original.
- Nenhum texto, layout, seção ou estilo visual foi reescrito: o conteúdo,
  o design e a identidade visual são exatamente os que já haviam sido
  desenvolvidos.

## Pontos que merecem sua decisão (não alterados sem confirmação)

- A seção "Solução" usa um ícone genérico no lugar de uma foto real da
  Isabela. Há fotos disponíveis em
  `CLAUDE - DESIGN/05_FOTOS_CEO`, mas a escolha de qual foto usar é uma
  decisão de imagem pessoal — nenhuma foi inserida automaticamente.
- ~~E-mail de contato~~ — já resolvido: a landing page usa
  `contato@ilambiental.com.br` (e-mail do domínio próprio), conforme
  combinado.
- Não há formulário de contato nesta landing page — apenas WhatsApp e
  e-mail direto. Isso é intencional (reduz fricção para tráfego pago), mas
  se quiser um formulário, é possível adicionar.
