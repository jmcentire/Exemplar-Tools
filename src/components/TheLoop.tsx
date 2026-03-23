import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  AlertTriangle, CheckCircle2, Target, Cpu, Gauge,
} from "lucide-react";

/* ─── Utility: scroll-triggered fade-in ─── */
function A({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
}

const loopSteps = [
  { label: "Error in production", icon: AlertTriangle, color: "text-danger" },
  { label: "Sentinel attributes via PACT key", icon: Target, color: "text-governance" },
  { label: "Arbiter adjusts trust score", icon: Gauge, color: "text-governance" },
  { label: "Fixer agent spawns, patches code", icon: Cpu, color: "text-governance" },
  { label: "Contract tightened — bug class eliminated", icon: CheckCircle2, color: "text-governance" },
];

export default function TheLoop() {
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
