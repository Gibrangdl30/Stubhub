"use client"

import { useEffect, useRef } from "react"

export function Fireworks() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const $ = canvas.getContext("2d")
    if (!$) return

    let t = 0
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    $.fillStyle = "hsla(0,0%,0%,1)"

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize, false)

    function draw() {
      $.globalCompositeOperation = "source-over"
      $.fillStyle = "hsla(0,0%,0%,.1)"
      $.fillRect(0, 0, canvas.width, canvas.height)

      const foo = Math.sin(t) * 2 * Math.PI

      for (let i = 0; i < 400; ++i) {
        const r = 400 * Math.sin(i * foo)
        $.globalCompositeOperation = "lighter"
        $.fillStyle = "hsla(" + i + 12 + ",100%, 60%,1)"
        $.beginPath()
        $.arc(Math.sin(i) * r + canvas.width / 2, Math.cos(i) * r + canvas.height / 2, 1.5, 0, Math.PI * 2)
        $.fill()
      }

      t += 0.000005
      t %= 2 * Math.PI
    }

    function run() {
      window.requestAnimationFrame(run)
      draw()
    }

    run()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </div>
  )
}
