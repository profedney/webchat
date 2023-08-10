<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $message = $_POST["message"];
    if (!empty($message)) {
        $file = fopen("chat_history.txt", "a");
        fwrite($file, $message . "\n");
        fclose($file);
    }
}
?>
