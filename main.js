
// Volume Slider
// let video = document.getElementById('video');
// let volu3 = document.getElementById('vol-control');

// window.setInterval(changevolume(), 1);

// function changevolume() {

//  let x = volu3.value;
//  let y = x / 100;

//  video.volume = y;
// }

// Search Bar
let songs = []
function search() {
    let input = document.getElementById("mySearch");
    let searchT = input.value;
    console.log (searchT)
    let url= "https://itunes.apple.com/search?term=" + searchT + "&media=music"
    console.log (url)

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log (data)
        songs = data.results
        let results = document.getElementById("results")
        results.innerHTML = ' '
        for (let song of data.results) {
            // console.log (song)
            console.log (song.artistName)
            console.log (song.trackName)
            console.log (song.artworkUrl100)
            
            let html= '<div onclick="cs_change_music(\'' +song.previewUrl + '\');" class="result">' ;
            html= html+ '<img src="' + song.artworkUrl100 + '" alt="">';
            html= html+ '<div>' + song.trackName + '</div>';
            html= html+ '<br>';
            html= html+ '<div>' + song.artistName + '</div>';
            html= html+ '</div>';

            results.innerHTML += html
        }
    })
}

function cs_change_music(music)
{
document.getElementById("my-audio").pause();
document.getElementById("my-audio").setAttribute('src', music);
document.getElementById("my-audio").load();
document.getElementById("my-audio").play();

}


