
let jobs = [];



let publishBtn = document.getElementById("publishBtn");
let searchBtn = document.getElementById("searchBtn");
let jobTable = document.getElementById("jobTable");



publishBtn.addEventListener("click", function () {

    let company = document.getElementById("company").value;
    let role = document.getElementById("role").value;
    let location = document.getElementById("location").value;
    let type = document.getElementById("type").value;

    if (company === "" || role === "" || location === "" || type === "") {
        alert("Please fill all fields");
        return;
    }

    let job = {
        company: company,
        role: role,
        location: location,
        type: type
    };

    jobs.push(job);

    displayJobs(jobs);

    document.getElementById("company").value = "";
    document.getElementById("role").value = "";
    document.getElementById("location").value = "";
    document.getElementById("type").value = "";
});



searchBtn.addEventListener("click", function () {

    let searchRole = document.getElementById("searchRole").value.toLowerCase();
    let searchLocation = document.getElementById("searchLocation").value.toLowerCase();

    let filteredJobs = jobs.filter(function (job) {

        return job.role.toLowerCase().includes(searchRole) &&
               job.location.toLowerCase().includes(searchLocation);
    });

    displayJobs(filteredJobs);
});


function displayJobs(jobList) {

    jobTable.innerHTML = "";

    jobList.forEach(function (job) {

        let row = document.createElement("tr");

        row.innerHTML =
            "<td>" + job.company + "</td>" +
            "<td>" + job.role + "</td>" +
            "<td>" + job.location + "</td>" +
            "<td>" + job.type + "</td>" +
            "<td><button>Apply</button></td>";

        jobTable.appendChild(row);
    });
}