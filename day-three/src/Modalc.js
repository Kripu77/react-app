import React,{useState} from 'react'
import Modal from 'react-modal'

const Modalc = () => {
    const[isModalOpen, setIsModalOpen] = useState(false)
    return (
        <div>
           <Modal isOpen={isModalOpen}>
               <h1>Modal Title</h1>
               <p> Modal Bodyd</p>
               <button onClick={()=>setIsModalOpen(false)}>Close</button>
           </Modal>

           <h1> I have a modal component would you like to see?</h1>
           <button onClick={()=>{setIsModalOpen(true)}}> Open</button>
        </div>
    )
}

export default Modalc
