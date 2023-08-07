import { Text } from "@/components/ui/text"

export default function SectionColors() {
  return (
    <section id="color">
      <section>
        <Text variant="overline">Color</Text>
        <Text variant="lead">
          To support the user experience, colors need to be combined wisely so
          that they work together well, do not overwhelm, and communicate the
          same kind of information everywhere in the interface.{" "}
          <a
            href="https://www.nngroup.com/articles/color-enhance-design/"
            target="_blank"
            rel="noreferrer"
          >
            *
          </a>
        </Text>
      </section>

      <div className="mt-16 grid grid-cols-11">
        <div className="col-span-2 border border-border bg-background p-5 md:aspect-video">
          <Text variant="overline" className="text-foreground">
            Background
          </Text>
        </div>
        <div className="col-span-3 bg-muted p-5">
          <Text variant="overline" className="text-muted-foreground">
            Muted
          </Text>
        </div>
        <div className="col-span-3 bg-muted-foreground p-5">
          <Text variant="overline" className="text-muted">
            Muted Foreground
          </Text>
        </div>
        <div className="col-span-3 bg-foreground p-5">
          <Text variant="overline" className="text-background">
            Foreground
          </Text>
        </div>
      </div>

      <div className="grid h-6 grid-cols-11">
        <div className="bg-slate-50" />
        <div className="bg-slate-100" />
        <div className="bg-slate-200" />
        <div className="bg-slate-300" />
        <div className="bg-slate-400" />
        <div className="bg-slate-500" />
        <div className="bg-slate-600" />
        <div className="bg-slate-700" />
        <div className="bg-slate-800" />
        <div className="bg-slate-900" />
        <div className="bg-slate-950" />
      </div>

      <div className="mt-8 bg-primary p-5">
        <Text variant="overline" className="text-primary-foreground">
          Primary: Indigo
        </Text>
      </div>
      <div className="bg-primary-foreground p-5">
        <Text variant="overline" className="text-primary">
          Primary Foreground
        </Text>
      </div>
      <div className="grid h-6 grid-cols-11">
        <div className="bg-indigo-50" />
        <div className="bg-indigo-100" />
        <div className="bg-indigo-200" />
        <div className="bg-indigo-300" />
        <div className="bg-indigo-400" />
        <div className="bg-indigo-500" />
        <div className="bg-indigo-600" />
        <div className="bg-indigo-700" />
        <div className="bg-indigo-800" />
        <div className="bg-indigo-900" />
        <div className="bg-indigo-950" />
      </div>

      <div className="mt-8 bg-secondary p-5">
        <Text variant="overline" className="text-secondary-foreground">
          Secondary: Teal
        </Text>
      </div>
      <div className="bg-secondary-foreground p-5">
        <Text variant="overline" className="text-secondary">
          Secondary Foreground
        </Text>
      </div>
      <div className="grid h-6 grid-cols-11">
        <div className="bg-teal-50" />
        <div className="bg-teal-100" />
        <div className="bg-teal-200" />
        <div className="bg-teal-300" />
        <div className="bg-teal-400" />
        <div className="bg-teal-500" />
        <div className="bg-teal-600" />
        <div className="bg-teal-700" />
        <div className="bg-teal-800" />
        <div className="bg-teal-900" />
        <div className="bg-teal-950" />
      </div>

      <div className="mt-8 bg-accent p-5">
        <Text variant="overline" className="text-accent-foreground">
          Accent: Pink
        </Text>
      </div>
      <div className="bg-accent-foreground p-5">
        <Text variant="overline" className="text-accent">
          Accent Foreground
        </Text>
      </div>
      <div className="grid h-6 grid-cols-11">
        <div className="bg-pink-50" />
        <div className="bg-pink-100" />
        <div className="bg-pink-200" />
        <div className="bg-pink-300" />
        <div className="bg-pink-400" />
        <div className="bg-pink-500" />
        <div className="bg-pink-600" />
        <div className="bg-pink-700" />
        <div className="bg-pink-800" />
        <div className="bg-pink-900" />
        <div className="bg-pink-950" />
      </div>
    </section>
  )
}
