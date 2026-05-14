import { useState } from "react";

const SEA_BG = "https://cdn.poehali.dev/projects/409cff44-b70b-4153-8bd9-c94af97605e7/files/ad049e9b-60b6-460a-a1d9-4e66445210c7.jpg";

interface HeartItem {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size: number;
  opacity: number;
  rotate: number;
}

interface FlowerItem {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  emoji: string;
  size: number;
  opacity: number;
}

interface Theme {
  label: string;
  accent: string;
  accentGlow: string;
  subtitle: string;
  names: string;
  body: string;
  date: string;
  tagline: string;
  heartColor: string;
  border: string;
  topBorder: string;
  bottomBorder: string;
  floral: string;
}

const themes: Theme[] = [
  {
    label: "Золото",
    accent: "#ffd060",
    accentGlow: "rgba(255,200,60,0.6)",
    subtitle: "#ffe090",
    names: "#fffbe0",
    body: "#f5e8b0",
    date: "#ffd060",
    tagline: "#f0d890",
    heartColor: "#ffd060",
    border: "rgba(255,200,80,0.45)",
    topBorder: "rgba(255,200,80,0.8)",
    bottomBorder: "rgba(255,180,60,0.8)",
    floral: "#f0c080",
  },
  {
    label: "Серебро",
    accent: "#d8eeff",
    accentGlow: "rgba(180,210,255,0.6)",
    subtitle: "#b8d8f8",
    names: "#e8f4ff",
    body: "#c0dcf5",
    date: "#90c8f0",
    tagline: "#a8cce8",
    heartColor: "#90c0e8",
    border: "rgba(160,200,240,0.5)",
    topBorder: "rgba(160,200,240,0.8)",
    bottomBorder: "rgba(120,170,220,0.8)",
    floral: "#a0c8e8",
  },
  {
    label: "Розовый",
    accent: "#ff90c0",
    accentGlow: "rgba(255,120,170,0.6)",
    subtitle: "#ffb8d8",
    names: "#ffe0ee",
    body: "#f8c8dc",
    date: "#ff80b8",
    tagline: "#f0a0c8",
    heartColor: "#ff70b0",
    border: "rgba(255,140,190,0.5)",
    topBorder: "rgba(255,140,190,0.8)",
    bottomBorder: "rgba(230,100,160,0.8)",
    floral: "#ff90c0",
  },
  {
    label: "Изумруд",
    accent: "#60f0b0",
    accentGlow: "rgba(60,220,140,0.6)",
    subtitle: "#80f0c0",
    names: "#e0fff4",
    body: "#a0ead8",
    date: "#40e0a0",
    tagline: "#70d8b8",
    heartColor: "#40e0a0",
    border: "rgba(60,200,130,0.5)",
    topBorder: "rgba(60,200,130,0.8)",
    bottomBorder: "rgba(40,170,110,0.8)",
    floral: "#60e0b0",
  },
  {
    label: "Огонь",
    accent: "#ff7040",
    accentGlow: "rgba(255,100,50,0.65)",
    subtitle: "#ffaa70",
    names: "#fff0e8",
    body: "#ffc898",
    date: "#ff6030",
    tagline: "#ffb080",
    heartColor: "#ff5030",
    border: "rgba(255,100,50,0.5)",
    topBorder: "rgba(255,120,60,0.8)",
    bottomBorder: "rgba(220,80,30,0.8)",
    floral: "#ff9050",
  },
];

const hearts: HeartItem[] = [
  { top: "6%", left: "8%", size: 18, opacity: 0.45, rotate: -15 },
  { top: "10%", right: "10%", size: 14, opacity: 0.38, rotate: 10 },
  { top: "18%", left: "4%", size: 10, opacity: 0.3, rotate: 5 },
  { top: "22%", right: "6%", size: 22, opacity: 0.4, rotate: -8 },
  { top: "78%", left: "6%", size: 16, opacity: 0.38, rotate: 12 },
  { top: "82%", right: "8%", size: 12, opacity: 0.32, rotate: -5 },
  { top: "88%", left: "14%", size: 20, opacity: 0.42, rotate: -18 },
  { top: "92%", right: "12%", size: 10, opacity: 0.28, rotate: 8 },
];

const flowers: FlowerItem[] = [
  { top: "3%", left: "50%", emoji: "🌸", size: 22, opacity: 0.65 },
  { top: "5%", left: "30%", emoji: "🌷", size: 18, opacity: 0.55 },
  { top: "4%", right: "28%", emoji: "🌸", size: 16, opacity: 0.5 },
  { bottom: "4%", left: "35%", emoji: "🌷", size: 20, opacity: 0.6 },
  { bottom: "3%", right: "30%", emoji: "🌸", size: 18, opacity: 0.55 },
  { bottom: "6%", left: "18%", emoji: "🌼", size: 14, opacity: 0.48 },
  { bottom: "5%", right: "16%", emoji: "🌷", size: 16, opacity: 0.5 },
];

