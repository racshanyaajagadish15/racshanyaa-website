import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    title: "J.P. Morgan GenerationTech Winner",
    date: "2023",
    desc: "Built an award-winning digital app to combat food insecurity.",
  },
  {
    title: "International Business Olympiad Gold Medalist",
    date: "2023",
    desc: "Awarded for excellence in international business strategy and analysis and securing Global 6th Position",
  }
]

export default function ExperienceScroller() {
  return (
    <div className="my-16 px-4">
      <h2 className="text-3xl font-semibold mb-6 text-center">Highlights</h2>
      <div className="flex space-x-6 overflow-x-auto px-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300">
        {experiences.map((exp, idx) => (
          <Card
            key={idx}
            className="flex-shrink-0 shadow-md bg-[#121212] border-gray-800"
            style={{ width: "360px", height: "200px" }}
          >
            <CardContent className="p-4 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                <p className="text-sm text-muted-foreground">{exp.date}</p>
              </div>
              <p className="mt-2 text-white">{exp.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
