import React from "react";
import { Mail, Link as LinkIcon } from "lucide-react";

// ── Platform brand colours ────────────────────────────────────────────────────
const BRAND: Record<string, string> = {
  linkedin:  "#0A66C2",
  x:         "#000000",
  facebook:  "#1877F2",
  whatsapp:  "#25D366",
  telegram:  "#27A7E7",
  instagram: "#E1306C",
  youtube:   "#FF0000",
  email:     "#C8A85A",
  copy:      "#C8A85A",
};

// ── Inline SVG icons ──────────────────────────────────────────────────────────
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.261 5.628 5.903-5.628zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.523 5.845L.057 23.428a.75.75 0 0 0 .921.921l5.584-1.466A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.502-5.232-1.38l-.374-.217-3.876 1.018 1.018-3.876-.217-.374A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

// ── Types ─────────────────────────────────────────────────────────────────────
interface ShareButton {
  id: string;
  label: string;
  icon: React.ReactNode;
  href?: (url: string, title: string) => string;
  action?: (url: string) => void;
}

// ── Component ─────────────────────────────────────────────────────────────────
export function SocialShare() {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const buttons: ShareButton[] = [
    {
      id: "linkedin",
      label: "Share on LinkedIn",
      icon: <LinkedInIcon />,
      href: (url) =>
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
    {
      id: "x",
      label: "Share on X",
      icon: <XIcon />,
      href: (url) =>
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,
    },
    {
      id: "facebook",
      label: "Share on Facebook",
      icon: <FacebookIcon />,
      href: (url) =>
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      id: "whatsapp",
      label: "Share on WhatsApp",
      icon: <WhatsAppIcon />,
      href: (url) => `https://wa.me/?text=${encodeURIComponent(url)}`,
    },
    {
      id: "telegram",
      label: "Share on Telegram",
      icon: <TelegramIcon />,
      href: (url) => `https://t.me/share/url?url=${encodeURIComponent(url)}`,
    },
    {
      id: "instagram",
      label: "Share on Instagram",
      icon: <InstagramIcon />,
      // Instagram has no web share API — opens profile as a soft CTA
      href: () => `https://www.instagram.com/`,
    },
    {
      id: "youtube",
      label: "Share on YouTube",
      icon: <YouTubeIcon />,
      href: () => `https://www.youtube.com/`,
    },
    {
      id: "email",
      label: "Share by Email",
      icon: <Mail size={15} />,
      href: (url, title) =>
        `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
    },
    {
      id: "copy",
      label: copied ? "Copied!" : "Copy link",
      icon: <LinkIcon size={15} />,
      action: handleCopy,
    },
  ];

  const url =
    typeof window !== "undefined" ? window.location.href : "";
  const title =
    typeof window !== "undefined" ? document.title : "NB Associates";

  return (
    <div className="border-b border-border">
      <div
        className="mx-auto max-w-3xl px-6 py-5 lg:px-10"
        style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}
      >
        {/* Label */}
        <span
          style={{
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--muted-foreground)",
            whiteSpace: "nowrap",
            marginRight: "0.25rem",
          }}
        >
          Share
        </span>

        {/* Gold divider */}
        <span
          style={{
            display: "inline-block",
            width: 1,
            height: 16,
            background: "var(--gold)",
            opacity: 0.4,
            flexShrink: 0,
          }}
        />

        {/* Buttons */}
        {buttons.map((btn) => {
          const isActive = btn.id === "copy" && copied;
          const brandColor = BRAND[btn.id] ?? "var(--gold)";

          const commonStyle: React.CSSProperties = {
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 34,
            height: 34,
            borderRadius: 3,
            border: isActive
              ? "1px solid var(--gold)"
              : "1px solid transparent",
            background: isActive
              ? "rgba(200,168,90, 0.08)"
              : "transparent",
            color: isActive ? "var(--gold)" : "var(--muted-foreground)",
            cursor: "pointer",
            transition:
              "color 0.18s, border-color 0.18s, background 0.18s, transform 0.15s, box-shadow 0.18s",
            flexShrink: 0,
            textDecoration: "none",
          };

          const hoverProps = {
            onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
              if (isActive) return;
              const el = e.currentTarget as HTMLElement;
              el.style.color = brandColor;
              el.style.borderColor = brandColor + "66"; // 40% alpha border
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = `0 4px 12px ${brandColor}30`;
            },
            onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
              if (isActive) return;
              const el = e.currentTarget as HTMLElement;
              el.style.color = "var(--muted-foreground)";
              el.style.borderColor = "transparent";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            },
          };

          if (btn.action) {
            return (
              <button
                key={btn.id}
                aria-label={btn.label}
                title={btn.label}
                onClick={() => btn.action!(url)}
                style={commonStyle}
                {...hoverProps}
              >
                {btn.icon}
              </button>
            );
          }

          return (
            <a
              key={btn.id}
              href={btn.href!(url, title)}
              aria-label={btn.label}
              title={btn.label}
              target="_blank"
              rel="noopener noreferrer"
              style={commonStyle}
              {...hoverProps}
            >
              {btn.icon}
            </a>
          );
        })}

        {/* Copy confirmation */}
        {copied && (
          <span
            style={{
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "var(--gold)",
              marginLeft: "0.25rem",
              animation: "fadeIn 0.2s ease",
            }}
          >
            Link copied
          </span>
        )}
      </div>
    </div>
  );
}
