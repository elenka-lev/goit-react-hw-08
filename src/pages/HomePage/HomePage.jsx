import s from './HomePage.module.css'
import Welcome from "../../components/Welcome/Welcome";

const Home = () => {
    return (
        <div className={s.mainContainer}>
            <Welcome/>
        </div>
    )
}

export default Home;