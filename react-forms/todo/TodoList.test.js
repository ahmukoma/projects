import React from 'react';
import { render } from "@testing-library/react"
import TodoList from "./TodoList"

it("Should render the object in question", function(){
    render(<TodoList/>);
});