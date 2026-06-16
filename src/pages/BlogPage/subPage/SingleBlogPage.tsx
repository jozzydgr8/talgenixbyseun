import { useParams } from "react-router-dom";
import { UseDataContext } from "../../../context/UseDataContext";
import { MainBlog } from "./subComponent/MainBlog";
import { BlogList } from "../blogComponent/BlogList";
import { Transform } from "../../homepage/homeComponent/Transform";
import { Footer } from "../../homepage/homeComponent/Footer";

export const SingleBlogPage = () => {
  const { id } = useParams();
  const { blogs } = UseDataContext();


  // 1. Find the specific blog matching the URL ID
  // We use .find() because it returns the single object, whereas .filter() returns an array
  const currentBlog = blogs?.find((blog) => blog._id === id);

  // 2. Handle the loading/not found state gracefully 
  // (In case context is still fetching data or the ID doesn't exist)
  if (!currentBlog) {
    return (
      <section style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Blog post not found</h2>
        <p>It looks like this article doesn't exist or is still loading.</p>
      </section>
    );
  }

  // 3. Render the specific blog details
  return (
    <>
        <MainBlog currentBlog={currentBlog}/>
        <BlogList/>
        <Transform/>
        <Footer/>
    </>
  );
};