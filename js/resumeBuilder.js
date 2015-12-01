var bio = {
	"name": "Robin Joganah",
	"role": "Software Developer",
	"contact_info":{ 
		"email" : "robin.joganah.1@ulaval.ca",
		"mobile" : "+1 418-271-9541",
		"twitter" : "robinjo",
		"github" : "rjoganah",
		"blog" : "www.robinjoganah.com",
		"location" : "Quebec-City"
	},
	"url_image": "images/fry.jpg",
	"welcome_message": "Graduate Student looking for opportunities in High-Tech Companies",
	"skills": [
		"Python",
		"C#",
		"Natural Language Processing",
		"HTML/CSS",
		"JavaScript"
	]
};

var work = {
	"jobs": [
	{
	"position" : "Research Assistant",
	"employer" : "Laval University",
	"dates" : "From January 2015",
	"loc" : "Quebec-City, Canada",
	"desc" : "Natural Language Processing, Information Retrieval, Machine Learning"
	},
	{
	"position" : "Software Developer Intern",
	"employer" : "IT-CE",
	"dates" : "April 2014-August 2014",
	"loc" : "Paris, France",
	"desc" : "C# Asp.Net - Risk tool"
	},
	{
	"position" : "Front-End & Software Developer Intern",
	"employer" : "Ortho Clinical Diagnostics",
	"dates" : "July 2013-August 2013",
	"loc" : "Illkirch-Graffentstaden, France",
	"desc" : "HTML/CSS/Javascript Front-End Dashboard - Reporting Tool software with VBA"
	},
	{
	"position" : "Software Developer Intern",
	"employer" : "Caisse d'Epargne",
	"dates" : "June 2012-August 2012",
	"loc" : "Strasbourg, France",
	"desc" : "VBA Software reporting tool - Saved 20 man-days / year"
	}
	]
};

var education = {
	"schools":[
	{
	"degree" : "Master of Science",
	"name" : "Laval University",
	"loc" : "Quebec-City, QC, Canada",
	"dates" : "2014-2016",
	"majors" : ["Computer Science","Natural Language Processing"]
	},
	{
	"degree" : "Engineer's degree",
	"name" : "ECE Paris Graduate School of Engineering",
	"loc" : "Paris, IDF, France",
	"dates" : "2010-2016",
	"majors" : ["Information systems"]
	}
	,
	{
	"degree" : "Evening Classes",
	"name" : "Conservatoire National Des Arts et Métiers (CNAM)",
	"loc" : "Paris, IDF, France",
	"dates" : "2013-2014",
	"majors" : ["Machine Learning","Data Mining"]
	}
	],
	"onlineClass" : [
	{
		"degree" : "Front-End Developer Nanodegree",
		"name" : "Udacity",
		"dates" : "2015-2016",
		"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	},
	{
		"degree" : "Full-Stack Developer Nanodegree",
		"name" : "Udacity",
		"dates" : "2015-2016",
		"url" : "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"
	}

	]
};

var projects = {
	"projects" : [
	{
		"title": "Dynamic Information Retrieval (Research presented at Text REtrieval Conference (TREC) 2015, Gaithersburg, MD)",
		"dates": "2015",
		"description":"Information retrieval through many irrelevant/unjudged documents. We take user's feedback into account to chose a direction to search more documents and cover user's different interests about the subject. (Python)",
		"url" : "www.medicbag.ovh"
	},
	{
		"title": "Question Classification",
		"dates": "2015",
		"description":"Question classification using ensemble methods (Adaboost, Bagging), results are similar to the litterature. (Python)",
		"url" : "www.medicbag.ovh"
	},
	
	{
		"title": "Adaptive Chartist Pattern Detection Tool (Research presented at ICBEIT 2014, Singapore)",
		"dates": "2014",
		"description": "Pattern Detection for financials markets, study of corrleation and forecast of the market with Neural Networks. (C#)",
		"url" : "www.medicbag.ovh"
	},
	{
		"title": "MedicBag",
		"dates": "2013",
		"description":"Social network between Doctors and Patients (PHP)",
		"url" : "www.medicbag.ovh"
	}
	]
};

bio.display = function(){
	formattedHTMLbioPic = HTMLbioPic.replace("%data%",bio.url_image);
	formattedHTMLwelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcome_message);
	$("#header").append(formattedHTMLbioPic + formattedHTMLwelcomeMessage);
	// $("#header").append(HTMLcontactGeneric);
	formattedHTMLmobile = HTMLmobile.replace("%data%",bio.contact_info.mobile);
	formattedHTMLemail = HTMLemail.replace("%data%",bio.contact_info.email);
	formattedHTMLtwitter = HTMLtwitter.replace("%data%",bio.contact_info.twitter);
	formattedHTMLblog = HTMLblog.replace("%data%",bio.contact_info.blog);
	formattedHTMLgithub = HTMLgithub.replace("%data%",bio.contact_info.github);
	formattedHTMLlocation = HTMLlocation.replace("%data%",bio.contact_info.location);

	$("#topContacts").append(formattedHTMLmobile + formattedHTMLemail +  formattedHTMLgithub + formattedHTMLtwitter + formattedHTMLlocation  );

}





