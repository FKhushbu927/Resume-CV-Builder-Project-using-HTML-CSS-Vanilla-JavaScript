function newWorkExField() {

  let wExparentNode = document.getElementById("woEx");
  let wExNewNode = document.createElement("textarea");

  wExNewNode.classList.add("form-control");
  wExNewNode.classList.add("weField");
  wExNewNode.classList.add("mt-2");
  wExNewNode.classList.add("mb-2");
  wExNewNode.setAttribute("rows", 3);
  wExNewNode.setAttribute("placeholder", "Enter here");



  let wExRefNode = document.getElementById("wExTextArea"); //refernce node
  let addBtn = document.getElementById("workExBtn");
  //insert new element
  addBtn = wExparentNode.insertBefore(wExNewNode, wExRefNode);

}

function newAcaQuaField() {
  let acQuaParentNode = document.getElementById("acaQua");
  let acQuaNewNode = document.createElement("textarea");

  acQuaNewNode.classList.add("form-control");
  acQuaNewNode.classList.add("acaQuaField");
  acQuaNewNode.classList.add("mt-2");
  acQuaNewNode.classList.add("mb-2")
  acQuaNewNode.setAttribute("rows", 3);
  acQuaNewNode.setAttribute("placeholder", "Enter here");


  let acQuaRefNode = document.getElementById("acQuaTextArea"); //refernce node
  let addBtn = document.getElementById("acaQuaBtn");

  //insert new element
  addBtn = acQuaParentNode.insertBefore(acQuaNewNode, acQuaRefNode);

}

function newLanSkillField() {
  let lanSkillParentNode = document.getElementById("lanSkill");
  let lanSkillNewNode = document.createElement("textarea");


  lanSkillNewNode.classList.add("form-control");
  lanSkillNewNode.classList.add("lanSkillField");
  lanSkillNewNode.classList.add("mt-2");
  lanSkillNewNode.classList.add("mb-2")
  lanSkillNewNode.setAttribute("rows", 3);
  lanSkillNewNode.setAttribute("placeholder", "Enter here");

  let lanSkillRefNode = document.getElementById("lanSkillTextArea"); //refernce node
  let addBtn = document.getElementById("lanSkillBtn");

  //insert new element
  addBtn = lanSkillParentNode.insertBefore(lanSkillNewNode, lanSkillRefNode);

}

function newDigSkillField(){
  let digSkillParentNode = document.getElementById("digitalSkill");
  let digSkillNewNode = document.createElement("textarea");


  digSkillNewNode.classList.add("form-control");
  digSkillNewNode.classList.add("digSkillField");
  digSkillNewNode.classList.add("mt-2");
  digSkillNewNode.classList.add("mb-2")
  digSkillNewNode.setAttribute("rows", 3);
  digSkillNewNode.setAttribute("placeholder", "Enter here");

  let digSkillRefNode = document.getElementById("digSkillTextArea"); //refernce node
  let addBtn = document.getElementById("digSkillBtn");

  //insert new element
  addBtn = digSkillParentNode.insertBefore(digSkillNewNode, digSkillRefNode);
}
function generateCV(){
  console.log("generating");
  let nameField = document.getElementById("nameField").value;
  let nameT1 =  document.getElementById("nameTemp1");
  nameT1.innerHTML = nameField;

  document.getElementById("nameTemp2").innerHTML = nameField;


  //contact
  document.getElementById("contactTemp").innerHTML =  document.getElementById("contactField").value;
  document.getElementById("addressTemp").innerHTML = document.getElementById("addressField").value;
  document.getElementById("fbTemp").innerHTML = document.getElementById("fbField").value;
  document.getElementById("instaTemp").innerHTML = document.getElementById("instaField").value;
  document.getElementById("gitTemp").innerHTML = document.getElementById("gitHubField").value;
  document.getElementById("linkedTemp").innerHTML = document.getElementById("linkedInField").value;

  document.getElementById("objectiveTemp").innerHTML = document.getElementById("objectiveField").value;
 
 let wExText = document.getElementsByClassName("weField");
 let str = '';

 for(let e of wExText){ 
  str = str + `<li> ${e.value} </li>`; 
 }
 document.getElementById("wExTemp").innerHTML = str;
  

 let acQuaText = document.getElementsByClassName("acaQuaField");
 let strAcQua = '';

 for(let e of acQuaText){
          strAcQua  = strAcQua  + `<li> ${e.value} </li>` ;
 }

 document.getElementById("aqTemp").innerHTML = strAcQua;

 let langText = document.getElementsByClassName("lanSkillField");
 let strLang = '';

 for(let e of langText){
       strLang = strLang +`<li> ${e.value} <li>` ;
 }
 document.getElementById("langTemp").innerHTML = strLang;

 let digitalText = document.getElementsByClassName("digSkillField");
 let strDig = '';

 for(let e of digitalText){
  strDig =  strDig +`<li> ${e.value} <li>` ;
 }
 document.getElementById("digTemp").innerHTML = strDig;

  document.getElementById("cv-form").style.display = 'none';
  document.getElementById("cv-template").style.display = 'block';
}

function downloadCv(){
  window.print();
}