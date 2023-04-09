import './Header.css'
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import Carousel from 'react-bootstrap/Carousel';
function Header() {
    return (
        <div className='container'>
            <header className="header_section">
                <div className='logo_icon'>
                    <span className="logo">
                        The Resturant
                    </span>
                </div>
                <div className='list'>
                    <ul>
                        <li>Home</li>
                        <li>Menu</li>
                        <li>About</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div className='list_icons'>
                    <ul >
                        <li>
                            <AiOutlineUser />
                        </li>
                        <li>
                            <AiOutlineShoppingCart />
                        </li>
                        <li>
                            <AiOutlineUser />
                        </li>
                    </ul>
                </div>
            </header>
            <section className='Carousel-slide'>
                <div className='slider_text'>
                    <Carousel fade>
                        <Carousel.Item>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>
        </div>
    );
}

export default Header;