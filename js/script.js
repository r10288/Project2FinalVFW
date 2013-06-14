// Ryan Cantone
//JAVA CODE

window.addEventListener("DOMContentLoaded", function (){
	//Variables Listed
	var dOne = document.getElementById("dOne");
	var dTwo = document.getElementById("dTwo");
	var deleteHero = document.getElementById("deleteHero");
	var heroClass = document.getElementById("heroClass");
	var heroName = document.getElementById("heroName");
	var heightSlider = document.getElementById("heightSlider");
	var weightSlider = document.getElementById("weightSlider");
	var heroGender = document.getElementById("heroGender");
	var legendTab = document.getElementById("legendTab");
	
	//Clear Data Code
	function clearAllHeroes(){
		localStorage.clear();
		dOne.removeAttribute("hidden");
		dTwo.setAttribute("hidden");
		deleteHero.setAttribute("hidden");
		heroAdd.removeAttribute("hidden");
		showHeroes.removeAttribute("hidden");
		
	};
	deleteHero.addEventListener("Click", clearAllHeroes);

	//Array Function Code
		/*VERY CONFUSED*/
	var possibleHeroes = ["--Possible Hero--"];
	function makeHeroes (){
		var formTag = document.getElementsByTagName('form'),
		selectLi = document.getElementById('select'),
		makeSelect = document.createElement('select');
		makeSelect.setAttribute('id', 'groups');
	for (var i=0, h=possibleHeroes.length; i<h; i++) {
		var makeOption = document.createElement('option');
		var optText = possibleHeroes[i];
		makeOption.setAttribute('value', optText);
		makeOption.innerHTML - optText;
		makeSelect.appendChild(makeOption);
	};
	selectLi.appendChild(makeSelect);
	};
	makeHeroes();
	
	//ALL SAVED DATA BELOW
	//Slider value code
	function slideValue(){
		slideValueIndicator.InnerHTML = heightSlider.value;
		slideValueIndicator.InnerHTML = weightSlider.value;
	};
	
	//Checkbox Value Setter
	function getheroLeader(){
		if (heroLeader.checked) {
			heroLeader.setAttribute("value", "Yes");
		}else{
			heroLeader.setAttribute("value", "No");
		};
	};
	
	//Store Data Function Code
	function storeData(){
		var id = Math.floor(Math.random()*1000001);
		var heroEntry = {};
			heroEntry.heroClass = ["Heroes class is ", heroClass.value];
			heroEntry.heroName = ["Heroes name is ", heroName.value];
			heroEntry.heightSlider = ["Heroes height is ", heightSlider.value];
			heroEntry.weightSlider = ["Heroes weight is ", weightSlider.value];
			heroEntry.heroLeader = ["Heroes leader ", heroLeader.value];
			heroEntry.heroClass = ["Heroes name is ", heroClass.value];
		localStorage.setItem(id, JSON.stringify(heroEntry));
		alert("Hero Entered!");
	};
	heroLeader.addEventListener("change" ,getheroLeader);
	heightSlider.addEventListener("change", slideValue);
	weightSlider.addEventListener("change", slideValue);
	heroAdd.addEventListener("click", storeData);
	
	//Get Data Code
	function getHero(){
		dOne.setAttribute("hidden");
		heroAdd.setAttribute("hidden");
		showHeroes.setAttribute("hidden");
		deleteHero.removeAttribute("hidden");
		dTwo.setAttribute("id","heroEntry");
		var makeList = document.createElement("ul");
		dTwo.appendChild(makeList);
		document.getElementById("legendTab").innerHTML = "Previous Heroes";
		
		//Reset
		for (var i=0, len=localStorage.length; i<len; i++){
		var makeli = document.createElement('li');
		makeList.appendChild(makeList);
		var key = localStorage.key(i)
		var value = localStorage.getItem(key);
		var obj = JSON.parse(value);
		var makeSubList = document.createElement('ul');
		makeLi.appendChild(makeSubList);
		for (var n in obj){
			var makeSubList = document.createElement('li');
			makeSubList.appendChild(makeSubList);
			var optSubText = obj[n][0]+" "+obj[n][1];
			makeSubli.innterHTML = optSubText;
		};
	};
};
	

showHeroes.addEventListener("click", getHero);
	});	