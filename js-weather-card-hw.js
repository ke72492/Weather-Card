const url = 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-D9C3CB33-5D34-4C8A-BFAB-757A71550C36';

const area = document.querySelector('#area');
const weather = document.querySelector('#weather');
const time = document.querySelector('#time');
const temperature = document.querySelector('#temperature');
const rain = document.querySelector('#rain');
const describe = document.querySelector('#describe');
const allBtn = document.querySelector('#all-btn');
const northBtn = document.querySelector('#north-btn');
const middleBtn = document.querySelector('#middle-btn');
const southBtn = document.querySelector('#south-btn');
const eastBtn = document.querySelector('#east-btn');
const externalBtn = document.querySelector('#external-btn');
const container = document.querySelector('.container');
const allArray = [];
const northArray = [];
const middleArray = [];
const southArray = [];
const eastArray = [];
const externalArray = [];


getData();
function getData() {
    fetch(url)
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            setData(data);
        });
};

allBtn.addEventListener('click', function () {
    render(allArray);
});
northBtn.addEventListener('click', function () {
    render(northArray);
});
middleBtn.addEventListener('click', function () {
    render(middleArray);
});
southBtn.addEventListener('click', function () {
    render(southArray);
});
eastBtn.addEventListener('click', function () {
    render(eastArray);
});
externalBtn.addEventListener('click', function () {
    render(externalArray);
});


function setData(data) {

    console.log(data);
    for (let i = 0; i < data.records.location.length; i++) {
        allArray.push([i,data.records.location[i]]);
    };
    northArray.push([1,data.records.location[1]], [3,data.records.location[3]], [4,data.records.location[4]], [5,data.records.location[5]], [7,data.records.location[7]], [13,data.records.location[13]], [18,data.records.location[18]]);
    middleArray.push([8,data.records.location[8]], [9,data.records.location[9]], [11,data.records.location[11]], [14,data.records.location[14]], [20,data.records.location[20]]);
    southArray.push([0,data.records.location[0]], [6,data.records.location[6]], [15,data.records.location[15]], [17,data.records.location[17]], [19,data.records.location[19]]);
    eastArray.push([10,data.records.location[10]], [12,data.records.location[12]]);
    externalArray.push([16,data.records.location[16]], [21,data.records.location[21]]);

};

function render(areaArray) {
    let content = '';
    // 縣市
    // 天氣狀況
    // 時間
    // 溫度
    // 降雨
    // 描述
    for (let i = 0; i < areaArray.length; i++) {
        content += `<div class="card card-${areaArray[i][0]}" data-aos="zoom-in-left" data-aos-duration="3000">
        <h2 id="area">${areaArray[i][1].locationName}</h2>
        <div class="paragraph"  data-aos="flip-right" data-aos-duration="1000"><div id="weather">${areaArray[i][1].weatherElement[0].time[0].parameter.parameterName}</div>
        <div id="time"><div class="time-icon-img"></div>${areaArray[i][1].weatherElement[0].time[0].startTime}<br>~${areaArray[i][1].weatherElement[0].time[0].endTime}</div>
        <div id="temperature"><div class="temperature-icon-img"></div>${areaArray[i][1].weatherElement[2].time[0].parameter.parameterName}℃~${areaArray[i][1].weatherElement[4].time[0].parameter.parameterName}℃</div>
        <div id="rain"><div class="rain-icon-img"></div>${areaArray[i][1].weatherElement[1].time[0].parameter.parameterName}%</div>
        <div id="describe">${areaArray[i][1].weatherElement[3].time[0].parameter.parameterName}</div></div>
    </div>`;

    };

    container.innerHTML = content;

}