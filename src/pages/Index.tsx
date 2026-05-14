const SEA_BG = "https://cdn.poehali.dev/projects/409cff44-b70b-4153-8bd9-c94af97605e7/files/c928da13-4a0f-42b6-b6f1-6335c8ed0f48.jpg";

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

export default function Index() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #c8e6f0 0%, #a8d8ea 40%, #b8dff0 70%, #d0eef8 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 16px",
        fontFamily: "'Cormorant Garamond', serif",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 420,
          aspectRatio: "3/4",
          borderRadius: 28,
          overflow: "hidden",
          boxShadow: "0 32px 80px rgba(60,120,180,0.32), 0 4px 24px rgba(100,160,210,0.22)",
        }}
      >
        {/* Sea background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${SEA_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Light romantic overlay — чтобы текст читался */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(255,240,248,0.6) 0%, rgba(255,230,240,0.15) 35%, rgba(200,235,255,0.1) 60%, rgba(240,220,250,0.65) 100%)",
          }}
        />

        {/* Top vignette */}
        <div
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: "40%",
            background: "linear-gradient(180deg, rgba(255,240,250,0.82) 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Bottom vignette */}
        <div
          style={{
            position: "absolute",
            bottom: 0, left: 0, right: 0,
            height: "42%",
            background: "linear-gradient(0deg, rgba(240,220,255,0.88) 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Decorative hearts */}
        {hearts.map((h, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: h.top,
              left: h.left,
              right: h.right,
              bottom: h.bottom,
              fontSize: h.size,
              opacity: h.opacity,
              transform: `rotate(${h.rotate}deg)`,
              color: "#d4607a",
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            ♥
          </div>
        ))}

        {/* Decorative flowers */}
        {flowers.map((f, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: f.top,
              left: f.left,
              right: f.right,
              bottom: f.bottom,
              fontSize: f.size,
              opacity: f.opacity,
              pointerEvents: "none",
              userSelect: "none",
              transform: "translateX(-50%)",
            }}
          >
            {f.emoji}
          </div>
        ))}

        {/* Top shimmer border */}
        <div
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: 6,
            background: "linear-gradient(90deg, transparent 0%, rgba(255,180,200,0.7) 20%, rgba(255,210,230,0.9) 50%, rgba(255,180,200,0.7) 80%, transparent 100%)",
          }}
        />

        {/* Bottom shimmer border */}
        <div
          style={{
            position: "absolute",
            bottom: 0, left: 0, right: 0,
            height: 6,
            background: "linear-gradient(90deg, transparent 0%, rgba(180,150,220,0.7) 20%, rgba(210,170,240,0.9) 50%, rgba(180,150,220,0.7) 80%, transparent 100%)",
          }}
        />

        {/* Inner decorative frame */}
        <div
          style={{
            position: "absolute",
            inset: 14,
            border: "1px solid rgba(255,190,220,0.5)",
            borderRadius: 18,
            pointerEvents: "none",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "36px 28px",
            textAlign: "center",
          }}
        >
          {/* Top label */}
          <div>
            <div
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: 14,
                letterSpacing: "0.26em",
                color: "#b05070",
                textTransform: "uppercase",
                marginBottom: 6,
                opacity: 0.9,
              }}
            >
              с любовью и радостью
            </div>
            <div style={{ fontSize: 26, opacity: 0.65, color: "#c4607a" }}>❧</div>
          </div>

          {/* Center content */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>

            {/* Hearts trio */}
            <div style={{ fontSize: 32, color: "#d4607a", opacity: 0.8, letterSpacing: 8 }}>
              ♥ ♥ ♥
            </div>

            {/* Main title */}
            <div>
              <h1
                style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: 28,
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "#4a2838",
                  lineHeight: 1.2,
                  letterSpacing: "0.04em",
                  margin: "0 0 6px 0",
                  textShadow: "0 2px 20px rgba(255,255,255,0.7)",
                }}
              >
                Поздравляем с росписью,
              </h1>
              <h1
                style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: 48,
                  fontWeight: 700,
                  color: "#c4405a",
                  lineHeight: 1.1,
                  letterSpacing: "0.06em",
                  margin: 0,
                  textShadow: "0 3px 24px rgba(255,255,255,0.6), 0 1px 8px rgba(196,64,90,0.2)",
                  textTransform: "uppercase",
                }}
              >
                ЛЮБИМЫЕ!!!
              </h1>
            </div>

            {/* Names */}
            <div
              style={{
                fontFamily: "'Cormorant', serif",
                fontSize: 34,
                fontWeight: 600,
                fontStyle: "italic",
                color: "#3a2040",
                textShadow: "0 2px 18px rgba(255,255,255,0.75)",
                lineHeight: 1.2,
              }}
            >
              Ольга &amp; Иван
            </div>

            {/* Divider with hearts */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                width: "80%",
              }}
            >
              <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, rgba(196,96,122,0.4))" }} />
              <span style={{ color: "#d4607a", fontSize: 14, opacity: 0.7 }}>♥</span>
              <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(196,96,122,0.4), transparent)" }} />
            </div>

            {/* Body text */}
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 16,
                fontWeight: 300,
                fontStyle: "italic",
                color: "#3a2530",
                lineHeight: 1.8,
                margin: 0,
                maxWidth: 300,
                opacity: 0.9,
                textShadow: "0 1px 10px rgba(255,255,255,0.8)",
              }}
            >
              Пусть ваша любовь будет такой же бескрайней,<br />
              как это море — глубокой, светлой<br />
              и вечной.
            </p>
          </div>

          {/* Bottom signature */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <div style={{ fontSize: 20, opacity: 0.55, color: "#b05070" }}>❧</div>
            <div
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: 22,
                color: "#c4405a",
                fontWeight: 600,
                opacity: 0.9,
                letterSpacing: "0.06em",
              }}
            >
              16.05.2026
            </div>
            <div
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: 16,
                color: "#6a3858",
                opacity: 0.75,
                letterSpacing: "0.04em",
              }}
            >
              всегда вместе 🌊
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}