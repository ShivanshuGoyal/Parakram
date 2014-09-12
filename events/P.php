<?php
	
	
/*	$page = $_POST['p'];
	$eventName =$_POST['e'];
	$maxPages=0;
	$Doc = new DOMDocument();
	$Doc->load("details.xml");
	$detailDoc = $Doc->documentElement;
	foreach($detailDoc->childNodes As $event)
	{
		if( $event->nodeName == $eventName)
		{
			foreach($event->childNodes As $eventDetails)
			{
				if( $eventDetails->nodeName == "no_pages" )
				{
					$maxPages = $eventDetails->nodeValue;
					break;
				}
			}
			break;
		}
	}
	if( intval($page)<=intval($maxPages) )
	{
		$file = fopen( $eventName.$page.".txt" );
		while (!feof($file))
		{
			echo fgets($file)."<br/>";
		}
		fclose($file);
	}
	else
	{
		echo "Nothing was there";
	}
	*/	
?>