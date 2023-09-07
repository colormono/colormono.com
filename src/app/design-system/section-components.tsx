import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Text } from "@/components/ui/text"

export default function SectionComponents() {
  return (
    <section id="components" className="mb-16">
      <header className="mb-16">
        <div className="flex aspect-[16/4] w-full flex-col items-center justify-center bg-black">
          <Text variant="h2" className="text-white">
            What a wonderful world
          </Text>
          <Button variant="primary" size="lg">
            Click here
          </Button>
        </div>
      </header>

      <Text variant="overline">Components</Text>
      <Text variant="lead">
        A collection of reusable UI components, such as buttons, forms, and
        icons, that can be assembled to create new pages and features.
      </Text>

      <main className="my-20 flex flex-col gap-8">
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Default button</Button>
          <Button variant="outline">Outline button</Button>
          <Button variant="primary">Primary button</Button>
          <Button variant="secondary">Secondary button</Button>
          <Button variant="destructive">Destructive button</Button>
          <Button variant="ghost">Ghost button</Button>
          <Button variant="link">Link button</Button>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="hello@world.io" />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Avatar>
            {/* <AvatarImage src="https://github.com/colormono.png" /> */}
            {/* <AvatarImage src="https://avatar.vercel.sh/colormono.png" /> */}
            <AvatarFallback>MR</AvatarFallback>
          </Avatar>
        </div>
      </main>

      {/* <section className="mb-16">
        <div>Shapes Animation</div>
      </section>

      <section className="mb-16">
        <div>Sitemap</div>
      </section>

      <section className="mb-16">
        <div>Page mockups</div>
      </section> */}
    </section>
  )
}
