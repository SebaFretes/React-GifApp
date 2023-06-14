
import {useState} from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifApp = () => {

    const [categories, setCategories] = useState(['Modern Family']);

    const onAddCategory = (newCategory) => {
      if(categories.includes(newCategory)) return;
      setCategories([newCategory, ...categories])
    }

  return (
    <>
    <h1>GifApp</h1>

    <AddCategory 
        // setCategories= { setCategories }
        onNewCategory = {(value) => onAddCategory(value)}
    />

    { categories.map( (category) => {
        return <GifGrid key= {category} category = {category}/>
    }) }

    </>
  )
}
