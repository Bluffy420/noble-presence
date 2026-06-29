import React from "react";

// ── Map embed URLs ─────────────────────────────────────────────────────────────
export const NEW_DELHI_MAP_URL =
  // Source: https://maps.app.goo.gl/s8U9iinmtcGPiwV49
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.687!2d77.21428699999999!3d28.6279027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b46b26f03%3A0x2e2f1a73de2e6f4!2sPrakash%20Deep%20Building%2C%20Tolstoy%20Marg%2C%20Barakhamba%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1750000000001!5m2!1sen!2sin";

export const CORPORATE_MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!4v1782633064747!6m8!1m7!1sJnn7bG-2gNMwp5Oulq22Wg!2m2!1d28.64246607765575!2d77.33512435061388!3f43.35121248935134!4f11.833760599795141!5f0.7820865974627469";

// ── Types ──────────────────────────────────────────────────────────────────────
type OfficeId = "newdelhi" | "corporate";

interface OfficeOption {
  id: OfficeId;
  label: string;
  mapSrc: string;
  mapTitle: string;
}

const OFFICES: OfficeOption[] = [
  {
    id: "newdelhi",
    label: "New Delhi Office",
    mapSrc: NEW_DELHI_MAP_URL,
    mapTitle: "New Delhi Office location",
  },
  {
    id: "corporate",
    label: "Corporate Office",
    mapSrc: CORPORATE_MAP_EMBED,
    mapTitle: "Corporate Office location",
  },
];

// ── Props ──────────────────────────────────────────────────────────────────────
interface OfficeMapProps {
  /**
   * "dark"  → navy background (homepage ConsultSection)
   * "light" → white/surface background (Contact page)
   */
  variant?: "dark" | "light";
  mapHeight?: string;
}

// ── Component ──────────────────────────────────────────────────────────────────
export function OfficeMap({ variant = "dark", mapHeight = "h-[380px] lg:h-[440px]" }: OfficeMapProps) {
  const [activeOffice, setActiveOffice] = React.useState<OfficeId>("newdelhi");

  const active = OFFICES.find((o) => o.id === activeOffice)!;

  const isDark = variant === "dark";

  return (
    <div className="flex flex-col gap-5">
      {/* ── Toggle buttons ─────────────────────────────────────── */}
      <div className="flex flex-wrap gap-3">
        {OFFICES.map(({ id, label }) => {
          const isActive = activeOffice === id;
          return (
            <button
              key={id}
              onClick={() => setActiveOffice(id)}
              className="inline-flex h-11 items-center justify-center px-6 text-[12px] font-semibold uppercase tracking-[0.16em] transition-all duration-200 focus:outline-none focus-visible:ring-2"
              style={
                isDark
                  ? {
                      background: isActive ? "var(--gold)" : "transparent",
                      color: isActive ? "#0a1628" : "rgba(255,255,255,0.7)",
                      border: isActive
                        ? "1px solid var(--gold)"
                        : "1px solid rgba(255,255,255,0.2)",
                      borderRadius: "2px",
                    }
                  : {
                      background: isActive ? "var(--navy)" : "transparent",
                      color: isActive ? "#ffffff" : "var(--navy)",
                      border: isActive
                        ? "1px solid var(--navy)"
                        : "1px solid var(--border)",
                      borderRadius: "2px",
                    }
              }
              onMouseEnter={(e) => {
                if (!isActive) {
                  if (isDark) {
                    e.currentTarget.style.borderColor = "var(--gold)";
                    e.currentTarget.style.color = "var(--gold)";
                  } else {
                    e.currentTarget.style.borderColor = "var(--navy)";
                    e.currentTarget.style.background = "var(--surface, #f5f5f0)";
                  }
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  if (isDark) {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                  } else {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.background = "transparent";
                  }
                }
              }}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* ── Map iframe ─────────────────────────────────────────── */}
      <div
        className={`${mapHeight} w-full overflow-hidden`}
        style={{
          border: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid var(--border)",
          borderRadius: "2px",
        }}
      >
        <iframe
          key={active.mapSrc}
          title={active.mapTitle}
          src={active.mapSrc}
          className="h-full w-full"
          style={{ filter: "grayscale(0.3) contrast(1.05)" }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  );
}
