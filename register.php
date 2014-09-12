<?php
   if(isset($_POST['username'])){
		$con = mysql_connect("98.130.0.101:3306","mailerd_parakram","P2k11");
        if (!$con){
			die('Could not connect: ' . mysql_error());
        }
        mysql_select_db("mailerd_abc", $con);
		$a=0;
        $b=0;
		$c=0;
		$d=0;
		$e=0;
		$f=0;
		$g=0;
		$h=0;
		$i=0;
		$j=0;
		$k=0;
		$l=0;
		$m=0;
        if(isset($_POST['football'])){
			$football_result = mysql_query("SELECT * FROM football");
			while($row = mysql_fetch_array($football_result)){
				if(($_POST['username']== $row['username'])&&($_POST['email']== $row['email'])){
					$a=1
					;
					break;
				}
			}
		}
		if(isset($_POST['basketball'])){
			$basketball_result = mysql_query("SELECT * FROM basketball");
			while($rows = mysql_fetch_array($basketball_result)){
				if(($_POST['username']== $rows['username'])&&($_POST['email']== $rows['email'])){
					$b=1;
					break;
				}
			}
		}
		if(isset($_POST['volleyball'])){
			$volleyball_result = mysql_query("SELECT * FROM volleyball");
			while($rowss = mysql_fetch_array($volleyball_result)){
				if(($_POST['username']== $rowss['username'])&&($_POST['email']== $rowss['email'])){
					$c=1;
					break;
				}
			}
		}
		if(isset($_POST['badminton'])){
			$badminton_result = mysql_query("SELECT * FROM badminton");
			while($rowsss = mysql_fetch_array($badminton_result)){
				if(($_POST['username']== $rowsss['username'])&&($_POST['email']== $rowsss['email'])){
					$d=1;
					break;
				}
			}
		}
		if(isset($_POST['cricket'])){
			$cricket_result = mysql_query("SELECT * FROM cricket");
			while($rowssss = mysql_fetch_array($cricket_result)){
				if(($_POST['username']== $rowssss['username'])&&($_POST['email']== $rowssss['email'])){
					$e=1;
					break;
				}
			}
		}
		if(isset($_POST['squash'])){
			$squash_result = mysql_query("SELECT * FROM squash");
			while($rowsssss = mysql_fetch_array($squash_result)){
				if(($_POST['username']== $rowsssss['username'])&&($_POST['email']== $rowsssss['email'])){
					$f=1;
					break;
				}
			}
		}
		if(isset($_POST['gaming'])){
			$gaming_result = mysql_query("SELECT * FROM gaming");
			while($rowssssss = mysql_fetch_array($gaming_result)){
				if(($_POST['username']== $rowssssss['username'])&&($_POST['email']== $rowssssss['email'])){
					$g=1;
					break;
				}
			}
		}
		if(isset($_POST['gym'])){
			$gym_result = mysql_query("SELECT * FROM gym");
			while($rowsssssss = mysql_fetch_array($gym_result)){
				if(($_POST['username']== $rowsssssss['username'])&&($_POST['email']== $rowsssssss['email'])){
					$h=1;
					break;
				}
			}
		}
		if(isset($_POST['others'])){
			$others_result = mysql_query("SELECT * FROM others");
			while($rowssssssss = mysql_fetch_array($others_result)){
				if(($_POST['username']== $rowssssssss['username'])&&($_POST['email']== $rowssssssss['email'])){
					$i=1;
					break;
				}
			}
		}
		if(isset($_POST['tennis'])){
			$tennis_result = mysql_query("SELECT * FROM tennis");
			while($rowsp = mysql_fetch_array($tennis_result)){
				if(($_POST['username']== $rowsp['username'])&&($_POST['email']== $rowsp['email'])){
					$j=1;
					break;
				}
			}
		}
		if(isset($_POST['tabletennis'])){
			$tabletennis_result = mysql_query("SELECT * FROM tabletennis");
			while($rowst = mysql_fetch_array($tabletennis_result)){
				if(($_POST['username']== $rowst['username'])&&($_POST['email']== $rowst['email'])){
					$k=1;
					break;
				}
			}
		}
		if(isset($_POST['athletics'])){
			$athletics_result = mysql_query("SELECT * FROM athletics");
			while($rowsa = mysql_fetch_array($athletics_result)){
				if(($_POST['username']== $rowsa['username'])&&($_POST['email']== $rowsa['email'])){
					$l=1;
					break;
				}
			}
		}
		
		if(isset($_POST['check'])){
			echo($a." ".$b." ".$c." ".$d." ".$e." ".$f." ".$g." ".$h." ".$i." ".$j." ".$k." ".$l);
		}
		else{
			if(isset($_POST['football'])){
				$sql= "INSERT INTO football(username, college, email, contact)
				VALUES ('$_POST[username]','$_POST[college]','$_POST[email]','$_POST[contact]')";
				if($a==0)
					if(mysql_query($sql,$con))
						$a=2;
			}
			if(isset($_POST['basketball'])){
				$sqlb= "INSERT INTO basketball(username, college, email, contact)
				VALUES ('$_POST[username]','$_POST[college]','$_POST[email]','$_POST[contact]')";
				if($b==0)
					if(mysql_query($sqlb,$con))
						$b=2;
			}
			if(isset($_POST['volleyball'])){
				$sqlv= "INSERT INTO volleyball(username, college, email, contact)
				VALUES ('$_POST[username]','$_POST[college]','$_POST[email]','$_POST[contact]')";
				if($c==0)
					if(mysql_query($sqlv,$con))
						$c=2;
			}
			if(isset($_POST['badminton'])){
				$sqlbd= "INSERT INTO badminton(username, college, email, contact)
				VALUES ('$_POST[username]','$_POST[college]','$_POST[email]','$_POST[contact]')";
				if($d==0)
					if(mysql_query($sqlbd,$con))
						$d=2;
			}
			  
			if(isset($_POST['cricket'])){
				$sqlc= "INSERT INTO cricket(username, college, email, contact)
				VALUES ('$_POST[username]','$_POST[college]','$_POST[email]','$_POST[contact]')";
				if($e==0)
					if(mysql_query($sqlc,$con))
						$e=2;
			}
			if(isset($_POST['squash'])){
				$sqls= "INSERT INTO squash(username, college, email, contact)
				VALUES ('$_POST[username]','$_POST[college]','$_POST[email]','$_POST[contact]')";
				if($f==0)
					if(mysql_query($sqls,$con))
						$f=2;
			}
			if(isset($_POST['gaming'])){
				$sqlg= "INSERT INTO gaming(username, college, email, contact)
				VALUES ('$_POST[username]','$_POST[college]','$_POST[email]','$_POST[contact]')";
				if($g==0)
					if(mysql_query($sqlg,$con))
						$g=2;
			}
			if(isset($_POST['gym'])){
				$sqly= "INSERT INTO gym(username, college, email, contact)
				VALUES ('$_POST[username]','$_POST[college]','$_POST[email]','$_POST[contact]')";
				if($h==0)
					if(mysql_query($sqly,$con))
						$h=2;
			}
			  
			if(isset($_POST['others'])){
				$sqlo= "INSERT INTO others(username, college, email, contact)
				VALUES ('$_POST[username]','$_POST[college]','$_POST[email]','$_POST[contact]')";
				if($i==0)
					if(mysql_query($sqlo,$con))
						$i=2;
			}
			if(isset($_POST['tennis'])){
				$sqlt= "INSERT INTO tennis(username, college, email, contact)
				VALUES ('$_POST[username]','$_POST[college]','$_POST[email]','$_POST[contact]')";
				if($j==0)
					if(mysql_query($sqlt,$con))
						$j=2;
			}
			if(isset($_POST['tabletennis'])){
				$sqltt= "INSERT INTO tabletennis(username, college, email, contact)
				VALUES ('$_POST[username]','$_POST[college]','$_POST[email]','$_POST[contact]')";
				if($k==0)
					if(mysql_query($sqltt,$con))
						$k=2;
			}
			if(isset($_POST['athletics'])){
				$sqla= "INSERT INTO athletics(username, college, email, contact)
				VALUES ('$_POST[username]','$_POST[college]','$_POST[email]','$_POST[contact]')";
				if($l==0)
					if(mysql_query($sqla,$con))
						$l=2;
			}
			echo "<p class='shivanshu'>";
			if($a==2 || $b==2 || $c==2 || $d==2 || $e==2 || $f==2 || $g==2 || $h==2 || $i==2 || $j==2 || $k==2 || $l==2 ){
				echo "You are successfully registered for<br>";
				if($a==2)
					echo "Football<br>";
				if($b==2)
					echo "Basketball<br>";
				if($c==2)
					echo "Volleyball<br>";
				if($d==2)
					echo "Badminton<br>";
				if($e==2)
					echo "Cricket<br>";
				if($f==2)
					echo "Squash<br>";
				if($g==2)
					echo "Gaming<br>";
				if($h==2)
					echo "Gym<br>";
				if($i==2)
					echo "Others<br>";
				if($j==2)
					echo "Tennis<br>";
				if($k==2)
					echo "TableTennis<br>";
				if($l==2)
					echo "Athletics<br>";
			}
			  
			if($a==1 || $b==1 || $c==1 || $d==1 || $e==1 || $f==1 || $g==1 || $h==1 || $i==1 || $j==1 || $k==1 || $l==1 ){
				echo "You are already registered for<br>";
				if($a==1)
					echo "Football<br>";
				if($b==1)
					echo "Basketball<br>";
				if($c==1)
					echo "Volleyball<br>";
				if($d==1)
					echo "Badminton<br>";
				if($e==1)
					echo "Cricket<br>";
				if($f==1)
					echo "Squash<br>";
				if($g==1)
					echo "Gaming<br>";
				if($h==1)
					echo "Gym<br>";
				if($i==1)
					echo "Others<br>";
				if($j==1)
					echo "Tennis<br>";
				if($k==1)
					echo "TableTennis<br>";
				if($l==1)
					echo "Athletics<br>";
			}
			echo "</p>";
		}  
		mysql_close($con);
	}
?>