function Card({ theme }: { theme: Theme }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 380,
        aspectRatio: "3/4",
        borderRadius: 28,
        overflow: "hidden",
        boxShadow: `0 32px 80px rgba(20,60,120,0.6), 0 0 60px ${theme.accentGlow}, 0 4px 24px rgba(0,0,0,0.5)`,
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${SEA_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.0) 45%, rgba(5,10,30,0.72) 75%, rgba(5,10,30,0.88) 100%)",
        }}
      />

      {hearts.map((h, i) => (
        <div key={i} style={{ position: "absolute", top: h.top, left: h.left, right: h.right, bottom: h.bottom, fontSize: h.size, opacity: h.opacity, transform: `rotate(${h.rotate}deg)`, color: theme.heartColor, pointerEvents: "none", userSelect: "none" }}>♥</div>
      ))}
      {flowers.map((f, i) => (
        <div key={i} style={{ position: "absolute", top: f.top, left: f.left, right: f.right, bottom: f.bottom, fontSize: f.size, opacity: f.opacity, pointerEvents: "none", userSelect: "none", transform: "translateX(-50%)" }}>{f.emoji}</div>
      ))}

      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 6, background: `linear-gradient(90deg, transparent 0%, ${theme.topBorder} 50%, transparent 100%)` }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 6, background: `linear-gradient(90deg, transparent 0%, ${theme.bottomBorder} 50%, transparent 100%)` }} />
      <div style={{ position: "absolute", inset: 14, border: `1px solid ${theme.border}`, borderRadius: 18, pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 10, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", padding: "0 28px 32px", textAlign: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, width: "100%" }}>

          <div style={{ fontSize: 24, color: theme.heartColor, opacity: 0.9, letterSpacing: 8 }}>♥ ♥ ♥</div>

          <div>
            <h1 style={{ fontFamily: "'Cormorant', serif", fontSize: 26, fontWeight: 400, fontStyle: "italic", color: "#ffd060", lineHeight: 1.2, letterSpacing: "0.04em", margin: "0 0 4px 0", textShadow: "0 0 20px rgba(255,200,60,0.5), 0 2px 20px rgba(0,0,0,0.8)", WebkitTextStroke: "1px #e02020" }}>
              Поздравляем с росписью,
            </h1>
            <h1 style={{ fontFamily: "'Cormorant', serif", fontSize: 46, fontWeight: 700, color: theme.accent, lineHeight: 1.1, letterSpacing: "0.06em", margin: 0, textShadow: `0 0 30px ${theme.accentGlow}, 0 3px 24px rgba(0,0,0,0.7)`, textTransform: "uppercase" }}>
              ЛЮБИМЫЕ!!!
            </h1>
          </div>

          <div style={{ fontFamily: "'Cormorant', serif", fontSize: 32, fontWeight: 600, fontStyle: "italic", color: theme.names, textShadow: "0 2px 20px rgba(0,0,0,0.9)", lineHeight: 1.2 }}>
            Ольга &amp; Иван
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10, width: "80%" }}>
            <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, transparent, ${theme.heartColor}66)` }} />
            <span style={{ color: theme.heartColor, fontSize: 14, opacity: 0.8 }}>♥</span>
            <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${theme.heartColor}66, transparent)` }} />
          </div>

          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 15, fontWeight: 300, fontStyle: "italic", color: theme.body, lineHeight: 1.75, margin: 0, opacity: 0.95, textShadow: "0 1px 12px rgba(0,0,0,0.9)" }}>
            Пусть ваша любовь будет такой же бескрайней,<br />
            как это море — глубокой, светлой и вечной.
          </p>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 21, color: theme.date, fontWeight: 600, opacity: 0.95, letterSpacing: "0.06em", textShadow: `0 0 16px ${theme.accentGlow}` }}>
              16.05.2026
            </div>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 15, color: theme.tagline, opacity: 0.8, letterSpacing: "0.04em" }}>
              всегда вместе 🌊
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function Index() {
  const [active, setActive] = useState(0);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #0a1628 0%, #0d2040 40%, #0a1830 70%, #12203a 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px 16px",
        gap: 32,
        fontFamily: "'Cormorant Garamond', serif",
      }}
    >
      {/* Theme switcher */}
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
        {themes.map((t, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              padding: "8px 22px",
              borderRadius: 40,
              border: `2px solid ${active === i ? t.accent : "rgba(255,255,255,0.2)"}`,
              background: active === i ? `${t.accent}22` : "rgba(255,255,255,0.06)",
              color: active === i ? t.accent : "rgba(255,255,255,0.5)",
              fontFamily: "'Caveat', cursive",
              fontSize: 17,
              cursor: "pointer",
              letterSpacing: "0.05em",
              transition: "all 0.25s",
              boxShadow: active === i ? `0 0 18px ${t.accentGlow}` : "none",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Cards row */}
      <div
        style={{
          display: "flex",
          gap: 24,
          alignItems: "flex-start",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
          maxWidth: 1260,
        }}
      >
        {themes.map((t, i) => (
          <div
            key={i}
            style={{
              width: "100%",
              maxWidth: 340,
              opacity: active === i ? 1 : 0.45,
              transform: active === i ? "scale(1.03)" : "scale(0.97)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onClick={() => setActive(i)}
          >
            <Card theme={t} />
            <div style={{ textAlign: "center", marginTop: 10, fontFamily: "'Caveat', cursive", fontSize: 18, color: t.accent, opacity: active === i ? 1 : 0.5, letterSpacing: "0.06em" }}>
              {t.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}