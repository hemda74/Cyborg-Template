import './SectionHeader.css'
const SectionHeader = (props) => {
    return (
        <div className='section-header'>
        <h3> {props.children}</h3>
    </div>
    )
}

export default SectionHeader