import logo from './logo.svg';
import './App.css';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
//<img src={logo} className="App-logo" alt="logo" />
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body className="App-body">
        <div class="login">
  <h2 class="login-header">Log in</h2>
  <form class="login-container">
    <p><input type="email" placeholder="Email" /></p>
    <p><input type="password" placeholder="Password" /></p>
    <p><input type="submit" value="Log in" /></p>
  </form>
</div>
      </body>
    </div>
  );
}

export default App;