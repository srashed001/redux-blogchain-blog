import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTitlesFromApi } from "../reducers/actionCreators";
import HomepagePost from "./HomepagePost";

function Homepage() {
  const titles = useSelector((st) => st.titles);
  const error = useSelector((st) => st.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTitlesFromApi());
  }, [dispatch]);

  if (!titles) return <h1>Loading...</h1>;

  if (error) return <h1>Something bad happened</h1>;

  return (
    <div className="container">
      <div className="container mt-4">
        {titles.map((title) => (
          <HomepagePost
            id={title.id}
            key={title.id}
            title={title.title}
            description={title.description}
            votes={title.votes}
          />
        ))}
      </div>
    </div>
  );
}

export default Homepage;
