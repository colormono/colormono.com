import { NextResponse } from "next/server"

import { getNowPlaying } from "@/lib/spotify"

export const revalidate = 30

export async function GET() {
  const response = await getNowPlaying()

  if (response.status === 204 || response.status > 400) {
    return NextResponse.json({ isPlaying: false })
  }

  const song = await response.json()
  // console.log("🚀 ~ file: route.ts:15 ~ GET ~ song:", song)

  if (song.item === null) {
    return NextResponse.json({ isPlaying: false })
  }

  const isPlaying = song.is_playing
  const title = song.item.name
  const artist = song.item.artists
    .map((_artist: any) => _artist.name)
    .join(", ")
  const album = song.item.album.name
  const albumImageUrl = song.item.album.images[0].url
  const songUrl = song.item.external_urls.spotify

  // NextResponse.setHeader(
  //   "Cache-Control",
  //   "public, s-maxage=60, stale-while-revalidate=30"
  // )

  return NextResponse.json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  })
}
