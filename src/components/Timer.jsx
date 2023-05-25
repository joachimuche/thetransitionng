import React, {useEffect, useRef, useState} from "react";

  
const Timer = () => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('June 30 2023 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                // stop timer
                clearInterval(interval.current);
            } else {
                // update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval();
        }
    })

    return (
        <div>
            <div class="flex justify-center px-5 py-5" >
                <div class="">
                    <h1 class="sm:text-2xl lg:text-3xl text-center mb-3 font-sans font-light text-white sm:text-xl">Counting Down <br/> in</h1>
                    <div class="text-4xl text-center flex gap-2 items-center justify-center">
                        <div class="px-3 lg:px-5 py-2 bg-black border border-white text-white rounded-lg">
                            <div class="font-mono leading-none" x-text="days">{timerDays}</div>
                            <div class="font-mono uppercase text-sm leading-none">Days</div>
                        </div>
                        <div class="px-3 lg:px-5 py-2 bg-black border border-white text-white rounded-lg">
                            <div class="font-mono leading-none" x-text="hours">{timerHours}</div>
                            <div class="font-mono uppercase text-sm leading-none">Hours</div>
                        </div>
                        <div class="px-3 lg:px-4 py-2 bg-black border border-white text-white rounded-lg">
                            <div class="font-mono leading-none" x-text="minutes">{timerMinutes}</div>
                            <div class="font-mono uppercase text-sm leading-none">Minutes</div>
                        </div>
                        {/* <div class="text-2xl mx-1 text-white font-extralight">and</div> */}
                        <div class="px-3 lg:px-4 py-2 bg-black border border-white text-white rounded-lg">
                            <div class="font-mono leading-none" x-text="seconds">{timerSeconds}</div>
                            <div class="font-mono uppercase text-sm leading-none">Seconds</div>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    );
};     

export default Timer;