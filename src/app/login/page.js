import Link from 'next/link';

export default function Login() {
  return (
    <main className="card" aria-labelledby="login-title">
      <h1 id="login-title" className="brand">CUTZCLUB</h1>
      {/* Role Toggle */}
      <div className="role-toggle" role="group" aria-label="Choose account type">
        <button id="proBtn" className="toggle-btn" type="button" aria-pressed="true">
          I’m a Professional
        </button>
        <button id="clientBtn" className="toggle-btn" type="button" aria-pressed="false">
          I’m a Client
        </button>
      </div>
      {/* Login Form */}
      <form id="loginForm" noValidate>
        <input type="hidden" name="role" id="roleInput" value="professional" />
        <label className="field" aria-label="Email">
          <input id="email" name="email" type="email" autoComplete="username" placeholder="Email" required />
        </label>
        <label className="field" aria-label="Password">
          <input id="password" name="password" type="password" autoComplete="current-password" placeholder="Password" minLength={6} required />
          <button type="button" className="eye" aria-label="Show password" id="togglePw">Show</button>
        </label>
        <p className="helper">Don’t have an account?
          <Link href="/signup" aria-label="Sign up">Sign Up</Link>
        </p>
        <p id="err" className="error" role="alert">Please enter a valid email and password (min 6 characters).</p>
        <button id="loginBtn" className="btn" type="submit" disabled>Login</button>
      </form>
    </main>
  );
}
