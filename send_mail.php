<?php
header('Content-Type: application/json');

// POST isteği ile gelen verileri al
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Gelen verileri kontrol et
if (isset($data['name'], $data['email'], $data['subject'], $data['message'])) {
    // Verileri güvenli hale getir
    $name = htmlspecialchars($data['name']);
    $email = htmlspecialchars($data['email']);
    $subject = htmlspecialchars($data['subject']);
    $message = htmlspecialchars($data['message']);
    
    // E-posta bilgileri
    $to = 'mehmetkaankurt61@gmail.com';
    $email_subject = "İletişim Formu: $subject";
    $email_body = "Ad: $name\nEmail: $email\nMesaj:\n$message";
    $headers = "From: noreply@yourdomain.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    // E-postayı gönder
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'error' => 'E-posta gönderilemedi.']);
    }
} else {
    echo json_encode(['success' => false, 'error' => 'Gönderilen veriler eksik veya hatalı.']);
}
?>
