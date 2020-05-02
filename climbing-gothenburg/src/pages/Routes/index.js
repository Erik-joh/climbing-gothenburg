import React from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import "./Routes.css";

function Routes() {
  const [posts, setPosts] = React.useState(null);
  const accesstoken = process.env.REACT_APP_ACCESS_TOKEN;
  const url = `https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=57.711&lon=11.969&maxDistance=50&minDiff=5.6&maxDiff=5.10&key=${accesstoken}`;
  React.useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((data) => setPosts(data.routes));
  }, [url]);

  if (!posts) {
    return (
      <div>
        <Header />
        <Loading />
      </div>
    );
  }
  return (
    <div className="routes-page">
      <Header
        title="Climbing Routes"
        description="Here you can see all the climbing routes around gothenburg often including a picture and some information about what type of climbing it is."
      />
      <div className="routes-card-container">
        {posts.map((post, key) => {
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
        })}
      </div>
    </div>
  );
}
export default Routes;
