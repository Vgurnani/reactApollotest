import gql from 'graphql-tag';

export const subscription = gql`
subscription BetAdded {
betAdded {
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

export default subscription;