import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Bienvenue sur mon application</h1>
      <p>
        <Link to="/auth/login">Se connecter</Link>
      </p>
    </div>
  );
}