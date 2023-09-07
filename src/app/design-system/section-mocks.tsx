export default function SectionMocks() {
  return (
    <section className="flex items-end gap-16 text-xs">
      <div className="flex flex-col gap-2 p-2 bg-muted mb-2 text-muted-foreground uppercase">
        <header className="bg-background h-4"></header>
        <div className="bg-background h-4"></div>
        <main className="bg-background h-4"></main>
        <aside className="bg-background h-4"></aside>
        <span>Mobile first</span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-2 bg-muted mb-2 text-muted-foreground uppercase">
        <header className="bg-background h-8"></header>
        <nav className="bg-background h-8"></nav>
        <main className="bg-background h-8"></main>
        <aside className="bg-background h-8"></aside>
        <span>Responsive</span>
      </div>

      <div className="flex flex-col gap-2 p-2 bg-muted mb-2 text-muted-foreground uppercase">
        <header className="bg-background h-8"></header>
        <nav className="bg-background h-8"></nav>
        <main className="bg-background h-8"></main>
        <aside className="bg-background h-8"></aside>
        <span>Accesible</span>
      </div>

      <div className="grid grid-cols-3 flex-1 flex-col gap-2 p-2 bg-muted mb-2 text-muted-foreground uppercase">
        <div className="bg-background h-8"></div>
        <div className="bg-background h-8"></div>
        <div className="bg-background h-8"></div>
        <div className="bg-background h-8"></div>
        <div className="bg-background h-8"></div>
        <div className="bg-background h-8"></div>
        <div className="bg-background h-8"></div>
        <div className="bg-background h-8"></div>
        <div className="bg-background h-8"></div>
        <div className="bg-background h-8"></div>
        <div className="bg-background h-8"></div>
        <div className="bg-background h-8"></div>
        <span>Components</span>
      </div>
    </section>
  )
}
