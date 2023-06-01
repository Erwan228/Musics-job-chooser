//View
view();
function view() {
    document.getElementById('scree').innerHTML = /*html*/ `
    <button onclick="filterView()" style="height: 75px; width: 100px; font-size: large;">Filter</button>
    <h1>Choose a random FFXIV job!</h1>
        <div>
            <button class="jobButton" onClick="updateView()"
                style="height: 250px; width: 250px; font-size: x-large; ">Find a
                job</button>
        </div>
    `
}

function updateView() {
    randomJob()
    document.body.style.backgroundColor = filteredJobs[jobNumber].color;


    document.getElementById('scree').innerHTML = /*HTML*/ `
    <button onclick="filterView()" style="height: 75px; width: 100px; font-size: large;">Filter</button>
    <h1>${filteredJobs[jobNumber].jobName}</h1>
    <br><p style="font-weight: bold;">${filteredJobs[jobNumber].info}</p>
    <div>
        <button class="jobButton" onClick="updateView();" style="height: 250px; width: 250px; font-size: x-large;">Another job</button>
    </div>
    `


}

function filterView(filter, ofon) {
    document.body.style.backgroundColor = 'beige';

    document.getElementById('scree').innerHTML = /*html*/ `
    <button class="biggerButton" onClick="updateView()" style="height: 75px; width: 100px; font-size: large;">Find a job</button>
    <h2>Specify which role you want to choose from<h2>
        <div id="filterAlert"><br></div> <!--Brukes for å displaye hvilket filter er trykket på-->
        <hr>
        <button id="tankButton" class="tankButton biggerButton" onclick="tankFilter()">Tank</button><br>
        <button id="healerButton" class="healerButton biggerButton" onclick="healerFilter()">Healer</button><br>
        <button id="regenButton" class="healerButton biggerButton" onclick="regenFilter()">Regen</button>
        <button id="barrierButton" class="healerButton biggerButton" onclick="barrierFilter()">Barrier</button><br>
        <button id="DPSButton" class="DPSButton biggerButton" onclick="DPSFilter()">DPS</button><br>
        <button id="meleeButton" class="DPSButton biggerButton" onclick="meleeFilter()">Melee</button>
        <button id="rangeButton" class="DPSButton biggerButton" onclick="rangeFilter()">Range</button>
        <button id="magicButton" class="DPSButton biggerButton" onclick="magicFilter()">Magic</button>
        <hr>
        <button class="biggerButton" onclick="toggleFilter()">Toggle all ${toggleonof()}</button>
        <hr>
        <h2>Check off the jobs individually</h2>
        <div id="Checks">
            
            </div>
            <hr>
        
       
    `
    //  for (let i = 0; i < jobs.length; i++) {
    //      if (jobs[i].checked === true) {
    //          document.getElementById('Checks').innerHTML += /*html*/`
    //      <input type='checkbox' id='${jobs[i].jobName}' checked onchange="filterOff(${i})"><p style='margin-top: 0px;'> ${jobs[i].jobName} </p>
    //              `}
    //      else {
    //          document.getElementById('Checks').innerHTML += /*html*/`
    //              <input type = 'checkbox' id = '${jobs[i].jobName}' onchange='filterOn(${i})'> <p style='margin-top: 0px;'> ${jobs[i].jobName} </p>
    //      `};
    for (let i = 0; i < jobs.length; i++) { //laget for å sette inn sjekkbokser med innhold basert på om de er sjekka eller ikke
        if (jobs[i].checked === true) {
            checkContent[i] = `<input type='checkbox' id='${jobs[i].jobName}' checked onchange="filterOff(${i})"><p style='margin-top: 0px;'> ${jobs[i].jobName} </p>`
        }
        else {
            checkContent[i] = `<input type = 'checkbox' id = '${jobs[i].jobName}' onchange='filterOn(${i})'> <p style='margin-top: 0px;'> ${jobs[i].jobName} </p>`
        }
    }
    document.getElementById('Checks').innerHTML = /*html*/ `
    <div id="tanks">
    ${checkContent[0]}
    ${checkContent[1]}
    ${checkContent[2]}
    ${checkContent[3]}
    </div><br><br>
    <div id="DPS">
        <div id="melee">
    ${checkContent[4]}
    ${checkContent[5]}
    ${checkContent[6]}
    ${checkContent[7]}
    ${checkContent[8]}
        </div><br>
        <div id="range">
    ${checkContent[9]}
    ${checkContent[10]}
    ${checkContent[11]}
    </div><br>
    <div id="magic">
    ${checkContent[12]}
    ${checkContent[13]}
    ${checkContent[14]}
    </div></div><br><br>
    <div id="healer"><div id="regen">
    ${checkContent[15]}
    ${checkContent[16]}
    </div><div id="barrier"><br>
    ${checkContent[17]}
    ${checkContent[18]}
    </div></div>
    `

    markCategories();
    alertOfFilter(filter);
}
