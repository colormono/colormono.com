import { Text } from "@/components/ui/text"

import WidgetYouglish from "./widget-youglish"

export default async function Page() {
  const data = await getData()
  return (
    <section className="container mx-auto grid gap-16">
      <div className="grid md:grid-cols-3">
        <section>
          <Text variant="overline">BUENOS AIRES</Text>
          <Text variant="h2">{getCurrentHour(data.datetime)}</Text>
          {people.map(async (person) => {
            const currentTime = await getCurrentTime(person.city)
            return (
              <Text
                variant="h3"
                key={person.name}
              >{`${person.name}, ${person.city}: ${currentTime}`}</Text>
            )
          })}
        </section>
        <section>
          <Text variant="overline">Bookmarks</Text>
          <Text variant="h2">List</Text>
        </section>
        <section>
          <Text variant="overline">Wallpaper</Text>
          <Text variant="h2">Select</Text>
        </section>
        <section>
          <Text variant="overline">Wallpaper</Text>
          {/* <WidgetYouglish /> */}
        </section>
      </div>
      <footer>
        <ul>
          <li>Customize</li>
          <li>Settings</li>
          <li>Help</li>
        </ul>
      </footer>
    </section>
  )
}

function getCurrentHour(datetime: Date) {
  const now = new Date(datetime)
  const hours = String(now.getHours()).padStart(2, "0") // Ensure two-digit format
  const minutes = String(now.getMinutes()).padStart(2, "0") // Ensure two-digit format
  return `${hours}:${minutes}`
}

async function getData() {
  const res = await fetch(
    "http://worldtimeapi.org/api/timezone/America/Mexico_City"
    // "http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires"
  )
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

// Function to fetch current time for a city
async function getCurrentTime(city) {
  try {
    const response = await fetch(`http://worldtimeapi.org/api/timezone/${city}`)
    const { datetime } = await response.json()
    return datetime
    return new Date(datetime).toLocaleTimeString("en-US", {
      timeStyle: "short",
    })
  } catch (error) {
    console.error(`Error fetching time for ${city}:`, error.message)
    return "N/A"
  }
}

// List of people with their respective cities
const people = [
  { name: "Mariano", city: "America/Argentina/Buenos_Aires" },
  { name: "Gerardo", city: "America/Caracas" },
  { name: "Hector", city: "America/Mexico_City" },
]
