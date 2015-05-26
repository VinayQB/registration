$("#dob").datepicker({
    onSelect: function(value, ui) {
        var today = new Date(), 
            dob = new Date(value), 
            age = new Date(today - dob).getFullYear() - 1970;
            console.log(age);

        document.getElementById("age").value=age;
    },
    maxDate: '+0d',
    yearRange: '1920:2010',
    changeMonth: true,
    changeYear: true
});


function isNumberKey(evt){
   var charCode = (evt.which) ? evt.which : event.keyCode
   if (charCode > 31 && (charCode < 48 || charCode > 57))
       return false;
   return true;
}     



$(".button").click(function myFunction() {
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    var ok = true;
    if (pass1 != pass2) {
        //alert("Passwords Do not match");
        document.getElementById("pass1").style.borderColor = "#E34234";
        document.getElementById("pass2").style.borderColor = "#E34234";
        alert("Password do not match!!!");
        ok = false;
    }
   

    var mail1 = document.getElementById("mail1").value;
    var mail2 = document.getElementById("mail2").value;
    var ok = true;
    if (mail1 != mail2) {
        //alert("Passwords Do not match");
        document.getElementById("mail1").style.borderColor = "#E34234";
        document.getElementById("mail2").style.borderColor = "#E34234";
        alert("Mail id do not match!!!");
        ok = false;
    }
    return ok;
});

// document.getElementById('form').addEventListener('submit',function() {
//   var edit = document.getElementById('mail1').value;
//   localStorage.setItem('tododata', edit);
// });



function store(){
     var inputEmail= document.getElementById("mail1").value;
     localStorage.setItem("Email", inputEmail);
     var inputName= document.getElementById("name").value;
     localStorage.setItem("Name", inputName);
     var inputPhone= document.getElementById("phone").value;
     localStorage.setItem("Phone", inputPhone);
     var inputStreet= document.getElementById("street").value;
     localStorage.setItem("Street", inputStreet);
     var inputCity= document.getElementById("city").value;
     localStorage.setItem("City", inputCity);
     var inputStreet= document.getElementById("country").value;
     localStorage.setItem("Country", inputStreet);
     var selectedGender = document.MyForm.sex.value;
     localStorage.setItem("States", inputStreet);
     var selectedGender = document.MyForm.sex.value;
     localStorage.setItem("Gender", selectedGender);
      var inputStreet= document.getElementById("dob").value;
     localStorage.setItem("dob", inputStreet);
     var inputStreet= document.getElementById("age").value;
     localStorage.setItem("age", inputStreet);
      var inputStreet= document.getElementById("Nationality").value;
     localStorage.setItem("Nationality", inputStreet);
    }

jQuery(function ($) {
    var input = {
        "data": [{
            "country": "USA",
                "states": [
                "Alabama",
                "Alaska" ,
                "Arizona" ,
                "Arkansas" ,
                "California", 
                "Colorado ",
                "Connecticut", 
                "Delaware ",
                "Florida",
                "Georgia",
                "Hawaii",
                "Idaho",
                "Illinois"]
        }, {
            "country": "India",
                "states": [
                "Andhra Pradesh",
                "Arunachal Pradesh",
                "Asom (Assam)",
                "Bihar",
                "Karnataka",
                "Kerala",
                "Chhattisgarh",
                "Uttar Pradesh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jammu and Kashmir",
                "Jharkhand",
                "West Bengal",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Orissa",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttarakhand (Uttaranchal)"]
        }]
    };

    $.each(input.data, function (index, d) {
        $("#country").append("<option value=\"" + d.country + "\">" + d.country + "</option>");
    });

    $("#country").on("change", function () {
        var selectedCountry = $("#country").val();
        var t = $.map(input.data, function (obj) {
            if (obj.country === selectedCountry) return obj;
        });
        if (t.length != 0) {
            $('#states').empty();
            debugger;
            $.each(t[0].states, function (index, d) {
                $("#states").append("<option value=\"" + d + "\">" + d + "</option>");
            });
        }
    });

    $("#country").change();

});    