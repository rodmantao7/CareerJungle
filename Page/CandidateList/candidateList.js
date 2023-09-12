var applyFilterButton = document.getElementById('apply-filter-button');
var clearFilterButton = document.getElementById('clear-filter-button');
var collapseButton = document.getElementById('collapse-trigger');
var candidateNameInput = document.getElementById('candidate-name-input');
var main = document.getElementById('main');
var collapsed = false;

// DATA SOURCE
var candidates = [
{"id":1,"first_name":"Lam","last_name":"Pham Bao","email":"nlosemann0@github.com","phone_number":"215-283-9749","star_rating":4,"job":"Software Engineer III","workflow_stage":"Not Hired","source":"ZipRecruiter Organic","applied_date":"5/12/2017","number_of_jobs":4,"isUpdated":0,"isWatched":0,"isReferral":1,"isDuplicate":1},
{"id":2,"first_name":"Lemuel","last_name":"Aland","email":"laland1@icio.us","phone_number":"917-156-9032","star_rating":4,"job":"Data Coordiator","workflow_stage":"On-Site Interview","source":"Glassdoor","applied_date":"4/2/2018","number_of_jobs":3,"isUpdated":0,"isWatched":1,"isReferral":0,"isDuplicate":1},
{"id":3,"first_name":"Bari","last_name":"Hold","email":"bhold2@myspace.com","phone_number":"221-535-4803","star_rating":3,"job":"Actuary","workflow_stage":"On-Site Interview","source":"LinkedIn","applied_date":"4/20/2017","number_of_jobs":1,"isUpdated":1,"isWatched":1,"isReferral":0,"isDuplicate":0},
{"id":4,"first_name":"Tabitha","last_name":"Lantiffe","email":"tlantiffe3@businesswire.com","phone_number":"217-615-5679","star_rating":2,"job":"Database Administrator III","workflow_stage":"Hired — Full-time","source":"ZipRecruiter Organic","applied_date":"1/23/2018","number_of_jobs":3,"isUpdated":1,"isWatched":1,"isReferral":1,"isDuplicate":0},
{"id":5,"first_name":"Lenora","last_name":"Kingcott","email":"lkingcott4@spiegel.de","phone_number":"933-919-2792","star_rating":2,"job":"Executive Secretary","workflow_stage":"New","source":"Glassdoor","applied_date":"12/13/2017","number_of_jobs":3,"isUpdated":1,"isWatched":0,"isReferral":0,"isDuplicate":0},
{"id":6,"first_name":"Reeba","last_name":"Polamontayne","email":"rpolamontayne5@moonfruit.com","phone_number":"693-308-0376","star_rating":4,"job":"Assistant Manager","workflow_stage":"Not Hired","source":"Glassdoor","applied_date":"8/12/2017","number_of_jobs":3,"isUpdated":1,"isWatched":0,"isReferral":0,"isDuplicate":0},
{"id":7,"first_name":"Timmi","last_name":"Lilleycrop","email":"tlilleycrop6@tumblr.com","phone_number":"831-625-3456","star_rating":1,"job":"Database Administrator I","workflow_stage":"On-Site Interview","source":"ZipRecruiter Organic","applied_date":"3/8/2018","number_of_jobs":1,"isUpdated":0,"isWatched":0,"isReferral":1,"isDuplicate":0},
{"id":8,"first_name":"Joy","last_name":"Van der Baaren","email":"jvanderbaaren7@upenn.edu","phone_number":"185-654-7949","star_rating":2,"job":"Editor","workflow_stage":"Hired — Full-time","source":"Our Career Page","applied_date":"11/29/2017","number_of_jobs":1,"isUpdated":0,"isWatched":1,"isReferral":1,"isDuplicate":1},
{"id":9,"first_name":"Corabel","last_name":"Domke","email":"cdomke8@bing.com","phone_number":"442-566-8846","star_rating":1,"job":"Assistant Professor","workflow_stage":"New","source":"ZipRecruiter Organic","applied_date":"5/12/2017","number_of_jobs":4,"isUpdated":0,"isWatched":1,"isReferral":0,"isDuplicate":1},
{"id":10,"first_name":"Way","last_name":"Dominguez","email":"wdominguez9@ifeng.com","phone_number":"448-305-3493","star_rating":4,"job":"Electrical Engineer","workflow_stage":"Not Hired","source":"ZipRecruiter Boost","applied_date":"11/15/2017","number_of_jobs":3,"isUpdated":0,"isWatched":1,"isReferral":1,"isDuplicate":1},
{"id":11,"first_name":"Clem","last_name":"Seson","email":"csesona@stanford.edu","phone_number":"870-110-8916","star_rating":3,"job":"Senior Developer","workflow_stage":"Hired — Full-time","source":"Our Career Page","applied_date":"3/6/2018","number_of_jobs":1,"isUpdated":0,"isWatched":0,"isReferral":1,"isDuplicate":1},
{"id":12,"first_name":"Evangelin","last_name":"Sansun","email":"esansunb@cmu.edu","phone_number":"643-711-2206","star_rating":2,"job":"Speech Pathologist","workflow_stage":"HR Phone Screen","source":"Our Career Page","applied_date":"6/29/2017","number_of_jobs":1,"isUpdated":1,"isWatched":1,"isReferral":1,"isDuplicate":1},
{"id":13,"first_name":"Lilah","last_name":"Huddles","email":"lhuddlesc@wikimedia.org","phone_number":"951-336-3626","star_rating":4,"job":"Engineer III","workflow_stage":"Hired — Full-time","source":"Indeed","applied_date":"11/17/2017","number_of_jobs":1,"isUpdated":1,"isWatched":1,"isReferral":0,"isDuplicate":0},
{"id":14,"first_name":"Dacia","last_name":"Cristofaro","email":"dcristofarod@ox.ac.uk","phone_number":"993-782-2526","star_rating":4,"job":"Programmer Analyst III","workflow_stage":"Offer Extended","source":"ZipRecruiter Boost","applied_date":"4/24/2017","number_of_jobs":4,"isUpdated":0,"isWatched":1,"isReferral":0,"isDuplicate":0},
{"id":15,"first_name":"Josias","last_name":"Mose","email":"jmosee@nasa.gov","phone_number":"260-593-5804","star_rating":1,"job":"Librarian","workflow_stage":"On-Site Interview","source":"ZipRecruiter Organic","applied_date":"9/22/2017","number_of_jobs":2,"isUpdated":0,"isWatched":0,"isReferral":0,"isDuplicate":0},
{"id":16,"first_name":"Mariel","last_name":"Sancroft","email":"msancroftf@businessweek.com","phone_number":"301-650-9616","star_rating":3,"job":"Account Executive","workflow_stage":"HR Phone Screen","source":"LinkedIn","applied_date":"7/9/2017","number_of_jobs":3,"isUpdated":0,"isWatched":1,"isReferral":0,"isDuplicate":1},
{"id":17,"first_name":"Melisse","last_name":"Haselden","email":"mhaseldeng@si.edu","phone_number":"217-713-0041","star_rating":3,"job":"Help Desk Technician","workflow_stage":"Offer Extended","source":"Indeed","applied_date":"6/26/2017","number_of_jobs":3,"isUpdated":1,"isWatched":0,"isReferral":1,"isDuplicate":0},
{"id":18,"first_name":"Ruggiero","last_name":"Caulder","email":"rcaulderh@prlog.org","phone_number":"553-123-6974","star_rating":5,"job":"Assistant Professor","workflow_stage":"Hiring Manager Phone Interview","source":"ZipRecruiter Organic","applied_date":"5/2/2017","number_of_jobs":4,"isUpdated":1,"isWatched":1,"isReferral":0,"isDuplicate":1},
{"id":19,"first_name":"Charil","last_name":"Oakinfold","email":"coakinfoldi@tiny.cc","phone_number":"701-162-7191","star_rating":3,"job":"Software Test Engineer I","workflow_stage":"HR Phone Screen","source":"Indeed","applied_date":"9/24/2017","number_of_jobs":2,"isUpdated":1,"isWatched":0,"isReferral":0,"isDuplicate":0},
{"id":20,"first_name":"Morly","last_name":"Mathe","email":"mmathej@bravesites.com","phone_number":"678-151-2321","star_rating":2,"job":"Technical Writer","workflow_stage":"New","source":"ZipRecruiter Organic","applied_date":"12/24/2017","number_of_jobs":1,"isUpdated":0,"isWatched":1,"isReferral":0,"isDuplicate":1},
{"id":21,"first_name":"Tessie","last_name":"Handyside","email":"thandysidek@topsy.com","phone_number":"223-265-0624","star_rating":4,"job":"Database Administrator II","workflow_stage":"Hiring Manager Phone Interview","source":"ZipRecruiter Boost","applied_date":"11/17/2017","number_of_jobs":4,"isUpdated":1,"isWatched":0,"isReferral":0,"isDuplicate":0},
{"id":22,"first_name":"Kareem","last_name":"Merigot","email":"kmerigotl@tmall.com","phone_number":"815-217-7772","star_rating":4,"job":"Registered Nurse","workflow_stage":"HR Phone Screen","source":"ZipRecruiter Organic","applied_date":"4/28/2018","number_of_jobs":4,"isUpdated":1,"isWatched":1,"isReferral":1,"isDuplicate":0},
{"id":23,"first_name":"Sissy","last_name":"Vosse","email":"svossem@umn.edu","phone_number":"824-695-9529","star_rating":3,"job":"Web Designer III","workflow_stage":"Not Hired","source":"Indeed","applied_date":"6/18/2017","number_of_jobs":4,"isUpdated":1,"isWatched":1,"isReferral":0,"isDuplicate":1},
{"id":24,"first_name":"Lindie","last_name":"Hague","email":"lhaguen@skyrock.com","phone_number":"208-434-8603","star_rating":2,"job":"Developer I","workflow_stage":"Hiring Manager Phone Interview","source":"ZipRecruiter Boost","applied_date":"4/20/2017","number_of_jobs":1,"isUpdated":0,"isWatched":1,"isReferral":1,"isDuplicate":0},
{"id":25,"first_name":"Cordie","last_name":"Foss","email":"cfosso@example.com","phone_number":"815-636-4035","star_rating":3,"job":"Actuary","workflow_stage":"Not Hired","source":"ZipRecruiter Organic","applied_date":"11/8/2017","number_of_jobs":3,"isUpdated":0,"isWatched":0,"isReferral":0,"isDuplicate":1},
{"id":26,"first_name":"Grover","last_name":"Mogra","email":"gmograp@bbc.co.uk","phone_number":"636-221-2847","star_rating":4,"job":"Structural Analysis Engineer","workflow_stage":"On-Site Interview","source":"ZipRecruiter Organic","applied_date":"10/3/2017","number_of_jobs":3,"isUpdated":0,"isWatched":1,"isReferral":1,"isDuplicate":1},
{"id":27,"first_name":"Dalia","last_name":"Cordero","email":"dcorderoq@trellian.com","phone_number":"167-404-9334","star_rating":1,"job":"Senior Editor","workflow_stage":"New","source":"Our Career Page","applied_date":"6/15/2017","number_of_jobs":2,"isUpdated":0,"isWatched":1,"isReferral":0,"isDuplicate":1},
{"id":28,"first_name":"Pierre","last_name":"Ceschini","email":"pceschinir@addtoany.com","phone_number":"958-967-9645","star_rating":4,"job":"Environmental Specialist","workflow_stage":"Not Hired","source":"LinkedIn","applied_date":"5/3/2017","number_of_jobs":2,"isUpdated":0,"isWatched":0,"isReferral":1,"isDuplicate":1},
{"id":29,"first_name":"Marianna","last_name":"Jimmes","email":"mjimmess@ucsd.edu","phone_number":"320-950-4025","star_rating":5,"job":"Analyst Programmer","workflow_stage":"Offer Extended","source":"Indeed","applied_date":"2/20/2018","number_of_jobs":1,"isUpdated":0,"isWatched":0,"isReferral":0,"isDuplicate":0},
{"id":30,"first_name":"Giorgia","last_name":"Gales","email":"ggalest@sciencedaily.com","phone_number":"194-959-0181","star_rating":3,"job":"Programmer III","workflow_stage":"New","source":"Indeed","applied_date":"3/16/2018","number_of_jobs":1,"isUpdated":0,"isWatched":0,"isReferral":0,"isDuplicate":1},
{"id":31,"first_name":"Bill","last_name":"Seers","email":"bseersu@cafepress.com","phone_number":"808-745-1265","star_rating":1,"job":"Accounting Assistant I","workflow_stage":"Offer Extended","source":"LinkedIn","applied_date":"6/8/2017","number_of_jobs":2,"isUpdated":1,"isWatched":1,"isReferral":0,"isDuplicate":1},
{"id":32,"first_name":"Cleo","last_name":"Malpass","email":"cmalpassv@w3.org","phone_number":"521-813-5643","star_rating":3,"job":"Accounting Assistant III","workflow_stage":"HR Phone Screen","source":"ZipRecruiter Boost","applied_date":"12/31/2017","number_of_jobs":3,"isUpdated":1,"isWatched":1,"isReferral":1,"isDuplicate":0},
{"id":33,"first_name":"Wynne","last_name":"Wann","email":"wwannw@amazon.de","phone_number":"420-191-7797","star_rating":1,"job":"Tax Accountant","workflow_stage":"New","source":"ZipRecruiter Boost","applied_date":"10/8/2017","number_of_jobs":3,"isUpdated":1,"isWatched":0,"isReferral":1,"isDuplicate":0},
{"id":34,"first_name":"Bryant","last_name":"Blenkharn","email":"bblenkharnx@a8.net","phone_number":"754-418-1219","star_rating":1,"job":"Programmer Analyst II","workflow_stage":"Hiring Manager Phone Interview","source":"Glassdoor","applied_date":"9/8/2017","number_of_jobs":3,"isUpdated":1,"isWatched":1,"isReferral":0,"isDuplicate":0},
{"id":35,"first_name":"Sallyann","last_name":"Spillane","email":"sspillaney@dropbox.com","phone_number":"845-774-0605","star_rating":1,"job":"General Manager","workflow_stage":"Hiring Manager Phone Interview","source":"LinkedIn","applied_date":"4/17/2017","number_of_jobs":1,"isUpdated":0,"isWatched":1,"isReferral":1,"isDuplicate":0},
{"id":36,"first_name":"Nesta","last_name":"Tesoe","email":"ntesoez@rambler.ru","phone_number":"166-141-6484","star_rating":1,"job":"Engineer IV","workflow_stage":"Hired — Full-time","source":"ZipRecruiter Organic","applied_date":"1/11/2018","number_of_jobs":1,"isUpdated":1,"isWatched":0,"isReferral":0,"isDuplicate":0},
{"id":37,"first_name":"Delaney","last_name":"Bridat","email":"dbridat10@yolasite.com","phone_number":"838-577-7675","star_rating":4,"job":"VP Marketing","workflow_stage":"On-Site Interview","source":"Glassdoor","applied_date":"5/7/2017","number_of_jobs":1,"isUpdated":0,"isWatched":1,"isReferral":0,"isDuplicate":1},
{"id":38,"first_name":"Uriah","last_name":"Soppit","email":"usoppit11@liveinternet.ru","phone_number":"808-865-0104","star_rating":5,"job":"Assistant Media Planner","workflow_stage":"Hired — Full-time","source":"ZipRecruiter Organic","applied_date":"9/2/2017","number_of_jobs":2,"isUpdated":0,"isWatched":0,"isReferral":1,"isDuplicate":1},
{"id":39,"first_name":"Chico","last_name":"Folkard","email":"cfolkard12@abc.net.au","phone_number":"756-405-5413","star_rating":2,"job":"VP Quality Control","workflow_stage":"Not Hired","source":"Our Career Page","applied_date":"6/5/2017","number_of_jobs":4,"isUpdated":0,"isWatched":1,"isReferral":1,"isDuplicate":1},
{"id":40,"first_name":"Cyrus","last_name":"Chaundy","email":"cchaundy13@netvibes.com","phone_number":"166-675-5229","star_rating":3,"job":"Statistician IV","workflow_stage":"Hiring Manager Phone Interview","source":"LinkedIn","applied_date":"5/14/2017","number_of_jobs":1,"isUpdated":0,"isWatched":1,"isReferral":1,"isDuplicate":0}
];

