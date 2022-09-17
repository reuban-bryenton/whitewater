import Hero from '../components/hero'
import WWGallery from '../components/ww-gallery'

// ANIMATION FRAMER MOTION
import {motion, useScroll} from 'framer-motion';

export default function Home() {
    const { scrollYProgress } = useScroll();
    return (
        <>
            <motion.div style={{ scaleX: scrollYProgress }} />
            <Hero />
            <WWGallery />
        </>
    )
}
