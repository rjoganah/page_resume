var data = "%data%";
var bio = {
	"name": "Robin Joganah",
	"role": "Software Developer",
	"contacts":{ 
		"email" : "robin.joganah.1@ulaval.ca",
		"mobile" : "+1 418-271-9541",
		"github" : "rjoganah",
		"location" : "Quebec-City"
	},
	"biopic": "images/me.jpeg",
	"welcomeMessage": "Graduate Student looking for opportunities in High-Tech Companies",
	"skills": [
		"Python",
		"C#",
		"JavaScript",
		"HTML/CSS",
		"Machine Learning",
		"Information Retrieval",
		"Data Mining",
		"Natural Language Processing"
				
	]
};

var work = {
	"jobs": [{
	"title" : "Research Assistant",
	"employer" : "Laval University",
	"dates" : "From January 2015",
	"location" : "Quebec-City, Canada",
	"description" : "Natural Language Processing, Information Retrieval, Machine Learning"
	},
	{
	"title" : "Software Developer Intern",
	"employer" : "IT-CE",
	"dates" : "April 2014-August 2014",
	"location" : "Paris, France",
	"description" : "C# Asp.Net - Risk tool"
	},
	{
	"title" : "Front-End & Software Developer Intern",
	"employer" : "Ortho Clinical Diagnostics",
	"dates" : "July 2013-August 2013",
	"location" : "Illkirch-Graffentstaden, France",
	"description" : "HTML/CSS/Javascript Front-End Dashboard - Reporting Tool software with VBA"
	},
	{
	"title" : "Software Developer Intern",
	"employer" : "Caisse d'Epargne",
	"dates" : "June 2012-August 2012",
	"location" : "Strasbourg, France",
	"description" : "VBA Software reporting tool - Saved 20 man-days / year"
	}
	]
};

