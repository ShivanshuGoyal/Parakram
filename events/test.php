<?php
	if(isset($_POST['submit'])){
		$con = mysql_connect("localhost","root","");
        if (!$con){
			die('Could not connect: ' . mysql_error());
        }
        mysql_select_db("parakram", $con);
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
		echo $_POST['email'];
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
		if(isset($_POST['football'])){
			$football_result = mysql_query("SELECT * FROM football");
			while($row = mysql_fetch_array($football_result)){
					echo $row['username']."  ".$row['email']."<br/>";
				if(($_POST['username']== $row['username'])&&($_POST['email']== $row['email'])){
					$a=1;
					echo $a." ".$b." ".$c." ".$d." ".$e." ".$f." ".$g." ".$h." ".$i." ".$j." ".$k." ".$l;
					break;
				}
			}
		}
	}
	else{
		echo '			<form method="post" action="test.php">
				<input type="text" name="username"/>
				<input type="text" name="email"/>
				<input type="text" name="football" value="football"/>
				<input type="text" name="cricker" value="football"/>
				<input type="text" name="tennis" value="football"/>
				<input type="text" name="tabletennis" value="football"/>
				<input type="text" name="basketball" value="football"/>
				<input type="submit" name="submit" />
			</form>';
		}
?>