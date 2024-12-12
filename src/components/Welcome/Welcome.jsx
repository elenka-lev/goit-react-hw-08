import s from './Welcome.module.css'
const Welcome = () => {
    return (
        <div className={s.container}>
            <h1 className={s.title}>Welcome to the Phonebook App!</h1>
            <p className={s.descr}>Organize your contacts quickly and easily. Sign up to get started!</p>

            <video className={s.video} autoPlay loop muted>
        <source src='/videoMin.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>
    )
}

export default Welcome;