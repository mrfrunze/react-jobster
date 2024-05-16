import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import styled from 'styled-components';

const Wrapper = styled.main`
    nav{
        width: var(--fluid-width);
        max-width: var(--max-width);
        margin: 0 auto;
        height: var(--nav-height);
        display: flex;
        align-items: center;
    }
    .page{
        min-height: calc(100vh - var(--nav-height));
        display: grid;
        align-items: center;
    }
    h1{
        font-weight: 700;

        span{
            color: var(--primary-500);
        }
    }
    p{
        color: var(--gray-600);
    }
    .main-img{
        display: none;
    }
    @media(min-width: 992px){
        .page{
            grid-template-columns: 1fr 1fr;
            column-gap: 3rem;
        }
        .main-img{
            display: block;
        }
    }

`

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <img src={logo} alt="jobster logo" className="logo" />
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