import './Hero.css'
import PrimariyButton from '../../Buttons/Buttons'

const Hero = () => {
    return (
        <div className='hero-main'>
            <div className='hero-text'>
                <h6 className='hero-subtitle'>Wlcome To Cyborg</h6>
                <h4 className='hero-title'><em>Browse</em> Our Popular Games Here</h4>
                <PrimariyButton>Browse Now </PrimariyButton>
            </div>
        </div>
    )
}
export default Hero