import { atom, useRecoilState } from "recoil"

const WatchesAtom = atom({
  key: "watchesAtom",
  default: {
    watches: [],
    dynamicWatches: []
  }
})

export default function useWatches() {
  const [watches, setWatches] = useRecoilState(WatchesAtom)
  const { watches: regularWatches } = watches

  const actions = {
    addWatch,
    deleteWatch,
    addFilter,
    clearWatches
  }

  async function addWatch(watch) {
    // API REQUEST TO  CREATE
    setWatches({ ...watches, watches: [...regularWatches, watch] })
  }

  async function deleteWatch(id, index) {
    // API REQUEST TO DELETE
    if (id) {
      // DELETE BY ID
      return setWatches({
        ...watches,
        watches: regularWatches.filter(watch => watch.rmc !== id)
      })
    }
    // DELETE BY INDEX => deleteWatch(null, index)
    setWatches({
      ...watches,
      watches: regularWatches.filter((watch, _index) => index !== _index)
    })
  }

  async function addFilter() {
    // LOGIC TO ADD FILTERS
    return []
  }

  function clearWatches() {
    setWatches({ ...watches, watches: [] })
  }

  return { state: watches, actions, setWatches }
  // return { watches, setWatches, addWatch, deleteWatch, addFilter, clearWatches }
}
