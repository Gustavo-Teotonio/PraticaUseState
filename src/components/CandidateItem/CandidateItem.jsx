import React, { useState } from 'react';
import styles from './CandidateItem.module.css';

const CandidateItem = ({ item, toggleBought, removeItem, editItem }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(item.name);
    const [newQuantity, setNewQuantity] = useState(item.quantity);

    const voteEdit = () => {
        setNewQuantity(newQuantity + 1)
        item.quantity = newQuantity
    };

    const candidateRemove = () => {
        removeItem(item.id);
    };

    return (
        <div className={[styles.item, item.bought ? styles.bought : ''].join(' ')}>
                <>
                    <p
                        className={[styles.itemText, item.bought ? styles.completed : ''].join(' ')}
                        onClick={() => toggleBought(item.id)}
                    >
                        Candidato: {item.name} <br/>
                        Votos: {item.quantity}
                    </p>
                    <div className={styles.buttons}>
                        <p onClick={voteEdit} className={styles.editButton}>
                            Votar
                        </p>
                        <p onClick={candidateRemove} className={styles.removeButton}>
                            X
                        </p>
                    </div>
                </>
        </div>
    );
};

export default CandidateItem;
