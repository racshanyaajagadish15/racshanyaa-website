export default function GlowingDottedLine() {
  return (
    <>
      <div className="line-with-dots" />
      <style jsx>{`
        .line-with-dots {
          position: relative;
          height: 2px;
          background-color: white;
          margin: 0 auto;
          max-width: 100%;
        }
        .line-with-dots::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 2px;
          background-color: white;
          transform: translateY(-50%);
          z-index: 0;
        }
        /* dots container */
        .line-with-dots::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          transform: translateY(-50%);
          z-index: 1;
          pointer-events: none;
        }
        /* We can't put children in ::after, so use multiple box-shadows on a zero-width div */
      `}</style>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "0",
          right: "0",
          display: "flex",
          justifyContent: "space-between",
          transform: "translateY(-50%)",
          pointerEvents: "none",
          maxWidth: "100%",
          margin: "0 auto",
          width: "100%",
          padding: "0 10px",
          boxSizing: "border-box",
          zIndex: 1,
        }}
      >
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "white",
              boxShadow: "0 0 8px 2px rgba(255,255,255,0.8)",
            }}
          />
        ))}
      </div>
    </>
  )
}
