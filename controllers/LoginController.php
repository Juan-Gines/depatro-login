<?php

include "../config/conexion.php";

class LoginController
{
    private $conexion;

    public function __construct(\PDO $pdo)
    {
        $this->conexion = $pdo;
    }

    public function exist($email)
    {
        $query = "SELECT * FROM users WHERE email= :email";
        $stmt = $this->conexion->prepare($query);
        if ($stmt->execute(['email' => $email]) && $stmt->rowCount() == 1) {
            return $stmt->fetch();
        } else {
            return false;
        }
    }
}
