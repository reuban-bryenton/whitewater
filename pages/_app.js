import '../styles/globals.css'

//ANIMATION FRAMER MOTION
import {motion} from 'framer-motion';

function MyApp({ Component, pageProps }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .5 }}
        >
            <Component {...pageProps} />

            <input type="checkbox" id="soon-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">INFORMATION!</h3>
                    <p class="py-4">The server is not yet released, join our discord to keep updated!</p>
                    <div class="modal-action">
                    <label for="soon-modal" class="btn">Okay!</label>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default MyApp
