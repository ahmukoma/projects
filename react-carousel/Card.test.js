import React  from "react";
import { render } from "@testing-library/react"
import Card from './Card';

test("Cards component should render", () => {
    render(<Card />)
});
    
it("Should match the snapshot", () => {
    const {asFragment} = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
});