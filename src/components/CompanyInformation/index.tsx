"use client"

import { useEffect, useRef } from "react"

export default function CompanyInformation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match parent container
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.offsetWidth
        canvas.height = parent.offsetHeight
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Network visualization parameters
    const nodes: { x: number; y: number; radius: number; speed: number; connections: number[] }[] = []
    const numNodes = 40
    const maxConnections = 5
    const maxRadius = 15
    const minRadius = 3

    // Create nodes
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * (maxRadius - minRadius) + minRadius,
        speed: Math.random() * 0.2 + 0.1,
        connections: [],
      })
    }

    // Create connections between nodes
    for (let i = 0; i < nodes.length; i++) {
      const numConnections = Math.floor(Math.random() * maxConnections) + 1
      for (let j = 0; j < numConnections; j++) {
        const targetIndex = Math.floor(Math.random() * nodes.length)
        if (targetIndex !== i && !nodes[i].connections.includes(targetIndex)) {
          nodes[i].connections.push(targetIndex)
        }
      }
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      ctx.strokeStyle = "rgba(127, 196, 253, 0.2)"
      ctx.lineWidth = 0.5

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]
        for (const connectionIndex of node.connections) {
          const connectedNode = nodes[connectionIndex]
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(connectedNode.x, connectedNode.y)
          ctx.stroke()
        }
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]

        // Update node position
        node.x += Math.sin(Date.now() * 0.001 + i) * node.speed
        node.y += Math.cos(Date.now() * 0.001 + i) * node.speed

        // Keep nodes within canvas
        if (node.x < 0) node.x = canvas.width
        if (node.x > canvas.width) node.x = 0
        if (node.y < 0) node.y = canvas.height
        if (node.y > canvas.height) node.y = 0

        // Draw node
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(127, 196, 253, ${0.1 + (node.radius / maxRadius) * 0.2})`
        ctx.fill()
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <div className="relative w-full bg-sub-blue font-japanese text-white">
      {/* Background canvas for network visualization */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" style={{ zIndex: 1 }} />

      {/* Content container */}
      <div className="relative mx-auto max-w-4xl px-4 py-16 md:px-8" style={{ zIndex: 2 }}>
        {/* Title */}
        <div className="mb-12 text-center">
          <h1 className="mb-2 text-4xl font-bold">企業情報</h1>
          <p className="text-lg tracking-wider">COMPANY INFORMATION</p>
        </div>

        {/* Company information table */}
        <div className="mx-auto max-w-3xl">
          {/* Company Name */}
          <div className="border-b border-key-blue/30 py-4 grid grid-cols-3">
            <div className="text-sm md:text-base">社名</div>
            <div className="col-span-2 text-sm md:text-base">株式会社Del Qui</div>
          </div>

          {/* Established */}
          <div className="border-b border-key-blue/30 py-4 grid grid-cols-3">
            <div className="text-sm md:text-base">設立</div>
            <div className="col-span-2 text-sm md:text-base">2022年1月</div>
          </div>

          {/* Headquarters */}
          <div className="border-b border-key-blue/30 py-4 grid grid-cols-3">
            <div className="text-sm md:text-base">本社所在地</div>
            <div className="col-span-2 text-sm md:text-base">沖縄県石垣島</div>
          </div>

          {/* Overseas Office */}
          <div className="border-b border-key-blue/30 py-4 grid grid-cols-3">
            <div className="text-sm md:text-base">海外駐在所</div>
            <div className="col-span-2 text-sm md:text-base">Ho Chi Minh City</div>
          </div>

          {/* Capital */}
          <div className="border-b border-key-blue/30 py-4 grid grid-cols-3">
            <div className="text-sm md:text-base">資本金</div>
            <div className="col-span-2 text-sm md:text-base">650万円（資本準備金含む）</div>
          </div>

          {/* Business Description */}
          <div className="border-b border-key-blue/30 py-4 grid grid-cols-3">
            <div className="text-sm md:text-base">事業内容</div>
            <div className="col-span-2 text-sm md:text-base">
              各種ソフトウェアの開発、モバイルアプリの開発、ITコンサルティング、自社プロダクトの開発、他
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

