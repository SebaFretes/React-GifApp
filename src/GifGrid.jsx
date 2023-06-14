import { GifItem } from "./GifItem";
import { useFetchGifs } from "./hooks/useFetchGifs";

export const GifGrid = ({category}) => {

  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
        <h3> {category} </h3>
        <div className="card-grid">
          {
            images.map( ({id, title, url}) => (
              <GifItem key={ id }
                        title = { title }
                        url = { url } 
              />
              // return <li key={img.id}> {img.title} </li>
            ))
          }    
        </div>
    </>
  )
}