const btn = document.querySelectorAll('.btn');

const stopsound = ()=>{
    btn.forEach((button)=>{
        const sound=  document.getElementById(button.innerHTML);
      sound.pause();
      sound.currentTime=0;
    })
}

btn.forEach((button)=>{
    button.addEventListener("click",()=>{
        stopsound();
        document.getElementById(button.innerHTML).play();
    })
})