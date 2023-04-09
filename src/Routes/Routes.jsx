import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Containers/Home/Home';
import Contact from '../Containers/ContactUs.jsx/Contact';
function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/Contact"} element={<Contact />} />

            </Routes>
        </BrowserRouter>
    );
}

export default Router;