import './Modal.css';

const Modal = () => {
    const openModal = () => {
        document.getElementById("modalContainer").style.display = "block";
    }
    
    const closeModal = () => {
        document.getElementById("modalContainer").style.display = "none";
    }

    return (
        <>
            <div className="modal-container" id="modalContainer">
                <div className="modal" id="modal">
                    <span className="close-btn" onClick={closeModal}>&times;</span>
                    <p style={{"textAlign": "left"}}>Explore data around the world in this interactive map. <br/> How many big macs per monthly salary? <br/> Which country has the cheapest beer? <br/> Find out all that and more.</p>
                    <a href='/about'>About the Creators</a>
                </div>
            </div>

            <div className="question-mark" id="questionMark" onClick={openModal}>?</div>
        </>
    );
}

export default Modal;