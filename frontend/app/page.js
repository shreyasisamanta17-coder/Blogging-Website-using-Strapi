export default async function Home() {
  const res = await fetch("http://localhost:1337/api/posts?populate=*");
  const data = await res.json();

  const posts = data.data;

  return (
    <div style={{ padding: "20px" }}>
      <h1>All Blogs</h1>

      {posts.length === 0 && <p>No posts found.</p>}

      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: "20px" }}>
          <h2>{post.Title}</h2>

          {/* ✅ SHOW DESCRIPTION */}
          <p>
            {post.Content?.[0]?.children?.[0]?.text || "No description"}
          </p>

          {/* Image */}
          {post.CoverImage && (
            <img
              src={`http://localhost:1337${post.CoverImage.url}`}
              width="200"
              alt="cover"
            />
          )}

          {/* Read More */}
          <a href={`/posts/${post.id}`} style={{ color: "blue" }}>
            Read More →
          </a>
        </div>
      ))}
    </div>
  );
}
