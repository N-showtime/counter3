( () => {
    const $counter = document.getElementById ("js-counter");
    const $history = document.getElementById("js-history"); // 履歴表示用の要素を取得
    const clickHandler = () => {
        $counter.textContent = 0;
        if ($history) {
            $history.innerHTML = ""; // 履歴をクリア
        }
    };
    document.getElementById("js-reset-button").addEventListener("click", clickHandler);
})();