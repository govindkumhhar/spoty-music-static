console.log("welcome to spotify");

// initialize the variables
let songindex = 0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById("masterplay");
let myprogressBar = document.getElementById("myProgressBar");
let gif = document.getElementById('gif');
let mastersongName = document.getElementById('mastersongName');

// let songItem = document.getElementsByClassName('songItem');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [

    {songName:"Duba rahoon",filePath:"1.mp3",coverpath:"1.jpeg"},
    {songName:"Dhadkno ki jaan",filePath:"2.mp3",coverpath:"2.jpeg"},
    {songName:"lakho mile",filePath:"3.mp3",coverpath:"3.jpeg"},
    {songName:"vidapatti",filePath:"4.mp3",coverpath:"4.jpeg"}
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
});




// audioElement.play();

// Handle play/pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle')
        masterplay.classList.add('fa-circle-play')
        gif.style.opacity = 1;
    }

})

// listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myprogressBar.value = progress;

})

myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressBar.value*audioElement.duration/100;
})


const makeAllplays = ()=>{    
Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-circle-play');

})
}


Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        makeAllplays();

        songindex = parseInt(e.target.id);

        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-pause-circle')
        audioElement.src =`${songindex+1}.mp3`;
        mastersongName.innerText =songs[songindex].songName



        audioElement.currentTime =0;
        
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=4){
        songindex = 0;
    }

    else{
        songindex += 1;

    }

    audioElement.src =`${songindex+1}.mp3`;
    mastersongName.innerText =songs[songindex].songName

    audioElement.currentTime =0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-pause-circle');

})


document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex = 0;
    }

    else{
        songindex -= 1;

    }

    audioElement.src =`${songindex+1}.mp3`;
    mastersongName.innerText =songs[songindex].songName

    audioElement.currentTime =0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-pause-circle');

})