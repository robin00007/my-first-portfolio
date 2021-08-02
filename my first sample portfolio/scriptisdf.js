var loader=document.getElementById('loading');
setTimeout(function(){loader.style.display= 'none';} , 6000)

// #################################drawing hover effects###########################################################

document.getElementById("d_card8").addEventListener("mouseover", function() {
    document.getElementById("v_card").style.display='inline-block';
      var elem = document.createElement("img");
      elem.src='./images/Art_work/logo edited.png';
      elem.setAttribute("alt", "Flower");
      elem.setAttribute("height", "100%");
      elem.setAttribute("id", "img8");
      document.getElementById("v_card").appendChild(elem);
      
 
});
document.getElementById("d_card8").addEventListener("mouseout", function() {
    document.getElementById("v_card").style.display='none';
     document.getElementById("img8").remove();
  });
 

document.getElementById("d_card7").addEventListener("mouseover", function() {
    document.getElementById("v_card").style.display='inline-block';
    var elem = document.createElement("img");
    elem.src='./images/Art_work/loved_it.jpeg';
    elem.setAttribute("alt", "Flower");
    elem.setAttribute("id", "img7");
    // elem.style.paddingTop="0px";
    document.getElementById("v_card").appendChild(elem);
  });
document.getElementById("d_card7").addEventListener("mouseout", function() {
    document.getElementById("v_card").style.display='none';
    document.getElementById("img7").remove();
  });

document.getElementById("d_card6").addEventListener("mouseover", function() {
    document.getElementById("v_card").style.display='inline-block';
    var elem = document.createElement("img");
    elem.src='./images/Art_work/anshul.jpeg';
    elem.setAttribute("alt", "Flower");
    elem.setAttribute("id", "img6");
    document.getElementById("v_card").appendChild(elem);
  });
document.getElementById("d_card6").addEventListener("mouseout", function() {
    document.getElementById("v_card").style.display='none';
    document.getElementById("img6").remove();
  });

document.getElementById("d_card5").addEventListener("mouseover", function() {
    document.getElementById("v_card").style.display='inline-block';
    var elem = document.createElement("img");
    elem.src='./images/Art_work/first_portrait.jpeg';
    elem.setAttribute("alt", "Flower");
    elem.setAttribute("id", "img5");
    document.getElementById("v_card").appendChild(elem);
    
  });
document.getElementById("d_card5").addEventListener("mouseout", function() {
    document.getElementById("v_card").style.display='none';
    document.getElementById("img5").remove();
  });

document.getElementById("d_card4").addEventListener("mouseover", function() {
    document.getElementById("v_card").style.display='inline-block';
    var elem = document.createElement("img");
    elem.src='./images/Art_work/logo 5.png';
    elem.setAttribute("alt", "Flower");
    elem.setAttribute("id", "img4");
    document.getElementById("v_card").appendChild(elem)
  });
document.getElementById("d_card4").addEventListener("mouseout", function() {
    document.getElementById("v_card").style.display='none';
    document.getElementById("img4").remove();
  });

document.getElementById("d_card3").addEventListener("mouseover", function() {
    document.getElementById("v_card").style.display='inline-block';
    var elem = document.createElement("img");
    elem.src='./images/Art_work/portrait_ai.jpeg';
    elem.setAttribute("alt", "Flower");
    elem.setAttribute("id", "img3");
    document.getElementById("v_card").appendChild(elem)
  });
document.getElementById("d_card3").addEventListener("mouseout", function() {
    document.getElementById("v_card").style.display='none';
    document.getElementById("img3").remove();
  });

document.getElementById("d_card2").addEventListener("mouseover", function() {
    document.getElementById("v_card").style.display='inline-block';
    var elem = document.createElement("img");
    elem.src='./images/Art_work/profile_photo_logo.png';
    elem.setAttribute("alt", "Flower");
    elem.setAttribute("id", "img2");
    document.getElementById("v_card").appendChild(elem)
  });
document.getElementById("d_card2").addEventListener("mouseout", function() {
    document.getElementById("v_card").style.display='none';
    document.getElementById("img2").remove();
  });
 
document.getElementById("d_card1").addEventListener("mouseover", function() {
    document.getElementById("v_card").style.display='inline-block';
    var elem = document.createElement("img");
    elem.src='./images/Art_work/COMP a LOGO.png';
    elem.setAttribute("alt", "Flower");
    elem.setAttribute("id", "img1");
    document.getElementById("v_card").appendChild(elem)
  });
document.getElementById("d_card1").addEventListener("mouseout", function() {
    document.getElementById("v_card").style.display='none';
    document.getElementById("img1").remove();
  });


  // #################################navebar and footer bar simantaneous effect###########################################################


  //  document.getElementById("footer").addEventListener("mouseover", function() {
  //   document.getElementById("footer_navbar").style.display='inline-block';
  //   document.getElementById("top_navbar").style.display='inline-block';
    
  // });
  //  document.getElementById("footer").addEventListener("mouseout", function() {
  //   document.getElementById("footer_navbar").style.display='none';
  //   document.getElementById("top_navbar").style.display='none';
  // });
  //  document.getElementById("taskbar").addEventListener("mouseover", function() {
  //   document.getElementById("footer_navbar").style.display='inline-block';
  //   document.getElementById("top_navbar").style.display='inline-block';
     
  // });
  //  document.getElementById("taskbar").addEventListener("mouseout", function() {
  //   document.getElementById("footer_navbar").style.display='none';
  //   document.getElementById("top_navbar").style.display='none';
  // });

// ################################# seting  img in iamge viewer #################################
document.getElementById("school_dis").addEventListener("mouseover", function() {
  document.getElementById("disription1").style.opacity="1";
 
});
document.getElementById("school_dis").addEventListener("mouseout", function() {
  document.getElementById("disription1").style.opacity="0.09";
   
});
document.getElementById("school_dis2").addEventListener("mouseover", function() {
  document.getElementById("disription2").style.opacity="1";
 
});
document.getElementById("school_dis2").addEventListener("mouseout", function() {
  document.getElementById("disription2").style.opacity="0.09";
   
});
document.getElementById("school_dis3").addEventListener("mouseover", function() {
  document.getElementById("disription3").style.opacity="1";
 
});
document.getElementById("school_dis3").addEventListener("mouseout", function() {
  document.getElementById("disription3").style.opacity="0.09";
   
});
document.getElementById("school_dis4").addEventListener("mouseover", function() {
  document.getElementById("disription4").style.opacity="1";
 
});
document.getElementById("school_dis4").addEventListener("mouseout", function() {
  document.getElementById("disription4").style.opacity="0.09";
   
});
document.getElementById("school_dis5").addEventListener("mouseover", function() {
  document.getElementById("disription5").style.opacity="1";
 
});
document.getElementById("school_dis5").addEventListener("mouseout", function() {
  document.getElementById("disription5").style.opacity="0.09";
   
});

// #######################################################################################################

document.getElementsById("school").addEventListener("mouseover", function() {
  document.getElementById("discription").style.display='flex';
  
});
document.getElementById("school").addEventListener("mouseout", function() {
  document.getElementById("discription").style.display='none';
   
});

// ##############################################################################################
const blink = ()=>{
  document.getElementById("blink").style.opacity='1';
  setInterval(function() {
    blink();
    document.getElementById("blink").style.opacity='0.3';

  },50)
  return 0;
}
blink();

