import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    (<div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0d0c12", color: "#a99bff", fontSize: 40, fontWeight: 800 }}>A</div>),
    { width: 64, height: 64 }
  );
}
