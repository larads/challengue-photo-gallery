import { useState } from "react"
import { Header } from "./components/header"
import Images4x4 from "./components/images-4x4"
import { images } from "./utils/imagens"
import Filter from "./components/filtered-images"
import NotFound from "./components/not-fount"
import Footer from "./components/footer"

export function App() {
  const [filteredImages, setFilteredImages] = useState(images)
  const [imagens, setImagens] = useState("")

  const handleFilterChange = (days: number) => {
    const currentDate = new Date()
    const filtered = images.filter(image => {
      const imageDate = new Date(image.data)
      const diffInDays = Math.floor((currentDate.getTime() - imageDate.getTime()) / (1000 * 3600 * 24))
      return diffInDays <= days
    })
    setFilteredImages(filtered)
  }

  const handleSearch = (imagens: string) => {
    setImagens(imagens)
  }

  const getFilteredAndSearchedImages = () => {
    return filteredImages.filter(image =>
      image.title.toLowerCase().includes(imagens.toLowerCase())
    )
  }

  const imagesToDisplay = getFilteredAndSearchedImages()

  return (
    <div className="h-screen">
      <div className="flex-row flex-1 w-full">
        <Header title="Galeria de Fotos" onSearch={handleSearch} />
      </div>

      <Filter onFilterChange={handleFilterChange} />

      <div className="mx-4">
        {imagesToDisplay.length > 0 ? (
          <Images4x4 images={imagesToDisplay} />
        ) : (
          <NotFound />
        )}
      </div>
      
      <Footer />
    </div>
  )
}