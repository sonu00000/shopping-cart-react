import { useEffect, useState } from "react"

export default function ProgressBar({ threshold, freeGift, total }) {
  const [progress, setProgress] = useState(0)

  // calculate progress width percentage to set it when total changes
  useEffect(() => {
    if (total >= threshold) {
      setProgress(100)
    } else {
      setProgress(Math.floor((total * 100) / threshold))
    }
  }, [total])

  return (
    <div className="gift-container">
      <p>
        Add &#8377;{threshold - total} to get a {freeGift.name}!
      </p>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  )
}