// HANDLEBARS STUFF
Handlebars.registerHelper('times', function(n, block) {
    var accum = '';
    for(var i = 0; i < n; ++i)
        accum += block.fn(i);
    return accum;
});

// HANDLEBARS - CANDIDATE LIST
var candidateListTarget = document.getElementById('candidate-list-target');
var candidateListTemplate = document.getElementById('candidate-list-template').innerHTML;
var candidateListCompiledTemplate = Handlebars.compile(candidateListTemplate);
candidateListTarget.innerHTML += candidateListCompiledTemplate(candidates);

// HANDLEBARS - FILTER FORM
var jobsList = getJobList(candidates);
var filterFormTarget = document.getElementById('filter-form-target');
var filterFormTemplate = document.getElementById('filter-form-template').innerHTML;
var filterFormCompiledTemplate = Handlebars.compile(filterFormTemplate);
filterFormTarget.innerHTML += filterFormCompiledTemplate(candidates);

// FILTER CANDIDATES
function filterCandidates() {
    var candidatesCopy = candidates;
    
    // Filter List
    var filteredArray = candidatesCopy.filter(function (candidate) {
        if (
            candidate.first_name.toLowerCase().includes(candidateNameInput.value) ||
            candidate.last_name.toLowerCase().includes(candidateNameInput.value)
        ){
            return true;
        } else {
            return false;
        }
    });
    
    // Render Filtered List To Page
    renderList(filteredArray);
}

// RENDER LIST
function renderList(list) {
    candidateListTarget.innerHTML = candidateListCompiledTemplate(list);
}

// GET JOB LIST
function getJobList(candidates) {
    var jobList = [];
    
    candidates.forEach(function (candidate) {
        if (jobList.includes(candidate.job)) return;
        
        jobList.push(candidate.job);
    });
    
    console.log(jobList);
    return jobList;
}

// EVENT LISTENERS
applyFilterButton.addEventListener('click', function () {
    filterCandidates();
});

clearFilterButton.addEventListener('click', function () {
    candidateNameInput.value = '';
    renderList(candidates);
});

collapseButton.addEventListener('click', function () {
    if (collapsed) {
        collapsed = false;
        main.classList.remove('is-side-collapsed');
    } else {
        collapsed = true;
        main.classList.add('is-side-collapsed');
    }
});