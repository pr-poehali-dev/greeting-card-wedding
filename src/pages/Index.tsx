const OCEAN_BG = "https://cdn.poehali.dev/projects/409cff44-b70b-4153-8bd9-c94af97605e7/files/a07e1926-058d-46b1-93e1-3adbd16812b4.jpg";

export default function Index() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #0ea5e9 0%, #0284c7 40%, #0369a1 100%)",
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
          maxWidth: 440,
          borderRadius: 32,
          overflow: "hidden",
          boxShadow: "0 40px 100px rgba(3,105,161,0.5), 0 8px 32px rgba(0,0,0,0.3)",
        }}
      >
        {/* Ocean background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${OCEAN_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />

        {/* Top bright overlay — праздничный голубой */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(14,165,233,0.25) 0%, rgba(3,105,161,0.05) 40%, rgba(2,60,100,0.55) 70%, rgba(1,40,80,0.82) 100%)",
          }}
        />

        {/* Sparkle top border */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 8,
          background: "linear-gradient(90deg, transparent, #facc15, #ffffff, #facc15, transparent)",
          zIndex: 20,
        }} />
        {/* Sparkle bottom border */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 8,
          background: "linear-gradient(90deg, transparent, #facc15, #ffffff, #facc15, transparent)",
          zIndex: 20,
        }} />
        {/* Inner frame */}
        <div style={{
          position: "absolute", inset: 16,
          border: "1.5px solid rgba(255,220,80,0.4)",
          borderRadius: 22,
          pointerEvents: "none",
          zIndex: 15,
        }} />

        {/* Decorative corner stars */}
        {[
          { top: 22, left: 22 },
          { top: 22, right: 22 },
          { bottom: 22, left: 22 },
          { bottom: 22, right: 22 },
        ].map((pos, i) => (
          <div key={i} style={{ position: "absolute", ...pos, fontSize: 18, opacity: 0.7, zIndex: 16, pointerEvents: "none" }}>✦</div>
        ))}

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "52px 32px 44px",
            gap: 0,
          }}
        >
          {/* TOP — заголовок */}
          <div style={{ marginBottom: 20 }}>
            {/* Decorative line */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, justifyContent: "center" }}>
              <div style={{ width: 40, height: 1.5, background: "linear-gradient(90deg, transparent, #facc15)" }} />
              <span style={{ fontSize: 20, opacity: 0.85 }}>🌊</span>
              <div style={{ width: 40, height: 1.5, background: "linear-gradient(90deg, #facc15, transparent)" }} />
            </div>

            <h1
              style={{
                fontFamily: "'Cormorant', serif",
                fontSize: 38,
                fontWeight: 700,
                color: "#ff1a1a",
                lineHeight: 1.2,
                margin: "0 0 4px 0",
                letterSpacing: "0.02em",
                textShadow: "0 0 24px rgba(255,30,30,0.5), 0 3px 20px rgba(0,0,0,0.7)",
              }}
            >
              Поздравляем
            </h1>
            <h1
              style={{
                fontFamily: "'Cormorant', serif",
                fontSize: 30,
                fontWeight: 400,
                fontStyle: "italic",
                color: "#ff1a1a",
                lineHeight: 1.2,
                margin: "0 0 10px 0",
                letterSpacing: "0.02em",
                textShadow: "0 0 24px rgba(255,30,30,0.5), 0 3px 20px rgba(0,0,0,0.7)",
              }}
            >
              с росписью, родные!!
            </h1>

            {/* Hearts */}
            <div style={{ fontSize: 22, letterSpacing: 8, color: "#facc15", opacity: 0.9 }}>♥ ♥ ♥</div>
          </div>

          {/* MIDDLE — пространство для чайки на фото */}
          <div style={{ height: 160 }} />

          {/* BOTTOM — поздравление */}
          <div
            style={{
              background: "rgba(1,30,70,0.6)",
              backdropFilter: "blur(8px)",
              borderRadius: 20,
              padding: "24px 28px",
              width: "100%",
              border: "1px solid rgba(255,220,80,0.2)",
            }}
          >
            {/* Divider */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16, justifyContent: "center" }}>
              <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, rgba(250,204,21,0.5))" }} />
              <span style={{ color: "#facc15", fontSize: 16 }}>🕊️</span>
              <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(250,204,21,0.5), transparent)" }} />
            </div>

            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 17,
                fontWeight: 300,
                fontStyle: "italic",
                color: "#e0f4ff",
                lineHeight: 1.85,
                margin: "0 0 18px 0",
                textShadow: "0 1px 10px rgba(0,0,0,0.8)",
              }}
            >
              Пусть ваша жизнь вместе будет<br />
              яркой, как этот океан,<br />
              а любовь — такой же бескрайней<br />
              и глубокой, как морские просторы!
            </p>

            {/* Divider */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14, justifyContent: "center" }}>
              <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, rgba(250,204,21,0.4))" }} />
              <span style={{ color: "#facc15", fontSize: 13, opacity: 0.8 }}>✦</span>
              <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(250,204,21,0.4), transparent)" }} />
            </div>

            {/* Signature */}
            <div
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: 22,
                color: "#facc15",
                fontWeight: 600,
                letterSpacing: "0.04em",
                textShadow: "0 0 16px rgba(250,204,21,0.4)",
              }}
            >
              От Васиных — с любовью! 💛
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
