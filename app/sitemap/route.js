import { NextResponse } from "next/server";

export async function GET() {
  const sitemap = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://edelbyte.com.ar/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
    </urlset>
  `;
  return new NextResponse(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
