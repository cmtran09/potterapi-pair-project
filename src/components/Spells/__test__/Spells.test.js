import { mount } from "enzyme"
import toJSON from "enzyme-to-json"
import React from "react"
import { act } from "react-dom/test-utils"

import { render, cleanup, waitForElement } from "react-testing-library"
import "jest-dom/extend-expect"

import axios from 'axios';
import Spells from '../.Spells/';

// impor

afterEach(cleanup)

it("fetches and displays data", async () => {
    // We'll be explicit about what data Axios is to return when `get` is called.
    axiosMock.get.mockResolvedValueOnce({
        data: [
            {
                _id: "Test spell id 1",
                spell: "Test spell 1",
                type: "Test spell type 1",
                effect: "Test spell effect 1"
            },
            {
                _id: "Test spell id 2",
                spell: "Test spell 2",
                type: "Test spell type 2",
                effect: "Test spell effect 2"
            }
        ];
    });

    // Let's render our Fetch component, passing it the url prop and destructuring
    // the `getByTestId` function so we can find individual elements.
    const url = "/greeting";
    const { getByTestId } = render(<Spells url={url} />);

    // On first render, we expect the "loading" span to be displayed
    expect(getByTestId("heading")).toHaveTextContent("Spells Page");

    // Because the useAxios call (useEffect) happens after initial render
    // We need to handle the async nature of an AJAX call by waiting for the
    // element to be rendered.
    const resolvedSpan = await waitForElement(() => getByTestId("resolved"));

    // Now with the resolvedSpan in hand, we can ensure it has the correct content
    expect(resolvedSpan).toHaveTextContent("hello there");
    // Let's also make sure our Axios mock was called the way we expect
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
});


// jest.mock('axios');

// test('should fetch users', () => {
//     const data = [
//         {
//             _id: "Test spell id 1",
//             spell: "Test spell 1",
//             type: "Test spell type 1",
//             effect: "Test spell effect 1"
//         },
//         {
//             _id: "Test spell id 2",
//             spell: "Test spell 2",
//             type: "Test spell type 2",
//             effect: "Test spell effect 2"
//         }
//     ];
//     const resp = { data: data };
//     axios.get.mockResolvedValue(resp);

//     // or you could use the following depending on your use case:
//     // axios.get.mockImplementation(() => Promise.resolve(resp))

//     return Spells.all().then(data => expect(data).toEqual(data));
// });


// jest.mock("fetch spells", () => {
//     return {
//         __esModule: true,
//         default: async () => [
//             {
//                 _id: "Test spell id 1",
//                 spell: "Test spell 1",
//                 type: "Test spell type 1",
//                 effect: "Test spell effect 1"
//             },
//             {
//                 _id: "Test spell id 2",
//                 spell: "Test spell 2",
//                 type: "Test spell type 2",
//                 effect: "Test spell effect 2"
//             }
//         ]
//     }
// })

// test("matches spells snapshot", async () => {

//     const Spells = require("../Spells").default

//     let wrapper

//     await act((async () => {
//         wrapper = mount(<Spells />)
//     }))

//     wrapper.update()

//     expect(toJSON(wrapper)).toMatchSnapshot()
// })