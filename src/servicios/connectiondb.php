<?php
class ConnectionDB
{
    protected $con;
    private $stmt;
    
    public static function connect($host, $user, $pass, $dbname, $dbms="mysql")
    {
       
        if ($dbms=="sqlsrv") {
            $dsn = "sqlsrv:server={$host};Database={$dbname}";
        } else {
            $dsn = "mysql:host={$host};dbname={$dbname}";
        }

        try {
            $con = new PDO($dsn, $user, $pass, array(PDO::MYSQL_ATTR_LOCAL_INFILE => true));
            $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $con;
        } catch (PDOException $e) {
            exit($e->getMessage());
        }
    }


    public function __construct($host, $user, $pass, $dbname, $dbms="mysql")
    {
        $this->con = self::connect($host, $user, $pass, $dbname, $dbms);
    }

    public function __destruct()
    {
        if ($this->con!=null) {
            //$stmt->closeCursor();
            $this->stmt=null;
            $this->con=null;
        }
    }

    public function transaction()
    {
        return $this->con->beginTransaction();
    }

    public function rollback()
    {
        return $this->con->rollback();
    }

    public function commit()
    {
        return $this->con->commit();
    }


    public function sql_insert($table, array $fields_values = null)
    {
        if (!count($fields_values)) {
            return 0;
        }

        $filterParams = [];
        $fields = [];
        foreach ($fields_values as $field => $value) {
            $filterParams[] = ":$field";
            $fields[] = $field;
        }

        $sql = "INSERT INTO $table(".implode(', ', $fields).") VALUES(".implode(', ', $filterParams).")";
        
        $stmt = $this->con->prepare($sql);

        foreach ($fields_values as $field => $value) {
            $stmt->bindValue(':'.$field, $value);
        }
        //echo $sql;
        $stmt->execute();
        //$stmt->debugDumpParams();
        
        if ($stmt->rowCount()>0) {
            $last = $this->con->lastInsertId();
        } else {
            $last = 0;
        }
        return $last;
    }

    public function sql_first($table, array $where_fields = ['1'=>'1'], array $fields = ['*'])
    {
        $filterParams = [];
        foreach ($where_fields as $field => $value) {
            $filterParams[] = "$field=:$field";
        }

        $sql = "SELECT ".implode(', ', $fields)." FROM $table WHERE ".implode(' AND ', $filterParams);

        $stmt = $this->con->prepare($sql);
        
        foreach ($where_fields as $field => $value) {
            $stmt->bindValue(':'.$field, $value);
        }

        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $stmt->execute();
        $res = $stmt->fetch();
        return $res;
    }

    public function sql_select($table, array $where_fields = ['1'=>'1'], $page = 0, $rows = 0, array $fields = ['*'], array $order = ['1'])
    {
        $filterParams = [];
        
        foreach ($where_fields as $field => $value) {
            if (strval($field)[0]=='!') {
                $field=substr($field, 1);
                $filterParams[] = "$field<>:$field";
            } elseif (strval($field)[0]=='%') {
                $field=substr($field, 1);
                $filterParams[] = "$field like :$field";
            } else {
                $filterParams[] = "$field=:$field";
            }
        }

        $sql = "SELECT ".implode(', ', $fields)." FROM $table WHERE ".implode(' AND ', $filterParams)." ORDER BY ".implode(', ', $order);
        
        if($page>0 && $rows>0){
            $sql = $sql." LIMIT ".($page*$rows-$rows).",".$rows;
        }

        $stmt = $this->con->prepare($sql);
        
        foreach ($where_fields as $field => $value) {
            if (strval($field)[0]=='!') {
                $field=substr($field, 1);
                $stmt->bindValue(':'.$field, $value);
            } elseif (strval($field)[0]=='%') {
                $field=substr($field, 1);
                $stmt->bindValue(':'.$field, "%$value%");
            } else {
                $stmt->bindValue(':'.$field, $value);
            }
        }

        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $stmt->execute();
        $res = $stmt->fetchAll();
        return $res;
    }

    public function sql_update($table, array $fields_values = null, array $where_fields = ['1'=>'0'])
    {
        if (!count($fields_values)) {
            return 0;
        }

        $filterParams = [];
        foreach ($fields_values as $field => $value) {
            $filterParams[] = "$field=:$field";
        }
        $filterParamsW = [];
        foreach ($where_fields as $field => $value) {
            $filterParamsW[] = "$field=:w_$field";
        }
        $sql = "UPDATE $table SET ".implode(', ', $filterParams)." WHERE ".implode(' AND ', $filterParamsW);
        //echo $sql;
        $stmt = $this->con->prepare($sql);

        foreach ($fields_values as $field => $value) {
            $stmt->bindValue(':'.$field, $value);
        }
        foreach ($where_fields as $field => $value) {
            $stmt->bindValue(':w_'.$field, $value);
            //echo ':w_'.$field.'='.$value;
        }
        
        $stmt->execute();
        $res = $stmt->rowCount();
        return $res;
    }

    public function sql_delete($table, array $where_fields = ['1'=>'0'])
    {
        $filterParams = [];
        foreach ($where_fields as $field => $value) {
            if (strval($field)[0]=='!') {
                $field=substr($field, 1);
                $filterParams[] = "$field<>:$field";
            } else {
                $filterParams[] = "$field=:$field";
            }
        }
        
        $sql = "DELETE FROM $table WHERE ".implode(' AND ', $filterParams);
        $stmt = $this->con->prepare($sql);

        foreach ($where_fields as $field => $value) {
            if (strval($field)[0]=='!') {
                $field=substr($field, 1);
                $stmt->bindValue(':'.$field, $value);
            } else {
                $stmt->bindValue(':'.$field, $value);
            }
        }
        
        $res = $stmt->execute();

        $res = $stmt->rowCount();
        return $res;
    }

    public function sql_query($sql)
    {
        $stmt = $this->con->prepare($sql);
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $stmt->execute();
        $res = $stmt->fetchAll();
        return $res;
    }

    public function sql_execute($sql)
    {
        $stmt = $this->con->prepare($sql);
        $res = $stmt->execute();
        return $res;
    }
}
