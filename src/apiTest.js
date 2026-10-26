
import { searchMovies } from "./services/tmdbAPI";
import { useEffect } from "react";

export function TestAPI() {
  // normal React component

  useEffect(() => {
    async function getMovies() {
      const movies = await searchMovies("Batman");
      console.log(movies);
    }

    getMovies();
  }, []);

  //   return (
  //     <>
  //       <h2>cine app</h2>
  //     </>
  //   );
}
