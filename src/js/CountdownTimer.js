export class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.refs = {
            timer: document.querySelector(selector),
            days: document.querySelector(`${selector} [data-value="days"]`),
            hours: document.querySelector(`${selector} [data-value="hours"]`),
            minutes: document.querySelector(`${selector} [data-value="mins"]`),
            seconds: document.querySelector(`${selector} [data-value="secs"]`),
        };
        this.intervalId = null;
        this.targetDate = targetDate;
        this.selector = selector;
        this.startTimer();
    }

    getTime() {
        const currentTime = Date.now();
        const time = this.targetDate - currentTime;
        const endTime = this.getTimeRemaining(time);
        this.updateClockInterface(endTime);
        
    }
    
    getTimeRemaining(time) { 
        const seconds = Math.floor((time % (1000 * 60)) / 1000);
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const days = Math.floor(time / (1000 * 60 * 60 * 24));

          if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
              clearInterval(this.intervalId);
              this.refs.timer.textContent = "Happy New Year!";
              this.refs.days.textContent = this.refs.hours.textContent = this.refs.minutes.textContent = this.refs.secondss.textContent = 0;
        }

        return {
            time,
            days,
            hours,
            minutes,
            seconds
        };
    }

    updateClockInterface(time) {
    this.refs.days.textContent = String(time.days).padStart(2, '0');
    this.refs.hours.textContent = String(time.hours).padStart(2, '0');
    this.refs.minutes.textContent = String(time.minutes).padStart(2, '0');
    this.refs.seconds.textContent = String(time.seconds).padStart(2, '0');

    }

    startTimer() {
        this.getTime();

        this.intervalId = setInterval(() => {
            this.getTime();
        }, 1000);
        
    };

}


