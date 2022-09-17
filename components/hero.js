// ANIMATION FRAMER MOTION
import {motion} from 'framer-motion';

// Theme Switcher
import ThemeSwitcher from '../components/ThemeSwitcher'

export default function Hero() {
    return(
        <div className="hero min-h-screen bg-[url(https://media.discordapp.net/attachments/1013415595271794738/1013963872845189130/LoadingScreenV2.1-skojen.png)]">
            <div className="hero-overlay bg-opacity-60"></div>
            <motion.div
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.5 }}
            >
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-white">
                            Whitewater Servers
                        </h1>
                        <p className="mb-6">
                            A realistic RP server with big goals and an amazing community.
                        </p>
                        <label for="soon-modal" class="btn modal-button mb-2">
                            🌟 Start Your Journey
                        </label>
                        <div className='flex mobile:flex-col tablet:flex-row justify-center items-center'>
                            <a href="https://forums.whitewaterservers.com/">
                                <button className="btn btn-primary m-2">
                                    <p>
                                        📢
                                    </p>
                                    Forums
                                </button>
                            </a>
                            <a href="https://docs.whitewaterservers.com/">
                                <button className="btn btn-primary m-2">
                                    <p>
                                        📋
                                    </p>
                                    Documentation
                                </button>
                            </a>
                            <a href="https://discord.gg/VPykm3Q">
                                <button className="btn btn-primary m-2">
                                    <p>
                                        💬
                                    </p>
                                    Discord
                                </button>
                            </a>
                        </div>
                        <ThemeSwitcher />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
