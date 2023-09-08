import { Text } from "@/components/ui/text";
import WidgetClocks from "./_components/widget-clocks";
// import WidgetYouglish from "./widget-youglish";

export default async function Page() {
  return (
    <section className="container mx-auto grid">
      <div className="grid gap-20 md:grid-cols-3">
        <WidgetClocks />

        <aside>
          <Text variant="overline">Bookmarks</Text>
          <Text variant="h2">List scroll</Text>
        </aside>

        <aside>
          <Text variant="overline">Feed</Text>
          <Text variant="h2">RSS</Text>
          <ul>
            <li>Coding</li>
            <li>Art</li>
            <li>Business</li>
          </ul>
          {/* <WidgetYouglish /> */}
          <Text variant="h2">Config</Text>
          <ul>
            <li>Customize</li>
            <li>Settings</li>
            <li>Help</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
