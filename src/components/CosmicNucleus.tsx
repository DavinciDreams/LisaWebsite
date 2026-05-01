import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { createNoise3D } from 'simplex-noise'
import './CosmicNucleus.css'

const CosmicNucleus = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const noise3D = createNoise3D()
  
  useEffect(() => {
    if (!containerRef.current) return

    let renderer: THREE.WebGLRenderer
    let scene: THREE.Scene
    let camera: THREE.PerspectiveCamera
    let sphereBg: THREE.Mesh
    let nucleus: THREE.Mesh
    let stars: THREE.Points
    let controls: OrbitControls
    let animationId: number
    let resizeObserver: ResizeObserver
    const blobScale = 3

    const init = () => {
      scene = new THREE.Scene()

      camera = new THREE.PerspectiveCamera(55, containerRef.current!.clientWidth / containerRef.current!.clientHeight, 0.01, 1000)
      camera.position.set(0, 0, 230)

      const directionalLight = new THREE.DirectionalLight('#fff', 2)
      directionalLight.position.set(0, 50, -20)
      scene.add(directionalLight)

      const ambientLight = new THREE.AmbientLight('#ffffff', 1)
      ambientLight.position.set(0, 20, 20)
      scene.add(ambientLight)

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setSize(containerRef.current!.clientWidth, containerRef.current!.clientHeight)
      renderer.setPixelRatio(window.devicePixelRatio)
      containerRef.current!.appendChild(renderer.domElement)

      // OrbitControl
      controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.autoRotateSpeed = 4
      controls.maxDistance = 350
      controls.minDistance = 150
      controls.enablePan = false

      const loader = new THREE.TextureLoader()
      
      // Use fallback colors if textures fail to load
      const textureSphereBg = loader.load(
        'https://i.ibb.co/4gHcRZD/bg3-je3ddz.jpg',
        undefined,
        undefined,
        () => {
          // Fallback if texture fails to load
        }
      )
      const texturenucleus = loader.load(
        'https://i.ibb.co/hcN2qXk/star-nc8wkw.jpg',
        undefined,
        undefined,
        () => {
          // Fallback if texture fails to load
        }
      )
      const textureStar = loader.load(
        'https://i.ibb.co/ZKsdYSz/p1-g3zb2a.png',
        undefined,
        undefined,
        () => {
          // Fallback if texture fails to load
        }
      )
      const texture1 = loader.load(
        'https://i.ibb.co/F8by6wW/p2-b3gnym.png',
        undefined,
        undefined,
        () => {
          // Fallback if texture fails to load
        }
      )
      const texture2 = loader.load(
        'https://i.ibb.co/yYS2yx5/p3-ttfn70.png',
        undefined,
        undefined,
        () => {
          // Fallback if texture fails to load
        }
      )
      const texture4 = loader.load(
        'https://i.ibb.co/yWfKkHh/p4-avirap.png',
        undefined,
        undefined,
        () => {
          // Fallback if texture fails to load
        }
      )

      /*  Nucleus  */
      texturenucleus.anisotropy = 16
      const icosahedronGeometry = new THREE.IcosahedronGeometry(30, 10)
      const lambertMaterial = new THREE.MeshPhongMaterial({ map: texturenucleus })
      nucleus = new THREE.Mesh(icosahedronGeometry, lambertMaterial)
      scene.add(nucleus)

      /*    Sphere  Background   */
      textureSphereBg.anisotropy = 16
      const geometrySphereBg = new THREE.SphereGeometry(150, 40, 40)
      const materialSphereBg = new THREE.MeshBasicMaterial({
        side: THREE.BackSide,
        map: textureSphereBg,
      })
      sphereBg = new THREE.Mesh(geometrySphereBg, materialSphereBg)
      scene.add(sphereBg)

      /*    Moving Stars   */
      const starsGeometry = new THREE.BufferGeometry()
      const starPositions: Float32Array = new Float32Array(50 * 3)
      const starVelocities: number[] = []
      const starStartPositions: THREE.Vector3[] = []

      for (let i = 0; i < 50; i++) {
        const particleStar = randomPointSphere(150)

        const velocity = THREE.MathUtils.randInt(50, 200)
        starVelocities.push(velocity)

        const startX = particleStar.x
        const startY = particleStar.y
        const startZ = particleStar.z
        starStartPositions.push(new THREE.Vector3(startX, startY, startZ))

        starPositions[i * 3] = particleStar.x
        starPositions[i * 3 + 1] = particleStar.y
        starPositions[i * 3 + 2] = particleStar.z
      }

      starsGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
      const starsMaterial = new THREE.PointsMaterial({
        size: 5,
        color: '#ffffff',
        transparent: true,
        opacity: 0.8,
        map: textureStar,
        blending: THREE.AdditiveBlending,
      })
      starsMaterial.depthWrite = false
      stars = new THREE.Points(starsGeometry, starsMaterial)
      scene.add(stars)

      /*    Fixed Stars   */
      const createStars = (texture: THREE.Texture, size: number, total: number) => {
        const pointGeometry = new THREE.BufferGeometry()
        const pointPositions: Float32Array = new Float32Array(total * 3)
        const pointMaterial = new THREE.PointsMaterial({
          size: size,
          map: texture,
          blending: THREE.AdditiveBlending,
        })

        for (let i = 0; i < total; i++) {
          const radius = THREE.MathUtils.randInt(149, 70)
          const particles = randomPointSphere(radius)
          pointPositions[i * 3] = particles.x
          pointPositions[i * 3 + 1] = particles.y
          pointPositions[i * 3 + 2] = particles.z
        }

        pointGeometry.setAttribute('position', new THREE.BufferAttribute(pointPositions, 3))
        return new THREE.Points(pointGeometry, pointMaterial)
      }
      scene.add(createStars(texture1, 15, 20))
      scene.add(createStars(texture2, 5, 5))
      scene.add(createStars(texture4, 7, 5))

      function randomPointSphere(radius: number) {
        const theta = 2 * Math.PI * Math.random()
        const phi = Math.acos(2 * Math.random() - 1)
        const dx = 0 + (radius * Math.sin(phi) * Math.cos(theta))
        const dy = 0 + (radius * Math.sin(phi) * Math.sin(theta))
        const dz = 0 + (radius * Math.cos(phi))
        return new THREE.Vector3(dx, dy, dz)
      }
    }

    const animate = () => {
      // Stars Animation
      const positions = stars.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < 50; i++) {
        const idx = i * 3
        positions[idx] += (0 - positions[idx]) / starVelocities[i]
        positions[idx + 1] += (0 - positions[idx + 1]) / starVelocities[i]
        positions[idx + 2] += (0 - positions[idx + 2]) / starVelocities[i]

        starVelocities[i] -= 0.3

        if (positions[idx] <= 5 && positions[idx] >= -5 && positions[idx + 2] <= 5 && positions[idx + 2] >= -5) {
          positions[idx] = starStartPositions[i].x
          positions[idx + 1] = starStartPositions[i].y
          positions[idx + 2] = starStartPositions[i].z
          starVelocities[i] = THREE.MathUtils.randInt(50, 300)
        }
      }

      // Nucleus Animation
      const nucleusPositions = nucleus.geometry.attributes.position.array as Float32Array
      const nucleusOriginalPositions = nucleus.geometry.attributes.position.array.slice() as Float32Array
      for (let i = 0; i < nucleusPositions.length; i += 3) {
        const time = Date.now()
        const v = new THREE.Vector3(nucleusOriginalPositions[i], nucleusOriginalPositions[i + 1], nucleusOriginalPositions[i + 2])
        v.normalize()
        const distance = 30 + noise3D(
          v.x + time * 0.0005,
          v.y + time * 0.0003,
          v.z + time * 0.0008
        ) * blobScale
        v.multiplyScalar(distance)
        nucleusPositions[i] = v.x
        nucleusPositions[i + 1] = v.y
        nucleusPositions[i + 2] = v.z
      }
      nucleus.geometry.attributes.position.needsUpdate = true
      nucleus.geometry.computeVertexNormals()
      nucleus.rotation.y += 0.002

      // Sphere Background Animation
      sphereBg.rotation.x += 0.002
      sphereBg.rotation.y += 0.002
      sphereBg.rotation.z += 0.002

      controls.update()
      stars.geometry.attributes.position.needsUpdate = true
      renderer.render(scene, camera)
      animationId = requestAnimationFrame(animate)
    }

    // Store star data outside the init function
    const starVelocities: number[] = []
    const starStartPositions: THREE.Vector3[] = []

    init()
    animate()

    // Resize handling with ResizeObserver for better container size detection
    const handleResize = () => {
      if (!containerRef.current) return
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }

    // Use ResizeObserver to detect container size changes
    resizeObserver = new ResizeObserver(() => {
      handleResize()
    })
    resizeObserver.observe(containerRef.current)

    // Also listen to window resize as fallback
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (resizeObserver) {
        resizeObserver.disconnect()
      }
      cancelAnimationFrame(animationId)

      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement)
      }

      nucleus.geometry.dispose()
      if (Array.isArray(nucleus.material)) {
        nucleus.material.forEach(m => m.dispose())
      } else {
        nucleus.material.dispose()
      }
      sphereBg.geometry.dispose()
      if (Array.isArray(sphereBg.material)) {
        sphereBg.material.forEach(m => m.dispose())
      } else {
        sphereBg.material.dispose()
      }
      stars.geometry.dispose()
      if (Array.isArray(stars.material)) {
        stars.material.forEach(m => m.dispose())
      } else {
        stars.material.dispose()
      }
      renderer.dispose()
    }
  }, [noise3D])

  return (
    <div id="canvas_container" className="cosmic-nucleus-container" ref={containerRef} />
  )
}

export default CosmicNucleus
