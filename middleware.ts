import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { siteConfig } from "@/config/site";
import { cookies } from "next/headers";

export async function middleware(req: NextRequest) {

    if (req.nextUrl.pathname.startsWith("/material/")) {

        if(!siteConfig.linksAliadosMaterial.includes(req.nextUrl.pathname)){
            return NextResponse.redirect(new URL("/material/", req.url));
        }

        const coocqui = await cookies();
        const autorizado = coocqui.get("Autorizado");

        if (!autorizado || autorizado.value !== process.env.CLAVE_SECRETA) {

            return NextResponse.redirect(new URL("/403", req.url));

        }
        return NextResponse.next();
    }

}

export const config = {
    matcher: ["/material/:path*", /*"/material/"*/],
}