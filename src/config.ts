// ============================================================================
// CONFIGURAÇÕES DA LANDING PAGE — IL Engenharia e Consultoria Ambiental
// ============================================================================
// Este é o ÚNICO lugar que você precisa editar para atualizar WhatsApp,
// e-mail, Instagram, LinkedIn ou a mensagem padrão do botão de WhatsApp.
// Depois de editar e salvar, basta enviar a alteração para o GitHub
// (git commit + git push) que o site publicado atualiza sozinho.
// ============================================================================

export const CONTATO = {
  // Número de WhatsApp SEM formatação, com código do país (55) + DDD.
  // Ex: (91) 99272-3570  ->  "5591992723570"
  whatsappNumero: "5591992723570",

  // Como o número aparece escrito na tela para quem visita a página.
  whatsappExibicao: "(91) 99272-3570",

  // Mensagem que já vem pré-escrita quando a pessoa clica em qualquer
  // botão de WhatsApp da página.
  whatsappMensagemPadrao:
    "Olá! Vim pela landing page e gostaria de solicitar o Diagnóstico Vértice.",

  email: "contate.ilambiental@gmail.com",

  instagramArroba: "@ilambiental",
  instagramUrl: "https://www.instagram.com/ilambiental/",
  linkedinUrl: "https://www.linkedin.com/company/il-engenharia-e-consultoria-ambiental/",

  localizacao: "Belém, Pará, Amazônia Legal",
};

// Gera o link pronto do WhatsApp (com a mensagem já preenchida).
export function linkWhatsApp(mensagem: string = CONTATO.whatsappMensagemPadrao): string {
  return `https://wa.me/${CONTATO.whatsappNumero}?text=${encodeURIComponent(mensagem)}`;
}

// Gera o link pronto de e-mail (com assunto opcional já preenchido).
export function linkEmail(assunto?: string): string {
  return assunto
    ? `mailto:${CONTATO.email}?subject=${encodeURIComponent(assunto)}`
    : `mailto:${CONTATO.email}`;
}
