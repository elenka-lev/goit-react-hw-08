import { BeatLoader } from "react-spinners";
import s from './Loading.module.css'
const Loading = () => {
    return (
       <div className={s.wrapLoder}> <BeatLoader color="#66FFCC" className={s.loader} /></div>
    )
}
export default Loading;