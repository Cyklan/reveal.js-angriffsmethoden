<?php
$passwd = $_GET["password"];
if ($passwd == 9541) {
    http_response_code(200);
    echo("Success");
}
else {
    http_response_code(403);
    echo("Wrong password");
}