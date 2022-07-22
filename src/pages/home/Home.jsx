import {Header} from "../../components/Header";
import {Container} from "../../components/Container";
import {Movies} from "../../components/Movies";

export const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <Movies />
            </Container>
        </>
    );
};
