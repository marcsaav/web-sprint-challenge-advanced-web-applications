import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

import {fetchColors as mockFetchColors} from '../utils/fetchColors'
jest.mock('../utils/fetchColors')


test("Fetches data and renders the bubbles", async () => {
  render(<BubblePage />)
  await waitFor (() => {
    mockFetchColors.mockResolvedValueOnce(
    [
      {color: 'Color 1', id: 1},
      {color: 'Color 2', id: 2}
    ]
  )})

  const colors = screen.queryAllByText(/color/i)
  expect(colors.length === 2)

});
