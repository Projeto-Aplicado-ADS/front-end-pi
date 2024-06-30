import { NextResponse } from "next/server";

const PUBLIC_PATHS = ["/login", "/singup"];

function redirectToHome(request) {
  const url = request.nextUrl.clone();
  url.pathname = "/";
  url.search = "";
  return NextResponse.redirect(url);
}

function redirectToLogin(request) {
  if (PUBLIC_PATHS.some((path) => request.nextUrl.pathname.startsWith(path))) {
    return NextResponse.next();
  }
  const url = request.nextUrl.clone();
  url.pathname = "/login";
  url.search = "";
  return NextResponse.redirect(url);
}

function isAuthenticated(req) {
  const cookie = req.cookies.get("token");
  if (!cookie) {
    return false;
  }
  return true;
}
export async function middleware(req) {
  if (!isAuthenticated(req)) {
    if (req.nextUrl.pathname !== "/login") {
      return await redirectToLogin(req);
    }
  } else {
    if (req.nextUrl.pathname === "/login") {
      return await redirectToHome(req);
    } else if (req.nextUrl.pathname === "/singup") {
      return await redirectToHome(req);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/singup","/finances"],
};
