import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import toJSON from "enzyme-to-json"

import { render, cleanup } from "@testing-library/react";


import HouseSort from "../HouseSort"


// Enzyme.configure({ adapter: new Adapter() })

// // test("matches snapshot", () => {
// //     const wrapper = shallow(<Welcome />)
// //     expect(toJSON(wrapper)).toMatchSnapshot()
// // })
// test("initial page load should display, no quiz, borders or house", () => {
//     const wrapper = shallow(<HouseSort />)
//     const spells = wrapper.find("div")
//     const spells = wrapper.find("div.spells")
//     const quiz = wrapper.find("div.quiz")
//     expect(spells).toBeTruthy()
//     expect(spells).toHaveTextContent("Spells")
//     // expect(quiz).toBeNull()
// })

// afterEach(cleanup)

// it("initial page load should display, no quiz, borders or house", () => {
//     const { getByTestId } = render(<HouseSort />);
//     expect(getByTestId("button-up")).toHaveTextContent("Welcome, please navigate using the following")
// })