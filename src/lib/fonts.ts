import {
  IBM_Plex_Mono as FontMono,
  IBM_Plex_Sans as FontSans,
} from "next/font/google"

export const fontSans = FontSans({
  // variable: "--font-sans",
  weight: ["300", "400", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
})

export const fontMono = FontMono({
  // variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
})
