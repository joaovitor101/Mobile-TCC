<?php 
require_once("../conexao.php");
$tabela = 'registros';

$postjson = json_decode(file_get_contents('php://input'), true);

$id = @$postjson['id'];
$agua = @$postjson['agua'];
$solo = @$postjson['solo'];
$bateria = @$postjson['bateria'];
$rega = @$postjson['rega'];



//validar email
$query = $pdo->query("SELECT * FROM $tabela where id = '$id'");
$res = $query->fetchAll(PDO::FETCH_ASSOC);
$total_reg = @count($res);
if($total_reg > 0 and $res[0]['id'] != $id){
	$result = json_encode(array('mensagem'=>'Email já Cadastrado, escolha Outro!', 'sucesso'=>false));
	echo $result;	
	exit();
}



if($id == "" || $id == "0"){
	$res = $pdo->prepare("INSERT INTO $tabela SET agua = :agua, solo = :solo, bateria = :bateria, rega = :rega");	

}else{
	$res = $pdo->prepare("UPDATE $tabela SET agua = :agua, solo = :solo, bateria = :bateria, rega = :rega where id = '$id'");
	
}


$res->bindValue(":agua", "$agua");
$res->bindValue(":solo", "$solo");
$res->bindValue(":bateria", "$bateria");
$res->bindValue(":rega", "$rega");

$res->execute();


$result = json_encode(array('mensagem'=>'Salvo com sucesso!', 'sucesso'=>true));

echo $result;

?>