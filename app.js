AOS.init()

// video pause and play btn ------------------------------------------------------------------------
const videos = document.querySelectorAll(".video")
const playButtons = document.querySelectorAll(".playBtn")

let currentlyPlaying = null

videos.forEach((video, index) => {
    const btn = playButtons[index]

    function playVideo() {
        if (currentlyPlaying && currentlyPlaying !== video) {
            currentlyPlaying.pause()
            const prevButton =
                playButtons[Array.from(videos).indexOf(currentlyPlaying)]
            prevButton.style.display = "flex"
            currentlyPlaying.classList.add("video-blur")
        }

        video.play()
        btn.style.display = "none"
        video.classList.remove("video-blur")
        currentlyPlaying = video
    }

    function pauseVideo() {
        video.pause()
        btn.style.display = "flex"
        video.classList.add("video-blur")
        currentlyPlaying = null
    }

    btn.addEventListener("click", (event) => {
        event.preventDefault()
        playVideo()
    })

    video.addEventListener("click", () => {
        if (!video.paused) {
            pauseVideo()
        } else {
            playVideo()
        }
    })
})
