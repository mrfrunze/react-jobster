import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <main>
        <nav>
            <img src={logo} alt="jobster logo" className="logo" />
        </nav>
        <div className="container page">
            {/* info */}
            <div className="info">
                <h1>
                    job
                    <span>tracking</span> app
                </h1>
                <p>
                    lorem20
                </p>
            </div>
            <img src={main} alt="main" className="img main-img" />
        </div>
    </main>
  )
}

export default Landing