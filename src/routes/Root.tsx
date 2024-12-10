import { Link } from "react-router-dom";

export default function Root() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>
        <Link to="/profiles">PROFILES</Link> NOW WORKING...
      </h1>
    </div>
  );
}
