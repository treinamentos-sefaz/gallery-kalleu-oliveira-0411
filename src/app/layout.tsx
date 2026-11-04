import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import { Camera } from "lucide-react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Galeria de Fotos & Portfólio",
  description: "Uma coleção curada de fotografias e trabalhos criativos exibindo um portfólio pessoal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-blue-700 focus:shadow-lg focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
        >
          Pular para o conteúdo
        </a>
        {/* Navigation Header */}
        <header className="border-b bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <Link href="/" className="flex items-center gap-2">
                <Camera className="h-8 w-8 text-blue-600" />
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Galeria Portfólio
                </h1>
              </Link>
              <nav aria-label="Navegação principal" className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                <Link href="/gallery" className="nav-link">
                  Galeria
                </Link>
                <Link href="/upload" className="nav-link">
                  Enviar
                </Link>
                <Link href="/admin" className="btn-primary">
                  Admin
                </Link>
              </nav>
            </div>
          </div>
        </header>
        <main id="conteudo" tabIndex={-1} className="scroll-mt-40">
          {children}
        </main>
        <footer className="border-t bg-white/50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-between gap-4 md:flex-row">
            <Link href="/" className="flex items-center gap-2">
              <Camera className="h-6 w-6 text-blue-600" aria-hidden="true" />
              <span className="text-lg font-bold text-slate-900 dark:text-white">
                Galeria Portfólio
              </span>
            </Link>
            <p className="text-center text-sm text-slate-600 dark:text-slate-400">
              &copy; {new Date().getFullYear()} Galeria Portfólio. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
