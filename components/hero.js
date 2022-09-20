// ANIMATION FRAMER MOTION
import {motion} from 'framer-motion';

// Theme Switcher
import ThemeSwitcher from '../components/ThemeSwitcher'
import { useState } from 'react';

export default function Hero() {
    let date_1 = new Date('09/30/2022');
    date_1.setHours(19)
    date_1.setMinutes(0)
    let date_2 = new Date();
    // get total seconds between the times
    var delta = Math.abs(date_1 - date_2) / 1000;
    let daysDefalt = Math.floor(delta / 86400)
    delta -= daysDefalt * 86400;
    let hoursDefalt = Math.floor(delta / 3600) % 24
    delta -= hoursDefalt * 3600;
    let minutesDefalt = Math.floor(delta / 60) % 60
    const [days, setDays] = useState(daysDefalt);
    const [hours, setHours] = useState(hoursDefalt);
    const [minutes, setMinutes] = useState(minutesDefalt);
    var count = 0
    const updateCountdown = () => {
        count = count + 1
        if (count == 60) {
            count = 0
            if (minutes == 0) {
                if (hours == 0) {
                    if (days == 0) {
                        document.getElementById('countercontainer').style.display = 'none'
                    } else {
                        setDays(days-1)
                    }
                } else {
                    setHours(hours-1)
                }
            } else {
                setMinutes(minutes-1)
            }
        }
        document.getElementById('counterdays').style.setProperty('--value', days)
        document.getElementById('counterhours').style.setProperty('--value', hours)
        document.getElementById('countermin').style.setProperty('--value', minutes)
    }
    setInterval(() => {
        updateCountdown()
    }, 1000)
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
                        <div class="flex justify-center items-center" id="countercontainer">
                            <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content mx-4">
                                <span class="countdown font-mono text-5xl text-center w-full flex justify-center items-center m">
                                <span id="counterdays"></span>
                                </span>
                                days
                            </div> 
                            <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content mx-4">
                                <span class="countdown font-mono text-5xl text-center w-full flex justify-center items-center">
                                <span id="counterhours"></span>
                                </span>
                                hours
                            </div> 
                            <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content mx-4">
                                <span class="countdown font-mono text-5xl text-center w-full flex justify-center items-center">
                                <span id="countermin"></span>
                                </span>
                                min
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
