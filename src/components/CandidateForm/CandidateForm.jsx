import React, { useState } from 'react';
import styles from './CandidateForm.module.css';

const CandidateForm = ({ addItem }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.trim()) {
            addItem(name, 0);
            setName('');
            setQuantity('');
        } else {
            console.log('Preencha todos os campos.');
        }
    };

    return (
        <div className={styles.addItem}>
            <input
                type="text"
                className={styles.inputName}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome do Candidato"
            />
            <p className={styles.addButton} onClick={handleSubmit}>
                Adicionar
            </p>
        </div>
    );
};

export default CandidateForm;
