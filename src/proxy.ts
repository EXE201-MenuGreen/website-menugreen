import { NextResponse, type NextRequest } from "next/server";

const CANONICAL_HOSTS = new Set(["menugreen.food", "www.menugreen.food"]);

export async function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.toLowerCase() ?? "";

  // Bỏ qua dev / file nội bộ
  if (
    host.startsWith("localhost") ||
    host.startsWith("127.0.0.1") ||
    host.startsWith("0.0.0.0")
  ) {
    return NextResponse.next();
  }

  // Cho phép chính xác menugreen.food và www.menugreen.food
  // Vercel đã lo phần redirect apex <-> www, không can thiệp thêm ở đây.
  if (CANONICAL_HOSTS.has(host)) {
    return NextResponse.next();
  }

  // Mọi host khác (vd preview deploys, vercel.app, custom test domain) → redirect về apex
  const url = request.nextUrl.clone();
  url.host = "menugreen.food";
  url.protocol = "https:";
  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: [
    // Bỏ qua _next/* và file static (kể cả svg/ico)
    "/((?!_next/static|_next/image|favicon\\.ico|favicon\\.svg|robots\\.txt|sitemap\\.xml|og-image\\.svg|apple-touch-icon\\.svg|.*\\.(?:svg|png|jpg|jpeg|webp|ico|woff2?)$).*)",
  ],
};