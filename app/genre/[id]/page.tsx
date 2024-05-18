import React from 'react'
type Props = {
    params:{
        id: number
    },
    searchParams:{
        genre: string
    }
}
const GenrePage = ({params:{id}, searchParams:{genre}}:Props) => {
    
  return (
    <div>
      GenrePage: id = {id}, genre: {genre} 
    </div>
  )
}

export default GenrePage
