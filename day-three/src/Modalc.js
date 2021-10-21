import React,{useState} from 'react'
import Modal from 'react-modal'

const Modalc = () => {
    const[isModalOpen, setIsModalOpen] = useState(false)
    return (
        <div>
           <Modal isOpen={isModalOpen}>
               <h1>Modal Title</h1>
               <p> Modal Bodyd</p>
           </Modal>

           <h1> I have a modal component would you like to see?</h1>
        </div>
    )
}

export default Modalc
