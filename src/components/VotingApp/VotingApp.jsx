import React, { useState, useEffect } from 'react';
import styles from './VotingApp.module.css';

import CandidateForm from '../CandidateForm/CandidateForm';
import VotesSummary from '../VotesSummary/VotesSummary';
import CandidateList from '../CandidateList/CandidateList';

const VotingApp = () => {
    const [items, setItems] = useState(() => {
        const savedItems = localStorage.getItem('shoppingItems');
        return savedItems ? JSON.parse(savedItems) : [];
    });

    const [filter, setFilter] = useState(() => {
        return localStorage.getItem('VotesSummary') || '';
    });

    const sumQuantity = () => {
        items.map((item) => (
            quant += item.quantity
        ))
    }

    const addItem = (name, quantity) => {
        const newItem = {
            id: Date.now(),
            name,
            quantity,
            bought: false
        };

        setItems([...items, newItem]);
    };

    const editItem = (itemId, newName, newQuantity) => {
        setItems(
            items.map((item) =>
                item.id === itemId ? { ...item, name: newName, quantity: newQuantity } : item
            )
        );
    };

    const removeItem = (itemId) => {
        const updatedItems = items.filter((item) => item.id !== itemId);
        setItems(updatedItems);
    };

    const toggleBought = (itemId) => {
        setItems(
            items.map((item) =>
                item.id === itemId ? { ...item, bought: !item.bought } : item
            )
        );
    };

    const filteredItems = items.filter((item) => {
        if (filter === 'bought') return item.bought;
        if (filter === 'notBought') return !item.bought;
        return true;
    });

    useEffect(() => {
        localStorage.setItem('shoppingItems', JSON.stringify(items));
    }, [items]);

    useEffect(() => {
        localStorage.setItem('VotesSummary', filter);
    }, [filter]);


    return (
        <div className={styles.card}>
            <div className={styles.cardInfo}>
                <div className={styles.cardHeader}>
                    <p className={styles.title}>App de Votos</p>
                </div>
                <CandidateForm addItem={addItem} />
                <CandidateList
                    items={filteredItems}
                    toggleBought={toggleBought}
                    removeItem={removeItem}
                    editItem={editItem}
                />
                <VotesSummary sumQuantity = {sumQuantity} />
            </div>
        </div>
    );
};

export default VotingApp;