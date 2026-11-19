/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  MessageCircle,
  ShieldCheck,
  SlidersHorizontal,
  ShoppingBag,
  TrendingUp,
  Quote,
  Star,
  ArrowDown,
  Clock,
  Calculator
} from 'lucide-react';

const EASYBYZ_WHATSAPP = '18038889018';
const WHATSAPP_CTA_MSG = "Olá Pati, sou aluna e/ou seguidora da Gabi´s sweets e tenho interesse em ter um app personalizado assim como o dela.";
const WHATSAPP_CTA_URL = `https://wa.me/${EASYBYZ_WHATSAPP}?text=${encodeURIComponent(WHATSAPP_CTA_MSG)}`;

const DEFAULT_SUPPORT_MSG = "Olá Pati, vim pela indicação da Gabi´s Sweets e gostaria de tirar uma dúvida sobre o aplicativo personalizado da EASY BYZ. Você pode me ajudar?";

export default function App() {
  const { scrollY } = useScroll();
  const chefY = useTransform(scrollY, [0, 600], [0, -25]);
  const phoneY = useTransform(scrollY, [0, 600], [0, -50]);

  return (
    <div className="min-h-screen bg-[#FFFFFF] font-sans text-[#0A0A0A] selection:bg-[#00E5FF] selection:text-[#0A0A0A]">
      
      {/* Top Header Bar */}
      <div className="bg-[#0A0A0A] text-white text-xs sm:text-sm py-2.5 px-3 text-center font-medium border-b border-[#00E5FF]/30">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
          <div className="flex items-center flex-wrap justify-center gap-1.5 text-center">
            <span className="font-bold text-white tracking-wide">
              EASY BYZ <span className="text-[#00E5FF]">CREATOR</span>
            </span>
            <span className="bg-[#00E5FF]/15 text-[#00E5FF] text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full border border-[#00E5FF]/40">
              Aplicativo Personalizado
            </span>
          </div>
          <div className="text-[11px] sm:text-xs text-white/90 text-center">
            Condição exclusiva para alunas e seguidores da <strong className="text-[#E9A7B6]">Gabi´s Sweets</strong>
          </div>
        </div>
      </div>

      {/* Editorial Hero Header */}
      <header className="max-w-6xl mx-auto pt-6 sm:pt-12 px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        {/* Topo Mobile: Título e Subtítulo antes das imagens */}
        <div className="lg:hidden text-left space-y-3 mb-7">
          <h1 className="text-2xl sm:text-4xl font-black text-[#0A0A0A] tracking-tight leading-[1.15]">
            Já pensou em ter um aplicativo totalmente personalizado para o seu negócio?
          </h1>
          <p className="text-sm sm:text-lg font-medium text-[#0A0A0A]/80 leading-relaxed">
            A mesma tecnologia desenvolvida pela <strong className="text-[#0A0A0A]">EASY BYZ</strong> para o app da Gabi´s Sweets pode estar ao seu alcance — tudo isso à distância de um clique.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Coluna Visual: No topo no Mobile (order-1 lg:order-2) */}
          <div className="order-1 lg:order-2 lg:col-span-6 xl:col-span-6 relative flex justify-center lg:justify-end mt-2 lg:mt-0">
            
            {/* Efeito de Aura Luminosa Dinâmica de Fundo (Nuances do Logo EASY BYZ) */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.22, 0.4, 0.22] 
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute -inset-4 sm:-inset-8 bg-gradient-to-tr from-[#00E5FF]/30 via-[#22C55E]/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
            />

            <div className="relative flex flex-row items-end justify-center gap-3 sm:gap-5 w-full max-w-[540px]">
              
              {/* Card da Chef / Gabi´s Sweets */}
              <motion.div
                style={{ y: chefY }}
                className="w-[52%] sm:w-60 md:w-64 shrink-0"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2 sm:border-4 border-[#0A0A0A]/15 bg-[#FFFFFF] aspect-[3/4] w-full group"
                >
                  <img
                    src="https://raw.githubusercontent.com/easybyzcreator/imagens/c0a4d31d6e45e9b8a82d87e8535bfe3d5ecfa656/gabis%20sweets.png"
                    alt="Gabi´s Sweets com seu aplicativo personalizado EASY BYZ"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 text-white text-xs font-semibold px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-[#0A0A0A]/80 backdrop-blur-xs flex items-center justify-between border border-[#00E5FF]/30">
                    <div>
                      <span className="block font-bold text-white text-[10px] sm:text-xs leading-tight">Gabi´s Sweets</span>
                      <span className="text-[#00E5FF] text-[8px] sm:text-[10px] uppercase font-bold tracking-wider">Cliente EASY BYZ</span>
                    </div>
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#4ADE80] animate-ping" />
                  </div>
                </motion.div>
              </motion.div>

              {/* Mockup de Smartphone */}
              <motion.div
                style={{ y: phoneY }}
                className="w-[44%] sm:w-48 md:w-52 shrink-0 -mb-1 sm:-mb-3"
              >
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [-1, 1, -1]
                  }}
                  transition={{ 
                    duration: 4.2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="relative group"
                >
                  {/* Badge Flutuante no Celular */}
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-2.5 sm:-top-3.5 -left-2 sm:-left-3 z-30 bg-[#0A0A0A] text-white text-[9px] sm:text-[10px] font-black px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full shadow-lg border border-[#00E5FF]/60 flex items-center gap-1 sm:gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
                    <span>App Personalizado</span>
                  </motion.div>

                  {/* Mockup sem link de simulação com brilho neon discreto EASY BYZ */}
                  <div className="block relative">
                    {/* Efeito Neon Externo Fininho e Discreto */}
                    <div className="absolute -inset-[2px] bg-gradient-to-tr from-[#00E5FF] via-[#22C55E] to-[#84CC16] rounded-[1.9rem] sm:rounded-[2.4rem] blur-[3px] opacity-35 pointer-events-none" />
                    
                    {/* Chassis do Smartphone */}
                    <div className="w-full bg-[#0A0A0A] rounded-[1.8rem] sm:rounded-[2.3rem] p-1.5 sm:p-2.5 shadow-[0_0_12px_rgba(0,229,255,0.18)] border border-[#00E5FF]/45 relative">
                      
                      {/* Speaker & Notch */}
                      <div className="w-10 sm:w-14 h-2 sm:h-3 bg-white/15 rounded-full mx-auto mb-1 sm:mb-1.5 flex items-center justify-end px-1 sm:px-2">
                        <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#00E5FF]"></div>
                      </div>

                      {/* Tela com a imagem do App */}
                      <div className="rounded-[1.3rem] sm:rounded-[1.6rem] overflow-hidden bg-white shadow-inner aspect-[9/17] relative">
                        <img
                          src="https://raw.githubusercontent.com/easybyzcreator/imagens/a970ebdd1ef20a8f4e1380cc3a4d22369517a583/app%20gabis%20sweets.jpeg"
                          alt="Exemplo real de aplicativo personalizado EASY BYZ feito para a Gabi´s Sweets"
                          className="w-full h-full object-cover object-top block"
                          loading="eager"
                          referrerPolicy="no-referrer"
                        />

                        <div className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2">
                          <span className="bg-[#0A0A0A] text-[#00E5FF] text-[8px] sm:text-[9px] font-black px-1.5 sm:px-2 py-0.5 rounded-full shadow-md border border-[#00E5FF]/50">
                            NOVO
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                </motion.div>
              </motion.div>

            </div>
          </div>

          {/* Coluna de Textos Editoriais & CTAs */}
          <div className="order-2 lg:order-1 lg:col-span-6 xl:col-span-6 text-left space-y-5 sm:space-y-6">
            
            {/* Título Principal (Desktop) */}
            <h1 className="hidden lg:block text-2xl sm:text-4xl lg:text-5xl font-black text-[#0A0A0A] tracking-tight leading-[1.15] sm:leading-[1.1]">
              Já pensou em ter um aplicativo totalmente personalizado para o seu negócio?
            </h1>

            {/* Subtítulo (Desktop) */}
            <p className="hidden lg:block text-sm sm:text-xl font-medium text-[#0A0A0A]/80 leading-relaxed">
              A mesma tecnologia desenvolvida pela <strong className="text-[#0A0A0A]">EASY BYZ</strong> para o app da Gabi´s Sweets pode estar ao seu alcance — tudo isso à distância de um clique.
            </p>

            {/* Notas editoriais */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2 border-t border-[#0A0A0A]/15">
              <div className="space-y-1.5 p-3 sm:p-3.5 rounded-2xl bg-white border border-[#0A0A0A]/15 shadow-xs">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0A0A0A] flex items-center gap-1.5">
                  <span className="w-3 h-0.5 bg-[#0891B2]"></span>
                  GESTÃO PRÁTICA
                </span>
                <p className="text-xs sm:text-sm text-[#0A0A0A]/80 font-medium leading-relaxed italic">
                  Uma ferramenta prática para organizar pedidos, profissionalizar o atendimento e escalar sua confeitaria de bolos e doces.
                </p>
              </div>

              <div className="space-y-1.5 p-3 sm:p-3.5 rounded-2xl bg-white border border-[#0A0A0A]/15 shadow-xs">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0A0A0A] flex items-center gap-1.5">
                  <span className="w-3 h-0.5 bg-[#22C55E]"></span>
                  100% PERSONALIZADO
                </span>
                <p className="text-xs sm:text-sm text-[#0A0A0A]/80 font-medium leading-relaxed italic">
                  Criado pela EASY BYZ com as suas cores, seu logo e o seu cardápio para simplificar sua rotina e encantar seus clientes.
                </p>
              </div>
            </div>

            {/* Botão de Ação */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 pt-2">
              <a
                href={WHATSAPP_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0A0A0A] hover:bg-[#1a1a1a] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 uppercase tracking-wide cursor-pointer text-center border border-[#00E5FF]/40"
              >
                <MessageCircle className="w-4 h-4 text-[#4ADE80]" />
                <span>Garantir Meu App Agora</span>
              </a>
            </div>
          </div>

        </div>
      </header>

      {/* Conteúdo Informativo: Benefícios, Depoimentos e Investimento */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">

          {/* Seção Vantagens e Benefícios */}
          <div className="text-left mb-20 sm:mb-24">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-3xl font-extrabold text-[#0A0A0A] tracking-tight">
                Vantagens e Benefícios de ter o seu App Personalizado
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#84CC16] via-[#22C55E] to-[#00E5FF] mx-auto mt-2.5 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
              {/* Benefício 1 */}
              <div className="h-full p-4 sm:p-5 lg:p-3.5 xl:p-4 bg-white rounded-2xl border border-[#0A0A0A]/15 shadow-sm hover:shadow-md hover:border-[#0891B2]/50 transition-all flex flex-col justify-center items-center text-center">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0A0A0A] text-[#00E5FF] flex items-center justify-center shrink-0 mb-2 sm:mb-2.5">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#00E5FF]" />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-[#0A0A0A] leading-snug mb-1">
                  Profissionalização imediata
                </h3>
                <p className="text-xs sm:text-[13px] text-[#0A0A0A]/75 leading-snug">
                  Transmita autoridade e credibilidade com um aplicativo exclusivo, desenvolvido sob medida com a identidade da sua marca.
                </p>
              </div>

              {/* Benefício Destaque: Precificação Inteligente */}
              <div className="h-full p-4 sm:p-5 lg:p-3.5 xl:p-4 bg-[#0A0A0A] rounded-2xl border-2 border-[#00E5FF]/60 shadow-lg hover:shadow-xl hover:border-[#00E5FF] transition-all flex flex-col justify-center items-center text-center">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#00E5FF]/15 border border-[#00E5FF]/40 text-[#4ADE80] flex items-center justify-center shrink-0 mb-2 sm:mb-2.5">
                  <Calculator className="w-4 h-4 sm:w-5 sm:h-5 text-[#4ADE80]" />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-white leading-snug mb-1">
                  Precificação inteligente
                </h3>
                <p className="text-xs sm:text-[13px] text-white/85 leading-snug">
                  Nunca mais venda pelo preço errado: o app calcula seus custos automaticamente e mostra exatamente o lucro de cada produto.
                </p>
              </div>

              {/* Benefício 2 */}
              <div className="h-full p-4 sm:p-5 lg:p-3.5 xl:p-4 bg-white rounded-2xl border border-[#0A0A0A]/15 shadow-sm hover:shadow-md hover:border-[#0891B2]/50 transition-all flex flex-col justify-center items-center text-center">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0A0A0A] text-[#4ADE80] flex items-center justify-center shrink-0 mb-2 sm:mb-2.5">
                  <SlidersHorizontal className="w-4 h-4 sm:w-5 sm:h-5 text-[#4ADE80]" />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-[#0A0A0A] leading-snug mb-1">
                  Gestão simplificada do negócio
                </h3>
                <p className="text-xs sm:text-[13px] text-[#0A0A0A]/75 leading-snug">
                  Organize pedidos, cardápio digital de sobremesas e encomendas em um só lugar, reduzindo erros e economizando tempo.
                </p>
              </div>

              {/* Benefício 3 */}
              <div className="h-full p-4 sm:p-5 lg:p-3.5 xl:p-4 bg-white rounded-2xl border border-[#0A0A0A]/15 shadow-sm hover:shadow-md hover:border-[#0891B2]/50 transition-all flex flex-col justify-center items-center text-center">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0A0A0A] text-[#00E5FF] flex items-center justify-center shrink-0 mb-2 sm:mb-2.5">
                  <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-[#00E5FF]" />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-[#0A0A0A] leading-snug mb-1">
                  Experiência de compra superior
                </h3>
                <p className="text-xs sm:text-[13px] text-[#0A0A0A]/75 leading-snug">
                  Ofereça aos seus clientes uma navegação prática, rápida e intuitiva para encomendarem bolos e sobremesas.
                </p>
              </div>

              {/* Benefício 4 */}
              <div className="h-full p-4 sm:p-5 lg:p-3.5 xl:p-4 bg-white rounded-2xl border border-[#0A0A0A]/15 shadow-sm hover:shadow-md hover:border-[#0891B2]/50 transition-all flex flex-col justify-center items-center text-center">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0A0A0A] text-[#4ADE80] flex items-center justify-center shrink-0 mb-2 sm:mb-2.5">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#4ADE80]" />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-[#0A0A0A] leading-snug mb-1">
                  Foco em crescimento
                </h3>
                <p className="text-xs sm:text-[13px] text-[#0A0A0A]/75 leading-snug">
                  Deixe a tecnologia cuidar da rotina enquanto você foca na produção das melhores sobremesas e expansão do negócio.
                </p>
              </div>
            </div>
          </div>

          {/* Bloco: Funcionalidades Exclusivas do App Personalizado EASY BYZ */}
          <div className="text-left mb-20 sm:mb-24">
            <div className="text-center mb-10 sm:mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#0891B2] bg-[#00E5FF]/10 border border-[#0891B2]/30 px-3 py-1 rounded-full inline-block mb-2">
                Funcionalidades Exclusivas
              </span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-[#0A0A0A] tracking-tight max-w-3xl mx-auto leading-tight">
                Tudo o que a sua confeitaria precisa para vender mais e trabalhar com organização de alto padrão
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#84CC16] via-[#22C55E] to-[#00E5FF] mx-auto mt-3 mb-4 rounded-full"></div>
              <p className="text-sm sm:text-base text-[#0A0A0A]/80 max-w-2xl mx-auto leading-relaxed">
                O aplicativo personalizado da EASY BYZ transforma a sua operação: você ganha um canal de vendas próprio, moderno e automatizado, com a sua identidade visual, funcionando direto no navegador dos seus clientes — sem precisar baixar nenhum aplicativo de lojas digitais.
              </p>
            </div>

            {/* Box Clicável de Oferta Exclusiva -> Desce para os Valores */}
            <a
              href="#investimento"
              className="block mb-8 sm:mb-10 p-4 sm:p-5 rounded-2xl bg-[#0A0A0A] hover:bg-[#141414] text-white border border-[#00E5FF]/40 hover:border-[#00E5FF] shadow-lg hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
                <div className="w-10 h-10 rounded-full bg-[#00E5FF]/15 border border-[#00E5FF]/40 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#00E5FF]" />
                </div>
                <div className="flex-1">
                  <p className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#4ADE80]">
                    Oferta Exclusiva por Tempo Limitado
                  </p>
                  <p className="text-xs sm:text-sm text-white/95 leading-snug mt-0.5">
                    Condição especial válida <strong className="text-[#00E5FF]">somente até 20 de dezembro</strong> e exclusiva para <strong className="text-white">alunas e seguidores da Gabi´s Sweets</strong>. Após essa data, o valor retorna à tabela padrão da EASY BYZ.
                  </p>
                </div>
                <ArrowDown className="w-5 h-5 text-[#00E5FF] shrink-0 group-hover:translate-y-0.5 transition-transform" />
              </div>
            </a>

            <div className="space-y-8 sm:space-y-12">
              {/* Parte 1: Para o seu Cliente */}
              <div className="bg-slate-50/70 rounded-2xl sm:rounded-3xl border border-[#0A0A0A]/12 p-4 sm:p-7 shadow-sm">
                <div className="border-b border-[#0A0A0A]/10 pb-3 mb-4 sm:mb-5 text-center sm:text-left">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0891B2] bg-[#00E5FF]/10 border border-[#0891B2]/25 px-2.5 py-0.5 rounded-full inline-block mb-1.5">
                    Experiência do Consumidor
                  </span>
                  <h3 className="text-lg sm:text-2xl font-extrabold text-[#0A0A0A]">
                    1. Para o seu Cliente: Uma Experiência de Compra Irresistível
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-3">
                  <div className="aspect-auto lg:aspect-square flex flex-col justify-center items-center text-center p-3.5 sm:p-3.5 lg:p-2 xl:p-3 bg-white rounded-xl sm:rounded-2xl border border-[#0A0A0A]/12 shadow-xs hover:border-[#0891B2] hover:shadow-sm transition-all">
                    <h4 className="font-bold text-xs sm:text-[13px] text-[#0A0A0A] leading-tight mb-1 sm:mb-1.5">
                      Vitrine Visual & Galeria Estilo Instagram
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#0A0A0A]/75 leading-snug">
                      Suas fotos de bolos decorados, doces finos e sobremesas em alta definição para encantar e gerar desejos de compra imediatos.
                    </p>
                  </div>

                  <div className="aspect-auto lg:aspect-square flex flex-col justify-center items-center text-center p-3.5 sm:p-3.5 lg:p-2 xl:p-3 bg-white rounded-xl sm:rounded-2xl border border-[#0A0A0A]/12 shadow-xs hover:border-[#0891B2] hover:shadow-sm transition-all">
                    <h4 className="font-bold text-xs sm:text-[13px] text-[#0A0A0A] leading-tight mb-1 sm:mb-1.5">
                      Montador de Bolos & Doces (Custom Builder)
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#0A0A0A]/75 leading-snug">
                      O cliente personaliza tudo passo a passo — tipo de massa, recheios, coberturas, tamanhos e pesos — além de montar caixas de brigadeiros personalizadas com soma de valores automática.
                    </p>
                  </div>

                  <div className="aspect-auto lg:aspect-square flex flex-col justify-center items-center text-center p-3.5 sm:p-3.5 lg:p-2 xl:p-3 bg-white rounded-xl sm:rounded-2xl border border-[#0A0A0A]/12 shadow-xs hover:border-[#0891B2] hover:shadow-sm transition-all">
                    <h4 className="font-bold text-xs sm:text-[13px] text-[#0A0A0A] leading-tight mb-1 sm:mb-1.5">
                      Agendamento Inteligente e Sem Conflitos
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#0A0A0A]/75 leading-snug">
                      O cliente escolhe a data exata da entrega ou retirada e define o horário preciso (AM/PM), eliminando qualquer erro de agenda na sua produção.
                    </p>
                  </div>

                  <div className="aspect-auto lg:aspect-square flex flex-col justify-center items-center text-center p-3.5 sm:p-3.5 lg:p-2 xl:p-3 bg-white rounded-xl sm:rounded-2xl border border-[#0A0A0A]/12 shadow-xs hover:border-[#0891B2] hover:shadow-sm transition-all">
                    <h4 className="font-bold text-xs sm:text-[13px] text-[#0A0A0A] leading-tight mb-1 sm:mb-1.5">
                      Cálculo Automático de Frete
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#0A0A0A]/75 leading-snug">
                      O sistema soma a taxa de entrega automaticamente com base no bairro ou cidade selecionada, seja para Delivery ou Store Pick Up (Retirada).
                    </p>
                  </div>

                  <div className="sm:col-span-2 lg:col-span-1 aspect-auto lg:aspect-square flex flex-col justify-center items-center text-center p-3.5 sm:p-3.5 lg:p-2 xl:p-3 bg-white rounded-xl sm:rounded-2xl border border-[#0A0A0A]/12 shadow-xs hover:border-[#0891B2] hover:shadow-sm transition-all">
                    <h4 className="font-bold text-xs sm:text-[13px] text-[#0A0A0A] leading-tight mb-1 sm:mb-1.5">
                      Finalização Direta no WhatsApp
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#0A0A0A]/75 leading-snug">
                      Adeus às mensagens infinitas de orçamento! Ao terminar, o app gera um pedido completo, formatado e organizado direto para o seu WhatsApp.
                    </p>
                  </div>
                </div>
              </div>

              {/* Parte 2: Para Você */}
              <div className="bg-slate-50/70 rounded-2xl sm:rounded-3xl border border-[#0A0A0A]/12 p-4 sm:p-7 shadow-sm">
                <div className="border-b border-[#0A0A0A]/10 pb-3 mb-4 sm:mb-5 text-center sm:text-left">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#15803D] bg-[#22C55E]/10 border border-[#22C55E]/30 px-2.5 py-0.5 rounded-full inline-block mb-1.5">
                    Painel Administrativo
                  </span>
                  <h3 className="text-lg sm:text-2xl font-extrabold text-[#0A0A0A]">
                    2. Para Você: Gestão Total na Palma da Mão
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-3">
                  <div className="aspect-auto lg:aspect-square flex flex-col justify-center items-center text-center p-3.5 sm:p-3.5 lg:p-2 xl:p-3 bg-white rounded-xl sm:rounded-2xl border border-[#0A0A0A]/12 shadow-xs hover:border-[#22C55E] hover:shadow-sm transition-all">
                    <h4 className="font-bold text-xs sm:text-[13px] text-[#0A0A0A] leading-tight mb-1 sm:mb-1.5">
                      Controle Total do Cardápio
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#0A0A0A]/75 leading-snug">
                      Cadastre produtos facilmente, organize por categorias e pause itens esgotados com apenas um clique.
                    </p>
                  </div>

                  <div className="aspect-auto lg:aspect-square flex flex-col justify-center items-center text-center p-3.5 sm:p-3.5 lg:p-2 xl:p-3 bg-white rounded-xl sm:rounded-2xl border border-[#0A0A0A]/12 shadow-xs hover:border-[#22C55E] hover:shadow-sm transition-all">
                    <h4 className="font-bold text-xs sm:text-[13px] text-[#0A0A0A] leading-tight mb-1 sm:mb-1.5">
                      Gestão de Pedidos em Tempo Real
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#0A0A0A]/75 leading-snug">
                      Acompanhe cada etapa (Novo, Em Produção, Pronto e Entregue) e mantenha o histórico organizado direto na cozinha.
                    </p>
                  </div>

                  <div className="aspect-auto lg:aspect-square flex flex-col justify-center items-center text-center p-3.5 sm:p-3.5 lg:p-2 xl:p-3 bg-white rounded-xl sm:rounded-2xl border border-[#0A0A0A]/12 shadow-xs hover:border-[#22C55E] hover:shadow-sm transition-all">
                    <h4 className="font-bold text-xs sm:text-[13px] text-[#0A0A0A] leading-tight mb-1 sm:mb-1.5">
                      Módulo Financeiro & Custos
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#0A0A0A]/75 leading-snug">
                      Acompanhe seu faturamento por período e registre custos de ingredientes e embalagens para ter certeza da sua margem real de lucro.
                    </p>
                  </div>

                  <div className="aspect-auto lg:aspect-square flex flex-col justify-center items-center text-center p-3.5 sm:p-3.5 lg:p-2 xl:p-3 bg-white rounded-xl sm:rounded-2xl border border-[#0A0A0A]/12 shadow-xs hover:border-[#22C55E] hover:shadow-sm transition-all">
                    <h4 className="font-bold text-xs sm:text-[13px] text-[#0A0A0A] leading-tight mb-1 sm:mb-1.5">
                      Cadastro & CRM de Clientes
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#0A0A0A]/75 leading-snug">
                      Histórico automático com nome, telefone, endereço e datas especiais para você fazer campanhas de fidelização e pós-venda.
                    </p>
                  </div>

                  <div className="sm:col-span-2 lg:col-span-1 aspect-auto lg:aspect-square flex flex-col justify-center items-center text-center p-3.5 sm:p-3.5 lg:p-2 xl:p-3 bg-white rounded-xl sm:rounded-2xl border border-[#0A0A0A]/12 shadow-xs hover:border-[#22C55E] hover:shadow-sm transition-all">
                    <h4 className="font-bold text-xs sm:text-[13px] text-[#0A0A0A] leading-tight mb-1 sm:mb-1.5">
                      Sua Marca em Primeiro Lugar
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#0A0A0A]/75 leading-snug">
                      App totalmente personalizado com as suas cores, logotipo, banner de abertura, slogan e links de redes sociais.
                    </p>
                  </div>
                </div>
              </div>

              {/* Parte 3: Tecnologia e Estrutura */}
              <div className="bg-slate-50/70 rounded-2xl sm:rounded-3xl border border-[#0A0A0A]/12 p-4 sm:p-7 shadow-sm">
                <div className="border-b border-[#0A0A0A]/10 pb-3 mb-4 sm:mb-5 text-center sm:text-left">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0891B2] bg-[#00E5FF]/10 border border-[#0891B2]/25 px-2.5 py-0.5 rounded-full inline-block mb-1.5">
                    Infraestrutura & Tecnologia
                  </span>
                  <h3 className="text-lg sm:text-2xl font-extrabold text-[#0A0A0A]">
                    3. Tecnologia e Estrutura: Sem Complicações para Você
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-3">
                  <div className="aspect-auto lg:aspect-square flex flex-col justify-center items-center text-center p-3.5 sm:p-3.5 lg:p-2 xl:p-3 bg-white rounded-xl sm:rounded-2xl border border-[#0A0A0A]/12 shadow-xs hover:border-[#0891B2] hover:shadow-sm transition-all">
                    <h4 className="font-bold text-xs sm:text-[13px] text-[#0A0A0A] leading-tight mb-1 sm:mb-1.5">
                      Sem Downloads Chatos
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#0A0A0A]/75 leading-snug">
                      Funciona direto no navegador (Chrome, Safari, etc.) através de um link exclusivo. O cliente não precisa baixar nada na App Store ou Google Play para comprar de você.
                    </p>
                  </div>

                  <div className="aspect-auto lg:aspect-square flex flex-col justify-center items-center text-center p-3.5 sm:p-3.5 lg:p-2 xl:p-3 bg-white rounded-xl sm:rounded-2xl border border-[#0A0A0A]/12 shadow-xs hover:border-[#0891B2] hover:shadow-sm transition-all">
                    <h4 className="font-bold text-xs sm:text-[13px] text-[#0A0A0A] leading-tight mb-1 sm:mb-1.5">
                      Ícone na Tela do Celular (Web App / PWA)
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#0A0A0A]/75 leading-snug">
                      Seus clientes podem adicionar o ícone da sua confeitaria direto na tela inicial do celular deles com 1 clique, como se fosse um app nativo.
                    </p>
                  </div>

                  <div className="aspect-auto lg:aspect-square flex flex-col justify-center items-center text-center p-3.5 sm:p-3.5 lg:p-2 xl:p-3 bg-white rounded-xl sm:rounded-2xl border border-[#0A0A0A]/12 shadow-xs hover:border-[#0891B2] hover:shadow-sm transition-all">
                    <h4 className="font-bold text-xs sm:text-[13px] text-[#0A0A0A] leading-tight mb-1 sm:mb-1.5">
                      Rápido, Seguro e Hospedado na Nuvem
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#0A0A0A]/75 leading-snug">
                      Você não precisa se preocupar com servidores, hospedagem ou códigos complexos. Toda a parte técnica pesada fica por nossa conta.
                    </p>
                  </div>

                  <div className="aspect-auto lg:aspect-square flex flex-col justify-center items-center text-center p-3.5 sm:p-3.5 lg:p-2 xl:p-3 bg-white rounded-xl sm:rounded-2xl border border-[#0A0A0A]/12 shadow-xs hover:border-[#0891B2] hover:shadow-sm transition-all">
                    <h4 className="font-bold text-xs sm:text-[13px] text-[#0A0A0A] leading-tight mb-1 sm:mb-1.5">
                      Atualizações Automáticas
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#0A0A0A]/75 leading-snug">
                      Qualquer alteração no seu cardápio, fotos ou preços entra no ar na mesma hora, sem espera de aprovação de lojas de aplicativos.
                    </p>
                  </div>

                  <div className="sm:col-span-2 lg:col-span-1 aspect-auto lg:aspect-square flex flex-col justify-center items-center text-center p-3.5 sm:p-3.5 lg:p-2 xl:p-3 bg-white rounded-xl sm:rounded-2xl border border-[#0A0A0A]/12 shadow-xs hover:border-[#0891B2] hover:shadow-sm transition-all">
                    <h4 className="font-bold text-xs sm:text-[13px] text-[#0A0A0A] leading-tight mb-1 sm:mb-1.5">
                      Link Único para Redes Sociais
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#0A0A0A]/75 leading-snug">
                      Coloque o link oficial do seu aplicativo na bio do Instagram, no botão do WhatsApp e nos seus stories para centralizar todas as suas vendas em um só lugar.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Botão de Ação antes dos Depoimentos */}
            <div className="mt-10 text-center">
              <a
                href={WHATSAPP_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#0A0A0A] hover:bg-[#1a1a1a] text-white font-black text-base sm:text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all tracking-tight cursor-pointer border border-[#00E5FF]/40"
              >
                <MessageCircle className="w-5 h-5 text-[#4ADE80]" />
                <span>Garantir Meu App Agora</span>
              </a>
            </div>
          </div>

          {/* Seção Depoimentos (4 depoimentos, sem tag) */}
          <div className="text-left mb-20 sm:mb-24">
            <div className="text-center mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-[#00E5FF]/10 text-[#0A0A0A] border border-[#0891B2]/30 mb-2">
                <Quote className="w-3.5 h-3.5 text-[#0891B2]" />
                <span>Histórias Reais</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-extrabold text-[#0A0A0A] tracking-tight">
                Depoimentos de confeiteiras que já adquiriram o app
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#84CC16] via-[#22C55E] to-[#00E5FF] mx-auto mt-2.5 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {/* Depoimento 1 */}
              <div className="p-5 sm:p-6 bg-white rounded-2xl border border-[#0A0A0A]/15 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex text-[#0891B2] gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#0891B2]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-[#0A0A0A]/80 italic leading-relaxed">
                    "Minha maior dificuldade quando comecei a vender era exatamente não ter um cardápio, eu não sabia nem como mandar as opções de sobremesas pro cliente escolher. Eu acredito que isso é o melhor investimento, e sei que isso vai me ajudar e muito"
                  </p>
                </div>
              </div>

              {/* Depoimento 2 */}
              <div className="p-5 sm:p-6 bg-white rounded-2xl border border-[#0A0A0A]/15 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex text-[#0891B2] gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#0891B2]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-[#0A0A0A]/80 italic leading-relaxed">
                    "Superou as minhas expectativas, já vendo doces e bolos há muitos anos, e meu sonho sempre foi ter um aplicativo para realizar as minhas vendas, e agora eu consegui realizar esse sonho através de você, parece que você entrou na minha cabeça e conseguiu pegar todos os pensamentos da maneira como deveria ser feito, muito obrigada!"
                  </p>
                </div>
              </div>

              {/* Depoimento 3 */}
              <div className="p-5 sm:p-6 bg-white rounded-2xl border border-[#0A0A0A]/15 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex text-[#0891B2] gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#0891B2]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-[#0A0A0A]/80 italic leading-relaxed">
                    "Eu tô encantada com o serviço de vocês, vocês estão de parabéns, eu tô apaixonada pelo aplicativo. É um trabalho muito bem feito, é muito capricho e realmente é tudo que a gente precisa, a falta de tempo e por a gente ser sozinha e não ter uma assessoria, ele vai ajudar muito. Tô encantada mesmo!"
                  </p>
                </div>
              </div>

              {/* Depoimento 4 */}
              <div className="p-5 sm:p-6 bg-white rounded-2xl border border-[#0A0A0A]/15 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex text-[#0891B2] gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#0891B2]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-[#0A0A0A]/80 italic leading-relaxed">
                    "Quero dizer que estou gostando muito da proposta do aplicativo, eu estou encantadíssima com o seu trabalho e achei muito legal a parceria que vocês fizeram. Inclusive, sou muito grata pela condição diferenciada que conseguimos por meio dessa parceria com a Gabi´s Sweets. 🥰 Uma grande oportunidade para quem está expandindo agora."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Seção Oferta Exclusiva e Botão de Ação */}
          <div id="investimento" className="text-left mb-20 sm:mb-24 scroll-mt-6">
            {/* Aviso de Escassez e Exclusividade */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0A0A0A] text-white border border-[#00E5FF]/40 shadow-lg flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-full bg-[#00E5FF]/15 border border-[#00E5FF]/40 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-[#00E5FF]" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#4ADE80]">
                  Oferta Exclusiva por Tempo Limitado
                </p>
                <p className="text-xs sm:text-sm text-white/95 leading-snug mt-0.5">
                  Condição especial válida <strong className="text-[#00E5FF]">somente até 20 de dezembro</strong> e exclusiva para <strong className="text-white">alunas e seguidores da Gabi´s Sweets</strong>. Após essa data, o valor retorna à tabela padrão da EASY BYZ.
                </p>
              </div>
            </div>

            {/* Botão de Ação para WhatsApp */}
            <div className="mt-8 text-center">
              <a
                href={WHATSAPP_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#0A0A0A] hover:bg-[#1a1a1a] text-white font-black text-base sm:text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all tracking-tight cursor-pointer border border-[#00E5FF]/40"
              >
                <MessageCircle className="w-5 h-5 text-[#4ADE80]" />
                <span>Garantir Meu App Agora</span>
              </a>
            </div>
          </div>

      </section>

      {/* Footer com Identidade EASY BYZ CREATOR */}
      <footer className="border-t border-[#00E5FF]/30 bg-[#0A0A0A] py-12 px-4 text-white text-center text-sm">
        <div className="max-w-5xl mx-auto space-y-6">
          
          {/* Logo EASY BYZ no Rodapé */}
          <div className="flex flex-col items-center justify-center gap-3">
            <span className="text-xs text-[#00E5FF] uppercase tracking-wider font-semibold">
              Desenvolvido & Comercializado por
            </span>
            <a 
              href="https://links-easybyzcreator.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block hover:opacity-90 transition-opacity"
              title="EASY BYZ CREATOR"
            >
              <img 
                src="https://i.ibb.co/Z6NS1m4D/ebcb.png" 
                alt="EASY BYZ CREATOR" 
                className="h-36 sm:h-44 w-auto object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

          <div className="space-y-1">
            <p className="font-extrabold text-base sm:text-lg text-white">
              EASY BYZ <span className="text-[#00E5FF]">CREATOR</span>
            </p>
            <p className="text-xs text-white/80 max-w-md mx-auto">
              Aplicativos personalizados sob medida para confeitarias e negócios criativos.
            </p>
          </div>
          
          {/* Botão de Dúvidas EASY BYZ (+1 803 888 9018) */}
          <div className="pt-2">
            <a 
              href={`https://wa.me/${EASYBYZ_WHATSAPP}?text=${encodeURIComponent(DEFAULT_SUPPORT_MSG)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-white hover:bg-white/95 text-[#0A0A0A] border border-[#00E5FF]/50 rounded-2xl sm:rounded-full text-center transition-all shadow-md hover:shadow-lg max-w-md mx-auto group"
            >
              <MessageCircle className="w-5 h-5 text-[#0891B2] shrink-0" />
              <div className="flex flex-col text-center">
                <span className="text-xs sm:text-sm font-semibold text-[#0A0A0A]/75 leading-tight">
                  Dúvidas sobre o aplicativo?
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-[#0A0A0A] leading-tight mt-0.5">
                  Falar com a Pati (Easy Byz) no WhatsApp
                </span>
              </div>
            </a>
          </div>

          <p className="text-[11px] text-white/60 pt-4">
            © 2026 EASY BYZ CREATOR. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
