import React,{useState} from 'react'
import Modal from 'react-modal'

//to get rid of react complaining please have this fn handy
Modal.setAppElement('#root')
const Modalc = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <div>
            <Modal isOpen={isModalOpen} onRequestClose={()=>setIsModalOpen(false)}
            style={
             {
                     
                    content:{
                        color:'gray',
                        backgroundColor:'black',
                        margin: '20vh auto',
                        width: '20vw',
                        height:'20vh'
                    }
                }
            } >
                <h1> Modal is open now how did you find me?</h1>
                <button onClick={()=>{setIsModalOpen(false)}}>Close</button>
            </Modal>
           <h1> I am modal example please click me to check demo</h1> 
           <button onClick={()=>setIsModalOpen(true)}>
               Open
           </button>
        </div>
    )
}

export default Modalc
