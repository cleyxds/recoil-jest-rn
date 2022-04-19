// Add a submariner ✅
// Add a datejust ✅
// Delete last watch on the list ✅
// Clear all watches ✅
// Add filter by watchFamily, should show a toast when the filter input is empty 🔥

import React, { useEffect } from "react"

import { fireEvent, render } from "@testing-library/react-native"

import Watches from "./Watches"

import { RecoilRoot, useRecoilValue } from "recoil"
import { default as WatchesAtom } from "./atoms/Watches"

export const RecoilObserver = ({ node, onChange }) => {
  const value = useRecoilValue(node)
  useEffect(() => onChange(value), [onChange, value])
  return null
}

test("should add a submariner", () => {
  const onChange = jest.fn()

  const { getByTestId } = render(
    <RecoilRoot>
      <RecoilObserver node={WatchesAtom} onChange={onChange} />
      <Watches />
    </RecoilRoot>
  )

  const addSubmarinerButton = getByTestId("test-addSubmariner")
  fireEvent.press(addSubmarinerButton)

  // fireEvent.change(addSubmarinerButton, {
  //   target: { value: { rmc: "1273y1nxi", familyCode: "submariner" } }
  // })

  expect(onChange).toHaveBeenCalledTimes(2)
  // expect(onChange).toHaveBeenCalledWith({ watches: [], dynamicWatches: [] })
  expect(onChange).toHaveBeenCalledWith({
    watches: [{ rmc: "1273y1nxi", familyCode: "submariner" }],
    dynamicWatches: []
  })
})

test("should add a datejust", () => {
  const onChange = jest.fn()

  const { getByTestId } = render(
    <RecoilRoot>
      <RecoilObserver node={WatchesAtom} onChange={onChange} />
      <Watches />
    </RecoilRoot>
  )

  const addDatejustButton = getByTestId("test-addDatejust")
  fireEvent.press(addDatejustButton)

  // fireEvent.change(addSubmarinerButton, {
  //   target: { value: { rmc: "1273y1nxi", familyCode: "submariner" } }
  // })

  expect(onChange).toHaveBeenCalledTimes(2)
  // expect(onChange).toHaveBeenCalledWith({ watches: [], dynamicWatches: [] })
  expect(onChange).toHaveBeenCalledWith({
    watches: [{ rmc: "1ij901asd", familyCode: "datejust" }],
    dynamicWatches: []
  })
})

test("should remove the last watch", () => {
  const onChange = jest.fn()

  const { getByTestId } = render(
    <RecoilRoot>
      <RecoilObserver node={WatchesAtom} onChange={onChange} />
      <Watches />
    </RecoilRoot>
  )

  const removeLastButton = getByTestId("test-removeLast")
  // fireEvent.change(addSubmarinerButton, {
    //   target: { value: { rmc: "1273y1nxi", familyCode: "submariner" } }
    // })

    onChange({
      watches: [{ rmc: "1273y1nxi", familyCode: "submariner" }],
      dynamicWatches: []
    })
    onChange({
      watches: [{ rmc: "1273y1nxi", familyCode: "submariner" }, { rmc: "1ij901asd", familyCode: "datejust" }],
      dynamicWatches: []
    })
    
    fireEvent.press(removeLastButton)

    expect(onChange).toHaveBeenCalledWith({
      watches: [{ rmc: "1273y1nxi", familyCode: "submariner" }],
      dynamicWatches: []
    })

    expect(onChange).toHaveBeenCalledTimes(4)
})

test("clear state", () => {
  const onChange = jest.fn()

  const { getByTestId } = render(
    <RecoilRoot>
      <RecoilObserver node={WatchesAtom} onChange={onChange} />
      <Watches />
    </RecoilRoot>
  )

  const clearStateButton = getByTestId("test-clearState")
  // fireEvent.change(addSubmarinerButton, {
    //   target: { value: { rmc: "1273y1nxi", familyCode: "submariner" } }
    // })

    onChange({
      watches: [{ rmc: "1273y1nxi", familyCode: "submariner" }, { rmc: "1ij901asd", familyCode: "datejust" }],
      dynamicWatches: []
    })

    onChange({
      watches: [
        { rmc: "1273y1nxi", familyCode: "submariner" },
        { rmc: "1ij901asd", familyCode: "datejust" },
        { rmc: "kjx93j190", familyCode: "pearlmaster" }
      ],
      dynamicWatches: []
    })
    
    fireEvent.press(clearStateButton)

    expect(onChange).toHaveBeenCalledWith({
      watches: [],
      dynamicWatches: []
    })

    expect(onChange).toHaveBeenCalledTimes(4)
})
