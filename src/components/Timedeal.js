import React from "react";

const Timedeal = () => { 
    
    //일일 단위 타임딜 설정
    const dayCountDown = () => {
        let today = new Date();
        let year = today.getFullYear();
        let month= today.getMonth()
        let date = today.getDate();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        let seconds = today.getSeconds();

        let countTime = parseInt(document.getElementById('setTime').value); //설정한 타이머 시간
        let nowDate = new Date(year, month, date + countTime, hours, minutes, seconds);

        //10보다 작은 숫자의 앞에 '0'을 추가
        const formatTime = (time) => {
            return time < 10 ? '0' + time : time;
        }

        const countDown = () => {
            const timeOutDate = new Date(nowDate); //종료 시간
            const currentDate = new Date(); //현재 시간

            const totalSeconds = (timeOutDate - currentDate) / 1000;
            const days = Math.floor(totalSeconds / 3600 / 24);
            const hours = (Math.floor(totalSeconds / 3600) % 24);
            const minutes = (Math.floor(totalSeconds /60) % 60);
            const seconds = Math.floor(totalSeconds) % 60;

            //타임딜 종료
            if(totalSeconds < 1) {
                clearInterval(timer);
                document.getElementById('timeOut').innerText = "타임딜 - 이벤트 종료";
            }

            document.getElementById('days').innerText = formatTime(days);
            document.getElementById('hours').innerText = formatTime(hours);
            document.getElementById('minutes').innerText = formatTime(minutes);
            document.getElementById('seconds').innerText = formatTime(seconds);
        }

        const timer = setInterval(countDown, 1000)
    }

    //시간 단위 타임딜 설정
    const houreCountDown = () => {
        let today = new Date();
        let year = today.getFullYear();
        let month= today.getMonth()
        let date = today.getDate();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        let seconds = today.getSeconds();

        let countTime = parseInt(document.getElementById('setTime').value); //설정한 타이머 시간
        let nowDate = new Date(year, month, date, hours + countTime, minutes, seconds);

        //10보다 작은 숫자의 앞에 '0'을 추가
        const formatTime = (time) => {
            return time < 10 ? '0' + time : time;
        }

        const countDown = () => {
            const timeOutDate = new Date(nowDate); //종료 시간
            const currentDate = new Date(); //현재 시간

            const totalSeconds = (timeOutDate - currentDate) / 1000;
            const days = Math.floor(totalSeconds / 3600 / 24);
            const hours = (Math.floor(totalSeconds / 3600) % 24);
            const minutes = (Math.floor(totalSeconds /60) % 60);
            const seconds = Math.floor(totalSeconds) % 60;

            //타임딜 종료
            if(totalSeconds < 1) {
                clearInterval(timer);
                document.getElementById('timeOut').innerText = "타임딜 - 이벤트 종료";
            }

            document.getElementById('days').innerText = formatTime(days);
            document.getElementById('hours').innerText = formatTime(hours);
            document.getElementById('minutes').innerText = formatTime(minutes);
            document.getElementById('seconds').innerText = formatTime(seconds);
        }

       const timer = setInterval(countDown, 1000)
    }
    return(
        <div>
            <select id="setTime">
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
            <button onClick={dayCountDown}>일</button>
            <button onClick={houreCountDown}>시간</button>

            <div className="timeDeal">
                <h3 className="title" id="timeOut">타임딜</h3>
                <div className="countDown">
                    <div>
                        <span id="days" className="countText">0</span>
                        <br />
                        <span>days</span>
                    </div>
                    <div>
                        <span id="hours" className="countText">0</span>
                        <br />
                        <span>hours</span>
                    </div>
                    <div>
                        <span id="minutes" className="countText">0</span>
                        <br />
                        <span>minutes</span>
                    </div>
                    <div>
                        <span id="seconds" className="countText">0</span>
                        <br />
                        <span>seconds</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timedeal;
