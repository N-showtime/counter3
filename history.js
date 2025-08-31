(() => {
    const $history = document.getElementById("js-history");

    // 履歴に1件追加
    window.addHistory = (count) => {
        const li = document.createElement("li");
        li.textContent = count;
        $history.appendChild(li);
    };

    // 履歴を全部消す
    window.clearHistory = () => {
        $history.innerHTML = "";
    };
})();
