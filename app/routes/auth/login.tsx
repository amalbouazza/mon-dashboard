import { ActionFunction, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";

// Action pour gérer la soumission du formulaire
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  // Logique de vérification des identifiants
  if (email === "test@example.com" && password === "password123") {
    return redirect("/dashboard");
  } else {
    return { error: "Identifiants incorrects" };
  }
};

// Composant pour afficher la page de login
export default function Login() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Connexion</h1>
      <Form method="post">
        <div>
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Mot de passe :</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Se connecter</button>
      </Form>
    </div>
  );
}