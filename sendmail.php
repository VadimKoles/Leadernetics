<?php

if (isset($_POST['phone'])) {
    // Получатель (email заказчика)
    $to = "leadernetics@gmail.com";
    
    // Данные из формы (с очисткой)
    $name = trim(htmlspecialchars($_POST['name']));
    $phone = trim(htmlspecialchars($_POST['phone']));
    $email = trim(htmlspecialchars($_POST['email']));
    $text = trim(htmlspecialchars($_POST['text']));
    
    // Формируем сообщение
    $message = "Новая заявка с сайта leadernetics.ru\n\n";
    $message .= "Имя: $name\n";
    $message .= "Телефон: $phone\n";
    $message .= "Email: $email\n";
    $message .= "Сообщение: $text\n";
    
    // Тема письма (с кодировкой для кириллицы)
    $subject = "=?utf-8?B?" . base64_encode("Заявка с leadernetics.ru") . "?=";
    
    // Отправитель (лучше указать доменную почту)
    $headers = "From: no-reply@leadernetics.ru\r\n";
    $headers .= "Content-type: text/plain; charset=utf-8\r\n";
    $headers .= "Reply-To: $email\r\n"; // Чтобы отвечать клиенту напрямую
    
    // Отправка
    $isSent = mail($to, $subject, $message, $headers);
    
    // Редирект с уведомлением об успехе/ошибке
    header("Location: /?form_sent=" . ($isSent ? '1' : '0'));
    exit();
}

?>