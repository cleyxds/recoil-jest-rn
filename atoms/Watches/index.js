import { atom } from "recoil"

const Watches = atom({
  key: "watches_atom",
  default: {
    watches: [],
    dynamicWatches: []
  }
})

export default Watches
