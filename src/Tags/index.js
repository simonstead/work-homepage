import React from "react";
import styles from "./styles.css";

const Buzzwords = ['react', 'redux', "docker", 'kubernetes', 'nodejs', 'python', 'golang','C#', 'TDD', 'XP', '#noestimates', 'lean', 'agile']

export const Tags = ({tags = Buzzwords}) => (
  <div className={styles.Tags}>
    {tags.map(t => <span key={t} className={styles.Tag}>{t}</span>)}
  </div>
);

export default Tags;
