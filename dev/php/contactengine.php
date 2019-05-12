?php
$EmailFrom = "Blank@gmail.com"; 
$EmailTo = "v.bhargav@iitg.ernet.in";  
$Subject = "Mail through your website";
$Name = Trim(stripslashes($_POST['Name'])); 
$City = Trim(stripslashes($_POST['City'])); 
$Email = Trim(stripslashes($_POST['Email'])); 
$Message = Trim(stripslashes($_POST['Message'])); 
if(!filter_var($Email, FILTER_VALIDATE_EMAIL)){
    echo "Email format is incorrect !";
    exit;
}
// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}
// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "City: ";
$Body .= $City;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";
// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");
// redirect to success page 
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=contactthanks.php\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
}
?>