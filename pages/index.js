import Hero from '../components/hero'

export default function Home() {
    return (
        <>
            <Hero />
            <div className='h-screen flex flex-col justify-center items-center bg-base-100'>
                <h2 id="ww-gallery" className='text-primary text-4xl font-bold mb-4'>
                    Whitewater Gallery
                </h2>
                <div className='grid grid-cols-1 tablet:grid-cols-3 gap-4'>
                <div class="card w-96 bg-base-content text-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://media.discordapp.net/attachments/745724500317962260/1020076911206088724/gSmartWatch.png" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Smart Watches!</h2>
                        <p>Press the hotkey 'G' to enable your watch and keep track of all your statistics and even listen to some music.</p>
                        <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-content text-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://media.discordapp.net/attachments/745724500317962260/1019994746275495986/20220915173420_1.jpg" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">New weather system!</h2>
                        <p>Our new weather system can do snow, wind, rain, and even thunderstorms with real lightning.</p>
                        <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-content text-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://media.discordapp.net/attachments/745724500317962260/1018220874668711977/ss.jpg" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Whitewater City Worker Jobs</h2>
                        <p>City workers go around the city and fix various problems from trash, fixing cameras to even rewiring VMS signs.</p>
                        <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
