/*
 * index.js
 */

'use strict';

// アプリケーションをコントロールするモジュール
var app = require('app');
// ウィンドウを作成するモジュール
var BrowserWindow = require('browser-window');
// 起動 URL
var currentURL = 'file://' + __dirname + '/index.html';

// クラッシュレポート
require('crash-reporter').start();

// メインウィンドウ
var mainWindow = null;

// 全てのウィンドウが閉じたら終了
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// Electronの初期化完了後に実行
app.on('ready', function() {
  // メイン画面のサイズ
  mainWindow = new BrowserWindow({width: 800, height: 600});
  // 起動 url を指定
  mainWindow.loadUrl(currentURL);

  // デベロッパーツールを表示
  // 不要であればコメントアウト
  mainWindow.toggleDevTools();

  // ウィンドウが閉じられたらアプリも終了
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});