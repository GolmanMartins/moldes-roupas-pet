import type { Metadata } from "next";
import Script from "next/script";
import { META_PIXEL_ID, META_PIXEL_SCRIPT } from "@/lib/meta-pixel";
import "./globals.css";
export const metadata: Metadata = {
 title:"Moldes — Roupas de Pet | Crie sua renda extra por R$ 9,90",
 description:"Mais de 100 arquivos de moldes de roupas pet em PDF, em diferentes modelos e tamanhos. Imprima, costure e comece a criar. Pagamento único de R$ 9,90 e garantia de 7 dias.",
 icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"},
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){
 return <html lang="pt-BR"><body>
  <Script id="meta-pixel" strategy="afterInteractive" dangerouslySetInnerHTML={{__html:META_PIXEL_SCRIPT}}/>
  <noscript><img height="1" width="1" style={{display:"none"}} alt="" src={'https://www.facebook.com/tr?id='+META_PIXEL_ID+'&ev=PageView&noscript=1'}/></noscript>
  {children}
 </body></html>;
}
