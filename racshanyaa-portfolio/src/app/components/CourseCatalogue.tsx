"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const allCourses = [
  {
    title: "C, C++, PHP and Java - The Complete Guide to Modern Programming",
    certifier: "Certified by Udemy",
  },
  {
    title: "Data Science Skillpath - Python ML, SQL, Data Visualization with Looker Studio and ETL with Alteryx",
    certifier: "Certified by Udemy",
  },
  {
    title: "Data Visualisation in Python and Tableau",
    certifier: "Certified by Udemy",
  },
  {
    title: "Web Development Bootcamp - HTML, CSS, JavaScript and React",
    certifier: "Certified by Codecademy",
  },
]

export default function CourseCatalogue() {
  const [showAll, setShowAll] = useState(false)

  const coursesToShow = showAll ? allCourses : allCourses.slice(0, 3)

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 text-purple-400 text-center">Courses Catalogue</h1>
      <div className="space-y-6">
        {coursesToShow.map((course, index) => (
          <Card key={index} className="w-full bg-zinc-900 text-white border border-zinc-700 shadow-md">
            <CardHeader>
              <CardTitle className="text-xl text-purple-300">{course.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{course.certifier}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      {!showAll && allCourses.length > 3 && (
        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            className="border-purple-400 text-purple-400 hover:bg-purple-900/20"
            onClick={() => setShowAll(true)}
          >
            View More
          </Button>
        </div>
      )}
    </div>
  )
}
