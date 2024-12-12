import s from './Home.module.css'
import Welcome from "../../components/Welcome/Welcome";

const Home = () => {
    return (
        <div className={s.mainContainer}>
            <Welcome/>
        </div>
    )
}

export default Home;