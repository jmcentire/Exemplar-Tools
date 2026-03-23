import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Shield, Brain, Eye, Lock, FileCheck,
  Database, BookOpen, Layers,
  ArrowRight, ChevronRight, ChevronDown, ExternalLink,
  AlertTriangle, CheckCircle2, Target, Cpu, Network, Workflow,
  Fingerprint, MessageSquare, FileText, Gauge, Map, Signal,
} from "lucide-react";

function GithubIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

/* ─── Utility ─── */
function A({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
}

/* ─── Navigation ─── */
function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#" className="font-mono text-sm font-medium text-foreground tracking-wider uppercase">
            exemplar
          </a>
          <div className="hidden sm:flex items-center gap-6">
            <a href="https://signet.tools" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-muted hover:text-signet transition-colors">signet</a>
            <a href="https://kindex.tools" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-muted hover:text-kindex transition-colors">kindex</a>
            <a href="https://perardua.dev" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-muted hover:text-foreground transition-colors">perardua</a>
          </div>
        </div>
        <a href="https://github.com/jmcentire" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
          <GithubIcon className="w-5 h-5" />
        </a>
      </div>
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  const stats = [
    { value: "15,000+", label: "tests" },
    { value: "18", label: "projects" },
    { value: "6", label: "languages" },
    { value: "40", label: "papers" },
  ];
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-14 overflow-hidden">
      {/* Grid texture */}
      <div className="absolute inset-0 grid-texture opacity-40" />
      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-radial from-white/[0.03] to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="mb-6">
          <span className="inline-flex items-center gap-2 font-mono text-xs text-muted border border-border rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-governance animate-pulse" />
            OPEN SOURCE
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6"
        >
          The engineering stack
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground/80 to-muted">
            that governs itself.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 font-light"
        >
          18 open-source projects. One closed loop. From constraint to code to production to tightened contract.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-20"
        >
          <a href="#pipeline" className="group flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium text-sm rounded-md hover:bg-foreground/90 transition-colors">
            Explore the Stack
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a href="https://github.com/jmcentire" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border border-border text-muted font-medium text-sm rounded-md hover:border-border-bright hover:text-foreground transition-colors">
            <GithubIcon className="w-4 h-4" />
            View on GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-8 sm:gap-12"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="text-center"
            >
              <p className="font-mono text-2xl sm:text-3xl font-medium text-foreground">{s.value}</p>
              <p className="font-mono text-xs text-muted uppercase tracking-wider mt-1">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

/* ─── Pipeline ─── */
const stages = [
  {
    id: "specify",
    label: "SPECIFY",
    color: "governance",
    projects: [
      { name: "Constrain", desc: "Interactive constraint elicitation. Interviews users to extract project boundaries." },
      { name: "Ledger", desc: "Schema registry and data obligation manager. Field-level classifications." },
    ],
  },
  {
    id: "build",
    label: "BUILD",
    color: "governance",
    projects: [
      { name: "Pact", desc: "Contract-first multi-agent framework. 10-phase pipeline, 1,814 tests." },
    ],
  },
  {
    id: "deploy",
    label: "DEPLOY",
    color: "governance",
    projects: [
      { name: "Baton", desc: "Cloud-agnostic circuit orchestration. Pre-wired topologies, canary promotion, self-healing. 804 tests." },
    ],
  },
  {
    id: "observe",
    label: "OBSERVE",
    color: "governance",
    projects: [
      { name: "Sentinel", desc: "Production attribution via PACT keys. Spawns LLM fixer agents." },
      { name: "Arbiter", desc: "Trust enforcement. Append-only ledger, blast-radius classification." },
      { name: "Kindex", desc: "Persistent knowledge graph. Shared memory for the entire agent ecosystem." },
    ],
  },
  {
    id: "tighten",
    label: "TIGHTEN",
    color: "governance",
    projects: [
      { name: "Pact", desc: "Tightened contracts pushed back from production. Bug classes become non-recurring." },
    ],
  },
];

function Pipeline() {
  const [active, setActive] = useState<string | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pipeline" className="py-32 relative" ref={ref}>
      <div className="absolute inset-0 grid-texture opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <A className="text-center mb-4">
          <span className="font-mono text-xs text-governance uppercase tracking-widest">The Pipeline</span>
        </A>
        <A className="text-center mb-6" delay={0.05}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Production drives specification forward
          </h2>
        </A>
        <A className="text-center mb-16" delay={0.1}>
          <p className="text-muted max-w-xl mx-auto">
            Not a waterfall. Not a cycle. A closed loop where every production incident tightens the contract that caused it.
          </p>
        </A>

        {/* Pipeline stages */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-[52px] left-[10%] right-[10%] h-px bg-border hidden lg:block" />
          {inView && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="absolute top-[52px] left-[10%] right-[10%] h-px bg-gradient-to-r from-governance/60 via-governance/40 to-governance/60 origin-left hidden lg:block"
            />
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {stages.map((stage, i) => {
              const isActive = active === stage.id;
              return (
                <A key={stage.id} delay={0.15 + i * 0.08}>
                  <button
                    onClick={() => setActive(isActive ? null : stage.id)}
                    className={`
                      w-full text-left rounded-lg border transition-all duration-300 group
                      ${isActive
                        ? "bg-card-hover border-governance/40 shadow-[0_0_30px_rgba(16,185,129,0.06)]"
                        : "bg-card border-border hover:border-border-bright hover:bg-card-hover"
                      }
                    `}
                  >
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`font-mono text-[11px] font-medium tracking-widest ${isActive ? "text-governance" : "text-muted"}`}>
                          {stage.label}
                        </span>
                        <span className={`font-mono text-[10px] text-dim`}>{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted">
                        {stage.projects.map((p) => (
                          <span key={p.name} className="bg-surface px-2 py-0.5 rounded font-mono text-[11px]">
                            {p.name}
                          </span>
                        ))}
                      </div>
                      <ChevronDown className={`w-3.5 h-3.5 text-dim mt-3 mx-auto transition-transform ${isActive ? "rotate-180 text-governance" : ""}`} />
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 border-t border-border">
                            {stage.projects.map((p) => (
                              <div key={p.name} className="mt-4">
                                <h4 className="text-sm font-semibold mb-1">{p.name}</h4>
                                <p className="text-xs text-muted leading-relaxed">{p.desc}</p>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>

                  {/* Arrow between stages (desktop) */}
                  {i < stages.length - 1 && (
                    <div className="hidden lg:flex justify-center mt-2">
                      <ChevronRight className="w-4 h-4 text-dim" />
                    </div>
                  )}
                </A>
              );
            })}
          </div>

          {/* Loop-back arrow */}
          <A delay={0.7}>
            <div className="flex items-center justify-center mt-8 gap-3">
              <div className="h-px flex-1 max-w-[200px] bg-gradient-to-r from-transparent to-governance/30" />
              <div className="flex items-center gap-2 font-mono text-[11px] text-governance/70 uppercase tracking-widest">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M12 4L4 4M4 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Closed Loop
              </div>
              <div className="h-px flex-1 max-w-[200px] bg-gradient-to-l from-transparent to-governance/30" />
            </div>
          </A>

          {/* Spanning layers */}
          <A delay={0.8}>
            <div className="mt-12 space-y-3">
              <div className="flex items-center gap-4 px-4 py-3 rounded-md border border-signet/20 bg-signet-dim">
                <Shield className="w-4 h-4 text-signet shrink-0" />
                <div className="flex-1">
                  <span className="font-mono text-[11px] text-signet uppercase tracking-widest">Trust Layer</span>
                  <span className="text-xs text-muted ml-3">Signet — cryptographic vault, ZK proofs, policy enforcement across every stage</span>
                </div>
                <a href="https://signet.tools" target="_blank" rel="noopener noreferrer" className="text-signet hover:text-signet/80 transition-colors">
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="flex items-center gap-4 px-4 py-3 rounded-md border border-kindex/20 bg-kindex-dim">
                <Brain className="w-4 h-4 text-kindex shrink-0" />
                <div className="flex-1">
                  <span className="font-mono text-[11px] text-kindex uppercase tracking-widest">Intelligence</span>
                  <span className="text-xs text-muted ml-3">Kindex — persistent knowledge graph feeding context to every stage</span>
                </div>
                <a href="https://kindex.tools" target="_blank" rel="noopener noreferrer" className="text-kindex hover:text-kindex/80 transition-colors">
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </A>
        </div>
      </div>
    </section>
  );
}

/* ─── The Loop ─── */
const loopSteps = [
  { label: "Error in production", icon: AlertTriangle, color: "text-danger" },
  { label: "Sentinel attributes via PACT key", icon: Target, color: "text-governance" },
  { label: "Arbiter adjusts trust score", icon: Gauge, color: "text-governance" },
  { label: "Fixer agent spawns, patches code", icon: Cpu, color: "text-governance" },
  { label: "Contract tightened — bug class eliminated", icon: CheckCircle2, color: "text-governance" },
];

function TheLoop() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative" ref={ref}>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <A className="text-center mb-4">
          <span className="font-mono text-xs text-governance uppercase tracking-widest">Self-Healing</span>
        </A>
        <A className="text-center mb-6" delay={0.05}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Every bug tightens the system
          </h2>
        </A>
        <A className="text-center mb-16" delay={0.1}>
          <p className="text-muted max-w-lg mx-auto">
            Production errors don't just get fixed. They generate contracts that make the entire class of bug non-recurring.
          </p>
        </A>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-8 left-[5%] right-[5%] h-px bg-border hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
            {loopSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                className="text-center relative"
              >
                <div className={`
                  w-16 h-16 mx-auto rounded-full border flex items-center justify-center mb-4
                  ${i === 0 ? "border-danger/30 bg-danger/[0.06]" : "border-governance/30 bg-governance-dim"}
                `}>
                  <step.icon className={`w-6 h-6 ${step.color}`} />
                </div>
                <p className="text-sm text-muted leading-snug font-light">{step.label}</p>
                <span className="font-mono text-[10px] text-dim mt-2 block">{String(i + 1).padStart(2, "0")}</span>
              </motion.div>
            ))}
          </div>

          {/* Loop-back */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex items-center justify-center mt-10"
          >
            <div className="flex items-center gap-2 font-mono text-[11px] text-muted/50 italic">
              <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="text-governance/40">
                <path d="M19 6H1M1 6L6 1M1 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              loops back to specification
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Project Cards ─── */
const pillars = [
  {
    name: "Trust & Privacy",
    color: "signet",
    colorClass: "text-signet",
    borderClass: "border-signet/20",
    bgClass: "bg-signet-dim",
    link: "https://signet.tools",
    projects: [
      { name: "Signet", desc: "Personal sovereign agent stack. Cryptographic vault, ZK proofs, Ed25519 identity.", lang: "Rust", tests: "473", icon: Lock, repo: "signet" },
      { name: "signet-eval", desc: "Deterministic policy enforcement for AI agent tool calls.", lang: "Rust", tests: "88", icon: Shield, repo: "signet-eval" },
      { name: "Agent-Safe", desc: "SPL authorization language. Six SDK implementations, ~2μs evaluation.", lang: "Multi", tests: "", icon: Fingerprint, repo: "agent-safe" },
      { name: "BlindDB", desc: "Client-side encryption. Relationships are uncomputable without the master secret.", lang: "HTML", tests: "", icon: Eye, repo: "BlindDB" },
      { name: "Tessera", desc: "Self-validating executable documents. Receipts, contracts, proofs that carry their own verification.", lang: "Rust", tests: "", icon: FileCheck, repo: "tessera" },
      { name: "HermesP2P", desc: "Decentralized ephemeral P2P messaging. No servers, no persistence.", lang: "JS", tests: "", icon: MessageSquare, repo: "HermesP2P" },
    ],
  },
  {
    name: "Intelligence",
    color: "kindex",
    colorClass: "text-kindex",
    borderClass: "border-kindex/20",
    bgClass: "bg-kindex-dim",
    link: "https://kindex.tools",
    projects: [
      { name: "Kindex", desc: "Persistent knowledge graph for AI-assisted workflows. 37 MCP tools, hybrid FTS5+graph search.", lang: "Python", tests: "930", icon: Brain, repo: "kindex" },
      { name: "Apprentice", desc: "Adaptive model distillation. Routes between frontier API and local fine-tuned model.", lang: "Python", tests: "2,628", icon: Cpu, repo: "apprentice" },
      { name: "Chronicler", desc: "Event collection and story assembly. Weaves operational events into narratives.", lang: "Python", tests: "", icon: BookOpen, repo: "chronicler" },
    ],
  },
  {
    name: "Governance",
    color: "governance",
    colorClass: "text-governance",
    borderClass: "border-governance/20",
    bgClass: "bg-governance-dim",
    link: null,
    projects: [
      { name: "Pact", desc: "Contract-first multi-agent software engineering. 10-phase pipeline.", lang: "Python", tests: "1,814", icon: FileText, repo: "pact" },
      { name: "Constrain", desc: "Interactive constraint elicitation. LLM interviews extract project boundaries.", lang: "Python", tests: "259", icon: Layers, repo: "constrain" },
      { name: "Baton", desc: "Cloud-agnostic circuit orchestration. Pre-wired topologies, self-healing.", lang: "Python", tests: "804", icon: Network, repo: "baton" },
      { name: "Arbiter", desc: "Trust enforcement. Append-only ledger, SHA-256 integrity, canary taint tracking.", lang: "Python", tests: "", icon: Gauge, repo: "arbiter" },
      { name: "Sentinel", desc: "Production attribution via PACT keys. Spawns LLM fixer agents.", lang: "Python", tests: "177", icon: Target, repo: "sentinel" },
      { name: "Ledger", desc: "Schema registry and data obligation manager. 12 backend types.", lang: "Python", tests: "276", icon: Database, repo: "ledger" },
      { name: "Cartographer", desc: "Stack adoption and compatibility scanner. Read-only invariant.", lang: "Python", tests: "", icon: Map, repo: "cartographer" },
      { name: "Stigmergy", desc: "Organizational awareness via indirect coordination signals.", lang: "Python", tests: "", icon: Signal, repo: "stigmergy" },
      { name: "Exemplar", desc: "Governed code review service. Demonstrates the entire stack with real integrations.", lang: "Python", tests: "1,950", icon: Workflow, repo: "exemplar" },
    ],
  },
];

const langColors: Record<string, string> = {
  Rust: "text-orange-400 bg-orange-400/10",
  Python: "text-blue-400 bg-blue-400/10",
  JS: "text-yellow-400 bg-yellow-400/10",
  HTML: "text-pink-400 bg-pink-400/10",
  Multi: "text-purple-400 bg-purple-400/10",
};

function ProjectCards() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute inset-0 grid-texture opacity-15" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <A className="text-center mb-4">
          <span className="font-mono text-xs text-muted uppercase tracking-widest">18 Projects</span>
        </A>
        <A className="text-center mb-16" delay={0.05}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            The complete stack
          </h2>
        </A>

        <div className="space-y-16">
          {pillars.map((pillar) => (
            <A key={pillar.name}>
              <div className="mb-6 flex items-center gap-3">
                <span className={`font-mono text-xs ${pillar.colorClass} uppercase tracking-widest`}>{pillar.name}</span>
                <div className={`h-px flex-1 ${pillar.borderClass.replace("/20", "/10")} bg-current opacity-20`} />
                {pillar.link && (
                  <a href={pillar.link} target="_blank" rel="noopener noreferrer" className={`font-mono text-[11px] ${pillar.colorClass} hover:underline flex items-center gap-1`}>
                    {pillar.link.replace("https://", "")}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {pillar.projects.map((p, i) => (
                  <A key={p.name} delay={i * 0.05}>
                    <a
                      href={`https://github.com/jmcentire/${p.repo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        block p-5 rounded-lg border bg-card hover:bg-card-hover transition-all duration-200 group
                        ${pillar.borderClass} hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5
                      `}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2.5">
                          <p.icon className={`w-4 h-4 ${pillar.colorClass} opacity-60`} />
                          <h3 className="text-sm font-semibold">{p.name}</h3>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-dim opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-xs text-muted leading-relaxed mb-3">{p.desc}</p>
                      <div className="flex items-center gap-2">
                        <span className={`font-mono text-[10px] px-2 py-0.5 rounded ${langColors[p.lang] || "text-muted bg-surface"}`}>{p.lang}</span>
                        {p.tests && (
                          <span className="font-mono text-[10px] text-dim">{p.tests} tests</span>
                        )}
                      </div>
                    </a>
                  </A>
                ))}
              </div>
            </A>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Research ─── */
const papers = [
  { title: "Organizational Physics of Multi-Agent AI", series: "OT-4", desc: "Substrate-independent organizational dysfunction in AI agent teams.", href: "https://perardua.dev/research/ot-4" },
  { title: "Ambient Structure Discovery", series: "OT-5", desc: "Stigmergic mesh coordination without centralized control.", href: "https://perardua.dev/research/ot-5" },
  { title: "Emergence", series: "OT-6", desc: "Programming paradigm for constraint-shaped agency.", href: "https://perardua.dev/research/ot-6" },
  { title: "Structural Compression Theory", series: "Monograph", desc: "Unified information-theoretic account across all 40 papers.", href: "https://perardua.dev/books" },
];

function Research() {
  return (
    <section className="py-32 relative">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <A className="text-center mb-4">
          <span className="font-mono text-xs text-muted uppercase tracking-widest">Research Foundation</span>
        </A>
        <A className="text-center mb-16" delay={0.05}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Built on 40 papers and 7 books
          </h2>
        </A>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {papers.map((p, i) => (
            <A key={p.title} delay={i * 0.08}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-lg border border-border bg-card hover:bg-card-hover hover:border-border-bright transition-all group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-[10px] text-muted bg-surface px-2 py-0.5 rounded">{p.series}</span>
                </div>
                <h3 className="text-sm font-semibold mb-2 group-hover:text-foreground transition-colors">{p.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{p.desc}</p>
                <span className="inline-flex items-center gap-1 mt-3 font-mono text-[11px] text-muted group-hover:text-foreground transition-colors">
                  Read on perardua.dev <ExternalLink className="w-3 h-3" />
                </span>
              </a>
            </A>
          ))}
        </div>

        <A delay={0.4} className="text-center">
          <a href="https://perardua.dev/research" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-sm text-muted hover:text-foreground transition-colors">
            Read all 40 papers <ArrowRight className="w-4 h-4" />
          </a>
        </A>
      </div>
    </section>
  );
}

/* ─── Get Started ─── */
const roles = [
  {
    icon: Cpu,
    role: "I build AI agents",
    projects: "signet-eval + Pact",
    desc: "Policy enforcement for safe tool use. Contract-first development that generates tests before code.",
    links: [
      { label: "signet.tools", href: "https://signet.tools" },
      { label: "Pact on GitHub", href: "https://github.com/jmcentire/pact" },
    ],
  },
  {
    icon: Brain,
    role: "I want my AI to remember",
    projects: "Kindex",
    desc: "Persistent knowledge graph with 37 MCP tools. Your AI never starts a session blind again.",
    links: [
      { label: "kindex.tools", href: "https://kindex.tools" },
    ],
  },
  {
    icon: Lock,
    role: "I want privacy-first infrastructure",
    projects: "Signet",
    desc: "Cryptographic vault with ZK proofs. Prove things about yourself without revealing yourself.",
    links: [
      { label: "signet.tools", href: "https://signet.tools" },
    ],
  },
  {
    icon: Network,
    role: "I want governed deployments",
    projects: "Baton + Arbiter",
    desc: "Circuit orchestration with trust enforcement. Self-healing topologies with blast-radius classification.",
    links: [
      { label: "Baton", href: "https://github.com/jmcentire/baton" },
      { label: "Arbiter", href: "https://github.com/jmcentire/arbiter" },
    ],
  },
];

function GetStarted() {
  return (
    <section id="start" className="py-32 relative">
      <div className="absolute inset-0 grid-texture opacity-10" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <A className="text-center mb-4">
          <span className="font-mono text-xs text-muted uppercase tracking-widest">Get Started</span>
        </A>
        <A className="text-center mb-16" delay={0.05}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Where do you begin?
          </h2>
        </A>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {roles.map((r, i) => (
            <A key={r.role} delay={i * 0.08}>
              <div className="p-6 rounded-lg border border-border bg-card hover:bg-card-hover transition-all h-full flex flex-col">
                <r.icon className="w-8 h-8 text-muted mb-4" />
                <h3 className="text-lg font-semibold mb-1">{r.role}</h3>
                <p className="font-mono text-xs text-governance mb-3">{r.projects}</p>
                <p className="text-sm text-muted leading-relaxed flex-1">{r.desc}</p>
                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-border">
                  {r.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-foreground transition-colors"
                    >
                      {l.label} <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>
            </A>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-mono text-[11px] text-muted uppercase tracking-widest mb-4">Sites</h4>
            <div className="space-y-2.5">
              <a href="https://exemplar.tools" className="block text-sm text-muted hover:text-foreground transition-colors">exemplar.tools</a>
              <a href="https://signet.tools" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted hover:text-signet transition-colors">signet.tools</a>
              <a href="https://kindex.tools" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted hover:text-kindex transition-colors">kindex.tools</a>
              <a href="https://perardua.dev" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted hover:text-foreground transition-colors">perardua.dev</a>
            </div>
          </div>
          <div>
            <h4 className="font-mono text-[11px] text-muted uppercase tracking-widest mb-4">Key Projects</h4>
            <div className="space-y-2.5">
              {["signet", "pact", "kindex", "baton", "exemplar"].map((p) => (
                <a key={p} href={`https://github.com/jmcentire/${p}`} target="_blank" rel="noopener noreferrer" className="block text-sm text-muted hover:text-foreground transition-colors capitalize">{p}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-mono text-[11px] text-muted uppercase tracking-widest mb-4">Research</h4>
            <div className="space-y-2.5">
              <a href="https://perardua.dev/research" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted hover:text-foreground transition-colors">Papers</a>
              <a href="https://perardua.dev/essays" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted hover:text-foreground transition-colors">Essays</a>
              <a href="https://perardua.dev/books" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted hover:text-foreground transition-colors">Books</a>
            </div>
          </div>
          <div>
            <h4 className="font-mono text-[11px] text-muted uppercase tracking-widest mb-4">Author</h4>
            <div className="space-y-2.5">
              <span className="block text-sm text-foreground">Jeremy McEntire</span>
              <a href="https://perardua.dev" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted hover:text-foreground transition-colors">perardua.dev</a>
              <a href="https://github.com/jmcentire" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted hover:text-foreground transition-colors">GitHub</a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-8 border-t border-border">
          <span className="font-mono text-[11px] text-dim">MIT License</span>
          <span className="font-mono text-[11px] text-dim">exemplar.tools</span>
        </div>
      </div>
    </footer>
  );
}

/* ─── App ─── */
export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Pipeline />
      <TheLoop />
      <ProjectCards />
      <Research />
      <GetStarted />
      <Footer />
    </>
  );
}
