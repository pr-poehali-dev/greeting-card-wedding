const SEA_BG = "https://cdn.poehali.dev/projects/409cff44-b70b-4153-8bd9-c94af97605e7/files/dca3dc6d-ef46-4390-b370-04fd254e527d.jpg";

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
  { top: "6%", left: "8%", size: 18, opacity: 0.35, rotate: -15 },
  { top: "10%", right: "10%", size: 14, opacity: 0.28, rotate: 10 },
  { top: "18%", left: "4%", size: 10, opacity: 0.22, rotate: 5 },
  { top: "22%", right: "6%", size: 22, opacity: 0.3, rotate: -8 },
  { top: "78%", left: "6%", size: 16, opacity: 0.28, rotate: 12 },
  { top: "82%", right: "8%", size: 12, opacity: 0.25, rotate: -5 },
  { top: "88%", left: "14%", size: 20, opacity: 0.32, rotate: -18 },
  { top: "92%", right: "12%", size: 10, opacity: 0.22, rotate: 8 },
];

const flowers: FlowerItem[] = [
  { top: "3%", left: "50%", emoji: "🌸", size: 22, opacity: 0.55 },
  { top: "5%", left: "30%", emoji: "🌷", size: 18, opacity: 0.45 },
  { top: "4%", right: "28%", emoji: "🌸", size: 16, opacity: 0.4 },
  { bottom: "4%", left: "35%", emoji: "🌷", size: 20, opacity: 0.5 },
  { bottom: "3%", right: "30%", emoji: "🌸", size: 18, opacity: 0.45 },
  { bottom: "6%", left: "18%", emoji: "🌼", size: 14, opacity: 0.38 },
  { bottom: "5%", right: "16%", emoji: "🌷", size: 16, opacity: 0.4 },
];

export default function Index() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #f8e8ef 0%, #e8f4f8 40%, #d6eaf5 70%, #ead6ec 100%)",
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
          boxShadow: "0 32px 80px rgba(180,120,150,0.28), 0 4px 24px rgba(120,160,200,0.18)",
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

        {/* Soft overlay gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(255,230,235,0.52) 0%, rgba(255,220,230,0.18) 30%, rgba(200,230,245,0.12) 60%, rgba(230,200,230,0.55) 100%)",
          }}
        />

        {/* Top gradient vignette */}
        <div
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: "38%",
            background: "linear-gradient(180deg, rgba(255,235,242,0.72) 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Bottom gradient vignette */}
        <div
          style={{
            position: "absolute",
            bottom: 0, left: 0, right: 0,
            height: "38%",
            background: "linear-gradient(0deg, rgba(235,215,240,0.78) 0%, transparent 100%)",
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

        {/* Lace top border */}
        <div
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: 6,
            background: "linear-gradient(90deg, transparent 0%, rgba(255,180,200,0.6) 20%, rgba(255,200,220,0.8) 50%, rgba(255,180,200,0.6) 80%, transparent 100%)",
          }}
        />

        {/* Lace bottom border */}
        <div
          style={{
            position: "absolute",
            bottom: 0, left: 0, right: 0,
            height: 6,
            background: "linear-gradient(90deg, transparent 0%, rgba(200,160,220,0.6) 20%, rgba(210,170,230,0.8) 50%, rgba(200,160,220,0.6) 80%, transparent 100%)",
          }}
        />

        {/* Card frame border */}
        <div
          style={{
            position: "absolute",
            inset: 14,
            border: "1px solid rgba(255,200,220,0.45)",
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
            padding: "40px 32px",
            textAlign: "center",
          }}
        >
          {/* Top section */}
          <div>
            <div
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: 15,
                letterSpacing: "0.22em",
                color: "#c47a8a",
                textTransform: "uppercase",
                marginBottom: 8,
                opacity: 0.85,
              }}
            >
              с любовью
            </div>
            <div style={{ fontSize: 28, marginBottom: 4, opacity: 0.7 }}>❧</div>
          </div>

          {/* Center — main content */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 18 }}>
            {/* Big heart */}
            <div
              style={{
                fontSize: 42,
                color: "#d4728a",
                opacity: 0.75,
                lineHeight: 1,
                textShadow: "0 2px 12px rgba(212,114,138,0.3)",
              }}
            >
              ♥
            </div>

            {/* Main headline */}
            <div>
              <h1
                style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: 46,
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "#5a3a4a",
                  lineHeight: 1.15,
                  letterSpacing: "0.02em",
                  margin: 0,
                  textShadow: "0 2px 16px rgba(255,255,255,0.5)",
                }}
              >
                Ты моё
              </h1>
              <h1
                style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: 46,
                  fontWeight: 600,
                  color: "#c4607a",
                  lineHeight: 1.15,
                  letterSpacing: "0.02em",
                  margin: 0,
                  textShadow: "0 2px 16px rgba(255,255,255,0.5)",
                }}
              >
                море
              </h1>
            </div>

            {/* Divider */}
            <div
              style={{
                width: 60,
                height: 1,
                background: "linear-gradient(90deg, transparent, rgba(196,112,138,0.5), transparent)",
              }}
            />

            {/* Body text */}
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 17,
                fontWeight: 300,
                fontStyle: "italic",
                color: "#4a3040",
                lineHeight: 1.75,
                margin: 0,
                maxWidth: 280,
                opacity: 0.88,
                textShadow: "0 1px 8px rgba(255,255,255,0.6)",
              }}
            >
              Как волны возвращаются к берегу,<br />
              так и моё сердце<br />
              всегда возвращается к тебе.
            </p>

            {/* Small hearts row */}
            <div
              style={{
                display: "flex",
                gap: 10,
                color: "#d4728a",
                fontSize: 13,
                opacity: 0.55,
              }}
            >
              ♥ ♥ ♥
            </div>
          </div>

          {/* Bottom section */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <div style={{ fontSize: 22, opacity: 0.6 }}>❧</div>
            <div
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: 20,
                color: "#7a4a6a",
                opacity: 0.8,
                letterSpacing: "0.05em",
              }}
            >
              навсегда твой
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
