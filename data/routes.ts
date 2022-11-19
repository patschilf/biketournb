export type Route = {
  id: string
  title: string
  location: string
  distance: string
  duration: string
  elevation: string
}

const routes: Route[] = [
  {
    id: "1",
    title: "Highwater's Race Track",
    location: "Fredericton",
    distance: "45km",
    duration: "3h",
    elevation: "110m",
  },
  {
    id: "2",
    title: "Grand Bay Rollercoaster",
    location: "Saint John",
    distance: "52km",
    duration: "3h 30min",
    elevation: "256m",
  },
  {
    id: "3",
    title: "Downtown Breweries",
    location: "Moncton",
    distance: "23km",
    duration: "1h 30min",
    elevation: "34m",
  },
]

export default routes