"use strict";

// Ankita@sprystore.com
// password

// submit-login

//document.getElementById('signin').addEventListener("click", function(event){





window.addEventListener('load', function () {
    console.log("It's loaded!")

    var profile = sessionStorage.getItem("profile");
    if(profile === null){
        profile = {
            firstName: '', 
            lastName: '',
            phoneNumber: '',
            mobileNumber: '',
            email: '',
            skypeId:  ''
          };
      }else{
          profile = JSON.parse(profile); 
      }

    if( profile['firstName'] != null &&  profile['firstName'] != '' ){
        document.getElementsByClassName('btn-open')[0].remove();

        var elem = document.createElement('span');
        elem.innerText = profile['firstName'];
        document.getElementsByClassName('button-log usernhy')[0].appendChild(elem);
    }

    document.getElementsByClassName('submit-login')[0].addEventListener("click", function(event){
        event.preventDefault();
        var inputEmail = document.getElementById('exampleInputEmail1').value;
        var inputPassword = document.getElementById('exampleInputPassword1').value;
    
        profile['firstName'] = inputEmail.substring(0, inputEmail.indexOf('@'));

        if( inputPassword == 'password' ){
            console.log('login sucess');
            document.getElementsByClassName('overlay-close1')[0].click();
            document.getElementsByClassName('btn-open')[0].remove();
    
            var elem = document.createElement('span');
            elem.innerText = profile['firstName'];
            document.getElementsByClassName('button-log usernhy')[0].appendChild(elem);
    
            sessionStorage.setItem("profile", JSON.stringify(profile) );

        }else{
            alert('Wrong cred, try again');
        }
    });
   
    

    var catSection =  this.document.getElementsByClassName('w3l-grids-hny-2')[0];
    var categories = catSection.getElementsByClassName('grids-hny-2-mian')[0]

    var handbagParent =  document.getElementsByClassName('video-66-info')[0];
    var handbag =  handbagParent.getElementsByClassName('container-fluid')[0];

    var mensSection =   document.getElementsByClassName('w3l-content-w-photo-6')[0];
    var mensSuit =  mensSection.getElementsByClassName('content-photo-6-mian')[0];  

    var contentSec =  this.document.getElementsByClassName('w3l-content-5')[0];

    var customerSec = this.document.getElementsByClassName('w3l-customers-sec-6')[0];

    var subscriptionSec = this.document.getElementsByClassName('w3l-subscription-6')[0];

    var headerSec = document.getElementsByClassName('w3l-banner-slider-main')[0];

    var homePageSliderContent = document.getElementsByClassName('bannerhny-content')[0];

    var topHeaderContent = document.getElementsByClassName('top-header-content')[0];

    // temporary delete 
//     handbag.remove();
//     categories.remove();
//     mensSuit.remove();
//     contentSec.remove();
//     customerSec.remove();
//     subscriptionSec.remove();
//   //  headerSec.remove();


//     // // go to search page 
//     headerSec.classList.add('inner-pagehny');
//     homePageSliderContent.remove();

//     // add to search page 
//     headerSec.classList.add();
//     topHeaderContent.remove();
//     var div = document.createElement("div");
//     div.classList.add('breadcrumb-infhny');
//     div.appendChild(topHeaderContent);    
//     topHeaderContent.innerHTML += ' <div class="breadcrumb-contentnhy"> <div class="container"> <nav aria-label="breadcrumb"> <h2 class="hny-title text-center">Ecommerce</h2> <ol class="breadcrumb mb-0"> <li><a href="index.html">Home</a> <span class="fa fa-angle-double-right"></span></li> <li class="active">Shop</li> </ol> </nav> </div> </div> </div>';
//     headerSec.append(div);





});


