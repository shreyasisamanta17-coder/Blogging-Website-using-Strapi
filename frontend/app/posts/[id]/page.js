async function getPost(id) {
  const res = await fetch(`http://localhost:1337/api/posts/${id}?populate=*`);
  const data = await res.json();
  return data.data;
}

export default async function BlogDetails({ params }) {
  const { id } = await params; // FIX for Next.js error
  const post = await getPost(id);

  if (!post) {
    return <h1>No Post Found</h1>;
  }

  const title = post.attributes?.Title || "No Title";
  const content = post.attributes?.Content?.[0]?.children?.[0]?.text || "No Content";
  const author = post.attributes?.author?.data?.attributes?.name || "Unknown Author";
  const category = post.attributes?.category?.data?.attributes?.title || "Uncategorized";

  // image handling
  const imageUrl =
    post.attributes?.CoverImage?.data?.attributes?.url
      ? "http://localhost:1337" + post.attributes.CoverImage.data.attributes.url
      : null;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{title}</h1>

      {imageUrl && (
        <img
          src={imageUrl}
          alt="cover"
          style={{ width: "100%", marginTop: "20px", borderRadius: "10px" }}
        />
      )}

      <p style={{ marginTop: "20px" }}>{content}</p>

      <p style={{ marginTop: "20px", fontStyle: "italic" }}>
        Author: {author}
      </p>

      <p style={{ marginTop: "5px", fontStyle: "italic" }}>
        Category: {category}
      </p>
    </div>
  );
}
