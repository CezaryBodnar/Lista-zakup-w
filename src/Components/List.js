import React from 'react'
import Item from './Item'
import { motion } from 'framer-motion'

const List = ({ list, setList, filteredList }) => {
    return (
        <div className="list-container">
            <ul className="list">
                {
                    filteredList.map(item => (
                        <Item
                            key={item.id}
                            list={list}
                            text={item.text}
                            item={item}
                            setList={setList}
                        />
                    ))
                }
            </ul>
        </div>
    )
}
export default List;
