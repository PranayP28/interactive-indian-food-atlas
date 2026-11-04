import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Users, Sparkles, GraduationCap, UtensilsCrossed } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export interface TeamMember {
  name: string;
  rollNo: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  { name: "K . Bhavik", rollNo: "25BCS063" },
  { name: "G.Ashwini", rollNo: "25BCS045" },
  { name: "B . Sai Pragna", rollNo: "25BCS028" },
  { name: "P . Prasanth", rollNo: "25BCS110" },
  { name: "P . Pranay", rollNo: "25BCS109" },
  { name: "K. Ashwitha", rollNo: "25BDA055" },
];

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AboutModal({ isOpen, onClose }: AboutModalProps) {
  const { isLight } = useTheme();

  // Handle escape key to close modal
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="about-modal-title"
          className={`fixed inset-0 z-[100] backdrop-blur-md flex items-center justify-center p-4 ${
            isLight ? "bg-slate-900/40" : "bg-black/80"
          }`}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className={`border rounded-3xl max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden ${
              isLight
                ? "bg-[#faf8f5] border-amber-900/15 text-slate-800"
                : "bg-slate-900 border-amber-600/40 text-slate-100"
            }`}
          >
            {/* Modal Header */}
            <div
              className={`p-5 sm:p-6 border-b flex items-center justify-between ${
                isLight ? "bg-amber-50/80 border-amber-900/15" : "bg-slate-950/60 border-slate-800"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-950/40 ring-1 ring-orange-300/30">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2
                    id="about-modal-title"
                    className="text-lg font-black tracking-tight flex items-center gap-2"
                  >
                    <span>About Our Team</span>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                        isLight
                          ? "bg-amber-100 text-amber-900 border-amber-300"
                          : "bg-amber-500/20 text-amber-300 border-amber-400/30"
                      }`}
                    >
                      Project Team
                    </span>
                  </h2>
                  <p
                    className={`text-xs mt-0.5 ${
                      isLight ? "text-amber-900/80" : "text-amber-300/80"
                    }`}
                  >
                    Digital Food Atlas of India
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close About dialog"
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  isLight
                    ? "bg-amber-100 hover:bg-amber-200 text-slate-700"
                    : "bg-slate-800 hover:bg-slate-700 text-slate-300"
                }`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-5 scrollbar-thin">
              {/* Project Intro */}
              <div
                className={`p-4 rounded-2xl border text-xs leading-relaxed flex items-start gap-3 ${
                  isLight
                    ? "bg-gradient-to-br from-amber-50/80 to-orange-50/50 border-amber-200/80 text-amber-950"
                    : "bg-gradient-to-br from-slate-950/60 to-amber-950/20 border-amber-900/30 text-amber-200/90"
                }`}
              >
                <UtensilsCrossed className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <p>
                  Welcome to the <strong>Digital Food Atlas of India</strong>, an interactive
                  3D culinary museum showcasing the chronological evolution and regional heritage
                  of India's gastronomic treasures.
                </p>
              </div>

              {/* Team Members List */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3
                    className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                      isLight ? "text-slate-700" : "text-slate-300"
                    }`}
                  >
                    <GraduationCap className="w-4 h-4 text-amber-500" />
                    <span>Team Members</span>
                  </h3>
                  <span
                    className={`text-[11px] font-medium ${
                      isLight ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    {TEAM_MEMBERS.length} Contributors
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {TEAM_MEMBERS.map((member) => (
                    <div
                      key={member.rollNo}
                      className={`p-3.5 rounded-2xl border transition-all duration-200 flex items-center gap-3.5 group ${
                        isLight
                          ? "bg-white border-amber-900/10 hover:border-amber-400 hover:shadow-md hover:shadow-amber-950/5"
                          : "bg-slate-800/60 border-slate-750 hover:border-amber-500/50 hover:bg-slate-800"
                      }`}
                    >
                      {/* Avatar with Initials */}
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-amber-600/30 border border-amber-400/30 flex items-center justify-center font-bold text-amber-500 text-xs shrink-0 group-hover:scale-105 transition-transform">
                        {member.name
                          .replace(/[.\s]+/g, " ")
                          .trim()
                          .split(" ")
                          .slice(0, 2)
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()}
                      </div>

                      {/* Name & Roll No */}
                      <div className="min-w-0 flex-1">
                        <div className="font-bold text-sm truncate tracking-tight">
                          {member.name}
                        </div>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span
                            className={`inline-block font-mono text-[11px] font-semibold px-2 py-0.5 rounded-md border ${
                              isLight
                                ? "bg-amber-50 text-amber-900 border-amber-200"
                                : "bg-slate-900 text-amber-400 border-amber-500/30"
                            }`}
                          >
                            {member.rollNo}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div
              className={`p-4 sm:p-5 border-t flex items-center justify-between gap-3 ${
                isLight ? "bg-amber-50/50 border-amber-900/15" : "bg-slate-950/40 border-slate-800"
              }`}
            >
              <div className="flex items-center gap-1.5 text-[11px] text-amber-500 font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive Indian Food Atlas</span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-bold text-xs transition-all shadow-md active:scale-95"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
