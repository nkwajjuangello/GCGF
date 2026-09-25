<?php
// donation_confirm.php

$donorName = $_POST['donorName'] ?? 'Anonymous';
$amount = $_POST['amount'] ?? '0';
$method = $_POST['method'] ?? 'Unknown';
$transactionId = $_POST['transactionId'] ?? 'N/A';

$log = date("Y-m-d H:i:s") . " | Donor: $donorName | Amount: $amount | Method: $method | TxID: $transactionId\n";
file_put_contents("donations.log", $log, FILE_APPEND);

echo json_encode(["message" => "Thank you, $donorName! Your donation of $amount via $method has been recorded."]);
?>
