 <script>
 var f=document.cwiczenie1;
		  //f.style.color = "red";
			if ( f.Answer3.checked ==true && f.Answer1.checked == false  && f.Answer2.checked == false && f.Answer4.checked == false )
			{
				echo '<br><p style="color:green">Odpowiedź prawidłowa</p> '
				return true;
			}
			else
			{
				echo '<br><p style="color:red">Odpowiedź błędna</p> '
				return false;
			}
</script>