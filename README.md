# colormono.com

My portfolio has transformed over the years - from a static HTML site, to WordPress, to Jekyll, and finally to Next.js/React/MDX. My personal slice of the internet provides a platform for my writing and to showcase my latest work.

## Overview

- `pages/api/*` - [API routes](https://nextjs.org/docs/api-routes/introduction) powering [`/dashboard`](https://colormono.com/dashboard), newsletter subscription, and post views.
- `pages/blog/*` - Static pre-rendered blog pages using [MDX](https://github.com/mdx-js/mdx).
- `pages/*` - All other static pages.

## Running Locally

```bash
$ git clone https://github.com/colormono/colormono.com.git
$ cd colormono.com
$ yarn
$ yarn dev
```

Create a `.env.local` file similar to [`.env.example`](https://github.com/colormono/colormono.com/blob/master/.env.example).

## Built Using

- [Next.js](https://nextjs.org/)
- [Netlify](https://netlify.com)
- [MDX](https://github.com/mdx-js/mdx)
- [Tailwind CSS](https://tailwindcss.com/)

---

### Aknowledgments

The initial commit was forked from [leerob.io](https://github.com/leerob/leerob.io).
Thanks [Lee Robinson](https://leerob.io), you rocks!

The photo-stream was forked from [Photo-stream](https://github.com/maxvoltar/photo-stream).
Thanks [Tim Van Damme](https://twitter.com/maxvoltar)!
