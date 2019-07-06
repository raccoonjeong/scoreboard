import React from 'react';
import styles from '../pages/scoreboard/Scoreboard.module.css';

export const Stats = (props) => {
  const totalPlayers = props.players.length;
  let totalScore = 0;
  // 계산로직
  props.players.forEach(player => {
    totalScore += player.score;
  });

  return (
    <table className={styles.stats}>
      <tbody>
      <tr>
        <td>Players:</td>
        <td>{totalPlayers}</td>
      </tr>
      <tr>
        <td>Total Points:</td>
        <td>{totalScore}</td>
      </tr>
      </tbody>
    </table>
  );
}