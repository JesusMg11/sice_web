<?php
require_once 'config.php';
require_once 'connectiondb.php';

class DataBase extends ConnectionDB {
    protected $table;

    public function __construct($table) {
        parent::__construct(Config::LOCALHOST, Config::USER, Config::PASSWORD, Config::DATABASE);
        $this->table = $table;
    }

    public function create(array $data) {
        $res = $this->sql_insert($this->table, $data);
        return $res;
    }

    public function read(array $where = ['1'=>'1']) {
        $res = $this->sql_first($this->table, $where);
        return $res;
    }

    public function readAll(array $where = ['1'=>'1'], array $order = ['1']) {
        $res = $this->sql_select($this->table, $where, 0, 0, ['*'], $order);
        return $res;
    }

    public function readPage(array $where = ['1'=>'1'], $page=1,  $rows=10, array $order = ['1 DESC']) {
        $table = $this->sql_select($this->table, $where, $page, $rows, ['*'], $order);
        $rows = $this->sql_select($this->table, $where, 0, 0, ['count(*) total'], $order);
        $res = array("table"=>$table,"rows"=>$rows[0]['total']);
        return $res;
    }

    public function update(array $data, array $where) {
        $res = $this->sql_update($this->table, $data, $where);
        return $res;
    }

    public function delete(array $where) {
        $res = $this->sql_delete($this->table, $where);
        return $res;
    }
    public function query($sql){
        $res = $this->sql_query($sql);
        return $res;
    }
}
?>
