import { useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import { useEffect } from "react";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(false);

  async function fetchProductData() {
    setloading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
      console.log(data);
    } catch (error) {
      console.log("error aa gya  api se" + error);
      setPosts([]);
    }
    setloading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  console.log(posts);
  return (
    <div className="my-8 mt-20 mb-10">
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  gap-3 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-">
          {posts.map((post) => (
            <Product key={post.id} item={post} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>Post data not found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
