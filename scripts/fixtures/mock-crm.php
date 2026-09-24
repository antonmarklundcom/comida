<?php
// Local stand-in for VenderCRM POST /api/v1/leads, used only by scripts/php-handler-test.mjs.
// Behaviour is chosen by the phone number so each test case is deterministic.
declare(strict_types=1);
header('Content-Type: application/json');
$key = $_SERVER['HTTP_X_API_KEY'] ?? '';
if ($key !== 'test-key') { http_response_code(401); echo '{"error":"invalid key"}'; exit; }
$body = json_decode((string)file_get_contents('php://input'), true);
if (!is_array($body) || empty($body['phone']) || empty($body['idempotency_key'])) { http_response_code(422); echo '{"error":"phone required"}'; exit; }
$phone = $body['phone'];
if ($phone === '+595981000002') { http_response_code(422); echo '{"error":"email invalid","field":"email"}'; exit; }
if ($phone === '+595981000003') { sleep(4); http_response_code(201); echo '{"contactId":"c3","dealId":"d3","submissionId":"s3","duplicate":false}'; exit; }
$store = sys_get_temp_dir() . '/comida-mock-crm-' . hash('sha256', $body['idempotency_key']);
if (is_file($store)) { http_response_code(200); echo file_get_contents($store); exit; }
$out = json_encode(['contactId' => 'c1', 'dealId' => 'd1', 'submissionId' => 's1', 'duplicate' => false, 'received' => array_keys($body)]);
file_put_contents($store, str_replace('"duplicate":false', '"duplicate":true', $out));
http_response_code(201); echo $out;
