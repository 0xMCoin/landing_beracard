"use client";

import { useState, useEffect } from "react";
import { Button } from "../components/Button";
import {
  Check,
  X,
  CreditCard,
  Target,
  Zap,
  Globe,
  TrendingUp,
  Shield,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-b border-gray-300 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="BeraCard" className="h-auto w-40" />
          </div>
          <Button
            variant="outline"
            className="border-gray-500 text-gray-900 hover:bg-gray-100"
          >
            Entrar em Contato
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 bg-[url('/bg_home.png')] bg-cover bg-center min-h-screen relative">
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="absolute inset-0 -m-8 blur-lg bg-black/30 rounded-2xl"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <p className="text-sm font-medium text-white mb-6 uppercase tracking-wider">
              Construído nativamente na Berachain
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 leading-tight">
              O Banco Cripto
              <br />
              <span className="text-brand-blue">Completo</span>
            </h1>
            <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
              A primeira solução financeira completa construída nativamente
              sobre Berachain. Cartão internacional, investimentos automáticos e
              experiência bancária moderna.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brand-blue hover:bg-brand-blue/90 text-white"
              >
                Solicitar Cartão
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-500 text-gray-900 hover:bg-gray-100"
              >
                Saiba Mais
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6 bg-gray-50 relative">
        <Image
          src="/bear_2.png"
          alt="Problem"
          width={10000}
          height={10000}
          draggable={false}
          className="absolute bottom-0 right-14 w-[200px] h-[200px] md:w-[300px] md:h-[300px] object-contain"
        />
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              O Estado Atual dos Cartões Cripto
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Os cartões cripto atuais ainda funcionam como pré-pagos com
              conversão simples, sem oferecer funcionalidades de um banco
              moderno.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Falta de Ferramentas Financeiras",
                desc: "Sem metas de investimento, sem automações, sem planejamento financeiro real.",
              },
              {
                title: "Integração Web3 Superficial",
                desc: "Não utilizam staking e liquidez de forma nativa e eficiente.",
              },
              {
                title: "Experiência Difícil",
                desc: "Saldo exibido em tokens voláteis, sem abstração para moeda local.",
              },
              {
                title: "Depósitos Restritos",
                desc: "Limitados a poucas redes, sem suporte multi-chain verdadeiro.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 bg-white border border-gray-300 rounded-lg"
              >
                <div className="flex items-start gap-4">
                  <X className="text-error-9 size-5 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Nossa Visão
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Imaginamos uma experiência onde o cartão cripto funciona como um
              banco completo, simples, amigável e global.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CreditCard,
                title: "Saldo em Fiat Local",
                desc: "Exibe diretamente na moeda local, mesmo sendo custodiado em cripto",
              },
              {
                icon: Target,
                title: "Caixinhas de Investimento",
                desc: "Para objetivos reais: casa, carro, reserva de emergência, viagem",
              },
              {
                icon: TrendingUp,
                title: "Rendimento Real",
                desc: "Usa Infrared Finance + Proof-of-Liquidity para gerar rendimento",
              },
              {
                icon: Globe,
                title: "Multi-Chain Universal",
                desc: "Recebe crypto de qualquer rede via QR code estático com conversão automática",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-4 rounded-full bg-brand-blue/10 mb-4">
                  <item.icon className="size-6 text-brand-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6 bg-gray-50 relative">
        <Image
          src="/bear_1.png"
          alt="Solution"
          width={10000}
          height={10000}
          draggable={false}
          className="absolute top-1/2 -translate-y-1/2 left-14 w-[200px] h-[200px] md:w-[500px] md:h-[500px] object-contain"
        />
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              A Solução
            </h2>
            <p className="text-lg text-gray-500">
              Cartão Global + Infra Financeira Nativa da Berachain
            </p>
          </motion.div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {[
              {
                phase: "Fase 1",
                title: "Cartão Internacional com Saldo Abstrato em Fiat",
                desc: "Mesmo armazenado em HONEY/USDT/USDC, o usuário vê tudo na moeda local.",
              },
              {
                phase: "Fase 1",
                title: "Depósitos Rápidos pela Berachain",
                desc: "HONEY, USDT e USDC com conversão automática.",
              },
              {
                phase: "Fase 2",
                title: "Caixinhas com Investimento Automático",
                desc: "Objetivos personalizados com rendimento usando Infrared Finance + PoL.",
              },
              {
                phase: "Fase 3",
                title: "QR Code Multi-Chain para Recebimentos Universais",
                desc: "Aceita tokens de qualquer rede com bridging + swap + conversão automática para HONEY.",
              },
              {
                phase: "Futuro",
                title: "Sistema de Crédito Bancário Próprio",
                desc: "Limite dinâmico baseado em comportamento financeiro e métricas on-chain.",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex items-start gap-4 p-6 bg-white border border-gray-300 rounded-lg"
              >
                <Check className="size-5 text-brand-blue shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="text-xs font-semibold px-2 py-1 bg-brand-blue/10 text-brand-blue rounded">
                      {feature.phase}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Concorrentes vs. Nosso Produto
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Somos a primeira solução financeira completa construída
              nativamente sobre Berachain.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white border border-gray-300 rounded-lg">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-300">
                  <th className="text-left p-4 font-semibold text-gray-900">
                    Funcionalidade
                  </th>
                  <th className="text-center p-4 font-semibold text-gray-900">
                    Crypto.com
                  </th>
                  <th className="text-center p-4 font-semibold text-gray-900">
                    Binance Card
                  </th>
                  <th className="text-center p-4 font-semibold text-gray-900">
                    Bitpay
                  </th>
                  <th className="text-center p-4 font-semibold text-brand-blue bg-brand-blue/5">
                    BeraCard
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Cartão internacional", true, true, true, true],
                  ["Saldo exibido em fiat local", false, false, true, true],
                  [
                    "Depósitos multi-chain com QR estático",
                    false,
                    false,
                    false,
                    true,
                  ],
                  [
                    "Caixinhas/objetivos financeiros",
                    false,
                    false,
                    false,
                    true,
                  ],
                  ["Rendimento via Infrared + PoL", false, false, false, true],
                  ["Sistema de crédito próprio", false, false, false, "futuro"],
                  [
                    "Construído nativamente na Berachain",
                    false,
                    false,
                    false,
                    true,
                  ],
                  ["Experiência bancária completa", false, false, false, true],
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-gray-300 last:border-0"
                  >
                    <td className="p-4 font-medium text-gray-900">{row[0]}</td>
                    <td className="p-4 text-center">
                      {row[1] ? (
                        <Check className="size-5 text-green-9 mx-auto" />
                      ) : (
                        <X className="size-5 text-gray-500 mx-auto" />
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row[2] ? (
                        <Check className="size-5 text-green-9 mx-auto" />
                      ) : (
                        <X className="size-5 text-gray-500 mx-auto" />
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row[3] ? (
                        <Check className="size-5 text-green-9 mx-auto" />
                      ) : (
                        <X className="size-5 text-gray-500 mx-auto" />
                      )}
                    </td>
                    <td className="p-4 text-center bg-brand-blue/5">
                      {row[4] === true ? (
                        <Check className="size-5 text-brand-blue mx-auto" />
                      ) : row[4] === "futuro" ? (
                        <span className="text-xs font-semibold text-brand-blue px-2 py-1 bg-brand-blue/10 rounded">
                          Futuro
                        </span>
                      ) : (
                        <Check className="size-5 text-brand-blue mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-24 px-6 bg-gray-50 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Roadmap
            </h2>
            <p className="text-lg text-gray-500">
              Evolução planejada e uso estratégico do investimento
            </p>
          </motion.div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              {
                phase: "Fase 1",
                period: "Q1/Q2",
                title: "Cartão Internacional",
                items: [
                  "Depósitos em HONEY, USDT, USDC",
                  "Conversão automática para fiat",
                ],
              },
              {
                phase: "Fase 2",
                period: "Q2/Q3",
                title: "Caixinhas e Objetivos",
                items: [
                  "Integração com Infrared Finance",
                  "Staking automatizado via PoL",
                ],
              },
              {
                phase: "Fase 3",
                period: "Q3/Q4",
                title: "QR Code Multi-Chain",
                items: [
                  "Bridging + conversão universal",
                  "Ampliação de tokens e redes",
                ],
              },
              {
                phase: "Fase 4",
                period: "Q4/2025",
                title: "Expansão",
                items: [
                  "Cashback nativo",
                  "Cartões corporativos",
                  "Gestão financeira avançada",
                ],
              },
              {
                phase: "Fase 5",
                period: "2026",
                title: "Sistema de Crédito Bancário",
                items: [
                  "Limite dinâmico baseado em comportamento",
                  "Dados on-chain como score",
                  "Acesso a crédito dentro do ecossistema",
                  "Possível colateralização opcional",
                ],
              },
            ].map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 bg-white border border-gray-300 rounded-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-semibold px-3 py-1 bg-brand-blue/10 text-brand-blue rounded">
                    {phase.phase}
                  </span>
                  <span className="text-sm text-gray-500">{phase.period}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {phase.title}
                </h3>
                <ul className="space-y-2">
                  {phase.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex items-start gap-3 text-gray-500"
                    >
                      <Check className="size-4 text-brand-blue shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Usage */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Uso do Investimento
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                label: "Desenvolvimento Tecnológico",
                value: 40,
                desc: "App, backend, contratos, sistema de crédito, infra multi-chain",
              },
              {
                label: "Compliance e Licenças",
                value: 25,
                desc: "Compliance, emissora, licenças financeiras",
              },
              {
                label: "Liquidez e Reservas",
                value: 20,
                desc: "Liquidez e reservas operacionais",
              },
              {
                label: "Marketing e Comunidade",
                value: 15,
                desc: "Aquisição de usuários, marketing e comunidade",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-6 bg-white border border-gray-300 rounded-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.label}
                  </h3>
                  <span className="text-2xl font-bold text-brand-blue">
                    {item.value}%
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden mb-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="h-full bg-brand-blue rounded-full"
                  />
                </div>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center p-12 bg-white border border-gray-300 rounded-lg"
          >
            <div className="inline-flex p-4 rounded-full bg-brand-blue/10 mb-6">
              <Shield className="size-8 text-brand-blue" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Seja um dos Primeiros
            </h2>
            <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              Junte-se à revolução do banco cripto completo. Construído
              nativamente na{" "}
              <span className="text-brand-blue font-semibold">Berachain</span>{" "}
              para oferecer a melhor experiência financeira descentralizada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brand-blue hover:bg-brand-blue/90 text-white"
              >
                Solicitar Acesso Antecipado
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-500 text-gray-900 hover:bg-gray-100"
              >
                Entrar em Contato
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-300">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/images/logo.PNG" alt="BeraCard" className="h-8 w-8" />
              <span className="text-lg font-semibold text-gray-900">
                BeraCard
              </span>
            </div>
            <p className="text-sm text-gray-500 text-center">
              © 2024 BeraCard. Construído nativamente na Berachain.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
