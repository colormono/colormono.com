import { Text } from "@/components/ui/text";

export default function SectionGrid() {
  return (
    <section id="grid" className="py-24">
      <Text variant="overline">Grid</Text>

      <Text variant="lead">
        Grids are a great framework to help designers quickly put together a
        clean, well-aligned interface, and help users to easily scan, read, and
        use those interfaces.
      </Text>

      <div className="mb-4 mt-16 grid gap-4 md:grid-cols-12">
        <div className="order order-1 col-span-12 bg-muted">
          <Text variant="caption" className="p-2">
            Header
          </Text>
        </div>
        <div className="order-3 col-span-12 md:col-span-9">
          <div className="grid gap-4 md:grid-cols-5 lg:grid-cols-12">
            <div className="aspect-square bg-muted">
              <Text variant="caption" className="p-2">
                01
              </Text>
            </div>
            <div className="bg-muted">
              <Text variant="caption" className="p-2">
                02
              </Text>
            </div>
            <div className="bg-muted">
              <Text variant="caption" className="p-2">
                03
              </Text>
            </div>
            <div className="bg-muted">
              <Text variant="caption" className="p-2">
                04
              </Text>
            </div>
            <div className="bg-muted">
              <Text variant="caption" className="p-2">
                05
              </Text>
            </div>
            <div className="bg-muted">
              <Text variant="caption" className="p-2">
                06
              </Text>
            </div>
            <div className="bg-muted">
              <Text variant="caption" className="p-2">
                07
              </Text>
            </div>
            <div className="bg-muted">
              <Text variant="caption" className="p-2">
                08
              </Text>
            </div>
            <div className="bg-muted">
              <Text variant="caption" className="p-2">
                09
              </Text>
            </div>
            <div className="bg-muted">
              <Text variant="caption" className="p-2">
                10
              </Text>
            </div>
            <div className="bg-muted">
              <Text variant="caption" className="p-2">
                11
              </Text>
            </div>
            <div className="bg-muted">
              <Text variant="caption" className="p-2">
                12
              </Text>
            </div>
            <div className="col-span-3 aspect-video bg-muted">
              <Text variant="caption" className="p-2">
                01
              </Text>
            </div>
            <div className="col-span-5 bg-muted">
              <Text variant="caption" className="p-2">
                02
              </Text>
            </div>
            <div className="col-span-2 bg-muted">
              <Text variant="caption" className="p-2">
                03
              </Text>
            </div>
            <div className="col-span-2 bg-muted">
              <Text variant="caption" className="p-2">
                04
              </Text>
            </div>
            <div className="col-span-4 row-span-6 aspect-square bg-muted">
              <Text variant="caption" className="p-2">
                01
              </Text>
            </div>
            <div className="col-span-8 row-span-2 bg-muted">
              <Text variant="caption" className="p-2">
                02
              </Text>
            </div>
            <div className="col-span-4 row-span-4 bg-muted">
              <Text variant="caption" className="p-2">
                03
              </Text>
            </div>
            <div className="col-span-4 row-span-4 bg-muted">
              <Text variant="caption" className="p-2">
                04
              </Text>
            </div>
          </div>
        </div>
        <div className="order-4 col-span-12 bg-muted md:order-2 md:col-span-3">
          <Text variant="caption" className="p-2">
            Sidebar
          </Text>
        </div>
        <div className="order-4 col-span-12 bg-muted">
          <Text variant="caption" className="p-2">
            Footer
          </Text>
        </div>
      </div>
    </section>
  );
}
