import './Home.css'
import Header from '../../Components/Header/Header';
function Home() {
    return (
        <div className='Main_home'>
            <div className="box-img">
                <img src={require("../../Assets/Images/res-bg.jpg")} alt="" />
            </div>
            <div className='main_header'>
                <Header />
            </div>
        </div>
    );
}

export default Home;