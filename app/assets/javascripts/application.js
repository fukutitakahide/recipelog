// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

document.addEventListener('DOMContentLoaded', () => {
 
  // ナビゲーションバーガー（navbar-burgerクラスを持つすべての要素）を取得します。
  const $navbarBurgers = document.querySelectorAll('.navbar-burger');
 
  // ナビゲーションバーガーがあるかどうかを確認します。
  if ($navbarBurgers.length > 0) {
 
    // すべてのナビゲーションバーガーをループします。
    $navbarBurgers.forEach( el => {
 
      // ナビゲーションバーガーにクリックイベントを追加します。
      el.addEventListener('click', () => {
 
        // ナビゲーションバーガーのdata-target属性の値を取得します。
        const target = el.dataset.target;
        // メニュー（data-target属性の値をIDとして持つ要素）を取得します。
        const $target = document.getElementById(target);
 
        // ナビゲーションバーガーでis-activeクラスを切り替えます。
        el.classList.toggle('is-active');
        // メニューでis-activeクラスを切り替えます。
        $target.classList.toggle('is-active');
 
      });
    });
  }
});

