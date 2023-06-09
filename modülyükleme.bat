echo off
title Modül Yükleyici v1.0
color e
cls
:a
npm install
if %errorlevel% equ 0 goto b
echo Modül Yüklenemedi, Tekrar Deneniyor...
//modül yüklendi 
:b
echo Modül Başarı İle Yüklendi! Burayı Kapatabilirsiniz. Mondros V1.0 İyi Kullanımlar Diler.
//programı açık tutmak için
goto a
pause
