import { NextResponse } from "next/server";

export function middleware(request) {
  // Retrieve the token cookie from the request
  let cookie = request.cookies.get("token");
  
  // Create a response object to proceed with the next request by default
  const response = NextResponse.next();

  console.log(cookie)

  // Redirect to /user/order if trying to access /login while logged in
  if (request.nextUrl.pathname.startsWith("/login")) {
    if (cookie) {
      return NextResponse.rewrite(new URL("/user/orders", request.url));
    }
  }

  // Redirect to /login if trying to access /user routes while not logged in
  if (request.nextUrl.pathname.startsWith("/user")) {
    if (!cookie) {
      return NextResponse.rewrite(new URL("/login", request.url));
    }
  }

  return response;
}

// Apply the middleware to /login and all /user/* routes
export const config = {
  matcher: ["/login", "/user/:path*"],
};
