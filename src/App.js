import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="pyro">
          <div class="before"></div>
          <div class="after"></div>
        </div>
        <p>Hello CSCI E-39!</p>
        <p>
          My name is Robbins Jefferson Kariseb
        </p>
    
        <script>
          const APP = document.getElementsByClassName("App-header")[0];

          setInterval(() => {
            const colors = ["#b10000","#6db100","#041031","#575a63","#000000"];
            let rndInt = Math.floor(Math.random() * colors.length) + 1;
            if (APP) APP.style.background=colors[rndInt];
          }, 2000);
        </script>
      </header>
    </div>
  );
}

export default App;
