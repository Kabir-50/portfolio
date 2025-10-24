import { Html, useProgress } from '@react-three/drei'

const CanvasLoader = () => {
  const { progress } = useProgress()
  
  return (
    <Html center>
      <div className="flex flex-col items-center gap-2">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-white text-sm">{progress.toFixed(0)}% loaded</p>
      </div>
    </Html>
  )
}

export default CanvasLoader