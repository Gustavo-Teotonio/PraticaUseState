import React from 'react';
import styles from './VotesSummary.module.css';

const VotesSummary = ({ items, sumQuantity }) => {
    return (
        <div className={styles.filters}>
                <p className={styles.votos}>Votos totais: 
                    {sumQuantity}
                </p>

                <p className={styles.votos}>Candidato vencedor: 
                    {/* {items.map((item) => {
                        
                    })} */}
                </p>
        </div>
    );
};

export default VotesSummary;
