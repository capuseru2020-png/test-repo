document.getElementById("calc").onclick = function () {
  const v = Number(document.getElementById("value").value);
  document.getElementById("score").textContent = "スコア：" + (v * 2);
};

document.getElementById("btn").onclick = function () {
  document.getElementById("result").textContent = "JavaScript 動いた";
};
