(() => {
    const $counter = document.getElementById("js-counter");
    const $history = document.getElementById("js-history"); // 履歴用の要素を取得
    
    const clickHandler = () => {
        // カウンターをリセット
        $counter.textContent = 0;

        // 履歴があればクリア
        if ($history) {
            $history.innerHTML = "";
        }
    };

    document.getElementById("js-reset-button").addEventListener("click", clickHandler);
})();
