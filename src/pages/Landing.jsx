import main from "../assets/images/main.svg";
import Wrapper from "../wrappers/LandingPage"
import {Logo} from "../components";


const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo/> <span>jobster</span>
            </nav>
            <div className="container page">
                {/* info */}
                <div className="info">
                    <h1>
                        job <span>tracking</span> app
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer congue rutrum ligula nec porttitor. Maecenas a semper magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec vel arcu sagittis, laoreet nunc sed, vulputate dui. Sed efficitur malesuada vehicula. Nullam rhoncus fringilla urna, sed varius nisi fermentum ornare. Donec quis felis maximus, rhoncus diam et, egestas arcu. Cras eu dui vel turpis feugiat feugiat sit amet a nisl. Sed sagittis arcu ut tortor convallis, sed elementum tellus convallis. Donec cursus pharetra risus ut interdum. Ut bibendum nibh ac scelerisque interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam et dignissim est.
                    </p>
                    <button className="btn btn-hero">Login/Register</button>
                </div>
                <img src={main} alt="main" className="img main-img" />

            </div>
        </Wrapper>
    )
}

export default Landing