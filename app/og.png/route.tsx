import { ImageResponse } from "next/og";
import { site, hero } from "@/data/content";

// Auto-generated Open Graph image (1200x630), rendered at build time.
// Served at /og.png so the file has a real extension on static hosts.
export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0d0c12", color: "#f1efe9", padding: 72 }}>
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 2, color: "#a99bff" }}>PORTFOLIO</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 104, fontWeight: 800, letterSpacing: -4, lineHeight: 1 }}>{site.name}</div>
          <div style={{ display: "flex", fontSize: 40, marginTop: 28, color: "#c9c6d6" }}>{hero.headline}</div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#a99bff" }}>Payroll · HR-Tech · Product</div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
