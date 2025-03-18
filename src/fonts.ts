import { Inter, Roboto } from 'next/font/google'
import { Noto_Sans_JP } from 'next/font/google'
import { Allison } from 'next/font/google'

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  weight: ["400", "500", "600", "700"],
  preload: true,
  variable: "--font-inter",
})

export const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  weight: ["400", "500", "700"],
  preload: true,
  variable: "--font-roboto",
})

export const notoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Hiragino Sans", "Hiragino Kaku Gothic ProN", "Meiryo", "sans-serif"],
  preload: true,
  variable: "--font-noto-sans-jp",
})

export const allison = Allison({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["cursive"],
  preload: true,
  variable: '--font-allison',
})
