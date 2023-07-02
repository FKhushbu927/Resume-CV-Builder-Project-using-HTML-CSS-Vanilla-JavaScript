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