//Controller

function randomJob() { /*velger et tilfeldig tall for de jobbene som kan velges*/
    jobNumber = Math.floor(Math.random() * filteredJobs.length);
    console.log(jobNumber);
}

function tankFilter() { /*Gjør sånn at bare tanks kan velges*/
    // filteredJobs = []
    // for (let i = 0; i < jobs.length; i++) {
    //     if (jobs[i].role == "tank") {
    //         filteredJobs.push(jobs[i]);
    //         jobs[i].checked = true;
    //     }
    //     else { jobs[i].checked = false; }
    // }
    if (filteredJobs.length == 19) {
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].role != 'tank') {
                jobs[i].checked = false;
            }
            filteredByJobs();
        }
        ofon = 'on';
    }
    else if (jobs[0].checked && jobs[1].checked && jobs[2].checked && jobs[3].checked) {
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].role == 'tank') {
                jobs[i].checked = false;
            }
            filteredByJobs();
        }
        ofon = 'off';
    }
    else {
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].role == 'tank') {
                jobs[i].checked = true;
            }
            filteredByJobs();
        }
        ofon = 'on';
    }
    console.log(filteredJobs);
    filterView('Tank', ofon);

}
function healerFilter() { /*Gjør sånn at bare healers kan velges*/
    // filteredJobs = []
    // for (let i = 0; i < jobs.length; i++) {
    //     if (jobs[i].role == "healer") {
    //         filteredJobs.push(jobs[i]);
    //         jobs[i].checked = true;
    //     }
    //     else { jobs[i].checked = false; }
    // }
    if (filteredJobs.length == 19) {
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].role != 'healer') {
                jobs[i].checked = false;
            }
            filteredByJobs();
        }
        ofon = 'on';
    }
    else if (jobs[15].checked && jobs[16].checked && jobs[17].checked && jobs[18].checked) {
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].role == 'healer') {
                jobs[i].checked = false;
            }
            filteredByJobs();
        }
        ofon = 'off';
    }
    else {
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].role == 'healer') {
                jobs[i].checked = true;
            }
            filteredByJobs();
        }
        ofon = 'on';
    }

    console.log(filteredJobs);
    filterView('Healer', ofon);
}
function regenFilter() { /*Gjør sånn at bare regen healers kan velges*/
    // filteredJobs = []
    // for (let i = 0; i < jobs.length; i++) {
    //     if (jobs[i].sub_role == "regenerative") {
    //         filteredJobs.push(jobs[i]);
    //         jobs[i].checked = true;
    //     }
    //     else { jobs[i].checked = false; }
    // }
    if (filteredJobs.length == 19) {
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].sub_role != 'regenerative') {
                jobs[i].checked = false;
            }
            filteredByJobs();
        }
        ofon = 'on';
    }
    else if (jobs[15].checked && jobs[16].checked) {
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].sub_role == 'regenerative') {
                jobs[i].checked = false;
            }
            filteredByJobs();
        } ofon = 'off';
    }
    else {
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].sub_role == 'regenerative') {
                jobs[i].checked = true;
            }
            filteredByJobs();
        }
        ofon = 'on';
    }
    console.log(filteredJobs);
    filterView('Regen', ofon);
}
function barrierFilter() { /*Gjør sånn at bare barrier healers kan velges*/
    // filteredJobs = []
    // for (let i = 0; i < jobs.length; i++) {
    //     if (jobs[i].sub_role == "protective") {
    //         filteredJobs.push(jobs[i]);
    //         jobs[i].checked = true;
    //     }
    //     else { jobs[i].checked = false; }
    // }
    if (filteredJobs.length == 19) {
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].sub_role != 'protective') {
                jobs[i].checked = false;
            }
            filteredByJobs();
        }
        ofon = 'on';
    }
    else if (jobs[17].checked && jobs[18].checked) {
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].sub_role == 'protective') {
                jobs[i].checked = false;
            }
            filteredByJobs();
        }
        ofon = 'off';
    }
    else {
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].sub_role == 'protective') {
                jobs[i].checked = true;
            }
            filteredByJobs();
        }
        ofon = 'on';
    }

    console.log(filteredJobs);
    filterView('Barrier', ofon);
}

