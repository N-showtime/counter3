(() => {
    const $counter = document.getElementById("js-counter");

    const MAX_COUNT = 10; //最大値
    const MIN_COUNT = 0; //最小値
    
    const clickHandler = (e) => {
        const $targetButton = e.currentTarget;
        let currentCount = parseInt($counter.textContent);
        if($targetButton.textContent === "+"){
            if(currentCount < MAX_COUNT) {
                $counter.textContent = currentCount + 1;
                $counter.style.color = "green"; //増加したら緑表示
            }
        } else {
            if(currentCount > MIN_COUNT) {
                $counter.textContent = currentCount - 1;
                $counter.style.color = "red"; //減少したら緑表示
            }
        }
        addHistory(currentCount);
    }

    for (let index = 0; index < document.getElementsByClassName("js-button").length; index++) {
        document.getElementsByClassName("js-button")[index].addEventListener("click", clickHandler)
    }
})();