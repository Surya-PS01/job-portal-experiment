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
        alert("Fill all fields");
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

    let result = [];

    for (let i = 0; i < jobs.length; i++) {

        if (jobs[i].role.toLowerCase().includes(searchRole) &&
            jobs[i].location.toLowerCase().includes(searchLocation)) {

            result.push(jobs[i]);
        }
    }

    displayJobs(result);
});

function displayJobs(arr) {

    jobTable.innerHTML = "";

    for (let i = 0; i < arr.length; i++) {

        let row = document.createElement("tr");

        row.innerHTML =
            "<td>" + arr[i].company + "</td>" +
            "<td>" + arr[i].role + "</td>" +
            "<td>" + arr[i].location + "</td>" +
            "<td>" + arr[i].type + "</td>" +
            "<td>" +
            "<button onclick='deleteJob(" + i + ")'>Delete</button>" +
            "</td>";

        jobTable.appendChild(row);
    }
}

function deleteJob(index) {

    jobs.splice(index, 1);
    displayJobs(jobs);
}