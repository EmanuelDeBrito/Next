import { NextRequest, NextResponse } from "next/server"

// Função que verifica as requisições
export const middleware = (request: NextRequest) => {
    
    const url = new URL('/', request.url);
    return NextResponse.redirect(url);
}

// Rotas que serão afetadas pelo middleware
export const config = {
    matcher: [
        '/sobre/:path*' // Padrão de rotas
    ]
}