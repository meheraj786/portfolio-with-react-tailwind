// BannerBg.js
import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

const BannerBg = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 1000)
    camera.position.z = 50

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    mount.appendChild(renderer.domElement)

    const geometry = new THREE.BufferGeometry()
    const vertices = []
    for (let i = 0; i < 500; i++) {
      vertices.push(
        (Math.random() * 2 - 1) * 50,
        (Math.random() * 2 - 1) * 30,
        (Math.random() * 2 - 1) * 10
      )
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5, opacity: 0.4, transparent: true })
    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    const animate = () => {
      requestAnimationFrame(animate)
      particles.rotation.y += 0.0005
      renderer.render(scene, camera)
    }
    animate()

    window.addEventListener('resize', () => {
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    })

    return () => {
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0" />
}

export default BannerBg
