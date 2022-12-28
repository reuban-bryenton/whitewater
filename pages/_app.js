import '../styles/globals.css'

//ANIMATION FRAMER MOTION
import {motion} from 'framer-motion';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Whitewater Servers | Gmod CityRP Community</title>
                <link rel="icon" type="image/x-icon" href="/images/favicon.ico"></link>
                <meta name="description" content="WhitewaterRP is a new Garry's Mod DarkRP. We are currently looking for some more members. The server is now open and ready to be enjoyed!"></meta>
            </Head>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .5 }}
            >
                <div className='overflow-hidden'>
                    <Component {...pageProps} />
                </div>

                <input type="checkbox" id="soon-modal" class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box">
                        <h3 class="font-bold text-lg">Welcome To Whitewater!</h3>
                        <br></br>
                        <p>To connect to our server, make sure to download gmod, along with all our content from our workshop collection. Then click on our direct connect link (or search for whitewater in the darkrp section of multiplayer) to bein your journey... and enjoy your stay!</p>
                        <br></br>
                        <p>Workshop Collection: <a class="link" href="https://steamcommunity.com/sharedfiles/filedetails/?id=2863683651">Open Workshop</a></p>
                        <p>Direct Connect: <a class="link" href="steam://connect/45.88.228.219:27025">Launch Steam</a></p>
                        <p>IP: 45.88.228.219:27025</p>
                        <br></br>

                        <p>❗Server Status: OPEN ✅</p>
                        <div class="modal-action">
                        <label for="soon-modal" class="btn">Okay!</label>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default MyApp
