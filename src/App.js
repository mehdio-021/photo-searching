import React, { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState("");


  const inputHandler = (e) => {
    setSearch(e.target.value);
  };

  const fetchImage = () => {
    fetch(
      `https://api.unsplash.com/search/photos/?client_id=Q29vGcLBW_6xp2oLGNis3cZpK_1Vo1aOFSxvZV6BfSE&query=${search}`
    )
      .then((response) => response.json())
      .then((data) => setResults(data.results));
  };

  return (
    <div>
      <div className="header">
        <span>جست و جو</span>
        <input type="text" value={search} onChange={inputHandler} />
        <button onClick={fetchImage}>ارسال</button>
      </div>
      <div className="gallery">
        {
          results && results.map(result=><img key={result.id} src={result.urls.regular}/>)
        }
      </div>
    </div>
  );
}

export default App;