var displayWork = function(work){
	for(job in work["jobs"]){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedJobTitle = HTMLworkTitle.replace("%data%",work.jobs[job].position);
		var formattedDate = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].loc);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].desc);
		$(".work-entry:last").append(formattedEmployer + formattedJobTitle + formattedDate + formattedLocation + formattedDescription);

	}
};

projects.display = function(){
	
	
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		var formattedProjectImage = HTMLprojectImage.replace("%data%","images/medicbag.png");
		$(".project-entry:last").append(formattedProjectTitle + formattedProjectDates + formattedProjectDescription + formattedProjectImage);
		if(project > 0){
			$(".project-entry:last").hide();
		}
	}
	
};


education.display = function(){
	$("#education").append(HTMLschoolStart);
	for(school in education.schools){
		var formattedHTMLschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedHTMLschoolMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].loc);
		$(".education-entry:last").append(formattedHTMLschoolName + formattedHTMLschoolDegree  + formattedHTMLschoolDates + formattedHTMLschoolLocation + formattedHTMLschoolMajors );

	}
	$("#education").append(HTMLonlineClasses);
	for (onlineC in education.onlineClass ){
		var formattedHTMLonlineTitle =  HTMLonlineTitle.replace("%data%",education.onlineClass[onlineC].degree);
		var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%",education.onlineClass[onlineC].name);
		var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%",education.onlineClass[onlineC].dates);
		var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%",education.onlineClass[onlineC].url);
		$(".education-entry:last").append(formattedHTMLonlineTitle + formattedHTMLonlineSchool + formattedHTMLonlineDates + formattedHTMLonlineURL);
	}
	
};





var inName = function(name){
	var names = name.split(" ");
	var firstname = names[0];
	var lastname = names[1];
	firstname = firstname.charAt(0).toUpperCase() + firstname.slice(1);
	lastname = lastname.toUpperCase();
	return firstname + " " + lastname;
}
 var formattedName = HTMLheaderName.replace("%data%",bio.name);
 var formattedRole = HTMLheaderRole.replace("%data%",bio.role);


var slideshow = function(isNext){
	
	var visible_project_title = $(".project-entry:visible > a").text();
	for(project in projects.projects){
		if(visible_project_title == projects.projects[project].title){
			var id_current = project;
			if(id_current < projects.projects.length - 1){
				var id_next = parseInt(project) + 1;
			}
			else{
				var id_next = project;
			}
			if(id_current > 0){
				var id_prev = parseInt(project) - 1;
			}
			else{
				var id_prev = 0;
			}
		}
	}
	if(isNext){
		if(id_next != id_current){
			$(".project-entry:visible").hide();
			$( "a:contains(" + projects.projects[id_next.toString()].title + ")").closest("div").show();
		}
	}
	else if(!isNext){
		if(id_prev != id_current){
			$(".project-entry:visible").hide();
			$( "a:contains(" + projects.projects[id_prev.toString()].title + ")").closest("div").show();
		}
	}
	
}
$( "#clickPrev" ).click(function() {
  slideshow(false);
});
$( "#clickNext" ).click(function() {
  slideshow(true);
});

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
bio.display();
if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	for(skill in bio.skills){
		var formattedSkill =  HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkill);
	};
}
displayWork(work);
projects.display();
education.display();
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

