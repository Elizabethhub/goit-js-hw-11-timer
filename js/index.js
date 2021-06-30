class CountdownTimer {
  constructor({ targetDate, selector }) {
    this.targetDate = targetDate;
    this.selector = document.querySelector(selector);
    this.days = this.selector.querySelector('[data-value="days"]');
    this.hours = this.selector.querySelector('[data-value="hours"]');
    this.mins = this.selector.querySelector('[data-value="mins"]');
    this.secs = this.selector.querySelector('[data-value="secs"]');
  }
  updatePage({ days, hours, mins, secs }) {
    this.days.textContent = this.padStart(days);
    this.hours.textContent = this.padStart(hours);
    this.mins.textContent = this.padStart(mins);
    this.secs.textContent = this.padStart(secs);
    console.log(this.padStart(days));
  }
  timeUpdate(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return { days, hours, mins, secs };
  }
  start() {
    setInterval(() => {
      this.timer();
    }, 1000);
    this.timer();
  }
  timer() {
    const time = this.targetDate - Date.now();
    const data = this.timeUpdate(time);
    this.updatePage(data);
    console.log(data);
  }
  padStart(data) {
    return String(data).padStart(2, "0");
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Dec 31, 2021"),
});
timer.start();
