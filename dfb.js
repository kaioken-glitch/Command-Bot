//body id='mb'
//cvd id='ft'
//lfg id='lt'
//sun id='vh
//moon id='hv'

let isgraykMode = false;

function grayMode(){
    document.getElementById('mb').style.backgroundColor="#262626";
    document.getElementById('ft').style.justifyContent="right";
    document.getElementById('lt').style.backgroundColor="#f1f1f1";
    document.getElementById('vh').style.display="none";
    document.getElementById('hv').style.display="flex";

    isgraykMode = true;
}

function darkMOde(){
    document.getElementById('mb').style.backgroundColor="#000000";
    document.getElementById('ft').style.justifyContent="left";
    document.getElementById('lt').style.backgroundColor="#353839";
    document.getElementById('vh').style.display="flex";
    document.getElementById('hv').style.display="none";

    isgraykMode = false;
}

function switchTheme(){
    if(isgraykMode){
        darkMOde()
    }else{
        grayMode()
    }
}

if(isgraykMode){
    grayMode()
}else{
    darkMOde()
};

function makeActive() {
    const elementIds = ['om', 'oc', 'es'];
  
    // Loop through each element ID
    elementIds.forEach(id => {
      const element = document.getElementById(id);
  
      // Check if the element exists before modifying its style
      if (element) {
        element.style.textDecoration = "underline";
      }
    });
  }
  