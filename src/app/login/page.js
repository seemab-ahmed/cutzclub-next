import Link from 'next/link';

export default function Login() {
  return (
    <section class="custom-login">
 <main class="card " aria-labelledby="login-title">
    <h1 id="login-title" class="brand">CUTZCLUB</h1>

    
    <div class="role-toggle" role="group" aria-label="Choose account type">
      <button id="proBtn" class="toggle-btn" type="button" aria-pressed="true">
        I’m a Professional
      </button>
      <button id="clientBtn" class="toggle-btn" type="button" aria-pressed="false">
        I’m a Client
      </button>
    </div>

  
    <form id="loginForm" novalidate>
      <input type="hidden" name="role" id="roleInput" value="professional" />

      <label class="field" aria-label="Email">
        <input id="email" name="email" type="email" autocomplete="username"
               placeholder="Email" required />
      </label>

      <label class="field" aria-label="Password">
        <input id="password" name="password" type="password" autocomplete="current-password"
               placeholder="Password" minlength="6" required />
        <button type="button" class="eye" aria-label="Show password" id="togglePw">Show</button>
      </label>

      <p class="helper">Don’t have an account?
        <a href="/signup.html" aria-label="Sign up">Sign Up</a>
      </p>

      <p id="err" class="error" role="alert">Please enter a valid email and password (min 6 characters).</p>

      <button id="loginBtn" class="btn" type="submit" disabled>Login</button>
    </form>
  </main>
</section>
  );
}
