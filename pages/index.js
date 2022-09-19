import Hero from '../components/hero'
import WWGallery from '../components/ww-gallery'

// ANIMATION FRAMER MOTION
import {motion, useScroll} from 'framer-motion';
import KeysMap from '../components/keysMap';

export default function Home() {
    const { scrollYProgress } = useScroll();
    return (
        <>
            <motion.div style={{ scaleX: scrollYProgress }} />
            <Hero />
            <WWGallery />
            <KeysMap />
        </>
    )
}
