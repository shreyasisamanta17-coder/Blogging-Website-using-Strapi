import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "20px 40px",
      borderBottom: "1px solid #ddd"
    }}>
      <h2 style={{ fontWeight: "bold" }}>My Blog</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}
