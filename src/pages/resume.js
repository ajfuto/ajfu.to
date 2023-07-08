import { navigate } from "@reach/router"
import { useEffect } from "react"

export default function Resume() {
  useEffect(() => {
    navigate("https://ajfu.to/aj_futo_resume.pdf")
  }, []);
  return null;
}
