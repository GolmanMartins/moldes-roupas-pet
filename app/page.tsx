"use client";
import { ArrowDown, ArrowRight, Check, CheckCheck, ChevronRight, Download, FileText, Heart, LockKeyhole, PawPrint, Printer, Ruler, Scissors, ShieldCheck, Sparkles, Shirt } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const CHECKOUT_URL = "https://pay.cakto.com.br/wzdwajo_1078218";
const PREMIUM_CHECKOUT_URL = "https://pay.cakto.com.br/f93epph";
function Brand() {return <a href="#inicio" className="brand" aria-label="Moldes — Roupas de Pet, início"><span className="brand-mark"><PawPrint size={24} strokeWidth={1.7}/></span><span><strong>moldes<span className="brand-dot">.</span></strong><small>ROUPAS DE PET</small></span></a>;}
function Cta() {return <a href={CHECKOUT_URL} className="cta">QUERO ADQUIRIR AGORA<ArrowRight size={20} aria-hidden="true"/></a>;}
function Purchase() {
 return <a className="cta purchase" href={CHECKOUT_URL}>QUERO ADQUIRIR AGORA<ArrowRight size={20}/></a>;
}
const faqs = [
["Qual a diferença entre Essencial e Premium?","O Essencial reúne a coleção de moldes e os materiais de apoio por R$ 9,90. O Premium custa R$ 27,90 e inclui tudo do Essencial mais o Kit Primeiras Vendas Pet em PDF: guia de precificação, 12 textos para WhatsApp e Instagram, roteiro de fotos e catálogo, e checklist da primeira encomenda. Os bônus orientam a divulgação e a organização das vendas; não são um curso de costura nem uma promessa de renda."],
["Preciso saber costurar?","Sim, é importante ter noções básicas de costura para confeccionar as peças. Os moldes facilitam a modelagem: você não precisa desenhar cada peça do zero. O produto é uma coleção digital de moldes, não um curso de costura."],
["E se eu não tiver impressora?","Você pode baixar os arquivos em PDF e levá-los ou enviá-los a uma gráfica ou papelaria que faça impressões. Peça para respeitarem a escala indicada no arquivo. Não é necessário comprar uma impressora."],
["O que exatamente vou receber?","Acesso a uma pasta no Google Drive com mais de 100 arquivos em PDF, entre modelos e tamanhos de roupas pet, além de materiais extras de apoio. O produto é totalmente digital: você não recebe roupas, tecidos ou moldes pelo correio."],
["Os moldes têm tamanhos diferentes?","Sim. A coleção inclui diferentes medidas. Antes de cortar o tecido, tire as medidas do pet e compare com as informações do molde escolhido. Dependendo do corpo do animal, pequenos ajustes podem ser necessários."],
["Como e quando recebo o acesso?","Após a confirmação do pagamento, você recebe as instruções para acessar a pasta de materiais no Google Drive. O prazo de confirmação pode variar conforme a forma de pagamento."],
["Posso produzir as roupinhas para vender?","Sim. Você pode utilizar os moldes para confeccionar suas próprias peças e oferecê-las a clientes. Sua renda depende dos custos, da qualidade das peças, da divulgação e das vendas realizadas."],
["Tem mensalidade? E se eu não gostar?","O Essencial custa R$ 9,90 e o Premium custa R$ 27,90. Ambos têm pagamento único, sem mensalidade. Você tem 7 dias após a compra para conhecer o material e solicitar reembolso pelo canal indicado na confirmação do pedido, caso ele não seja adequado para você."]
];
export default function Home(){return <>
<a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
<div className="announcement"><Sparkles size={14}/><span>Suas próximas vendas podem começar aqui. <strong>Comece por R$ 9,90.</strong></span><Sparkles size={14}/></div>
<header className="header" id="inicio"><div className="container nav"><Brand/><nav aria-label="Menu principal"><a href="#colecao">A coleção</a><a href="#como-funciona">Como funciona</a><a href="#duvidas">Dúvidas</a></nav><a className="nav-cta" href={CHECKOUT_URL}>QUERO ADQUIRIR AGORA<ArrowRight size={17}/></a></div></header>
<main id="conteudo"><section className="hero container"><div className="hero-copy"><p className="eyebrow"><span/> MOLDES PRONTOS PARA PRODUZIR E VENDER</p><h1>Transforme<br/>roupinhas pet<br/><em>em renda extra.</em></h1><p className="hero-description">Produza roupinhas para vender e comece a construir uma nova fonte de renda. Com <strong>mais de 100 arquivos em PDF</strong>, você pula o desenho dos moldes e pode focar na produção, nas encomendas e nas vendas.</p><div className="hero-price"><span>A coleção completa por</span><strong>R$ 9,90</strong><small>pagamento único</small></div><Cta/><div className="hero-trust"><span><Download size={15}/>Acesso após o pagamento</span><span><ShieldCheck size={16}/>7 dias de garantia</span></div></div><div className="hero-visual"><div className="photo-frame"><img className="hero-photo" src="/images/atelie-pet.webp" alt="Mulher em um ateliê segurando um cachorro com roupinha rosa e um molde de costura; imagem ilustrativa" width="1120" height="1400" fetchPriority="high"/><div className="photo-caption"><Heart size={15} fill="currentColor"/>Feito com carinho. Criado por você.</div></div><div className="pdf-badge"><span className="badge-icon"><FileText size={26} strokeWidth={1.5}/></span><span><strong>+100 PDFs</strong><small>para tirar suas ideias do papel</small></span></div><div className="hero-sticker"><PawPrint size={21}/><span>Pequenas peças.<br/><strong>Grandes possibilidades.</strong></span></div></div></section>
<div className="benefit-strip"><div className="container benefit-inner"><span><FileText/>Mais de 100 arquivos em PDF</span><span><Ruler/>Diferentes modelos e medidas</span><span><Printer/>Imprima onde preferir</span><span><Heart/>Crie para amar ou vender</span></div></div>
<section id="colecao" className="collection section container"><div className="section-heading"><p className="eyebrow">UMA COLEÇÃO, MUITAS IDEIAS</p><h2>Seu próximo produto para vender<br/>pode sair <em>das suas mãos.</em></h2><p>Monte um catálogo de roupinhas pet, apresente suas criações e busque novas encomendas. A modelagem já está adiantada para você começar.</p></div><div className="collection-grid"><figure className="collection-image"><img src="/images/colecao-pet.webp" alt="Composição ilustrativa de roupinhas pet, tecidos, tesoura e moldes de papel sobre uma mesa" width="1400" height="933" loading="lazy"/><figcaption>Inspiração para suas criações · imagens ilustrativas</figcaption></figure><div className="collection-details"><div className="feature"><span className="feature-icon"><Shirt/></span><div><h3>Peças para diferentes momentos</h3><p>Vestidos, camisetas, pijamas, fantasias e acessórios para explorar novas criações.</p></div></div><div className="feature"><span className="feature-icon"><Ruler/></span><div><h3>Modelos em diferentes medidas</h3><p>Compare as medidas do pet com o molde e encontre o ponto de partida para sua peça.</p></div></div><div className="feature"><span className="feature-icon"><FileText/></span><div><h3>Mais de 100 arquivos em PDF</h3><p>Uma pasta no Google Drive com modelos e tamanhos para baixar e imprimir.</p></div></div><div className="feature"><span className="feature-icon"><Sparkles/></span><div><h3>Materiais extras de apoio</h3><p>Conteúdos complementares incluídos junto à coleção, sem custo adicional.</p></div></div><a className="text-link" href={CHECKOUT_URL}>QUERO ADQUIRIR AGORA<ArrowRight size={18}/></a></div></div></section>
<section className="steps-section section" id="como-funciona"><div className="container"><div className="section-heading"><p className="eyebrow">MENOS TEMPO DESENHANDO, MAIS TEMPO CRIANDO</p><h2>Do PDF a uma peça <em>pronta para vender.</em></h2><p>Menos tempo criando moldes. Mais tempo produzindo peças e preparando suas primeiras ofertas.</p></div><div className="steps"><article><div className="step-top"><Download/><span>01</span></div><h3>Acesse a coleção</h3><p>Após a confirmação do pagamento, receba o acesso aos arquivos no Drive.</p></article><article><div className="step-top"><Ruler/><span>02</span></div><h3>Escolha e confira</h3><p>Selecione o modelo e compare as medidas com as do pet antes de cortar.</p></article><article><div className="step-top"><Printer/><span>03</span></div><h3>Imprima e recorte</h3><p>Em casa ou em uma gráfica, imprima respeitando a escala indicada no arquivo.</p></article><article><div className="step-top"><Scissors/><span>04</span></div><h3>Produza e ofereça</h3><p>Capriche no acabamento, fotografe sua peça e apresente o produto para possíveis clientes.</p></article></div><div className="printer-note"><span className="printer-icon"><Printer size={28} strokeWidth={1.5}/></span><div><h3>Não tem impressora? Isso não precisa te parar.</h3><p>Envie o PDF para uma gráfica ou papelaria perto de você. Imprima só o que for usar e comece com o que tem.</p></div><CheckCheck size={28} className="printer-check"/></div></div></section>
<section className="possibility section container">
 <div><p className="eyebrow">PRODUZA. DIVULGUE. CONQUISTE ENCOMENDAS.</p><h2>Uma roupinha pode<br/>virar uma venda.<br/><em>E mais faturamento.</em></h2></div>
 <div className="possibility-copy"><p>Você não precisa de uma loja cheia de estoque para oferecer suas primeiras peças. Comece com um modelo, mostre seu trabalho e produza sob encomenda.</p><p>Para buscar lucro, some os custos, valorize seu tempo e defina o preço de cada peça. Os moldes ajudam você a começar sem desenhar tudo do zero.</p><ul className="check-list"><li><Check/>Ofereça roupinhas para tutores da sua região</li><li><Check/>Divulgue um catálogo no Instagram e WhatsApp</li><li><Check/>Use as encomendas para planejar sua produção</li></ul></div>
 <div className="income-example"><div className="income-example-title"><span>UMA SIMULAÇÃO PARA VISUALIZAR</span><h3>Como pequenas vendas podem somar.</h3></div><div className="income-numbers"><div><span>20 peças vendidas a R$ 35</span><strong>R$ 700</strong><small>em faturamento bruto</small></div><div><span>Custo estimado: R$ 20 por peça</span><strong>R$ 400</strong><small>em custos de produção</small></div><div><span>Faturamento menos produção</span><strong>R$ 300</strong><small>antes dos demais custos</small></div></div><p>Exemplo ilustrativo. Para calcular seu lucro, desconte também divulgação, taxas, impostos e seu trabalho. Preços, custos e vendas variam.</p></div>
</section>
<section className="offer-section section" id="oferta" aria-labelledby="offer-title">
 <div className="container">
  <div className="offer-heading">
   <p className="eyebrow">SEU PRÓXIMO PROJETO COMEÇA AQUI</p>
   <h2 id="offer-title">Comece a produzir.<br/><em>Prepare suas próximas vendas.</em></h2>
   <p>Seu objetivo é renda extra. Seu primeiro passo pode ser uma coleção de moldes para produzir roupas pet e oferecer ao mercado.</p>
  </div>
  <div className="offer-plans">
   <article className="offer-card essential-card" aria-labelledby="essential-title">
    <div className="offer-label"><PawPrint size={18}/>PARA COLOCAR A MÃO NA MASSA</div>
    <h3 id="essential-title">Essencial</h3>
    <p className="offer-subtitle">Moldes — Roupas de Pet</p>
    <p className="plan-description">Moldes para começar a produzir peças e buscar suas primeiras encomendas.</p>
    <ul className="check-list">
     <li><Check/>Mais de 100 arquivos em PDF</li>
     <li><Check/>Diferentes modelos e tamanhos</li>
     <li><Check/>Materiais extras de apoio</li>
     <li><Check/>Acesso pelo Google Drive</li>
     <li><Check/>Liberação após confirmar o pagamento</li>
     <li><Check/>Garantia de 7 dias</li>
    </ul>
    <div className="plan-bottom">
     <div className="offer-price"><span>A coleção completa por</span><div><span>R$</span><strong>9,90</strong></div><small>Pagamento único. Sem mensalidade.</small></div>
     <Purchase/>
     <div className="payment-note"><LockKeyhole size={14}/>Continuar para o checkout Cakto</div>
    </div>
   </article>
   <article className="offer-card premium-card" aria-labelledby="premium-title">
    <div className="premium-ribbon"><Sparkles size={15}/>MOLDES + KIT DE VENDAS</div>
    <div className="offer-label"><Sparkles size={18}/>PARA PRODUZIR E COMEÇAR A VENDER</div>
    <h3 id="premium-title">Premium</h3>
    <p className="offer-subtitle">Moldes — Roupas de Pet</p>
    <p className="plan-description">Além de produzir, saiba como calcular o preço, apresentar suas peças e buscar suas primeiras encomendas.</p>
    <ul className="check-list premium-benefits">
     <li><Check/><span><strong>Tudo do Essencial</strong><small>Coleção de moldes e materiais de apoio inclusos.</small></span></li>
     <li><Check/><span><strong>Guia de precificação</strong><small>Organize custos, valorize seu tempo e planeje sua margem.</small></span></li>
     <li><Check/><span><strong>12 textos prontos de venda</strong><small>Adapte as mensagens para WhatsApp e Instagram.</small></span></li>
     <li><Check/><span><strong>Roteiro de fotos e catálogo</strong><small>Mostre os detalhes que ajudam a vender suas peças.</small></span></li>
     <li><Check/><span><strong>Checklist da primeira encomenda</strong><small>Organize divulgação, atendimento, medidas e entrega.</small></span></li>
    </ul>
    <div className="plan-bottom">
     <div className="offer-price"><span>Valor da edição Premium</span><div><span>R$</span><strong>27,90</strong></div><small>Pagamento único. Sem mensalidade.</small></div>
     <a className="cta purchase premium-purchase" href={PREMIUM_CHECKOUT_URL}>QUERO ADQUIRIR AGORA<ArrowRight size={18}/></a>
     <p className="payment-note"><LockKeyhole size={14}/>Garantia de 7 dias · Conteúdo digital</p>
    </div>
   </article>
  </div>
  <div className="offer-guarantee"><ShieldCheck size={40} strokeWidth={1.4}/><div><h3>Seu primeiro passo tem 7 dias de garantia.</h3><p>Conheça o conteúdo do plano escolhido. Se o material não for adequado para você, solicite o reembolso dentro de 7 dias após a compra.</p></div></div>
 </div>
</section>
<section className="faq-section section container" id="duvidas"><div className="faq-intro"><p className="eyebrow">ANTES DO PRIMEIRO PONTO</p><h2>Vamos tirar<br/>suas <em>dúvidas?</em></h2><p>Os detalhes que você precisa saber para começar com confiança.</p><a className="text-link" href={CHECKOUT_URL}>QUERO ADQUIRIR AGORA<ChevronRight size={18}/></a></div><Accordion type="single" collapsible className="faq-list" defaultValue="faq-0">{faqs.map(([question,answer],i)=><AccordionItem key={question} value={'faq-'+i} className="faq-item"><AccordionTrigger className="faq-trigger">{question}</AccordionTrigger><AccordionContent className="faq-content">{answer}</AccordionContent></AccordionItem>)}</Accordion></section>
<section className="closing"><div className="container"><PawPrint className="closing-paw" size={32} strokeWidth={1.3}/><h2>Sua próxima fonte de renda<br/>pode começar com <em>um molde.</em></h2><Cta/></div></section>
</main><footer><div className="container footer-top"><Brand/><p>Moldes prontos. Peças para vender.</p><a href="#inicio">Voltar ao início<ArrowDown size={15} className="up-arrow"/></a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Moldes — Roupas de Pet.</span></div></footer></>;}
