import './salon.css'

export default function Equipo() {
    /*--------------------
    Vars
    --------------------*/
    let progress = 50
    let startX = 1
    let active = 0
    let isDown = false

    /*--------------------
    Contants
    --------------------*/
    const speedWheel = 0.02
    const speedDrag = -0.1

    /*--------------------
    Get Z
    --------------------*/
    const getZindex = (array, index) => (array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i)))

    /*--------------------
    Items
    --------------------*/
    const $items = document.querySelectorAll('.carousel-item')
    const $cursors = document.querySelectorAll('.cursor')

    const displayItems = (item, index, active) => {
    const zIndex = getZindex([...$items], active)[index]
    item.style.setProperty('--zIndex', zIndex)
    item.style.setProperty('--active', (index-active)/$items.length)
    }

    /*--------------------
    Animate
    --------------------*/
    const animate = () => {
    progress = Math.max(0, Math.min(progress, 100))
    active = Math.floor(progress/100*($items.length-1))
    
    $items.forEach((item, index) => displayItems(item, index, active))
    }
    animate()

    /*--------------------
    Click on Items
    --------------------*/
    $items.forEach((item, i) => {
    item.addEventListener('click', () => {
        progress = (i/$items.length) * 100 + 10
        animate()
    })
    })

    /*--------------------
    Handlers
    --------------------*/
    const handleWheel = e => {
    const wheelProgress = e.deltaY * speedWheel
    progress = progress + wheelProgress
    animate()
    }

    const handleMouseMove = (e) => {
    if (e.type === 'mousemove') {
        $cursors.forEach(($cursor) => {
        $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
        })
    }
    if (!isDown) return
    const x = e.clientX || (e.touches && e.touches[0].clientX) || 0
    const mouseProgress = (x - startX) * speedDrag
    progress = progress + mouseProgress
    startX = x
    animate()
    }

    const handleMouseDown = e => {
    isDown = true
    startX = e.clientX || (e.touches && e.touches[0].clientX) || 0
    }

    const handleMouseUp = () => {
    isDown = false
    }

    /*--------------------
    Listeners
    --------------------*/
    document.addEventListener('mousewheel', handleWheel)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('touchstart', handleMouseDown)
    document.addEventListener('touchmove', handleMouseMove)
    document.addEventListener('touchend', handleMouseUp)

    return (
        <> 
            <div class="carousel" id="linkSalon">
                <h1 className='h1Salon'>EL SALÓN</h1>
                <div class="carousel-item">
                    <div class="carousel-box">
                        <div class="num">01</div>
                        <img src="/salon.jpg" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="carousel-box">
                        <div className="num">02</div>
                        <img src="/salon2.jpg" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="carousel-box">
                        <div className="num">03</div>
                        <img
                            src="/salon3.jpg"
                        />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="carousel-box">
                        <div className="num">04</div>
                        <img src="/salon4.jpg" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="carousel-box">
                        <div className="num">05</div>
                        <img src="/salon5.jpg" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="carousel-box">
                        <div className="num">06</div>
                        <img src="/salon6.jpg" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="carousel-box">
                        <div className="num">07</div>
                        <img src="/salon7.jpg" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="carousel-box">
                        <div className="num">08</div>
                        <img src="/salon8.jpg" />
                    </div>
                </div>
            </div>

            <div className="cursor"></div>
            <div className="cursor cursor2"></div>
        </>
    )
}