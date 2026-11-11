$(function () {
  // コンピューターが顔を向ける方向の候補
  const directions = ["上", "下", "左", "右"];

  // 方向ボタンがクリックされたときの処理
  $(".direction-button").on("click", function () {
    // あなたが選んだ方向を取得する
    const playerDirection = $(this).data("direction");

    // コンピューターの方向をランダムに決める
    const randomNumber = Math.floor(Math.random() * directions.length);
    const computerDirection = directions[randomNumber];

    // 方向が同じかどうかで結果を決める
    let message;

    if (playerDirection === computerDirection) {
      message = "同じ方向！あなたの勝ち！";
    } else {
      message = "ざんねん！もう一度挑戦！";
    }

    // 画面に結果を表示する
    $("#result").html(
      "あなたが指をさした方向：" + playerDirection + "<br>" +
      "コンピューターが顔を向けた方向：" + computerDirection + "<br>" +
      "<strong>" + message + "</strong>"
    );
  });

  // キーボードのキーが押されたときの処理
  $(document).on("keydown", function (event) {
    let direction;

    // 押された方向キーに合わせて方向を決める
    if (event.key === "ArrowUp") {
      direction = "上";
    } else if (event.key === "ArrowDown") {
      direction = "下";
    } else if (event.key === "ArrowLeft") {
      direction = "左";
    } else if (event.key === "ArrowRight") {
      direction = "右";
    } else {
      // 方向キー以外なら処理を終える
      return;
    }

    // 方向キーで画面がスクロールするのを防ぐ
    event.preventDefault();

    // 対応するボタンをクリックしたことにする
    $('.direction-button[data-direction="' + direction + '"]').trigger("click");
  });
});