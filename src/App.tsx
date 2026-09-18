import { CONTATO, linkWhatsApp, linkEmail } from "./config";

function CheckIcon() {
  return (
    <svg viewBox="0 0 12 12" fill="none">
      <path d="M2 6l3 3 5-5" stroke="#452816" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="14" r="7" />
      <path d="M4 36c0-8.8 7.2-16 16-16s16 7.2 16 16" />
    </svg>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={linkWhatsApp()}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Falar no WhatsApp"
      title="Falar no WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}

function Nav() {
  return (
    <nav>
      <div className="container">
        <div className="nav-inner">
          <div className="nav-logo">
            IL Engenharia
            <span>Consultoria Ambiental</span>
          </div>
          <a href="#cta-final" className="nav-cta">Solicitar Diagnóstico</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-conteudo">
            <div className="hero-eyebrow fade-up">Gestão Ambiental Completa para Empresas</div>
            <h1 className="hero-titulo fade-up fade-up-delay-1">
              Sua empresa opera<br />
              <em>sem riscos ambientais.</em><br />
              A IL cuida disso.
            </h1>
            <p className="hero-subtitulo fade-up fade-up-delay-2">
              Controlamos seus prazos de licença, gerenciamos suas obrigações junto à SEMAS e ao IBAMA, e garantimos que sua operação nunca seja surpreendida por multa, embargo ou notificação.
            </p>
            <div style={{ background: "rgba(223,196,159,0.07)", borderLeft: "3px solid var(--bege-medio)", padding: "16px 20px", marginBottom: "32px" }}>
              <p style={{ fontSize: "13px", color: "rgba(223,196,159,0.75)", lineHeight: 1.7, margin: 0 }}>
                No dia a dia: controle de prazos de licença, renovações LP/LI/LO, PGRS atualizado, resposta a notificações, relatórios mensais de conformidade e suporte direto aos órgãos ambientais.
              </p>
            </div>
            <div className="hero-ctas fade-up fade-up-delay-3">
              <a href="#cta-final" className="btn-primario">Solicitar Diagnóstico Gratuito</a>
              <a href="#sentinela" className="btn-secundario">Como funciona o Programa Sentinela</a>
            </div>
          </div>
          <div className="hero-visual fade-up fade-up-delay-2">
            <div className="hero-stat-card">
              <div className="hero-stat-numero">R$ 50M</div>
              <div className="hero-stat-desc">Valor máximo de multa por infração ambiental grave, sem contar embargo, processo criminal e perda de contrato.</div>
            </div>
            <div className="hero-stat-card verde">
              <div className="hero-stat-numero">+60%</div>
              <div className="hero-stat-desc">Das empresas no Pará operam com pelo menos uma irregularidade ambiental ativa, sem sequer saber.</div>
            </div>
            <div className="hero-stat-card">
              <div className="hero-stat-numero">10x</div>
              <div className="hero-stat-desc">A fiscalização ambiental no Pará cresceu mais de 10 vezes na última década. Empresas sem gestão ativa são as primeiras a ser autuadas.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Problema() {
  const problemas = [
    {
      num: "01",
      titulo: "Licenças vencidas ou em risco de vencimento",
      texto: "LO com prazo expirado, LP não renovada, documentação desatualizada perante a SEMAS e o IBAMA. Cada dia sem conformidade é um passivo que cresce, e quando a fiscalização aparece, não há negociação.",
    },
    {
      num: "02",
      titulo: "PGRS desatualizado e resíduos fora de controle",
      texto: "Plano de Gerenciamento de Resíduos Sólidos obsoleto, destinação irregular de resíduos, áreas contaminadas não identificadas. Um único auto de infração pode parar sua operação inteira.",
    },
    {
      num: "03",
      titulo: "APPs e Reserva Legal sem gestão ativa",
      texto: "Áreas de Preservação Permanente sem monitoramento, Reserva Legal não averbada ou mal delimitada. Na Amazônia Legal, qualquer inconsistência atrai atenção do IBAMA e gera embargos imediatos.",
    },
    {
      num: "04",
      titulo: "Nenhum controle sobre prazos regulatórios",
      texto: "Sem um sistema de monitoramento contínuo, prazos de renovação passam, relatórios técnicos atrasam, notificações de órgãos ficam sem resposta. O problema que poderia ser resolvido por R$ 2.000 vira multa de R$ 200.000.",
    },
  ];

  return (
    <section id="problema">
      <div className="container">
        <div className="problema-header">
          <div className="tag-label">O Cenário Real</div>
          <div className="divisor"></div>
          <h2 className="titulo-secao">Você sabe qual é o passivo ambiental<br />da sua empresa neste momento?</h2>
          <p className="subtitulo-secao">
            A maioria dos gestores não sabe. E essa ignorância não é proteção: é risco silencioso
            acumulando enquanto a operação continua.
          </p>
        </div>

        <div className="problema-grid">
          {problemas.map((p) => (
            <div className="problema-item" key={p.num}>
              <div className="problema-numero">{p.num}</div>
              <div className="problema-titulo">{p.titulo}</div>
              <div className="problema-texto">{p.texto}</div>
            </div>
          ))}
        </div>

        <div className="problema-alerta">
          <div className="alerta-numero">R$50M</div>
          <div>
            <div className="alerta-texto">Este é o valor máximo de multa previsto na Lei de Crimes Ambientais, com responsabilidade criminal pessoal do gestor</div>
            <div className="alerta-subtexto">A regularização preventiva é sempre mais rápida, mais barata e mais segura do que a reativa. A IL Engenharia existe para garantir que você nunca precise reagir.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Solucao() {
  const diferenciais = [
    "Domínio técnico ambiental e visão jurídica integrada em um único ponto de contato",
    "Presença real no Pará e Amazônia Legal: conhecimento direto da SEMAS e IBAMA regional",
    "Conformidade como vantagem estratégica: acesso a crédito, ESG, contratos e expansão",
    "Nenhuma surpresa regulatória. Monitoramento ativo de prazos, legislação e notificações",
  ];

  const tags = ["Engenharia Florestal", "Direito Agroambiental", "SEMAS / IBAMA", "Amazônia Legal", "ESG Corporativo", "Fiscalização IBAMA"];

  return (
    <section id="solucao">
      <div className="container">
        <div className="solucao-grid">
          <div className="solucao-texto">
            <div className="tag-label">A Solução IL Engenharia</div>
            <div className="divisor divisor--left" style={{ background: "rgba(223,196,159,0.4)" }}></div>
            <h2 className="solucao-titulo">
              Gestão ambiental que opera<br />
              como <em>parte da sua equipe</em>,<br />
              com toda a expertise técnica<br />
              que você não teria internamente.
            </h2>
            <p className="solucao-descricao">
              A IL Engenharia não entrega laudos e some. Assumimos a gestão ambiental
              completa da sua empresa: da estratégia de conformidade ao relacionamento
              com órgãos ambientais, com a mesma responsabilidade técnica de um
              departamento interno de alto nível.
            </p>
            <div className="solucao-diferenciais">
              {diferenciais.map((d, i) => (
                <div className="diferencial-item" key={i}>
                  <div className="diferencial-check">
                    <CheckIcon />
                  </div>
                  <div className="diferencial-texto">{d}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="solucao-perfil">
            <div className="perfil-foto-placeholder">
              <PersonIcon />
            </div>
            <div className="perfil-nome">Isabela Loiane</div>
            <div className="perfil-cargo">CEO e Responsável Técnica da IL Engenharia</div>
            <p className="perfil-bio">
              Engenheira Florestal com especialização em Direito Agroambiental,
              Isabela lidera uma equipe técnica especializada com atuação direta
              no Pará e na Amazônia Legal. A combinação de formação técnica e
              jurídica garante que cada projeto da IL Engenharia nasce com
              segurança em todas as frentes: da execução ao respaldo legal.
            </p>
            <div style={{ borderTop: "1px solid rgba(223,196,159,0.15)", paddingTop: "20px", marginTop: "4px", marginBottom: "20px" }}>
              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--bege-medio)", marginBottom: "14px" }}>Setores atendidos pela IL Engenharia</div>
              <div style={{ fontSize: "13px", color: "rgba(223,196,159,0.7)", lineHeight: 1.8 }}>
                Logística e transportadoras, agronegócio e frigoríficos, mineração, construção civil, postos de combustível, indústria e empreendimentos imobiliários no Pará e Amazônia Legal.
              </div>
            </div>
            <div className="perfil-tags">
              {tags.map((t) => (
                <div className="perfil-tag" key={t}>{t}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sentinela() {
  const beneficios = [
    {
      icone: "🛡️",
      titulo: "Você não perde mais prazo de licença",
      desc: "Controlamos LP, LI, LO e todas as renovações com antecedência. Sua licença nunca vence sem que você saiba.",
    },
    {
      icone: "🚫",
      titulo: "Você não recebe autuações por resíduos",
      desc: "PGRS sempre atualizado, destinação monitorada e documentação em ordem antes de qualquer fiscalização.",
    },
    {
      icone: "⚖️",
      titulo: "Você não enfrenta notificações sozinho",
      desc: "Nossa equipe responde tecnicamente a SEMAS, IBAMA e órgãos estaduais. Você não precisa entender a burocracia.",
    },
    {
      icone: "📊",
      titulo: "Você sabe exatamente como está sua empresa",
      desc: "Relatório mensal claro: o que está regularizado, o que está pendente e o que será feito no mês seguinte.",
    },
    {
      icone: "📈",
      titulo: "Você acessa crédito e contratos que antes eram fechados",
      desc: "Conformidade ambiental comprovada abre portas: financiamentos verdes, licitações públicas e investidores ESG.",
    },
  ];

  return (
    <section id="sentinela">
      <div className="container">
        <div className="sentinela-header">
          <div className="produto-badge">Produto Principal</div>
          <div className="produto-nome">SENTINELA</div>
          <div className="produto-subtipo">Programa de Gestão Ambiental Contínua, IL Engenharia</div>
          <div className="divisor divisor--left" style={{ background: "rgba(181,137,94,0.4)", marginBottom: "28px" }}></div>
          <p className="produto-conceito">
            A terceirização completa da área ambiental da sua empresa.
            A IL Engenharia assume a responsabilidade técnica integral. Você nunca mais é surpreendido por uma fiscalização.
          </p>
        </div>

        <div className="sentinela-grid">
          <div className="sentinela-left">
            <div className="bloco-texto">
              <div className="bloco-titulo">O que é</div>
              <div className="bloco-conteudo">
                O Programa Sentinela é um modelo de gestão ambiental permanente em que a IL Engenharia
                atua como o departamento ambiental externo da sua empresa, com dedicação contínua,
                visão estratégica e responsabilidade técnica assinada. Não é uma consultoria pontual.
                É uma parceria de longo prazo orientada a resultado.
              </div>
            </div>

            <div className="bloco-texto">
              <div className="bloco-titulo">Como funciona</div>
              <div className="bloco-conteudo">
                Após o Diagnóstico Vértice inicial, a IL assume o controle de todos os processos ambientais
                da sua operação: monitoramento de prazos, gestão de licenças, atualizações de PGRS, relatórios
                periódicos, atendimento a órgãos ambientais e resposta imediata a notificações. Você
                acompanha tudo em relatórios mensais claros e objetivos.
              </div>
            </div>

            <div className="bloco-texto">
              <div className="bloco-titulo">Para quem é</div>
              <div className="bloco-conteudo">
                Médias e grandes empresas nos setores de logística, agronegócio, frigoríficos, mineração,
                construção civil e indústria que operam no Pará ou na Amazônia Legal, e que precisam
                de conformidade permanente sem montar uma estrutura interna própria.
              </div>
            </div>
          </div>

          <div>
            <div className="sentinela-beneficios">
              <div className="beneficios-titulo">O que está incluído</div>
              {beneficios.map((b, i) => (
                <div className="beneficio-item" key={i}>
                  <div className="beneficio-icone">{b.icone}</div>
                  <div className="beneficio-texto">
                    <strong>{b.titulo}</strong>
                    <span>{b.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sentinela-transformacao">
            <div className="transformacao-grid">
              <div className="transformacao-lado">
                <div className="transformacao-label">Antes do Sentinela</div>
                <div className="transformacao-texto">
                  <span style={{ display: "block", marginBottom: "8px" }}>❌ Prazos perdidos e licenças vencidas</span>
                  <span style={{ display: "block", marginBottom: "8px" }}>❌ Fiscalização sem aviso e sem defesa preparada</span>
                  <span style={{ display: "block", marginBottom: "8px" }}>❌ Multas evitáveis consumindo caixa</span>
                  <span style={{ display: "block" }}>❌ Insegurança jurídica em cada decisão operacional</span>
                </div>
              </div>
              <div className="transformacao-seta">→</div>
              <div className="transformacao-lado">
                <div className="transformacao-label">Com o Programa Sentinela</div>
                <div className="transformacao-texto">
                  <span style={{ display: "block", marginBottom: "8px" }}>✓ Prazos controlados com antecedência</span>
                  <span style={{ display: "block", marginBottom: "8px" }}>✓ Fiscalização respondida com documentação completa</span>
                  <span style={{ display: "block", marginBottom: "8px" }}>✓ Zero autuações por falta de controle</span>
                  <span style={{ display: "block" }}>✓ Decisões operacionais com respaldo técnico e jurídico</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Vertice() {
  const etapas = [
    "Coleta e análise de toda a documentação ambiental existente",
    "Mapeamento de passivos, riscos e irregularidades ativas",
    "Avaliação de conformidade com legislação federal e estadual do Pará",
    "Entrega: Relatório Técnico + Plano de Ação Priorizado",
    "Reunião de apresentação com nossa equipe técnica",
  ];

  return (
    <section id="vertice">
      <div className="container">
        <div className="vertice-grid">
          <div className="vertice-visual">
            <div className="tag-label tag-label--light">Produto de Entrada</div>
            <div className="vertice-numero">Vértice</div>
            <p style={{ fontSize: "13px", color: "rgba(223,196,159,0.65)", lineHeight: 1.6, marginBottom: "8px" }}>
              O ponto mais alto: de onde se enxerga tudo.
            </p>
            <div className="vertice-etapas">
              {etapas.map((e, i) => (
                <div className="etapa-item" key={i}>
                  <div className="etapa-num">0{i + 1}</div>
                  <div className="etapa-texto">{e}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="vertice-conteudo">
            <div className="produto-badge">Diagnóstico Técnico</div>
            <h3 className="vertice-titulo">VÉRTICE</h3>
            <div className="vertice-subtipo">Diagnóstico e Análise de Risco Ambiental, IL Engenharia</div>

            <p className="vertice-descricao">
              O ponto de partida para qualquer empresa que quer saber exatamente onde está
              e o que precisa fazer. O Diagnóstico Vértice mapeia com precisão técnica
              todos os passivos, riscos e oportunidades ambientais da sua operação, entregando um plano de ação claro, priorizado e executável.
            </p>

            <div className="vertice-quando">
              <strong>Você precisa do Vértice quando:</strong>
              <ul>
                <li>Não sabe o status real das suas licenças ambientais</li>
                <li>Vai iniciar uma nova operação ou expansão e precisa de base sólida</li>
                <li>Recebeu ou teme uma notificação de órgão ambiental</li>
                <li>Quer acessar crédito, investidores ou certificação ESG</li>
                <li>Está avaliando um ativo para compra ou fusão</li>
                <li>Precisa de clareza técnica antes de tomar qualquer decisão de conformidade</li>
              </ul>
            </div>

            <div className="vertice-prazo">
              <div className="prazo-numero">10</div>
              <div className="prazo-texto">
                <strong style={{ display: "block", color: "var(--marrom-escuro)", fontSize: "15px" }}>dias úteis</strong>
                Para entrega do Relatório Técnico completo com Plano de Ação priorizado e reunião de apresentação com nossa equipe.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProvaSocial() {
  return (
    <section id="prova-social">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="tag-label">Presença e Experiência</div>
          <div className="divisor"></div>
          <h2 className="titulo-secao" style={{ fontSize: "clamp(22px, 2.5vw, 32px)" }}>Uma equipe técnica que conhece cada órgão ambiental da região</h2>
        </div>
        <div className="prova-social-stats">
          <div style={{ background: "var(--bege-claro)", padding: "36px 28px", textAlign: "center" }}>
            <div style={{ fontSize: "40px", fontWeight: 800, color: "var(--marrom)", lineHeight: 1, marginBottom: "8px" }}>Pará</div>
            <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--texto-medio)", letterSpacing: "0.5px" }}>Estado de atuação principal com presença direta junto à SEMAS e IBAMA regional</div>
          </div>
          <div style={{ background: "var(--bege-claro)", padding: "36px 28px", textAlign: "center" }}>
            <div style={{ fontSize: "40px", fontWeight: 800, color: "var(--marrom)", lineHeight: 1, marginBottom: "8px" }}>7+</div>
            <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--texto-medio)", letterSpacing: "0.5px" }}>Setores da economia regional atendidos com projetos de licenciamento e gestão ambiental</div>
          </div>
          <div style={{ background: "var(--bege-claro)", padding: "36px 28px", textAlign: "center" }}>
            <div style={{ fontSize: "40px", fontWeight: 800, color: "var(--marrom)", lineHeight: 1, marginBottom: "8px" }}>LP→LO</div>
            <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--texto-medio)", letterSpacing: "0.5px" }}>Gestão integral do ciclo de licenciamento: da Licença Prévia à Licença de Operação</div>
          </div>
          <div style={{ background: "var(--marrom-escuro)", padding: "36px 28px", textAlign: "center" }}>
            <div style={{ fontSize: "40px", fontWeight: 800, color: "var(--bege-claro)", lineHeight: 1, marginBottom: "8px" }}>Criminal</div>
            <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--bege-medio)", letterSpacing: "0.5px" }}>A Lei de Crimes Ambientais responsabiliza gestores pessoalmente. Irregularidade da empresa vira processo criminal do diretor.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Diferencial() {
  const cards = [
    {
      icone: "⚖️",
      titulo: "Técnica + Jurídica no mesmo ponto de contato",
      texto: "Isabela Loiane é Engenheira Florestal com especialização em Direito Agroambiental. Essa combinação é única no Pará, garantindo que cada decisão técnica já nasce com respaldo jurídico. Sem lacunas entre o que é feito e o que é legal.",
    },
    {
      icone: "🌳",
      titulo: "Presença real na Amazônia Legal",
      texto: "Conhecimento profundo da legislação ambiental do Pará, das dinâmicas da SEMAS e do IBAMA regional, e das especificidades de operar em território amazônico. Consultoras de fora do estado chegam sem contexto. A IL Engenharia já está dentro.",
    },
    {
      icone: "📈",
      titulo: "Conformidade como motor de crescimento",
      texto: "Com a IL, a gestão ambiental deixa de ser custo e vira vantagem competitiva real: acesso a linhas de crédito verdes, aprovação por investidores ESG, diferencial em licitações públicas e proteção total para expansão da operação.",
    },
  ];

  const rows = [
    {
      criterio: "Domínio técnico-jurídico integrado",
      generica: "Não disponível",
      il: "Engenharia + Direito Agroambiental",
    },
    {
      criterio: "Conhecimento regional (Pará / SEMAS)",
      generica: "Genérico, sem contexto local",
      il: "Atuação exclusiva na Amazônia Legal",
    },
    {
      criterio: "Gestão ambiental contínua e proativa",
      generica: "Demanda → serviço → encerramento",
      il: "Monitoramento permanente sem demanda",
    },
    {
      criterio: "Responsabilidade técnica assinada",
      generica: "Geralmente terceirizada ou sem garantia",
      il: "ART emitida pela responsável técnica da IL Engenharia",
    },
    {
      criterio: "Estratégia ESG e acesso a crédito",
      generica: "Fora do escopo padrão",
      il: "Integrado desde o primeiro diagnóstico",
    },
  ];

  return (
    <section id="diferencial">
      <div className="container">
        <div className="diferencial-header">
          <div className="tag-label">Por que a IL Engenharia</div>
          <div className="divisor"></div>
          <h2 className="diferencial-titulo">Isso não é consultoria ambiental.<br />É parceria estratégica.</h2>
          <p className="diferencial-subtitulo">
            Qualquer empresa resolve um licenciamento. Poucas garantem que você
            nunca mais precise correr atrás de conformidade.
          </p>
        </div>

        <div className="diferencial-cards">
          {cards.map((c, i) => (
            <div className="diferencial-card" key={i}>
              <span className="diferencial-icone">{c.icone}</span>
              <div className="diferencial-card-titulo">{c.titulo}</div>
              <div className="diferencial-card-texto">{c.texto}</div>
            </div>
          ))}
        </div>

        <div className="diferencial-comparativo">
          <div className="comparativo-header">
            <div className="comparativo-col-titulo">Critério</div>
            <div className="comparativo-col-titulo">Consultoria Genérica</div>
            <div className="comparativo-col-titulo destaque">IL Engenharia</div>
          </div>
          {rows.map((r, i) => (
            <div className="comparativo-row" key={i}>
              <div className="comparativo-cell">{r.criterio}</div>
              <div className="comparativo-cell"><span className="check-nao">✗</span> {r.generica}</div>
              <div className="comparativo-cell destaque"><span className="check-sim">✓</span> {r.il}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComoFunciona() {
  const steps = [
    {
      num: "01",
      titulo: "Análise Inicial",
      texto: "Você entra em contato com nossa equipe. Entendemos seu setor, o porte da operação, os principais riscos e o que precisa ser resolvido primeiro.",
    },
    {
      num: "02",
      titulo: "Diagnóstico Vértice",
      texto: "Mapeamos com precisão técnica todo o passivo ambiental da empresa. Em 10 dias úteis, você tem um relatório completo e um plano de ação priorizado.",
    },
    {
      num: "03",
      titulo: "Plano de Ação",
      texto: "Com base no diagnóstico, estruturamos o caminho completo para conformidade: o que regularizar primeiro, prazos, responsabilidades e entregáveis claros.",
    },
    {
      num: "04",
      titulo: "Programa Sentinela",
      texto: "A IL Engenharia assume a gestão ambiental contínua da sua empresa. Você opera com conformidade permanente, sem demandar, sem correr atrás.",
    },
  ];

  return (
    <section id="como-funciona">
      <div className="container">
        <div className="processo-header">
          <div className="tag-label">O Processo</div>
          <div className="divisor"></div>
          <h2 className="titulo-secao">Como funciona na prática</h2>
          <p className="subtitulo-secao">
            Do primeiro contato à conformidade permanente: um processo claro,
            transparente e conduzido por uma equipe com responsabilidade técnica em cada etapa.
          </p>
        </div>

        <div className="processo-steps">
          {steps.map((s) => (
            <div className="step-item" key={s.num}>
              <div className="step-numero">{s.num}</div>
              <div className="step-titulo">{s.titulo}</div>
              <div className="step-texto">{s.texto}</div>
            </div>
          ))}
        </div>

        <div className="processo-nota">
          <div className="nota-texto">
            Não há compromisso de continuidade antes do diagnóstico.
            O <em>Vértice é o ponto de partida</em>, e ele já entrega valor real,
            independente do que vier depois.
          </div>
          <div className="nota-cta">
            <a href="#cta-final" className="btn-verde">Agendar Diagnóstico</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaFinal() {
  return (
    <section id="cta-final">
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="cta-eyebrow">Descubra o Risco Real da Sua Empresa</div>
        <h2 className="cta-titulo">
          Solicite o Diagnóstico Vértice<br />
          e saiba <em>exatamente</em><br />
          onde sua empresa está.
        </h2>
        <p className="cta-subtitulo">
          Em 10 dias úteis, nossa equipe entrega um mapeamento técnico completo
          do seu passivo ambiental, com todos os riscos identificados e um plano
          de ação priorizado para regularização. Sem enrolação. Sem proposta genérica.
        </p>
        <div className="cta-botoes">
          <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer" className="btn-primario btn-grande">
            Falar com nossa equipe pelo WhatsApp
          </a>
          <a href={linkEmail("Solicitação de Diagnóstico Vértice")} className="btn-secundario btn-grande">
            Solicitar o Diagnóstico Vértice
          </a>
        </div>
        <div className="cta-garantia">
          Sem compromisso de contratação. O diagnóstico já entrega valor real, independente do que vier depois.
        </div>

        <div className="cta-contatos">
          <div className="contato-item">
            <div className="contato-label">WhatsApp</div>
            <div className="contato-valor">{CONTATO.whatsappExibicao}</div>
          </div>
          <div className="contato-item">
            <div className="contato-label">E-mail</div>
            <div className="contato-valor">{CONTATO.email}</div>
          </div>
          <div className="contato-item">
            <div className="contato-label">Localização</div>
            <div className="contato-valor">{CONTATO.localizacao}</div>
          </div>
          <div className="contato-item">
            <div className="contato-label">Instagram</div>
            <div className="contato-valor">{CONTATO.instagramArroba}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">
            IL Engenharia e Consultoria Ambiental
            <span>CNPJ · Belém, Pará</span>
          </div>
          <div className="footer-tagline">
            "Soluções ambientais que transformam negócios e preservam o futuro."
          </div>
          <div className="footer-cred">
            Isabela Loiane · Engenheira Florestal · CREA-PA
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Problema />
      <Solucao />
      <Sentinela />
      <Vertice />
      <ProvaSocial />
      <Diferencial />
      <ComoFunciona />
      <CtaFinal />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
