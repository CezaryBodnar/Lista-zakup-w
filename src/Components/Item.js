import React from 'react'
import { motion } from 'framer-motion'

const Item = ({ text, item, list, setList }) => {


    const deletehandler = () => {
        setList(list.filter(el => el.id !== item.id))
    }
    const completeHandler = () => {
        setList(list.map(element => {
            if (element.id === item.id) {
                return {
                    ...element, completed: !element.completed
                }
            }
            return element;
        }))
    }

    return (
        <motion.div transition={{ delay: 0.3 }} className={`item ${item.completed ? "completed" : ""} `} >
            <button className="complete-btn" onClick={completeHandler}><i className="fas fa-check"></i></button>
            <li className={`item-item ${item.completed ? "completed" : ""} `} >{text}</li>

            <button className="trash-btn" onClick={deletehandler}><i className="fas fa-trash"></i></button>
        </motion.div>
    )
}
export default Item;
