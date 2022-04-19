import Watches from "../atoms/Watches"
import { useRecoilValue } from "recoil"

export default () => {
  const watches = useRecoilValue(Watches)

  return { watches }
}
