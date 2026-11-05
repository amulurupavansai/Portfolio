// Renders /snapshot from the static export (out/) to public/pm-snapshot.pdf.
// Usage: npm run build && npm run snapshot   (needs Playwright + Chromium installed)
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { join, extname } from "node:path";
import { chromium } from "playwright";

const root = join(process.cwd(), "out");
const types = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".woff2": "font/woff2", ".png": "image/png", ".jpg": "image/jpeg" };
const server = createServer(async (req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  if (!extname(p)) p += p.endsWith("/") ? "index.html" : ".html";
  try { const b = await readFile(join(root, p)); res.writeHead(200, { "content-type": types[extname(p)] ?? "application/octet-stream" }); res.end(b); }
  catch { res.writeHead(404); res.end(); }
}).listen(0);
const port = server.address().port;
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(`http://localhost:${port}/snapshot`, { waitUntil: "networkidle" });
await page.pdf({ path: "public/pm-snapshot.pdf", format: "A4", printBackground: true });
await browser.close(); server.close();
console.log("wrote public/pm-snapshot.pdf");
