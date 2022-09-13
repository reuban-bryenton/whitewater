//ANIMATION FRAMER MOTION
import {motion} from 'framer-motion';

export default function Hero() {
    return(
        <div className="hero min-h-screen bg-[url(https://media.discordapp.net/attachments/1013415595271794738/1013963872845189130/LoadingScreenV2.1-skojen.png)]">
            <div className="hero-overlay bg-opacity-60"></div>
            <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 1.5 }}
            >
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">
                            Whitewater Servers
                        </h1>
                        <p className="mb-5">
                            A realistic RP server with big goals and an amazing community.
                        </p>
                        <div className='flex justify-center items-center'>
                            <a href="https://forums.whitewaterservers.com/">
                                <button className="btn btn-primary m-2">
                                    Forums
                                </button>
                            </a>
                            <a href="https://docs.whitewaterservers.com/">
                                <button className="btn btn-primary m-2">
                                    Documentation
                                </button>
                            </a>
                            <a href="https://discord.gg/VPykm3Q">
                                <button className="btn btn-primary m-2">
                                    Discord
                                </button>
                            </a>
                        </div>
                        <label for="soon-modal" class="btn modal-button">Start Your Journey</label>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
