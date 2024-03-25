console.log("welcome to my page");
// var for play and pause 
var masterPlay = document.getElementById('masterPlay');

// For which song are playing for this code 

var playsongName = document.getElementById('playsongName');

var audioElement = new Audio('./music/4.mp3');
var song = [
    {songName : "Love Me Like You Do",filePath : "./music/1.mp3"},
    {songName : "Runak Jhunak ",filePath : "./music/2.mp3"},
    {songName : "Yeh Raate Ye Mausam",filePath : "./music/3.mp3"},
    {songName : "Brown Rang",filePath : "./music/4.mp3"},
    {songName : "Desi kalakar",filePath : "./music/5.mp3"},
    {songName : "Blue eyes",filePath : "./music/6.mp3"},
    {songName : "Manali Trance",filePath : "./music/7.mp3"},
    {songName : "People X Naino Vale Ne",filePath : "./music/8.mp3"},
    {songName : "Dev Dwarka No Nath",filePath : "./music/9.mp3"},
    {songName : "Rabbta",filePath : "./music/10.mp3"},
    
]
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
});


// var for seekbar
var Rang_for_song = document.getElementById('Rang_for_song');


audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.clear();
    // console.log(progress);
    Rang_for_song.value = progress;
})

Rang_for_song.addEventListener('change',()=>{
    audioElement.currentTime=Rang_for_song.value*audioElement.duration/100;
})


// playingAll Song 

var songIndex = 0;

const makeAllplay = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplay();
        songIndex = parseInt(e.target.id)
        element.classList.remove('fa-circle-play');
        element.classList.add('fa-circle-pause');
        audioElement.src = `music/${songIndex+1}.mp3`;
        playsongName.innerText = song[songIndex].songName;  
        audioElement.currentTime = 0 ;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})


// Play Next and Previous icon 
document.getElementById('next').addEventListener('click',() =>{
    if(songIndex>=9){
        songIndex = 0 ;
    }
    else{
        songIndex += 1;
    }

    audioElement.src = `music/${songIndex+1}.mp3`;
    playsongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0 ;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});


document.getElementById('previous').addEventListener('click',() =>{
    if(songIndex<=0){
        songIndex = 0 ;
    }
    else{
        songIndex -= 1;
    }

    audioElement.src = `music/${songIndex+1}.mp3`;
    playsongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0 ;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})