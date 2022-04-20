import React from "react"

import { render } from "@testing-library/react-native"

import App from "./App"

import { RecoilRoot } from "recoil"

test("debug app", () => {
  const { debug } = render(<App />, { wrapper: RecoilRoot })
  // Unit tests
  debug()
})
