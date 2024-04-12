import { Text } from "@/components/ui/text";
import WidgetClocks from "./_components/widget-clocks";
import { Input } from "@/components/ui/input";
import Link from "next/link";
// import WidgetYouglish from "./widget-youglish";

export default async function Page() {
  return (
    <section className="grid space-x-40 md:grid-cols-12">
      <div className="flex flex-col space-y-20 md:col-span-2">
        <WidgetClocks />
      </div>

      <div className="flex flex-col space-y-20 md:col-span-7">
        <aside>
          <Text variant="overline">Search</Text>
          <div>
            <Input
              placeholder="Soon..."
              className="h-20 rounded-full px-8 text-2xl"
            />
          </div>
        </aside>

        <aside>
          <Text variant="overline">Bookmarks</Text>
          <div className="grid gap-8">
            <Link href="https://chat.openai.com/" rel="noreferrer">
              <Text variant="h2">Chat with GPT</Text>
            </Link>

            <Link
              href="https://mail.google.com/mail/u/0/#inbox"
              rel="noreferrer"
            >
              <Text variant="h2">Check emails</Text>
            </Link>

            <Link href="https://excalidraw.com/" rel="noreferrer">
              <Text variant="h2">Start a whiteboard</Text>
            </Link>
          </div>
        </aside>
      </div>

      <div className="flex flex-col space-y-20 md:col-span-3">
        <aside>
          <Text variant="overline">FEED</Text>
          <Text variant="h2">News</Text>
          <ul>
            <li>Art</li>
            <li>Coding</li>
            <li>Business</li>
            <li>Soon...</li>
          </ul>
        </aside>

        <aside>
          <Text variant="overline">Config</Text>
          {/* <WidgetYouglish /> */}
          <Text variant="h2">Settings</Text>
          <ul>
            <li>Login</li>
            <li>Preferences</li>
            <li>Theme</li>
            <li>Help</li>
            <li>Soon...</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
