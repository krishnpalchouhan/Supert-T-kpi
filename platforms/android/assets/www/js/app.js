//<![CDATA[
$(document).ready(function () {
  if(window.devicePixelRatio == 0.75) {
     $(".app-icon").attr('src', 'images/ldpi.png');   
	 //alert(1);
  }
  else if(window.devicePixelRatio == 1) {
           $(".app-icon").attr('src', 'images/mdpi.png');  
		 //   alert(2);
  }
  else if(window.devicePixelRatio == 1.5) {
     $(".app-icon").attr('src', 'images/hdpi.png');   
	// alert(3);
  }
  else if(window.devicePixelRatio == 2) {
              $(".app-icon").attr('src', 'images/xhdpi.png');  
		//	  alert(4);
  }
  else{
	  $(".app-icon").attr('src', 'images/xxhdpi.png');
	  //alert(5);
  }
});



	//////////////////////date Formater//////////////////////
	
	function formatDate(date) {
		var d = new Date(date),
			month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;

		var d= [month, day, year].join('-');
		if(d.substring(0,1)==0)
		{
			return d.substring(1,10);
		}else{
			return d;
		}
		
	}
	
	
	//////////////////////date Formater//////////////////////

function loginFunction() {
    var email = $('#email').val();
    var password = $('#password').val();
    var player_id = window.localStorage.getItem("player_id");
    /*alert(email);
    var str1 = "garv";
    var str2 = "12345";
    */
    var value = "user=" + email + "&password=" + password + "&player_id=" + player_id;
   // alert(value);
	
    jQuery('.loder1').toggle();
	
    $.ajax({
        type: "POST",
        url: "http://www.superttransport.com/employee/login/?request=api&method=login",
        data: value,
        success: function(msg) {
            try {
                var obj = jQuery.parseJSON(msg);
                //console.log(obj['data']['ID']);
                //console.log(obj['data']['display_name']);
                window.localStorage.setItem("ID", obj['data']['ID']);
                window.localStorage.setItem("display_name", obj['data']['display_name']);
                var display_name = window.localStorage.getItem("display_name");
                //alert(display_name);
				jQuery('#hide').toggle();
                //alert('wow'+msg);
                getData();
                //				jQuery('.loder').toggle();
				jQuery('#logoutbutton').show();
            } catch (err) {
                jQuery('.loder1').hide();
                alert('Username or Password Incorrect. Please try again.');
            }
		}
	});
}


function getData() {
    var ID = window.localStorage.getItem("ID")
    $.get("http://www.superttransport.com/employee/login/?request=api&method=excelfile&user_id=" + ID, function(data, status) {
        $('.Data_Container').empty();
        var obj = jQuery.parseJSON(data);
		//console.log(obj);
        obj.forEach(function(i, index) {
            var ReadeStatus = "";
            if (i.notification == 1) {
                ReadeStatus = "gray"
            }
            //var html_data='<p class="bordor '+ReadeStatus+'"><a class="xlslist" id="'+i.id+'" href="'+i.url+'">'+i.name+'</a></p>';
            //var html_data='<tr><td class="text-left"><a class="xlslist" id="'+i.id+'" href="'+i.url+'">'+i.name+'</a></td></tr>';
			var dateOnly=i.upload_date;
				dateOnly=dateOnly.substring(0,10);
				dateOnly=formatDate(dateOnly)	
            var html_data = '<tr class="xlslist" id="' + i.id + '"  >'+
			'<td class="text-left url ' + ReadeStatus + '" href="' + i.url + '">' + i.name + ' <p class="pull-righqt">' + dateOnly + '</p>  </td>'+
			'<td class=" ' + ReadeStatus + ' "><button  class="delete-button pull-right  " type="button" onclick="deleteReport('+i.id+
			')">Delete</button></td></tr>';
            $('.Data_Container').append(html_data);
        });
        jQuery('.loder').hide();
    });

}

function logout() {
    var ID = window.localStorage.getItem("ID");
    $.get("http://www.superttransport.com/employee/login/?method=logout&request=api&id=" + ID, function(data, status) {
        //alert("http://www.superttransport.com/employee/login/?method=logout&request=api&id="+ID);
    });

}
function deleteReport(reportId) {
	//alert(Reportname);
	//var Reportname="Reportname";
	 if (confirm('Do you realy want to delete') == true) {
        $.get("http://app.superttransport.com/uploadFile/reportDelete/" + reportId, function(data, status) {
        //alert("http://www.superttransport.com/employee/login/?method=logout&request=api&id="+ID);
    });
	alert('Report Deleted successfully')
	getData();
    
	} else {
        
    }
   
   
	

}

$(document).ready(function() {
    $(document).on('click', 'tr.xlslist>td.url', function(event) {
        event.preventDefault();
        //alert($(this).attr('href'));
        var id = $(this).attr('id');
        //alert(id);
		$("#"+id+">td").addClass("gray");
        $.get("http://www.superttransport.com/employee/login/?request=api&method=status&id=" + id, function(data, status) {});

        window.location.href = $(this).attr('href');
    })

});





$(window).load(function() {
    //check login
    try {
        var ID = window.localStorage.getItem("ID");

        if (ID > 0) {
            jQuery('#hide').toggle();
            getData();
			jQuery('#logoutbutton').show();
        } else {
            //  alert('praa');
        }
    } catch (err) {
       // alert('pr');
    }

	


    jQuery(document).ready(function() {

        jQuery('#login').on('click', function(event) {

            if (($('#email').val().length === 0) || $('#password').val().length === 0) {
                alert('Please Enter USERNAME and PASSWORD')
            } else {
                loginFunction();
            }

        });
        jQuery('#logout').on('click', function(event) {
            window.localStorage.removeItem("display_name");
            logout();
            window.localStorage.removeItem("ID");
            jQuery('.loder1').hide();
            jQuery('#hide').toggle();


        });
		
		$('#password').focus(function() {
			setTimeout(
			function(){
				window.location.href = "dashbord.html#password";
			},
			1000);
		});
		$('#email').focus(function() {
			setTimeout(
			function(){
				window.location.href = "dashbord.html#email";
			},
			2000);
		});

    });
	
	

}); 



//]]>