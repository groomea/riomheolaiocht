const firebaseConfig = {
  apiKey: "AIzaSyAXlWI6SotJYBZ8llx3QNr-WvezXKH7zTA",
  authDomain: "fiorthionscnamh.firebaseapp.com",
  databaseURL: "https://fiorthionscnamh-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fiorthionscnamh",
  storageBucket: "fiorthionscnamh.appspot.com",
  messagingSenderId: "556360084683",
  appId: "1:556360084683:web:f9833fd9e15b66a9bb7f4e"
};


firebase.initializeApp(firebaseConfig);

var myDB = firebase.database().ref('/');
myDB.on("value", displayRecords);
// Túsaigh Firebase


togtha = 0;
ganTogtha = 0;
const d = new Date();

blianta = [];
mionna = [];
dataiTogtha = [];
// Túsaigh athróga a bheidh in úsáid níos déanaí

function displayRecords(data) {
  var record = data.val();

  dataiTogtha.push(record.data);
  mionna.push(record.mi);
  blianta.push(record.bliain);

  // Faigh sonraí ó Firebase agus cuir in eagair iad
}




function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms)); // Dascalescu, D., 2022. What is the JavaScript version of sleep()? Ar fáil ag: https://stackoverflow.com/a/39914235 [Dáta rochtana 9 Márta 2022]
}



// Chris, 2020. check date against an array of dates. Ar fáil ag: https://stackoverflow.com/questions/39899332/check-date-against-an-array-of-dates [Dáta rochtana 9 Márta 2022]
function isInArray(array, value) {
  return !!array.find(item => {return item.getTime() == value.getTime()});
}

async function seachtLaIsDeanai() {
  await sleep(1000); // Le bheith cinnte go bhfuil sonraí faighte ó Firebase faoin am seo

  togtha = 0;
  ganTogtha = 0;



  seachtLa = [];
  
  accDataiTogtha = [];
  for (var i = 0; accDataiTogtha.length < 7; i++) {
    dateTogtha = new Date(parseInt(blianta[i])+2000, parseInt(mionna[i])-1, parseInt(dataiTogtha[i])); // -1 toisc go dtosaíonn Eanáir ag 0, ach tosaíonn Eanáir ag 1 ar Firebase domsa
    // console.log("DATETOGTHA");
    // console.log(dateTogtha);
    // console.log("accDataiTogtha");
    // console.log(accDataiTogtha);
    // In úsáid le linn tástálacha
    if (  !(isInArray(accDataiTogtha, dateTogtha))) { // Bain sonraí dúbailte
      accDataiTogtha.push(dateTogtha);

    }
  }

  today = new Date();
  days = 86400000; //Líon milleasoicindí i lá amháin

  for (var i = 0; i < 7; i++) {
    daysAgo = new Date(today - (i*days)); // Bechtel, J., 2016. How to subtract days from a plain Date? Ar fáil ag: https://stackoverflow.com/questions/1296358/how-to-subtract-days-from-a-plain-date [Dáta rochtana 9 Márta 2022]. 
    daysAgo.setSeconds(0,0);
    daysAgo.setMinutes(0,0);
    daysAgo.setHours(0,0);
    daysAgo.setMonth(daysAgo.getMonth());

    seachtLa.push(daysAgo);


  }

  // console.log("seachtLa");
  // console.log(seachtLa);
  // In úsáid le linn tástálacha

  for (var i = 0; i < 7; i++) {
    // console.log("---------");
    // console.log("accDataiTogtha[i]");
    // console.log(accDataiTogtha[i]);
    // In úsáid le linn tástálacha
    if (isInArray(seachtLa, accDataiTogtha[i])) {
      // console.log("seachtLa.includes(accDataiTogtha[i]");
      togtha++;
    }
    else {
      ganTogtha++;
    }
  }


  var data=[{
    values: [togtha, ganTogtha],
    labels: ['Tógtha', "Dearmad déanta é a thógáil"],
    type: 'pie'
  }];

  var layout={
    title: "Minicíocht sna 7 lá is déanaí",
    xaxis: { title: "Am (soicind)"},
    yaxis: { title: "Leibhéal"}
  };

  Plotly.newPlot("plotlyGraph", data, layout);
  // Tarraing an graf
}




async function togthaInniu() {
  await sleep(1000); // Le bheith cinnte go bhfuil sonraí faighte ó Firebase faoin am seo




  dateInniu = new Date();
  dateInniu.setSeconds(0,0);
  dateInniu.setMinutes(0,0);
  dateInniu.setHours(0,0);

  dateTogtha = new Date(parseInt(blianta[0])+2000, parseInt(mionna[0])-1, parseInt(dataiTogtha[0])); // -1 toisc go dtosaíonn Eanáir ag 0, ach tosaíonn Eanáir ag 1 ar Firebase domsa


  // Hasan, M., 2021. Calculate Days Between Two Dates in JavaScript. Ar fáil ag: https://web.archive.org/web/20210625150157/https://www.codecheef.org/article/calculate-days-between-two-dates-in-javascript [Dáta rochtana 9 Márta 2022]
  var Difference_In_Time = dateInniu.getTime() - dateTogtha.getTime();

  // Líon laethanta idir dhá dháta
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  const daysZZ = Math.trunc(Difference_In_Days);

  // console.log("dateInniu");
  // console.log(dateInniu);

  // console.log("dateTogtha");
  // console.log(dateTogtha);
  // In úsáid le linn tástálacha

  if (daysZZ == 0) {
    document.getElementById("togtha").innerHTML = "Tógtha" + `<img class="togthaImg" id="togthaImg" src="img/ClipartKey_635067.png"></img>`;
  }
}



async function streak() {
  var streak = 0;
  await sleep(1000); // Le bheith cinnte go bhfuil sonraí faighte ó Firebase faoin am seo


  dateInniu = new Date();
  dateInniu.setSeconds(0,0);
  dateInniu.setMinutes(0,0);
  dateInniu.setHours(0,0);

  




  for (var i = 0; i < dataiTogtha.length; i++) {
  dateTogtha = new Date(parseInt(blianta[i])+2000, parseInt(mionna[i])-1, parseInt(dataiTogtha[i])); // -1 toisc go dtosaíonn Eanáir ag 0, ach tosaíonn Eanáir ag 1 ar Firebase domsa

  var Difference_In_Time = dateInniu.getTime() - dateTogtha.getTime();

  // Líon laethanta idir dhá dháta
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  const daysz = Math.trunc(Difference_In_Days); // (Hasan, Calculate Days Between Two Dates in JavaScript 2021)

    // console.log("-----");
    // console.log("daysz");
    // console.log(daysz);
    // console.log("i");
    // console.log(i);
    // In úsáid le linn tástálacha
    if (daysz == i) {
      streak++;
    }
    else if (i != 0) { // Mura bhfuil sé tógtha inniu
      break;
    }
  }




  // console.log("Stríoc:");
  // console.log(streak);
  // In úsáid le linn tástálacha

  document.getElementById("strioc").innerHTML = "Stríoc: " + String(streak)+ " lá";
}





window.onload = function(){ // Nuair a dhéantar lódáil ar an leathanach,

  seachtLaIsDeanai();
  togthaInniu();
  streak();
}