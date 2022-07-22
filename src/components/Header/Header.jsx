import {ActionNav} from "./ActionNav";
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <header className="bg-white sticky top-0 shadow-1 p-3 z-5">
            <div className="flex flex-row align-items-center justify-content-between">
                <Link to="/" className="no-underline text-primary">
                    <div className="flex flex-row">
                        <i className="pi pi-home text-2xl" />&nbsp;<div className="text-2xl">Funny Movies</div>
                    </div>
                </Link>
                <div>
                    <ActionNav />
                </div>
            </div>
        </header>
    );
}


