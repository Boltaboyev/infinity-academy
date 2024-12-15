AOS.init()

// popup window --------------------------------------------------------------------------------------
const openPopupButton = document.getElementById("open-popup")
const closePopupButton = document.getElementById("close-popup")
const popup = document.getElementById("popup")

openPopupButton.addEventListener("click", () => {
    popup.classList.add("show")
})

closePopupButton.addEventListener("click", () => {
    popup.classList.remove("show")
})

popup.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.classList.remove("show")
    }
})

// tel number regex --------------------------------------------------------------------------------
document.querySelector(".input-field").addEventListener("input", (event) => {
    const input = event.target
    let value = input.value.replace(/\D/g, "")

    if (value.length > 2) {
        value = `(${value.substring(0, 2)}) ${value.substring(2)}`
    }
    if (value.length > 8) {
        value = `${value.substring(0, 8)}-${value.substring(8)}`
    }
    if (value.length > 11) {
        value = `${value.substring(0, 11)}-${value.substring(11, 13)}`
    }

    input.value = value
})

// video pause and play btn ------------------------------------------------------------------------
// const videos = document.querySelectorAll(".video")
// // const playButtons = document.querySelectorAll(".playBtn")

// let currentlyPlaying = null

// videos.forEach((video, index) => {
//     const btn = playButtons[index]

//     function playVideo() {
//         if (currentlyPlaying && currentlyPlaying !== video) {
//             currentlyPlaying.pause()
//             const prevButton =
//                 playButtons[Array.from(videos).indexOf(currentlyPlaying)]
//             prevButton.style.display = "flex"
//             currentlyPlaying.classList.add("video-blur")
//         }

//         video.play()
//         btn.style.display = "none"
//         video.classList.remove("video-blur")
//         currentlyPlaying = video
//     }

//     function pauseVideo() {
//         video.pause()
//         btn.style.display = "flex"
//         video.classList.add("video-blur")
//         currentlyPlaying = null
//     }

//     btn.addEventListener("click", (event) => {
//         event.preventDefault()
//         playVideo()
//     })

//     video.addEventListener("click", () => {
//         if (!video.paused) {
//             pauseVideo()
//         } else {
//             playVideo()
//         }
//     })
// })

// Select all video elements
const videos = document.querySelectorAll(".video")

videos.forEach((video) => {
    video.addEventListener("play", () => {
        videos.forEach((otherVideo) => {
            if (otherVideo !== video) {
                otherVideo.pause()
            }
        })
    })
})
