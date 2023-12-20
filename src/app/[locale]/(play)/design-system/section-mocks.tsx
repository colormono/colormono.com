export default function SectionMocks() {
  return (
    <section className="flex items-end gap-16 text-xs">
      <div className="mb-2 flex flex-col gap-2 bg-muted p-2 uppercase text-muted-foreground">
        <header className="h-4 bg-background"></header>
        <div className="h-4 bg-background"></div>
        <main className="h-4 bg-background"></main>
        <aside className="h-4 bg-background"></aside>
        <span>Mobile first</span>
      </div>

      <div className="mb-2 flex flex-1 flex-col gap-2 bg-muted p-2 uppercase text-muted-foreground">
        <header className="h-8 bg-background"></header>
        <nav className="h-8 bg-background"></nav>
        <main className="h-8 bg-background"></main>
        <aside className="h-8 bg-background"></aside>
        <span>Responsive</span>
      </div>

      <div className="mb-2 flex flex-col gap-2 bg-muted p-2 uppercase text-muted-foreground">
        <header className="h-8 bg-background"></header>
        <nav className="h-8 bg-background"></nav>
        <main className="h-8 bg-background"></main>
        <aside className="h-8 bg-background"></aside>
        <span>Accesible</span>
      </div>

      <div className="mb-2 grid flex-1 grid-cols-3 flex-col gap-2 bg-muted p-2 uppercase text-muted-foreground">
        <div className="h-8 bg-background"></div>
        <div className="h-8 bg-background"></div>
        <div className="h-8 bg-background"></div>
        <div className="h-8 bg-background"></div>
        <div className="h-8 bg-background"></div>
        <div className="h-8 bg-background"></div>
        <div className="h-8 bg-background"></div>
        <div className="h-8 bg-background"></div>
        <div className="h-8 bg-background"></div>
        <div className="h-8 bg-background"></div>
        <div className="h-8 bg-background"></div>
        <div className="h-8 bg-background"></div>
        <span>Components</span>
      </div>
    </section>
  );
}
