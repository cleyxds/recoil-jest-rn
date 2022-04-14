import { selector } from "recoil"
import Watches from ".."

const GetWatchesByFamilyCode = selector({
  key: "GetWatchesByFamilyCode",
  set: ({ set, get }, rmc) => {
    set(Watches, { ...get(Watches), filterRmc: rmc })
  },
  get: ({ get }) => {
    const data = get(Watches)

    // return watches.filter(watch => watch.rmc === familyCode)
    return data.watches.filter(watch => watch.familyCode === data.filterRmc)
  }
})

export default GetWatchesByFamilyCode
