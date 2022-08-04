<?php

header('Content-Type:application/json; charset=utf-8');

require_once '../controllers/LoginController.php';
require_once '../config/Conexion.php';
require_once '../library/ValidarInputs.php';

$loginUser = new LoginController($conexion);
$validar = new ValidarInputs();

if ($_SERVER['REQUEST_METHOD'] == "POST") {

    if (isset($_POST['email']) && isset($_POST['password'])) {
        $email = $_POST['email'];
        $password = $_POST['password'];

        //Validamos el email
        $validar->limpio_email($email);
        $validar->valido() ? $emailVal = $validar->msj() : $error['errEmail'] =  $validar->msj();

        //Validamos el password
        $validar->limpio_pass($password, 4);
        $validar->valido() ? $passVal = $validar->msj() : $error['errPass'] = $validar->msj();

        //Validamos login
        if (empty($error)) {
            if ($user = $loginUser->exist($emailVal)) {
                if (password_verify($passVal, $user['password'])) {
                    echo json_encode($user);
                } else {
                    echo json_encode(['errLogin' => 'Usuario desconocido']);
                }
            } else {
                echo json_encode(['errLogin' => 'Usuario desconocido']);
            }
        } else {
            echo json_encode($error);
        }
    }
}