var education = {
	"schools": [{
	"degree" : "Master of Science",
	"name" : "Laval University",
	"location" : "Quebec-City, QC, Canada",
	"dates" : 2016,
	"majors" : ["Computer Science","Natural Language Processing"],
	"url" : "http://www.ulaval.ca"
	},
	{
	"degree" : "Engineer's degree",
	"name" : "ECE Paris Graduate School of Engineering",
	"location" : "Paris, IDF, France",
	"dates" : 2016,
	"majors" : ["Information systems"],
	"url" : "http://www.ece.fr"
	}
	,
	{
	"degree" : "Evening Classes",
	"name" : "Conservatoire National Des Arts et Métiers (CNAM)",
	"location" : "Paris, IDF, France",
	"dates" : 2014,
	"majors" : ["Machine Learning","Data Mining"],
	"url" : "http://www.cnam.fr"
	}
	],
	"onlineClass" : [{
		"title" : "Front-End Developer Nanodegree",
		"school" : "Udacity",
		"dates" : "2015-2016",
		"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	},
	{
		"title" : "Full-Stack Developer Nanodegree",
		"school" : "Udacity",
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
		"url" : "http://github.com/rjoganah/Dynamic_IR",
		"images" : []
	},
	{
		"title": "Question Classification",
		"dates": "2015",
		"description":"Question classification using ensemble methods (Adaboost, Bagging), results are similar to the litterature. (Python)",
		"url" : "",
		"images" : []
	},
	
	{
		"title": "Adaptive Chartist Pattern Detection Tool (Research presented at ICBEIT 2014, Singapore)",
		"dates": "2014",
		"description": "Pattern Detection for financials markets, study of corrleation and forecast of the market with Neural Networks. (C#)",
		"url" : "http://github.com/rjoganah/PPE_ChartPatternFinal",
		"images" : []
	},
	{
		"title": "MedicBag",
		"dates": "2013",
		"description":"Social network between Doctors and Patients (PHP)",
		"url" : "http://www.medicbag.ovh",
		"images" : ["images/medicbag.png"]
	}
	]
};

bio.display = function(){
	var formattedName = HTMLheaderName.replace(data,bio.name);
 	var formattedRole = HTMLheaderRole.replace(data,bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	formattedHTMLbioPic = HTMLbioPic.replace(data,bio.biopic);
	formattedHTMLwelcomeMessage = HTMLwelcomeMsg.replace(data,bio.welcomeMessage);
	$("#header").append(formattedHTMLbioPic + formattedHTMLwelcomeMessage);
	formattedHTMLmobile = HTMLmobile.replace(data,bio.contacts.mobile);
	formattedHTMLemail = HTMLemail.replace(data,bio.contacts.email);
	formattedHTMLtwitter = HTMLtwitter.replace(data,bio.contacts.twitter);
	formattedHTMLblog = HTMLblog.replace(data,bio.contacts.blog);
	formattedHTMLgithub = HTMLgithub.replace(data,bio.contacts.github);
	formattedHTMLlocation = HTMLlocation.replace(data,bio.contacts.location);

	$("#topContacts").append(formattedHTMLmobile + formattedHTMLemail +  formattedHTMLgithub  + formattedHTMLlocation  );
	$("#footerContacts").append(formattedHTMLmobile + formattedHTMLemail +  formattedHTMLgithub  + formattedHTMLlocation );
	if(bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
		for(skill in bio.skills){
			var formattedSkill =  HTMLskills.replace(data,bio.skills[skill]);
			$("#skills").append(formattedSkill);
		};	
	}

}





work.display = function(){
	work.jobs.forEach(function(job){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace(data,job.employer);
		var formattedJobTitle = HTMLworkTitle.replace(data,job.title);
		var formattedDate = HTMLworkDates.replace(data,job.dates);
		var formattedLocation = HTMLworkLocation.replace(data,job.location);
		var formattedDescription = HTMLworkDescription.replace(data, job.description);
		$(".work-entry:last").append(formattedEmployer + formattedJobTitle + formattedDate + formattedLocation + formattedDescription);
	});

};

projects.display = function(){
	var count = 0;
	projects.projects.forEach(function(project){
		$("#projects").append(HTMLprojectStart);
		var formattedProjectURL = HTMLprojectURL.replace(data,project.url);
		var formattedProjectTitle = HTMLprojectTitle.replace(data,project.title);
		var formattedProjectDates = HTMLprojectDates.replace(data,project.dates);
		var formattedProjectDescription = HTMLprojectDescription.replace(data,project.description);
		var formattedProjectImage = HTMLprojectImage.replace(data,project.images);
		$(".project-entry:last").append(formattedProjectURL + formattedProjectTitle + formattedProjectDates + formattedProjectDescription + formattedProjectImage);
		if(count > 0){
			$(".project-entry:last").hide();
		}
		count++;
	});
	
	
};


education.display = function(){
	
	education.schools.forEach(function(school){
		$("#education").append(HTMLschoolStart);
		var formattedHTMLschoolName = HTMLschoolName.replace(data, school.name);
		var formattedHTMLschoolDegree = HTMLschoolDegree.replace(data, school.degree);
		var formattedHTMLschoolMajors = HTMLschoolMajor.replace(data, school.majors);
		var formattedHTMLschoolDates = HTMLschoolDates.replace(data, school.dates);
		var formattedHTMLschoolLocation = HTMLschoolLocation.replace(data, school.location);
		$(".education-entry:last").append(formattedHTMLschoolName + formattedHTMLschoolDegree  + formattedHTMLschoolDates + formattedHTMLschoolLocation + formattedHTMLschoolMajors );
	});
	
	$("#education").append(HTMLonlineClasses);
	education.onlineClass.forEach(function(onlineC){
		var formattedHTMLonlineTitle =  HTMLonlineTitle.replace(data,onlineC.title);
		var formattedHTMLonlineSchool = HTMLonlineSchool.replace(data,onlineC.school);
		var formattedHTMLonlineDates = HTMLonlineDates.replace(data,onlineC.dates);
		var formattedHTMLonlineURL = HTMLonlineURL.replace(data,onlineC.url);
		$(".education-entry:last").append(formattedHTMLonlineTitle + formattedHTMLonlineSchool + formattedHTMLonlineDates + formattedHTMLonlineURL);
	});

	
};





var inName = function(name){
	var names = name.split(" ");
	var firstname = names[0];
	var lastname = names[1];
	firstname = firstname.charAt(0).toUpperCase() + firstname.slice(1);
	lastname = lastname.toUpperCase();
	return firstname + " " + lastname;
}



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

bio.display();
work.display();
projects.display();
education.display();
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

