import { useRouter } from "next/dist/client/router";
import axios from "axios";

export const getServerSideProps = async (context) => {
  const postId = context.query.id;
  try {
    const { data: post } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);

    return {
      props: { post },
    };
  } catch (e) {
    if (axios.isAxiosError(e) && e.response?.status === 404) {
      return {
        notFound: true,
      };
    }
  }
};

const Post = ({ post }) => {
  const router = useRouter();

  return (
    <>
      <div>Post {router.query.id}</div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  );
};

export default Post;
