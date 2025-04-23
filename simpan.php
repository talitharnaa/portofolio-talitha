<?php
// Koneksi ke database
$koneksi = new mysqli("localhost", "root", "", "portofolio");

// Cek koneksi
if ($koneksi->connect_error) {
    die("Koneksi gagal: " . $koneksi->connect_error);
}

// Ambil data dari form secara aman
$first_name = $_POST['first_name'] ?? '';
$last_name  = $_POST['last_name'] ?? '';
$email      = $_POST['email'] ?? '';
$phone      = $_POST['phone'] ?? '';
$message    = $_POST['message'] ?? '';

// Siapkan dan eksekusi query dengan prepared statement
$stmt = $koneksi->prepare("INSERT INTO kontak (first_name, last_name, email, phone_number, message) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $first_name, $last_name, $email, $phone, $message);

if ($stmt->execute()) {
    echo "Pesan berhasil dikirim!";
} else {
    echo "Gagal menyimpan data: " . $stmt->error;
}

// Tutup statement dan koneksi
$stmt->close();
$koneksi->close();
?>
