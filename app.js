window.addEventListener('keydown', function(e) {
    const audio= document.querySelector(`audio[data-key="${e.keycode}"]`);
    const key= document.querySelector(`.key[data-key="${e.keycode}"]`);
   if(!audio) return; // stop the audio function from running all together
   audio.currentTime=  0; // rewinds the sound to start point
   audio.play();
   key.classList.add('playing');
});

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip if its not a transform event happening 
    this.classlist.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitioned', removeTransition));
