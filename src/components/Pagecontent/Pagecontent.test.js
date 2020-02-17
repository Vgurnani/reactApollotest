import React from "react"
import { render } from '@testing-library/react'
import PageContent from "./index";
import { MockedProvider } from '@apollo/react-testing';
import GET_LAUNCHES from './graphql'

const mocks = [
  {
    request: {
      query: GET_LAUNCHES,
    },
    result: {
      data: {
        bets: [{"id":"76529","time":1581928486365,"bet":963,"name":"Casimir.Rohan","payout":4,"profit":106,"game":"CLAMS","__typename":"Bet"},{"id":"76528","time":1581928481359,"bet":938,"name":"Norma.Crona46","payout":1,"profit":483,"game":"DICE","__typename":"Bet"},{"id":"76527","time":1581928476352,"bet":293,"name":"Nathen42","payout":4,"profit":-913,"game":"DICE","__typename":"Bet"},{"id":"76526","time":1581928471344,"bet":122,"name":"Ivory.Torp","payout":3,"profit":-502,"game":"CLAMS","__typename":"Bet"},{"id":"76525","time":1581928466335,"bet":737,"name":"Milo46","payout":2,"profit":-401,"game":"DICE","__typename":"Bet"},{"id":"76529","time":1581928486365,"bet":963,"name":"Casimir.Rohan","payout":4,"profit":106,"game":"CLAMS","__typename":"Bet"},{"id":"76528","time":1581928481359,"bet":938,"name":"Norma.Crona46","payout":1,"profit":483,"game":"DICE","__typename":"Bet"},{"id":"76527","time":1581928476352,"bet":293,"name":"Nathen42","payout":4,"profit":-913,"game":"DICE","__typename":"Bet"},{"id":"76526","time":1581928471344,"bet":122,"name":"Ivory.Torp","payout":3,"profit":-502,"game":"CLAMS","__typename":"Bet"},{"id":"76525","time":1581928466335,"bet":737,"name":"Milo46","payout":2,"profit":-401,"game":"DICE","__typename":"Bet"},{"id":"76529","time":1581928486365,"bet":963,"name":"Casimir.Rohan","payout":4,"profit":106,"game":"CLAMS","__typename":"Bet"},{"id":"76528","time":1581928481359,"bet":938,"name":"Norma.Crona46","payout":1,"profit":483,"game":"DICE","__typename":"Bet"},{"id":"76527","time":1581928476352,"bet":293,"name":"Nathen42","payout":4,"profit":-913,"game":"DICE","__typename":"Bet"},{"id":"76526","time":1581928471344,"bet":122,"name":"Ivory.Torp","payout":3,"profit":-502,"game":"CLAMS","__typename":"Bet"},{"id":"76525","time":1581928466335,"bet":737,"name":"Milo46","payout":2,"profit":-401,"game":"DICE","__typename":"Bet"},{"id":"76529","time":1581928486365,"bet":963,"name":"Casimir.Rohan","payout":4,"profit":106,"game":"CLAMS","__typename":"Bet"},{"id":"76528","time":1581928481359,"bet":938,"name":"Norma.Crona46","payout":1,"profit":483,"game":"DICE","__typename":"Bet"},{"id":"76527","time":1581928476352,"bet":293,"name":"Nathen42","payout":4,"profit":-913,"game":"DICE","__typename":"Bet"},{"id":"76526","time":1581928471344,"bet":122,"name":"Ivory.Torp","payout":3,"profit":-502,"game":"CLAMS","__typename":"Bet"},{"id":"76525","time":1581928466335,"bet":737,"name":"Milo46","payout":2,"profit":-401,"game":"DICE","__typename":"Bet"},{"id":"76529","time":1581928486365,"bet":963,"name":"Casimir.Rohan","payout":4,"profit":106,"game":"CLAMS","__typename":"Bet"},{"id":"76528","time":1581928481359,"bet":938,"name":"Norma.Crona46","payout":1,"profit":483,"game":"DICE","__typename":"Bet"},{"id":"76527","time":1581928476352,"bet":293,"name":"Nathen42","payout":4,"profit":-913,"game":"DICE","__typename":"Bet"},{"id":"76526","time":1581928471344,"bet":122,"name":"Ivory.Torp","payout":3,"profit":-502,"game":"CLAMS","__typename":"Bet"},{"id":"76525","time":1581928466335,"bet":737,"name":"Milo46","payout":2,"profit":-401,"game":"DICE","__typename":"Bet"}],
      },
    },
  },
];

describe("Test PageContent component", () => {

it("HTMl elements renders correctly", () => {

const component = render(<MockedProvider mocks={mocks} addTypename={false}><PageContent /></MockedProvider>,);
expect(component.toJSON()).toMatchSnapshot();
});
})