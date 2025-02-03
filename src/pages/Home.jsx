import MovieCard  from "../components/MovieCard";
import { useState } from "react"; 
function Home(){

    const [seacrhQuery,setsearchQuery]=useState('');

    const movies=[
        {id:1,title:'jirod',release_date:'2020'},
        {id:2,title:'dialog',release_date:'2020'},
        {id:3,title:'thusi',release_date:'2020'}
    ];

    const handleSearch=(e)=>{
            e.preventDefault();
            alert(seacrhQuery)
            setsearchQuery('')
    }

    return (
        <div className="home">
            <form action="" onSubmit={handleSearch} className="search-form" >
                <input type="text" 
                 className="search-input"
                  placeholder="Search for movies..." 
                  value={seacrhQuery}
                  onChange={(e)=>{
                    setsearchQuery(e.target.value);
                  }}/>
                <button type="submit" className='search-button'>Search</button>
            </form>
            <div className="movies-grid">
            {
            movies.map(
                (movie)=> 
                <MovieCard movie={movie} key={movie.id}/>)
                }
            </div>
        </div>
        
    )
}

export default Home