function DPSFilter() { /*Gjør sånn at bare dps kan velges*/
    // filteredJobs = []
    // for (let i = 0; i < jobs.length; i++) {
    //     if (jobs[i].role == "DPS") {
    //         filteredJobs.push(jobs[i]);
    //         jobs[i].checked = true;
    //     }
    //     else { jobs[i].checked = false; }
    // }
    if (filteredJobs.length == 19) {
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].role != 'DPS') {
                jobs[i].checked = false;
            }
            filteredByJobs();
        }
        ofon = 'on';
    }
    else if (jobs[4].checked && jobs[5].checked && jobs[6].checked && jobs[7].checked && jobs[8].checked && jobs[9].checked && jobs[10].checked && jobs[11].checked && jobs[12].checked && jobs[13].checked && jobs[14].checked) {
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].role == 'DPS') {
                jobs[i].checked = false;
            }
            filteredByJobs();
        }
        ofon = 'off';
    }
    else {
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].role == 'DPS') {
                jobs[i].checked = true;
            }
            filteredByJobs();
        }
        ofon = 'on';
    }

    console.log(filteredJobs);
    filterView('DPS', ofon);
}

function rangeFilter() { /*gjør sånn at bare fysisk langdistanse dps kan velges*/
    // filteredJobs = []
    // for (let i = 0; i < jobs.length; i++) {
    //     if (jobs[i].sub_role == "physicalrange") {
    //         filteredJobs.push(jobs[i]);
    //         jobs[i].checked = true;
    //     }
    //     else { jobs[i].checked = false; }
    // }
    if (filteredJobs.length == 19) {
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].sub_role != 'physicalrange') {
                jobs[i].checked = false;
            }
            filteredByJobs();
        }
        ofon = 'on';
    }
    else if (jobs[9].checked && jobs[10].checked && jobs[11].checked) {
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].sub_role == 'physicalrange') {
                jobs[i].checked = false;
            }
            filteredByJobs();
        }
        ofon = 'off';
    }
    else {
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].sub_role == 'physicalrange') {
                jobs[i].checked = true;
            }
            filteredByJobs();
        }
        ofon = 'on';
    }


    console.log(filteredJobs);
    filterView('Range', ofon);
}

function meleeFilter() { /*gjør sånn at bare nærkamp dps kan velges*/
    // filteredJobs = []
    // for (let i = 0; i < jobs.length; i++) {
    //     if (jobs[i].sub_role == "melee") {
    //         filteredJobs.push(jobs[i]);
    //         jobs[i].checked = true;
    //     }
    //     else { jobs[i].checked = false; }
    // }
    if (filteredJobs.length == 19) {
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].sub_role != 'melee') {
                jobs[i].checked = false;
            }
            filteredByJobs();
        }
        ofon = 'on';
    }
    else if (jobs[4].checked && jobs[5].checked && jobs[6].checked && jobs[7].checked && jobs[8].checked) {
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].sub_role == 'melee') {
                jobs[i].checked = false;
            }
            filteredByJobs();
        }
        ofon = 'off';
    }
    else {
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].sub_role == 'melee') {
                jobs[i].checked = true;
            }
            filteredByJobs();
        }
        ofon = 'on';
    }
    console.log(filteredJobs);
    filterView('Melee', ofon);
}

function magicFilter() { /*gjør sånn at bare magisk dps kan velges*/
    // filteredJobs = []
    // for (let i = 0; i < jobs.length; i++) {
    //     if (jobs[i].sub_role == "magicrange") {
    //         filteredJobs.push(jobs[i]);
    //         jobs[i].checked = true;
    //     }
    //     else { jobs[i].checked = false; }
    // }
    if (filteredJobs.length == 19) {
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].sub_role != 'magicrange') {
                jobs[i].checked = false;
            }
            filteredByJobs();
        }
        ofon = 'on';
    }
    else if (jobs[12].checked && jobs[13].checked && jobs[14].checked) {
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].sub_role == 'magicrange') {
                jobs[i].checked = false;
            }
            filteredByJobs();
        }
        ofon = 'off';
    }
    else {
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].sub_role == 'magicrange') {
                jobs[i].checked = true;
            }
            filteredByJobs();
        }
        ofon = 'on';
    }
    console.log(filteredJobs);
    filterView('Magic', ofon);
}

