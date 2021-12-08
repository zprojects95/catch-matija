const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const currentDate = new Date().getDate();

const targetDate = new Date (`December 11 2021 18:00:00`);

function updateCountdowntime() {
    const currentTime = new Date();
    const diff = targetDate - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/catch-matija/github/?amount=1')
	.then(res => res.json())
	.then(res => {
		console.log("Site visits: " + res.value);
	})
}

setInterval(updateCountdowntime, 1000);
updateVisitCount();
