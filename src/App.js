import { useState } from "react";
import "./App.css";
import axios from "axios";
import { createClient } from 'pexels';
import { type } from "@testing-library/user-event/dist/type";





function App() {
  const [query, setquery] = useState('')
  const [fetchnews, setFetchnews] = useState([]);
  const client = createClient('3TBRioO5ErEKsT7lscRz1zrpgJGcOtrWDg7eTiimiav8F6TeMw9p58hX');



  const submitSearch = async () => {

    await client.photos.search({ query, per_page: 10,orientation:'landscape'}).then(photos => {
      // console.log()
      setFetchnews(photos.photos)
      
      console.log(fetchnews)
    }
      
      )
  };


  return (
    <div className="container">
      <h1 className="text-center p-3">Photo website</h1>
      <div className="input-group mb-3 pt-4">
        <input
          type="text"
          className="form-control"
          placeholder="Enter news topic"
          aria-describedby="button-addon2"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={submitSearch}
        >
          Search
        </button>
      </div>

      <div className="row pt-2">
        {fetchnews && fetchnews.map((photos, index) => (
          <div className="col-md-4 pt-4" key={index}>
            {console.log(photos)}
            <img src={photos.src.original} class="img-fluid" alt="..." />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
