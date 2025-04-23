<?php
// Koneksi ke database
$koneksi = new mysqli("localhost", "root", "", "portofolio");

// Cek koneksi
if ($koneksi->connect_error) {
    die("Koneksi gagal: " . $koneksi->connect_error);
}

// Ambil data dari tabel kontak
$query = "SELECT * FROM kontak ORDER BY id DESC";

$result = $koneksi->query($query);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Data Kontak</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; background: #f4f4f4; }
        h2 { text-align: center; }
        table {
            width: 100%;
            border-collapse: collapse;
            background: #fff;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: left;
        }
        th {
            background: #007BFF;
            color: white;
        }
        tr:nth-child(even) {
            background: #f2f2f2;
        }
    </style>
</head>
<body>

<h2>Data Pesan dari Form</h2>

<table>
    <tr>
        <th>No</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Message</th>
        <th>Submitted At</th>
    </tr>

    <?php
    if ($result->num_rows > 0) {
        $no = 1;
        while ($row = $result->fetch_assoc()) {
            echo "<tr>
                    <td>" . $no++ . "</td>
                    <td>" . htmlspecialchars($row["first_name"]) . "</td>
                    <td>" . htmlspecialchars($row["last_name"]) . "</td>
                    <td>" . htmlspecialchars($row["email"]) . "</td>
                    <td>" . htmlspecialchars($row["phone_number"]) . "</td>
                    <td>" . htmlspecialchars($row["message"]) . "</td>
                    <td>" . ($row["submitted_at"] ?? '-') . "</td>

                  </tr>";
        }
    } else {
        echo "<tr><td colspan='7'>Belum ada data yang dikirim.</td></tr>";
    }

    $koneksi->close();
    ?>
</table>

</body>
</html>
