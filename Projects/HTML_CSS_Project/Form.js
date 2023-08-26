const btn_Submit = document.getElementById("btn_Submit");

// btn_Submit.addEventListener("click", ValidateForm);
function ValidateForm() {
  const F_Name = document.getElementById("txtfname").value;

  const L_Name = document.getElementById("txtlname").value;

  const Email = document.getElementById("txtEmail").value;

  const Contact = document.getElementById("txtContact").value;
  const span_Contact = document.getElementById("contactId");
  const Dob = document.getElementById("txtdob").value;

  const Age = document.getElementById("txtAge").value;
  const Gender = document.getElementById("Rd1").value;

  const ResumeFile = document.getElementById("ResumeFile").value;

  // const File = document.getElementById("txtfile");

  if (F_Name == null || F_Name == "" || F_Name.length == "0") {
    //alert("* Enter Valide Form Details ");
    alert("Please enter First Name");
    return false;
  } else if (L_Name == null || L_Name == "" || L_Name.length == "0") {
    alert("* Enter Last Name");
    return false;
  } else if (Email == null || Email == "" || Email.length == "0") {
    alert("* Enter Email  Id");
    return false;
  } else if (Contact == null || Contact == "" || Contact.length == "0") {
    alert("* Enter Contact Number");
    return false;
  } else if (Dob == null || Dob == "" || Dob.length == "0") {
    alert("*Date of Birth is Required");
    return false;
  } else if (Age == null || Age == "" || Age.length == "0") {
    alert("*  Age is Required");
    return false;
  } else {
    alert("Form Successfully submitted");
    F_Name = "";
    L_Name = "";
    Email = "";
    Contact = "";
    Dob = "";
    Age = "";
    Gender.value = "Female";
    ResumeFile = "";
  }

  return true;
}
