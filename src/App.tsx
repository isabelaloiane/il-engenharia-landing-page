import { useState, useEffect, useRef } from "react";
import { CONTATO, linkWhatsApp, linkWhatsAppSentinela } from "./config";

// ─── Ícones SVG lineares (sem emojis) ───────────────────────────────────────

function IconCheck({ color = "#734120" }: { color?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="8.25" stroke={color} strokeWidth="1.5" />
      <path d="M5.5 9l2.5 2.5 4.5-4.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IconChevron({ open }: { open: boolean }) {
  return (
    <svg
      width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
      style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s" }}
    >
      <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconClock({ color = "#734120" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" stroke={color} strokeWidth="1.5" />
      <path d="M10 6v4l2.5 2.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconDoc({ color = "#734120" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="4" y="2" width="12" height="16" rx="2" stroke={color} strokeWidth="1.5" />
      <path d="M7 7h6M7 10h6M7 13h4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// ─── Barra fixa de conversão (aparece depois que o hero sai da tela) ─────────

function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  return (
    <div className={`sticky-bar${visible ? " sticky-bar--visible" : ""}`} aria-hidden={!visible}>
      <a
        href={linkWhatsApp()}
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-bar-btn"
        tabIndex={visible ? 0 : -1}
      >
        <IconWhatsApp />
        Solicitar diagnóstico
      </a>
    </div>
  );
}

// ─── Cabeçalho ────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <nav>
      <div className="container">
        <div className="nav-inner">
          {/* TODO: trocar pelo arquivo IL_Logo_Branco.png quando disponível */}
          <div className="nav-logo">
            <span className="nav-logo-nome">IL Ambiental</span>
            <span className="nav-logo-sub">Engenharia e Consultoria Ambiental</span>
          </div>
          <a
            href={linkWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
          >
            Solicitar diagnóstico
          </a>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero: Diagnóstico Vértice ────────────────────────────────────────────────

function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-texto">
            <div className="hero-tag">Diagnóstico Vértice · sem custo · Região Metropolitana de Belém</div>
            <h1 className="hero-titulo">
              Descubra o que sua empresa precisa cumprir na área ambiental nos próximos 12 meses.
            </h1>
            <p className="hero-subtitulo">
              O Diagnóstico Vértice analisa licenças, outorgas, condicionantes e prazos da sua empresa e entrega um documento com o que precisa ser feito no próximo ciclo. Sem custo e sem compromisso de contratação.
            </p>
            <div className="hero-ctas">
              <a
                href={linkWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primario btn-grande btn-icon"
                onClick={() => { if (typeof fbq !== "undefined") fbq("track", "Contact", { position: "topo" }); }}
              >
                <IconWhatsApp />
                Solicitar o diagnóstico pelo WhatsApp
              </a>
              <a href="#cta-final" className="btn-link">Prefiro preencher um formulário</a>
            </div>
            <p className="hero-micro">
              Para empresas de Belém, Ananindeua, Marituba, Benevides, Santa Isabel do Pará e Castanhal.
            </p>
          </div>

          <div className="hero-foto-wrapper">
            <img
              src="/isabela-loiane.webp"
              alt="Isabela Loiane, Engenheira Florestal, sentada em ambiente profissional"
              className="hero-foto"
              width="480"
              height="640"
              loading="eager"
            />
            <p className="hero-foto-legenda">Isabela Loiane, Engenheira Florestal · CREA-PA 1521301735</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Faixa de autoridade ──────────────────────────────────────────────────────

function AutoridadeFaixa() {
  const itens = [
    { icone: <IconCheck color="#734120" />, texto: "Análise feita pela responsável técnica, CREA-PA 1521301735" },
    { icone: <IconDoc color="#734120" />, texto: "Engenharia Florestal e especialização em Direito Agroambiental" },
    { icone: <IconDoc color="#734120" />, texto: "Documento com as obrigações dos próximos 12 meses" },
    { icone: <IconCheck color="#734120" />, texto: "Sem custo e sem compromisso de contratação" },
  ];

  return (
    <div className="autoridade-faixa">
      <div className="container">
        <div className="autoridade-grid">
          {itens.map((item, i) => (
            <div className="autoridade-item" key={i}>
              <span className="autoridade-icone">{item.icone}</span>
              <span className="autoridade-texto">{item.texto}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Para quem é o Vértice ───────────────────────────────────────────────────

function ParaQuem() {
  const itens = [
    "Não sabe com certeza quando vencem a Licença de Operação ou a outorga da empresa.",
    "A licença tem condicionantes e você não sabe se todas estão comprovadas.",
    "A empresa precisa entregar RIAA, PGRS ou outros relatórios e ninguém acompanha os prazos.",
    "Recebeu uma notificação ou exigência de órgão ambiental.",
    "Vai ampliar a operação, pedir financiamento ou passar por auditoria de um cliente.",
    "Nunca teve um levantamento completo das obrigações ambientais da empresa.",
  ];

  return (
    <section id="para-quem">
      <div className="container">
        <div className="secao-header">
          <div className="tag-label tag-label--bege">O Diagnóstico Vértice</div>
          <h2 className="titulo-secao">O Vértice é para você se</h2>
        </div>
        <div className="para-quem-grid">
          {itens.map((item, i) => (
            <div className="para-quem-item" key={i}>
              <span className="para-quem-icone"><IconCheck color="#DFC49F" /></span>
              <span className="para-quem-texto">{item}</span>
            </div>
          ))}
        </div>
        <p className="para-quem-criterio">
          O Diagnóstico Vértice é voltado a empresas em funcionamento ou em implantação na Região Metropolitana de Belém e entorno.
        </p>
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <a
            href={linkWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primario btn-icon"
          >
            <IconWhatsApp />
            Solicitar o diagnóstico pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── O que você recebe e como funciona ───────────────────────────────────────

function OQueRecebe() {
  const recebe = [
    "Situação atual das licenças, outorgas e autorizações da empresa.",
    "Lista das condicionantes e do que já está comprovado.",
    "Calendário com as obrigações e os prazos dos próximos 12 meses.",
    "Pendências e riscos identificados, por ordem de prioridade.",
    "Recomendação do que fazer e em que ordem.",
  ];

  const passos = [
    { num: "01", texto: "Você chama no WhatsApp ou preenche o formulário." },
    { num: "02", texto: "Enviamos a lista de documentos que precisamos analisar." },
    { num: "03", texto: "A responsável técnica analisa a situação da empresa." },
    { num: "04", texto: "Você recebe o documento e uma conversa para explicar cada ponto." },
  ];

  return (
    <section id="o-que-recebe">
      <div className="container">
        <div className="recebe-grid">
          <div className="recebe-coluna">
            <div className="tag-label">O entregável</div>
            <h2 className="titulo-secao-sm">O que você recebe</h2>
            <ul className="recebe-lista">
              {recebe.map((item, i) => (
                <li key={i} className="recebe-item">
                  <span className="recebe-check"><IconCheck /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="recebe-coluna">
            <div className="tag-label">O processo</div>
            <h2 className="titulo-secao-sm">Como funciona</h2>
            <div className="passos-lista">
              {passos.map((p) => (
                <div key={p.num} className="passo-item">
                  <div className="passo-num">{p.num}</div>
                  <div className="passo-texto">{p.texto}</div>
                </div>
              ))}
            </div>
            <div className="prazo-bloco">
              <span className="prazo-icone"><IconClock /></span>
              <span className="prazo-texto">
                Prazo: até 10 dias úteis após o recebimento dos documentos.
              </span>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <a
            href={linkWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primario btn-icon"
          >
            <IconWhatsApp />
            Solicitar o diagnóstico pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Problema condensado ──────────────────────────────────────────────────────

function Problema() {
  const itens = [
    {
      titulo: "Licença a vencer",
      texto: "A renovação deve ser pedida com antecedência mínima de 120 dias (Lei Complementar 140/2011, art. 14, § 4°).",
    },
    {
      titulo: "Condicionantes sem comprovação",
      texto: "Cumprida e não registrada, para o órgão a obrigação não foi cumprida.",
    },
    {
      titulo: "Água sem outorga",
      texto: "Captar água ou lançar efluentes exige outorga própria, independente da licença.",
    },
    {
      titulo: "Relatórios desatualizados",
      texto: "RIAA e PGRS precisam refletir a operação atual da empresa.",
    },
  ];

  return (
    <section id="problema">
      <div className="container">
        <div className="secao-header">
          <div className="tag-label tag-label--bege">O cenário</div>
          <h2 className="titulo-secao">Ter licença não encerra as obrigações ambientais.</h2>
          <p className="subtitulo-secao">
            Depois da licença vêm os prazos, as condicionantes, os relatórios e a outorga da água. Quando ninguém acompanha, o problema aparece na fiscalização ou na renovação.
          </p>
        </div>

        <div className="problema-grid">
          {itens.map((item, i) => (
            <div className="problema-card" key={i}>
              <div className="problema-card-titulo">{item.titulo}</div>
              <div className="problema-card-texto">{item.texto}</div>
            </div>
          ))}
        </div>

        <p className="problema-nota-legal">
          Multas por infração ambiental vão de R$ 50 a R$ 50 milhões (Lei 9.605/1998, art. 75).
        </p>
      </div>
    </section>
  );
}

// ─── Depois do diagnóstico ───────────────────────────────────────────────────

function DepoisDiagnostico() {
  const cards = [
    {
      num: "01",
      titulo: "Executar por conta própria",
      texto: "Use o diagnóstico com a sua equipe ou com outro profissional. Sem nenhum compromisso com a IL.",
      destaque: false,
    },
    {
      num: "02",
      titulo: "Contratar serviços pontuais",
      texto: "Renovação de licença, outorga, RIAA, PGRS e outros serviços, orçados um a um.",
      destaque: false,
    },
    {
      num: "03",
      titulo: "Programa Sentinela",
      subtitulo: "contrato anual · serviço pago",
      texto: "A IL Ambiental acompanha as obrigações ambientais da empresa durante 12 meses. Serviço pago, sob proposta.",
      destaque: true,
    },
  ];

  const sentinelaItens = [
    "Identificação de todas as obrigações ambientais da empresa.",
    "Calendário de prazos de licenças, outorgas e relatórios.",
    "Acompanhamento das condicionantes e de sua comprovação.",
    "Planejamento das ações necessárias no período.",
    "Acompanhamento documental.",
    "Orientação ao empreendimento sempre que surgir uma dúvida ou demanda.",
    "Relatório de acompanhamento periódico.",
  ];

  const tabelaLinhas = [
    { criterio: "O que é", vertice: "Diagnóstico inicial", sentinela: "Gestão ambiental contínua" },
    { criterio: "Custo", vertice: "Sem custo", sentinela: "Serviço pago, sob proposta" },
    { criterio: "Duração", vertice: "Até 10 dias úteis", sentinela: "Contrato de 12 meses" },
    { criterio: "Entrega", vertice: "Documento com as obrigações do próximo ciclo", sentinela: "Acompanhamento, calendário, orientação e relatórios ao longo do ano" },
    { criterio: "Compromisso", vertice: "Nenhum", sentinela: "Contrato anual" },
  ];

  return (
    <section id="depois-diagnostico">
      <div className="container">
        <div className="secao-header">
          <div className="tag-label">Caminhos possíveis</div>
          <h2 className="titulo-secao">Depois do diagnóstico, você decide.</h2>
          <p className="subtitulo-secao">O documento do Vértice é seu. A partir dele, há três caminhos.</p>
        </div>

        <div className="depois-cards">
          {cards.map((card) => (
            <div key={card.num} className={`depois-card${card.destaque ? " depois-card--destaque" : ""}`}>
              <div className="depois-card-num">{card.num}</div>
              <div className="depois-card-titulo">{card.titulo}</div>
              {card.subtitulo && (
                <div className="depois-card-subtitulo">{card.subtitulo}</div>
              )}
              <p className="depois-card-texto">{card.texto}</p>
            </div>
          ))}
        </div>

        <div className="sentinela-bloco">
          <div className="sentinela-bloco-tag">Programa Sentinela · pago · contrato anual</div>
          <h3 className="sentinela-bloco-titulo">Como funciona o Programa Sentinela</h3>
          <p className="sentinela-bloco-texto">
            No Sentinela, a IL Ambiental acompanha de forma sistemática as obrigações ambientais da sua empresa durante o período contratado e organiza o que precisa ser feito ao longo do ano.
          </p>
          <ul className="sentinela-lista">
            {sentinelaItens.map((item, i) => (
              <li key={i} className="sentinela-item">
                <span className="sentinela-check"><IconCheck color="#B5895E" /></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="tabela-wrapper">
          <h3 className="tabela-titulo">Vértice e Sentinela lado a lado</h3>
          <div className="tabela-comparativo">
            <div className="tabela-header">
              <div className="tabela-cell tabela-cell--criterio"></div>
              <div className="tabela-cell tabela-cell--vertice">Vértice</div>
              <div className="tabela-cell tabela-cell--sentinela">Sentinela <span className="tabela-pago">pago</span></div>
            </div>
            {tabelaLinhas.map((linha, i) => (
              <div className="tabela-row" key={i}>
                <div className="tabela-cell tabela-cell--criterio">{linha.criterio}</div>
                <div className="tabela-cell">{linha.vertice}</div>
                <div className="tabela-cell">{linha.sentinela}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="depois-ctas">
          <a
            href={linkWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primario btn-icon"
          >
            <IconWhatsApp />
            Começar pelo Diagnóstico Vértice
          </a>
          <a
            href={linkWhatsAppSentinela()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secundario"
          >
            Quero conversar sobre o Sentinela
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Quem conduz ─────────────────────────────────────────────────────────────

function QuemConduz() {
  const selos = [
    "Engenharia Florestal",
    "Direito Agroambiental",
    "CREA-PA 1521301735",
  ];

  return (
    <section id="quem-conduz">
      <div className="container">
        <div className="quem-grid">
          <div className="quem-foto-lado">
            <img
              src="/isabela-hero.webp"
              alt="Isabela Loiane, responsável técnica da IL Ambiental"
              className="quem-foto"
              width="400"
              height="533"
              loading="lazy"
            />
          </div>
          <div className="quem-texto-lado">
            <div className="tag-label tag-label--bege">Quem conduz o seu diagnóstico</div>
            <h2 className="titulo-secao">Isabela Loiane</h2>
            <div className="quem-subtitulo">
              Engenheira Florestal · Especialista em Direito Agroambiental · CREA-PA 1521301735
            </div>
            <p className="quem-bio">
              Sou eu quem analisa cada diagnóstico e conduz os processos da IL Ambiental. A formação técnica e jurídica permite olhar para a empresa como um todo: o que a licença exige, o que a lei cobra e o que precisa ser feito primeiro.
            </p>
            {/* TODO: aguardando Isabela — frase de trajetória */}
            <div className="quem-selos">
              {selos.map((s) => (
                <span key={s} className="quem-selo">{s}</span>
              ))}
            </div>
            <a
              href={linkWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primario btn-icon"
              style={{ marginTop: "32px", display: "inline-flex" }}
            >
              <IconWhatsApp />
              Solicitar o diagnóstico pelo WhatsApp
            </a>
          </div>
        </div>
        {/* TODO: aguardando Isabela — clientes autorizados (L-10) */}
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const faqItens = [
  {
    pergunta: "O diagnóstico é mesmo sem custo?",
    resposta: "Sim. O Diagnóstico Vértice não é cobrado e não obriga à contratação de nenhum serviço.",
  },
  {
    pergunta: "Por que vocês oferecem o diagnóstico sem custo?",
    resposta: "Porque é a melhor forma de mostrar o trabalho na prática. Algumas empresas contratam serviços depois; outras usam o documento por conta própria. As duas situações são bem-vindas.",
  },
  {
    pergunta: "Quanto tempo leva?",
    resposta: "Até 10 dias úteis depois que recebemos os documentos.",
  },
  {
    pergunta: "Que documentos preciso enviar?",
    resposta: "Licenças, outorgas e autorizações que a empresa já tem, as condicionantes e os últimos relatórios entregues. Enviamos a lista completa no primeiro contato.",
  },
  {
    pergunta: "Minha empresa ainda não tem licença. Faz sentido pedir?",
    resposta: "Sim. Nesse caso, o diagnóstico mostra qual licença é necessária, em qual órgão e por onde começar.",
  },
  {
    pergunta: "Quanto custa o Programa Sentinela?",
    resposta: "O Sentinela é um serviço pago, com contrato anual. O valor é definido em proposta, conforme a atividade e a quantidade de obrigações da empresa. O diagnóstico serve justamente para dimensionar isso.",
  },
  {
    pergunta: "Vocês atendem a minha cidade?",
    resposta: "Atendemos Belém, Ananindeua, Marituba, Benevides, Santa Isabel do Pará e Castanhal. Para outras localidades, fale com a gente.",
  },
  {
    pergunta: "Meus documentos ficam protegidos?",
    resposta: "Sim. Os documentos são usados apenas para o diagnóstico e não são compartilhados com terceiros.",
  },
];

function FAQ() {
  const [aberto, setAberto] = useState<number | null>(null);

  return (
    <section id="faq">
      <div className="container">
        <div className="secao-header">
          <div className="tag-label">Dúvidas frequentes</div>
          <h2 className="titulo-secao">Perguntas frequentes</h2>
        </div>
        <div className="faq-lista" itemScope itemType="https://schema.org/FAQPage">
          {faqItens.map((item, i) => (
            <div
              key={i}
              className={`faq-item${aberto === i ? " faq-item--aberto" : ""}`}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className="faq-pergunta"
                onClick={() => setAberto(aberto === i ? null : i)}
                aria-expanded={aberto === i}
              >
                <span itemProp="name">{item.pergunta}</span>
                <IconChevron open={aberto === i} />
              </button>
              <div
                className="faq-resposta"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p itemProp="text">{item.resposta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Final + Formulário ───────────────────────────────────────────────────

type FormData = {
  nome: string;
  empresa: string;
  municipio: string;
  whatsapp: string;
  atividade: string;
  licenca: string;
};

function CtaFinal() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    empresa: "",
    municipio: "",
    whatsapp: "",
    atividade: "",
    licenca: "",
  });
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    setErro(false);
    try {
      const resp = await fetch("https://formsubmit.co/ajax/contato@ilambiental.com.br", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "Novo pedido de Diagnóstico Vértice [LP]",
          _captcha: "false",
          nome: formData.nome,
          empresa: formData.empresa,
          municipio: formData.municipio,
          whatsapp: formData.whatsapp,
          atividade: formData.atividade,
          licenca: formData.licenca,
          _origem: "lp.ilambiental.com.br",
        }),
      });
      if (resp.ok) {
        setEnviado(true);
        // Evento de conversão
        if (typeof fbq !== "undefined") {
          fbq("track", "Lead", { municipio: formData.municipio, licenca: formData.licenca });
        }
        if (typeof gtag !== "undefined") {
          gtag("event", "generate_lead", { municipio: formData.municipio, licenca: formData.licenca });
        }
      } else {
        setErro(true);
      }
    } catch {
      setErro(true);
    }
    setEnviando(false);
  };

  return (
    <section id="cta-final">
      <div className="container">
        <div className="cta-grid">
          <div className="cta-lado-texto">
            <div className="tag-label tag-label--bege">Próximo passo</div>
            <h2 className="titulo-secao">Comece sabendo exatamente onde sua empresa está.</h2>
            <p className="cta-subtitulo">
              Peça o Diagnóstico Vértice. A análise é feita pela responsável técnica, sem custo e sem compromisso de contratação.
            </p>
            <a
              href={linkWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primario btn-grande btn-icon"
              onClick={() => {
                if (typeof fbq !== "undefined") fbq("track", "Contact", { position: "final" });
                if (typeof gtag !== "undefined") gtag("event", "whatsapp_click", { position: "final" });
              }}
            >
              <IconWhatsApp />
              Solicitar o diagnóstico pelo WhatsApp
            </a>

            <div className="cta-contatos">
              <div className="cta-contato-item">
                <span className="cta-contato-label">WhatsApp</span>
                <span>{CONTATO.whatsappExibicao}</span>
              </div>
              <div className="cta-contato-item">
                <span className="cta-contato-label">E-mail</span>
                <span>{CONTATO.email}</span>
              </div>
              <div className="cta-contato-item">
                <span className="cta-contato-label">Instagram</span>
                <a href={CONTATO.instagramUrl} target="_blank" rel="noopener noreferrer" className="cta-link">
                  {CONTATO.instagramArroba}
                </a>
              </div>
            </div>
          </div>

          <div className="cta-lado-form">
            {enviado ? (
              <div className="form-confirmacao">
                <div className="form-confirmacao-icone"><IconCheck color="#734120" /></div>
                <h3 className="form-confirmacao-titulo">Pedido recebido.</h3>
                <p>A Isabela entra em contato em até 1 dia útil com a lista de documentos.</p>
                <a
                  href={linkWhatsApp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primario btn-icon"
                  style={{ marginTop: "24px", display: "inline-flex" }}
                >
                  <IconWhatsApp />
                  Falar pelo WhatsApp
                </a>
              </div>
            ) : (
              <form className="form-contato" onSubmit={handleSubmit} noValidate>
                <h3 className="form-titulo">Ou deixe seu contato</h3>

                <div className="form-campo">
                  <label htmlFor="nome">Nome *</label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Seu nome"
                  />
                </div>

                <div className="form-campo">
                  <label htmlFor="empresa">Empresa *</label>
                  <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    required
                    value={formData.empresa}
                    onChange={handleChange}
                    placeholder="Nome da empresa"
                  />
                </div>

                <div className="form-campo">
                  <label htmlFor="municipio">Município *</label>
                  <select
                    id="municipio"
                    name="municipio"
                    required
                    value={formData.municipio}
                    onChange={handleChange}
                  >
                    <option value="">Selecione</option>
                    <option>Belém</option>
                    <option>Ananindeua</option>
                    <option>Marituba</option>
                    <option>Benevides</option>
                    <option>Santa Isabel do Pará</option>
                    <option>Castanhal</option>
                    <option>Outro</option>
                  </select>
                </div>

                <div className="form-campo">
                  <label htmlFor="whatsapp">WhatsApp *</label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="(91) 9 9999-9999"
                  />
                </div>

                <div className="form-campo">
                  <label htmlFor="atividade">Atividade da empresa *</label>
                  <input
                    id="atividade"
                    name="atividade"
                    type="text"
                    required
                    value={formData.atividade}
                    onChange={handleChange}
                    placeholder="Ex: transportadora, mineração, construção..."
                  />
                </div>

                <div className="form-campo">
                  <label htmlFor="licenca">A empresa já tem licença ambiental?</label>
                  <select
                    id="licenca"
                    name="licenca"
                    value={formData.licenca}
                    onChange={handleChange}
                  >
                    <option value="">Selecione</option>
                    <option>Sim</option>
                    <option>Não</option>
                    <option>Não sei</option>
                  </select>
                </div>

                {erro && (
                  <p className="form-erro">Ocorreu um erro. Tente novamente ou fale pelo WhatsApp.</p>
                )}

                <button type="submit" className="btn-primario btn-grande btn-full" disabled={enviando}>
                  {enviando ? "Enviando..." : "Enviar pedido de diagnóstico"}
                </button>

                <p className="form-micro">
                  Retorno em até 1 dia útil. Ao enviar, você concorda que a IL Ambiental use estes dados apenas para responder ao seu pedido.{" "}
                  <a href="https://ilambiental.com.br/privacidade" target="_blank" rel="noopener noreferrer" className="form-link">
                    Política de Privacidade
                  </a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Rodapé ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-conteudo">
          <div className="footer-bloco">
            <div className="footer-marca">IL Ambiental · Engenharia e consultoria ambiental · Belém, Pará</div>
            <div className="footer-resp">
              Responsável técnica: Isabela Loiane, Engenheira Florestal, CREA-PA 1521301735
            </div>
          </div>
          <div className="footer-bloco">
            <div className="footer-contatos">
              <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer" className="footer-link">
                WhatsApp {CONTATO.whatsappExibicao}
              </a>
              <a href={`mailto:${CONTATO.email}`} className="footer-link">{CONTATO.email}</a>
              <a href={CONTATO.instagramUrl} target="_blank" rel="noopener noreferrer" className="footer-link">
                {CONTATO.instagramArroba}
              </a>
            </div>
            <div className="footer-links">
              <a href="https://ilambiental.com.br" target="_blank" rel="noopener noreferrer" className="footer-link-disc">
                ilambiental.com.br
              </a>
              <a href="https://ilambiental.com.br/privacidade" target="_blank" rel="noopener noreferrer" className="footer-link-disc">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Tipos globais para fbq/gtag ─────────────────────────────────────────────

declare const fbq: ((...args: unknown[]) => void) | undefined;
declare const gtag: ((...args: unknown[]) => void) | undefined;

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <AutoridadeFaixa />
      <ParaQuem />
      <OQueRecebe />
      <Problema />
      <DepoisDiagnostico />
      <QuemConduz />
      <FAQ />
      <CtaFinal />
      <Footer />
      <StickyBar />
    </>
  );
}