function filterOn(i) { /*Filterfunksjon for enkel checkbox, som setter jobben inn i valget*/
    jobs[i].checked = true;
    filteredJobs = [];
    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].checked === true) { filteredJobs.push(jobs[i]) }
    }
    console.log(filteredJobs)
    filterView()
}
function filterOff(i) { /*Filterfunksjon for enkel checkbox, som setter jobben ut i valget*/
    jobs[i].checked = false;
    filteredJobs = [];
    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].checked === true) { filteredJobs.push(jobs[i]) }
    }
    console.log(filteredJobs)
    filterView()
}

function toggleFilter() { /*fjerner filtret sånn at alle kan velges*/
    // filteredJobs = jobs;
    // for (let i = 0; i < jobs.length; i++) {
    //     jobs[i].checked = true
    // }
    // filterView();
    if (filteredJobs.length > 0) { //vil prioritere å gjøre alle false enn true
        for (let i = 0; i < jobs.length; i++) {
            jobs[i].checked = false
        }
        ofon = 'off';
    }
    else {
        for (let i = 0; i < jobs.length; i++) {
            jobs[i].checked = true;
        }
        ofon = 'on';
    }
    filteredJobs = [];
    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].checked === true) { filteredJobs.push(jobs[i]) }
    }
    filterView('All', ofon);
}

function alertOfFilter(filter) {
    if (filter) {
        document.getElementById('filterAlert').innerHTML = /*html*/ `
    ${filter} is filtered ${ofon}!
    `
    }

    else return;
}

function filteredByJobs() {
    filteredJobs = [];
    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].checked === true) { filteredJobs.push(jobs[i]) }
    }
}

function markCategories() {
    if (jobs[0].checked && jobs[1].checked && jobs[2].checked && jobs[3].checked) {
        document.getElementById('tankButton').classList.add('chosenCategory');
    }
    if (jobs[15].checked && jobs[16].checked && jobs[17].checked && jobs[18].checked) {
        document.getElementById('healerButton').classList.add('chosenCategory');
    }
    if (jobs[16].checked && jobs[15].checked) {
        document.getElementById('regenButton').classList.add('chosenCategory');
    }
    if (jobs[17].checked && jobs[18].checked) {
        document.getElementById('barrierButton').classList.add('chosenCategory');
    }
    if (jobs[4].checked && jobs[5].checked && jobs[6].checked && jobs[7].checked && jobs[8].checked && jobs[9].checked && jobs[10].checked && jobs[11].checked && jobs[12].checked && jobs[13].checked && jobs[14].checked) {
        document.getElementById('DPSButton').classList.add('chosenCategory');
    }
    if (jobs[4].checked && jobs[5].checked && jobs[6].checked && jobs[7].checked && jobs[8].checked) {
        document.getElementById('meleeButton').classList.add('chosenCategory');
    }
    if (jobs[9].checked && jobs[10].checked && jobs[11].checked) {
        document.getElementById('rangeButton').classList.add('chosenCategory');
    }
    if (jobs[12].checked && jobs[13].checked && jobs[14].checked) {
        document.getElementById('magicButton').classList.add('chosenCategory');
    }
}

function toggleonof() {
    if (filteredJobs.length > 0) return "off";
    else return "on"
}

function randomMsg() {
    previousMsg = displayMsg;
    if (!previousMsg) {
        let rng = Math.floor(Math.random() * msg.length);
        displayMsg = msg[rng];
    } else {
        let newMsg = msg.filter(x => x !== previousMsg);
        let rng = Math.floor(Math.random() * newMsg.length);
        displayMsg = newMsg[rng];
    }
}