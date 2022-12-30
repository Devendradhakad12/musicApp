let songIndex = 0;
let songs = [

  {songName:"Artificial_World_-_mindthings",filePath:"songs/1.mp3"},
  {songName:"Blue_Field_-_mindthings",filePath:"songs/2.mp3"},
  {songName:"Constellate_-_Fleurie",filePath:"songs/3.mp3"},
  {songName:"Exponential_Tears_-_mindthings",filePath:"songs/4.mp3"},
  {songName:"Gone_-_Michael_McEachern",filePath:"songs/5.mp3"},
  {songName:"Love_Will_Come_Back_Again_-_Chaz_Robinson",filePath:"songs/6.mp3"},
  {songName:"Shared_Loneliness_-_mindthings",filePath:"songs/7.mp3"},
  {songName:"Spring_-_mindthings",filePath:"songs/8.mp3"},
  {songName:"Strong_-_JEKK",filePath:"songs/9.mp3"},
  {songName:"Stars_Of_My_Mind_-_mindthings",filePath:"songs/10.mp3"},
  { songName:"What_Is_Love_-_melanieungar",
    filePath:'songs/11.mp3',  
      //coverPath:
  },


];

let songItems = document.getElementsByClassName('songItems');
Array.from(songItems).forEach((e,i)=>{
 e.getElementsByClassName('songName')[0].innerText = songs[i].songName 
 // e.getElementsByTagName('img')[0].src  = songs[i].coverPath
})

//play all song
const makeAllplay = ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.add('fa-circle-play');
    element.classList.remove('fa-circle-pause')
  })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    makeAllplay();
    songIndex = parseInt(e.target.id)
    audioElement.src = `songs/${songIndex}.mp3`
    audioElement.play()
    audioElement.currentTime = 0 
  e.target.classList.remove('fa-circle-play')
  e.target.classList.add('fa-circle-pause')
  masterplay.classList.remove('fa-circle-play')
  masterplay.classList.add('fa-circle-pause')
  })
})



let audioElement = new Audio('songs/1.mp3')
 let masterplay = document.getElementById('masterplay')
 let inp_progress = document.getElementById('inp_progress')
 
 //Handle play/pause click
 masterplay.addEventListener('click',()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play()
    masterplay.classList.remove('fa-circle-play')
    masterplay.classList.add('fa-circle-pause')
  }
  else{
    audioElement.pause()
    masterplay.classList.add('fa-circle-play')
    masterplay.classList.remove('fa-circle-pause')
  }
 })
 //seek the progressbar
 audioElement.addEventListener('timeupdate',()=>{
   progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  inp_progress.value = progress
 })
 inp_progress.addEventListener('change',()=>{
  audioElement.currentTime = inp_progress.value * audioElement.duration/100
 })



 //next
 document.getElementById('next').addEventListener('click',()=>{
  if(songIndex>=10){
   songIndex = 0
  }else{
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex}.mp3`
  audioElement.play()
  audioElement.currentTime = 0 
masterplay.classList.remove('fa-circle-play')
masterplay.classList.add('fa-circle-pause')
 })

  //previous
  document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
     songIndex = 0
    }else{
      songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`
    audioElement.play()
    audioElement.currentTime = 0 
  masterplay.classList.remove('fa-circle-play')
  masterplay.classList.add('fa-circle-pause')
   })