"use client"

import Image from "next/image"
// import { useEffect } from "react"
// import fetcher from "@utils/fetcher"
// import { animate } from "motion"
import useSWR from "swr"

import { cn } from "@/lib/utils"

import { Button } from "./ui/button"

type NowPlayingSong = {
  album: string
  albumImageUrl: string
  artist: string
  isPlaying: boolean
  songUrl: string
  title: string
}

async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init)
  return res.json()
}

// function AnimatedBars() {
//   useEffect(() => {
//     animate(
//       "#bar1",
//       {
//         transform: [
//           "scaleY(1.0) translateY(0rem)",
//           "scaleY(1.5) translateY(-0.082rem)",
//           "scaleY(1.0) translateY(0rem)",
//         ],
//       },
//       {
//         duration: 1.0,
//         repeat: Infinity,
//         easing: ["ease-in-out"],
//       }
//     )
//     animate(
//       "#bar2",
//       {
//         transform: [
//           "scaleY(1.0) translateY(0rem)",
//           "scaleY(3) translateY(-0.083rem)",
//           "scaleY(1.0) translateY(0rem)",
//         ],
//       },
//       {
//         delay: 0.2,
//         duration: 1.5,
//         repeat: Infinity,
//         easing: ["ease-in-out"],
//       }
//     )
//     animate(
//       "#bar3",
//       {
//         transform: [
//           "scaleY(1.0)  translateY(0rem)",
//           "scaleY(0.5) translateY(0.37rem)",
//           "scaleY(1.0)  translateY(0rem)",
//         ],
//       },
//       {
//         delay: 0.3,
//         duration: 1.5,
//         repeat: Infinity,
//         easing: ["ease-in-out"],
//       }
//     )
//   }, [])

//   return (
//     <div className="w-auto flex items-end overflow-hidden">
//       <span
//         id="bar1"
//         className="w-1 mr-[3px] h-2 bg-gray-300 dark:bg-gray-500 opacity-75"
//       />
//       <span
//         id="bar2"
//         className="w-1 mr-[3px] h-1 bg-gray-300 dark:bg-gray-500"
//       />
//       <span
//         id="bar3"
//         className="w-1 h-3 bg-gray-300 dark:bg-gray-500 opacity-80"
//       />
//     </div>
//   )
// }

export default function NowPlaying() {
  const { data } = useSWR<NowPlayingSong>("/api/now-playing", fetcher)

  return (
    <article
      className={cn(
        "mb-10 grid border p-5",
        !data?.songUrl && "bg-gradient-to-b from-neutral-600/25"
      )}
    >
      {data?.songUrl ? (
        <>
          <span className="mb-4 text-xs font-semibold">NOW PLAYING</span>
          <Image
            alt="song"
            width={400}
            height={400}
            src={data?.albumImageUrl}
            className="rounded-md"
          />
          <a
            className="mt-4 max-w-max truncate text-sm font-semibold"
            href={data.songUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.title}
          </a>
        </>
      ) : (
        <p className="max-w-max truncate text-sm font-semibold">
          Ambience mode
        </p>
      )}

      <p className="max-w-max truncate text-xs text-muted-foreground">
        {data?.artist ?? "I'm not listening to Spotify right now."}
      </p>

      {/* <Button className="mt-4">Read study case</Button> */}
    </article>
  )
}
