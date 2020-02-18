import React from "react";
import { render } from "@testing-library/react";
import PageContent from "./index";
import TestContainer from "../TestContainer";
import { shallow } from "enzyme";

describe("Test PageContent component", () => {
  it("HTMl elements renders correctly", () => {
    const { component, appContainer, getByText } = render(
      <TestContainer>
        <PageContent />
      </TestContainer>
    );
    const wrapper = shallow(
      <TestContainer>
        <PageContent />
      </TestContainer>
    );
    const linkElement = getByText(/Loading.../i);
    expect(linkElement).toBeInTheDocument();
    expect(wrapper).toMatchSnapshot();
  });
});
