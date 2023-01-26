import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import axios from "axios";

export const getServerSideProps = async () => {
  const { data: posts } = await axios.get("https://jsonplaceholder.typicode.com/posts");

  return {
    props: { posts },
  };
};

export default function Home({ posts, test }) {
  const router = useRouter();
  console.log(test); //_app에서 getInitialProps 지정 가능
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button onClick={() => router.push("/about")}>/about</button>
      <button onClick={() => router.push("/posts/1")}>/posts/1</button>
      <Link href="/about">about </Link> {/*이렇게하면 csr가능 */}
      <ul>
        {posts.map((post) => (
          <Link href="posts/[id]" as={`/posts/${post.id}`} key={post.id} passHref>
            <li ket={post.id}>{post.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
