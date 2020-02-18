import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import TestContainer from "./components/TestContainer";

test("renders learn react link", () => {
  const { getByText, appContainer } = render(
    <TestContainer>
      <App />
    </TestContainer>
  );
  // const linkElement = getByText(/Bet Amount/i);
  // expect(linkElement).toBeInTheDocument();
  expect(appContainer).toMatchSnapshot();
});
