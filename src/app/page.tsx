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
            <img
              src="/logo.png"
              alt="Berabank"
              className="h-auto w-32 sm:w-36 md:w-40"
            />
          </div>
          <Button
            variant="outline"
            className="border-gray-500 text-gray-900 hover:bg-gray-100"
          >
            Get in Touch
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-32 px-6 bg-[url('/bg_home.png')] bg-cover bg-center min-h-screen relative flex flex-col justify-center">
        {/* Fade to bottom section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-50"></div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="absolute inset-0 -m-8 blur-2xl bg-black/30 rounded-2xl"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 leading-tight">
              The Complete
              <br />
              <span className="text-yellow-600">Crypto Bank</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6 bg-gray-50 relative">
        <Image
          src="/bear_2.png"
          alt="Problem illustration"
          width={400}
          height={400}
          draggable={false}
          className="absolute hidden md:block -bottom-20 right-4 w-48 h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 2xl:w-80 2xl:h-80 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 z-0"
        />
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 relative z-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Current State of Crypto Cards
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Current crypto cards still work like prepaid cards with simple
              conversion, without offering modern banking functionalities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Lack of Financial Tools",
                desc: "No investment goals, no automations, no real financial planning.",
              },
              {
                title: "Superficial Web3 Integration",
                desc: "They don't use staking and liquidity in a native and efficient way.",
              },
              {
                title: "Difficult Experience",
                desc: "Balance displayed in volatile tokens, without local currency abstraction.",
              },
              {
                title: "Restricted Deposits",
                desc: "Limited to few networks, without true multi-chain support.",
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
              Our Vision
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              We imagine an experience where the crypto card works like a
              complete bank, simple, friendly and global.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CreditCard,
                title: "Local Fiat Balance",
                desc: "Displays directly in local currency, even when custodied in crypto",
              },
              {
                icon: Target,
                title: "Investment Piggy Banks",
                desc: "For real goals: house, car, emergency fund, travel",
              },
              {
                icon: TrendingUp,
                title: "Real Yield",
                desc: "Uses Infrared Finance + Proof-of-Liquidity to generate yield",
              },
              {
                icon: Globe,
                title: "Universal Multi-Chain",
                desc: "Receives crypto from any network via static QR code with automatic conversion",
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
          alt="Solution illustration"
          width={600}
          height={600}
          draggable={false}
          className="absolute hidden lg:block top-0 -left-8 w-72 h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 object-contain hover:opacity-90 transition-opacity duration-300 z-0"
        />
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 relative z-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              The Solution
            </h2>
            <p className="text-lg text-gray-500">
              Global Card + Native Berachain Financial Infrastructure
            </p>
          </motion.div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {[
              {
                phase: "Phase 1",
                title: "International Card with Abstract Fiat Balance",
                desc: "Even stored in HONEY/USDT/USDC, user sees everything in local currency.",
              },
              {
                phase: "Phase 1",
                title: "Fast Deposits via Berachain",
                desc: "HONEY, USDT and USDC with automatic conversion.",
              },
              {
                phase: "Phase 2",
                title: "Piggy Banks with Automatic Investment",
                desc: "Personalized goals with yield using Infrared Finance + PoL.",
              },
              {
                phase: "Phase 3",
                title: "Multi-Chain QR Code for Universal Payments",
                desc: "Accepts tokens from any network with bridging + swap + automatic conversion to HONEY.",
              },
              {
                phase: "Future",
                title: "Own Banking Credit System",
                desc: "Dynamic limit based on financial behavior and on-chain metrics.",
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
              Competitors vs. Our Product
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              We are the first complete financial solution built natively on
              Berachain.
            </p>
          </motion.div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse bg-white border border-gray-300 rounded-lg">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-300">
                  <th className="text-left p-4 font-semibold text-gray-900">
                    Feature
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
                  ["International card", true, true, true, true],
                  ["Balance displayed in local fiat", false, false, true, true],
                  [
                    "Multi-chain deposits with static QR",
                    false,
                    false,
                    false,
                    true,
                  ],
                  ["Piggy banks/financial goals", false, false, false, true],
                  ["Yield via Infrared + PoL", false, false, false, true],
                  ["Own credit system", false, false, false, "future"],
                  ["Built natively on Berachain", false, false, false, true],
                  ["Complete banking experience", false, false, false, true],
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
                          Future
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

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {[
              ["International card", true, true, true, true],
              ["Balance displayed in local fiat", false, false, true, true],
              [
                "Multi-chain deposits with static QR",
                false,
                false,
                false,
                true,
              ],
              ["Piggy banks/financial goals", false, false, false, true],
              ["Yield via Infrared + PoL", false, false, false, true],
              ["Own credit system", false, false, false, "future"],
              ["Built natively on Berachain", false, false, false, true],
              ["Complete banking experience", false, false, false, true],
            ].map((row, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white border border-gray-300 rounded-lg p-4"
              >
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                  {row[0]}
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">Crypto.com</div>
                    {row[1] ? (
                      <Check className="size-4 text-green-9 mx-auto" />
                    ) : (
                      <X className="size-4 text-gray-500 mx-auto" />
                    )}
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">Binance</div>
                    {row[2] ? (
                      <Check className="size-4 text-green-9 mx-auto" />
                    ) : (
                      <X className="size-4 text-gray-500 mx-auto" />
                    )}
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">Bitpay</div>
                    {row[3] ? (
                      <Check className="size-4 text-green-9 mx-auto" />
                    ) : (
                      <X className="size-4 text-gray-500 mx-auto" />
                    )}
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1 text-brand-blue font-semibold">
                      BeraCard
                    </div>
                    {row[4] === true ? (
                      <Check className="size-4 text-brand-blue mx-auto" />
                    ) : row[4] === "future" ? (
                      <span className="text-xs font-semibold text-brand-blue px-1 py-0.5 bg-brand-blue/10 rounded">
                        Future
                      </span>
                    ) : (
                      <Check className="size-4 text-brand-blue mx-auto" />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
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
              Planned evolution and strategic use of investment
            </p>
          </motion.div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              {
                phase: "Phase 1",
                period: "Q1/Q2",
                title: "International Card",
                items: [
                  "Deposits in HONEY, USDT, USDC",
                  "Automatic conversion to fiat",
                ],
              },
              {
                phase: "Phase 2",
                period: "Q2/Q3",
                title: "Piggy Banks and Goals",
                items: [
                  "Integration with Infrared Finance",
                  "Automated staking via PoL",
                ],
              },
              {
                phase: "Phase 3",
                period: "Q3/Q4",
                title: "Multi-Chain QR Code",
                items: [
                  "Bridging + universal conversion",
                  "Expansion of tokens and networks",
                ],
              },
              {
                phase: "Phase 4",
                period: "Q4/2025",
                title: "Expansion",
                items: [
                  "Native cashback",
                  "Corporate cards",
                  "Advanced financial management",
                ],
              },
              {
                phase: "Phase 5",
                period: "2026",
                title: "Banking Credit System",
                items: [
                  "Dynamic limit based on behavior",
                  "On-chain data as score",
                  "Credit access within ecosystem",
                  "Optional collateralization",
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
              Investment Usage
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                label: "Technology Development",
                value: 40,
                desc: "App, backend, contracts, credit system, multi-chain infrastructure",
              },
              {
                label: "Compliance and Licenses",
                value: 25,
                desc: "Compliance, issuer, financial licenses",
              },
              {
                label: "Liquidity and Reserves",
                value: 20,
                desc: "Liquidity and operational reserves",
              },
              {
                label: "Marketing and Community",
                value: 15,
                desc: "User acquisition, marketing and community",
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
              Be Among the First
            </h2>
            <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join the complete crypto banking revolution. Built natively on{" "}
              <span className="text-brand-blue font-semibold">Berachain</span>{" "}
              to offer the best decentralized financial experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brand-blue hover:bg-brand-blue/90 text-white"
              >
                Request Early Access
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-500 text-gray-900 hover:bg-gray-100"
              >
                Get in Touch
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
              <img
                src="/logo.png"
                alt="Berabank"
                className="h-auto w-32 sm:w-36 md:w-40"
              />
            </div>
            <p className="text-sm text-gray-500 text-center">
              © 2025 Berabank. Built natively on Berachain.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
