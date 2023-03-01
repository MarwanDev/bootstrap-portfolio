import "./App.css";

function App() {
  return (
    <div className="App">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            Portfolio
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            About
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Contact
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">
            <img
              src="assets/Normal Button/Tertiary/Disabled.png"
              alt="Message"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default App;
