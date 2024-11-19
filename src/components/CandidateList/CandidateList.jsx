import React from 'react';
import styles from './CandidateList.module.css';
import CandidateItem from '../CandidateItem/CandidateItem';

const CandidateList = ({ items, toggleBought, removeItem, editItem }) => {
    return (
        <div className={styles.allItems}>
            <ul className={styles.items}>
                {items.map((item) => (
                    <CandidateItem
                        key={item.id}
                        item={item}
                        toggleBought={toggleBought}
                        removeItem={removeItem}
                        editItem={editItem}
                    />
                ))}
            </ul>
        </div>
    );
};

export default CandidateList;
