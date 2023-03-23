import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import styles from './CharDetails.module.css';

const CharDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const { name, image, gender, status, species, type, origin = {} } = character;

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        setCharacter(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCharacter();
  }, [id]);

  return (
    <div className={styles.charDetails}>
      <Link to="/">
        <div className={styles.arrow}>
          <img src="./img/arrow_back.svg" alt="" />
          <p>Go back</p>
        </div>
      </Link>

      <div className={styles.details}>
        <img key={image} src={image} className={styles.detailsImage} />

        <h2 className={styles.detailsName}>{name}</h2>

        <p className={styles.info}>Informations</p>
        <ul className={styles.detailsList}>
          <li>
            <p className={styles.detailsTitle}>Gender</p>
            <p className={styles.detailsDescr}>{gender}</p>
          </li>
          <li>
            <p className={styles.detailsTitle}>Status</p>
            <p className={styles.detailsDescr}>{status}</p>
          </li>
          <li>
            <p className={styles.detailsTitle}>Species</p>
            <p className={styles.detailsDescr}>{species}</p>
          </li>
          <li>
            <p className={styles.detailsTitle}>Origin</p>
            <p className={styles.detailsDescr}>{origin.name}</p>
          </li>
          <li>
            <p className={styles.detailsTitle}>Type</p>
            <p className={styles.detailsDescr}>{type}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CharDetails;
