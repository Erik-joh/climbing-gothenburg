import React from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import SearchField from "../../components/SearchField";
import "./Routes.css";

function Routes() {
  const [posts, setPosts] = React.useState(null);
  const [lat, setLat] = React.useState("57.711");
  const [lon, setLon] = React.useState("11.969");
  const [maxDist, setMaxDist] = React.useState("50");
  const accesstoken = process.env.REACT_APP_ACCESS_TOKEN;

  const [newUrl, setNewUrl] = React.useState(
    `https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=${lat}&lon=${lon}&maxDistance=${maxDist}&minDiff=5.6&maxDiff=5.10&key=${accesstoken}`
  );

  React.useEffect(() => {
    fetch(newUrl)
      .then((r) => r.json())
      .then((data) => setPosts(data.routes));
  }, [newUrl]);

  return (
    <div className="routes-page">
      <Header
        title="Climbing Routes"
        description="Here you can see all the climbing routes around gothenburg often including a picture and some information about what type of climbing it is. You can also search for routes all around the world by longitude, latitude and distance from this point. for example Gothenburg latitude: 57.711 longitude: 11.969 distance: 50"
      />
      <div>
        <SearchField
          handleChange={(e) => setLat(e.target.value)}
          fieldName={"Latitude"}
        />
        <SearchField
          handleChange={(e) => setLon(e.target.value)}
          fieldName={"Longitude"}
        />
        <SearchField
          handleChange={(e) => setMaxDist(e.target.value)}
          fieldName={"Max Distance"}
        />

        <button
          className="search-button"
          onClick={() =>
            setNewUrl(
              `https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=${lat}&lon=${lon}&maxDistance=${maxDist}&minDiff=5.6&maxDiff=5.10&key=${accesstoken}`
            )
          }
        >
          Search
        </button>
      </div>
      <div className="routes-card-container">
        {posts ? (
          posts.map((post, key) => {
            return (
              <Card
                key={key}
                name={post.name}
                img={post.imgMedium}
                locations={post.location}
                type={post.type}
                rating={post.rating}
              />
            );
          })
        ) : (
          <div>
            <Header />
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
}
export default Routes;
