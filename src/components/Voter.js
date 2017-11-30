import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/Voter.scss';

const ALLOW_NEGATIVE_SCORE = true;

const calculateScore = (votes) => Object.keys(votes || {})
  .map(voter => votes[voter])
  .reduce((total, amount) => total + amount, 0);

const Score = ({entity}) => {
  let score = calculateScore(entity.votes);
  if (!ALLOW_NEGATIVE_SCORE) {
    score = Math.max(0, score);
  }
  return <div className="Score">{score}</div>
}

class Voter extends Component {
  static propTypes = {
    entity: PropTypes.object.isRequired,
    username: PropTypes.string.isRequired,
    setVote: PropTypes.func.isRequired
  }

  vote = (amount) => {
    const {entity: {id, votes}, username, setVote} = this.props;
    const currentVote = votes[username] || 0;
    if (amount == currentVote) {
      amount = 0;
    }
    setVote(id, username, amount);
  }

  render() {
    const {entity, entity: {id, votes}, username} = this.props;
    const currentVote = votes[username] || 0;
    let className = 'Voter';
    if (currentVote > 0) {
      className += ' voted-up';
    } else if (currentVote < 0) {
      className += ' voted-down';
    }

    return (
      <div className={className}>
        <div className="UpArrow" onClick={()=> this.vote(1)}/>
        <Score entity={entity}/>
        <div className="DownArrow" onClick={()=> this.vote(-1)}/>
      </div>
    );
  }
}

export default Voter;
