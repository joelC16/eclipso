import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

interface Project {
  year: string
  title: string
  image: string
  tags: string[]
}

const projects: Project[] = [
  {
    year: "2024",
    title: "Givebacks",
    image: "/images/work1.avif",
    tags: ["Webflow Dev", "Custom Code"],
  },
  {
    year: "2024",
    title: "Candy Shop",
    image: "/images/work2.webp",
    tags: ["Web Design", "Wireframing"],
  },
  {
    year: "2023",
    title: "Merconic",
    image: "/images/work4.avif",
    tags: ["Webflow Dev", "Maintenance"],
  },
  {
    year: "2023",
    title: "Merconic",
    image: "/images/work5.avif",
    tags: ["App Design", "UX/UI Design"],
  },
  {
    year: "2023",
    title: "Merconic",
    image: "/images/work6.avif",
    tags: ["Webflow Dev", "Maintenance"],
  },
  {
    year: "2023",
    title: "Merconic",
    image: "/images/work7.jpg",
    tags: ["UI/UX Design", "Maintenance"],
  },
  {
    year: "2023",
    title: "Merconic",
    image: "/images/work8.avif",
    tags: ["Webflow Dev", "Maintenance"],
  },
  
]

export default function WorkCarousel() {
  return (
    <div className="overflow-hidden">
      <Carousel className="w-full mx-auto cursor-grab active:cursor-grabbing">
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="border-0 bg-transparent">
                <CardContent className="relative p-2">
                  <div className="absolute top-4 left-4 z-20">
                    <Badge variant="secondary" className="bg-[#CCFF00] text-black font-medium">
                      {project.year}
                    </Badge>
                  </div>
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-[600px] object-cover transition-transform hover:scale-105 duration-500 max-1300:h-[500px] max-500:h-[400px]"
                      draggable="false"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start space-y-4 p-2">
                  <div className="flex gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="bg-neutral-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-xl font-medium text-white">{project.title}</h3>
                    <div className="bg-white h-fit w-fit p-2 rounded-[0.6rem]">
                      <img src={"/images/arrow.svg"} width={20} height={20} alt="Exito subiendo webs" className="-rotate-45"></img>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
