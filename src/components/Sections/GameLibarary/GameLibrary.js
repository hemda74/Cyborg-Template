import './GameLibrary.css'
import SectionWrapper from '../../SectionWrapper/SectionWrapper'
import SectionHeader from '../../SectionHeader/SectionHeader'
import GameLibararyData from '../../../Data/GameLibraryData'
import GameLibraryCard from '../../GameLibraryCard/GameLibraryCard'
const GameLibrary = () => {
    const cards =GameLibararyData.map(card =>{
        return <GameLibraryCard key={card.id} image={card.image} title={card.title} category={card.category} date_added={card.date_added} hours_played={card.hours_played} download={card.download} />
    })
    return (
        <>
        <SectionWrapper>
            <SectionHeader>Game Library</SectionHeader>
                <div className='gaming-library-cards'>
                    {cards}
                </div>
                </SectionWrapper>
        </>
    )
}

export default GameLibrary