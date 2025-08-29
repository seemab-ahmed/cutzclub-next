import Link from "next/link";

export default function Signup() {
  return (
    <main className="wrap">
      <header className="brand">
        <h1>CUTZCLUB</h1>
      </header>
      <section className="role">
        <input type="radio" id="role-client" name="role" value="client" defaultChecked />
        <label className="pill" htmlFor="role-client">I’m A Client</label>
        <input type="radio" id="role-barber" name="role" value="barber" />
        <label className="pill pill--muted" htmlFor="role-barber">I’m A Barber</label>
      </section>
      <section className="card">
        <h2>Sign Up</h2>
        <form action="#" method="post" className="form" autoComplete="on" noValidate>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Name" required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="Email" required />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" placeholder="Password" minLength={8} required />
          </div>
          <div className="field">
            <label htmlFor="confirm">Confirm Password</label>
            <input id="confirm" name="confirm" type="password" placeholder="Confirm Password" minLength={8} required />
          </div>
          <button type="submit" className="btn">Sign Up</button>
          <p className="login">
            Already have an account?  <Link href="/login">Login</Link>
          </p>
        </form>
      </section>
    </main>
  );
}
