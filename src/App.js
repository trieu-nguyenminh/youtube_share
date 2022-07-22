import { Routes, Route, Link } from "react-router-dom";
import {Home} from "./pages/home";
import {Provider} from 'react-redux';
import {store} from "./redux/store";
import {Share} from "./pages/share";

function App() {
    return (
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/share" element={<Share />} />
            </Routes>
        </Provider>
    );
}

export default App;
