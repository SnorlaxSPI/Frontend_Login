import jpIMG from './assets/jp.svg';

function App() {
  return (
    <div className="container">
      <div className="container-login">
        <form className="login-form">
          
          <span className="login-form-title">Bem Vindo!</span>
          <span className="login-form-title">
            <img src={jpIMG} alt="Alessandro Dev." />
          </span>

        </form>
      </div>
    </div>
  )
}

export default App
