import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <>
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
        </>
    )
}

export default MyApp
