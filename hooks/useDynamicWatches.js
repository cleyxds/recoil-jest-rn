import Watches from "../atoms/Watches"
import { useRecoilState } from "recoil"

export default () => {
  const [watches] = useRecoilState(Watches)

  return { watches }
}
