import React from "react"
import Welcome from "../Welcome"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import toJSON from "enzyme-to-json"

Enzyme.configure({ adapter: new Adapter() })

test("matches snapshot", () => {
    const wrapper = shallow(<Welcome />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})
test("button to have text Enter", () => {
    const wrapper = shallow(<Welcome />)
    const buttonText = wrapper.find("button").text()

    expect(buttonText).toBe("Enter")
})

// describe("welcome component",()=>{
//     test("it procceeds to correct link when clicked")
// })