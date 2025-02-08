let time1 = 3600; 

const timer1Interval = setInterval(() => {
    time1--;

    const minutes = Math.floor(time1 / 60);
    const seconds = time1 % 60;
    document.getElementById('timer1').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    if (time1 === 1800) { 
        alert('Залишилось менше половини часу!');
    }

    if (time1 <= 0) {
        clearInterval(timer1Interval);
    }
}, 1000 * 60);




let time2 = 30000; 

const timer2Interval = setInterval(() => {
    time2 -= 1;

    const seconds = Math.floor(time2 / 1000);
    const milliseconds = time2 % 1000;
    document.getElementById('timer2').textContent = `${seconds}:${milliseconds < 100 ? '0' : ''}${milliseconds < 10 ? '0' : ''}${milliseconds}`;

    if (time2 === 10000) { 
        document.getElementById('box').style.display = 'block'; 
    }

    if (time2 <= 0) {
        clearInterval(timer2Interval);
        document.getElementById('startBtn').disabled = false; 
    }
}, 1); 