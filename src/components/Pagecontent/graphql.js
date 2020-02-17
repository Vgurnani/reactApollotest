import gql from 'graphql-tag'

const GET_LAUNCHES = gql`
  query GetBet {
    bets {
      id
      time
      bet
      name
      payout
      profit
      game
    }
  }
`;
export default GET_LAUNCHES

