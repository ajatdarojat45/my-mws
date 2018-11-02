// =========== TUGAS 1 =============
let lokasi = [-6.4576306, 106.6464973];
let detail = "<p align='center'><b>Rumpin</b><br>Lat:-6.4576306 Long:106.6464973 <br><br>Kabupaten Bogor, Jawa Barat</p>";
let marker = L.marker(lokasi).addTo(mymap).bindPopup(detail);


// ========== TUGAS 2 ==============
let places = [
  {
    "lokasi": [-6.4576306, 106.6464973],
    "detail": "<p align='center'><b>Rumpin</b><br>Lat:-6.4492597 Long:106.6779359 <br><br>Kabupaten Bogor, Jawa Barat</p>"
  },
  {
    "lokasi": [-6.4492597, 106.6779359],
    "detail": "<p align='center'><b>Ciseeng</b><br>Lat:-6.4492597 Long:106.6779359 <br><br>Kabupaten Bogor, Jawa Barat</p>"
  },
  {
    "lokasi": [-6.4222402, 106.7325943],
    "detail": "<p align='center'><b>Parung</b><br>Lat:-6.4222402 Long:106.6779359 <br><br>Kabupaten Bogor, Jawa Barat</p>"
  },
  {
    "lokasi": [-6.4901067, 106.8306951],
    "detail": "<p align='center'><b>Cibinong</b><br>Lat:-6.4901067 Long:106.8306951 <br><br>Kabupaten Bogor, Jawa Barat</p>"
  },
  {
    "lokasi": [-6.3478915, 106.7411559],
    "detail": "<p align='center'><b>Pamulang</b><br>Lat:-6.3478915 Long:106.7411559 <br><br>Tanggerang Selatan, Banten</p>"
  }
];

for (var p of places) {
    var markerlist = L.marker(p.lokasi).addTo(mymap).bindPopup(p.sponsor);
}


// ============ TUGAS 3 =============
function findLocation(x, y) {
    console.log(x, y);
    for (var i = 0; i < places.length; i++) {
        if (places[i].lokasi[0] == x && places[i].lokasi[1] == y) {
            return i;
        }
    }
    return -1;
}

function showLocation(e) {
    // console.log("you clicked " + e.latlng.lat + " dan "+ e.latlng.lng);
    let ix = findLocation(e.latlng.lat, e.latlng.lng);
    console.log(ix);
    if (ix >= 0) {
        img.src = placesreview[ix].gambar;
        par.textContent = placesreview[ix].review;
    }
}

// Persiapkan tempat untuk gambar dan review
let gmb = document.getElementById("gmb");
let rev = document.getElementById("review");
let img = document.createElement('img');
let par = document.createElement('p');
gmb.appendChild(img);
rev.appendChild(par);

let r0 = "Rumpin - Kabupaten Bogor Jawa Barat Indonesia.";
let r1 = "Ciseeng - Kabupaten Bogor Jawa Barat Indonesia";
let r2 = "Parung - Kabupaten Bogor Jawa Barat Indonesia";
let r3 = "Cibinog - Kabupaten Bogor Jawa Barat Indonesia";
let r4 = "Pamulang - Tanggerang Selatan Banten Indonesia";

let placesreview = [
    { "lokasi": [-6.4576306, 106.6464973],"sponsor": "<p align='center'><b>Rumpin</b><br>Lat:-6.4576306 Long:106.6464973 <br><br> Kabupaten Bogor Jawa Barat Indonesia</p>", "gambar": "images/rumpin.jpg", "review": r0 },
    { "lokasi": [-6.4492597, 106.6779359], "sponsor": "<p align='center'><b>Ciseeng</b><br>Lat:--6.4492597 Long:106.6779359 <br><br> Kabupaten Bogor Jawa Barat Indonesia</p>", "gambar": "images/ciseeng.jpg", "review": r1 },
    { "lokasi": [-6.4222402, 106.7325943], "sponsor": "<p align='center'><b>Parung</b><br>Lat:-6.4222402 Long:106.7325943 <br><br> Kabupaten Bogor Jawa Barat Indonesia</p>", "gambar": "images/parung.jpg", "review": r2 },
    { "lokasi": [-6.4901067, 106.8306951], "sponsor": "<p align='center'><b>Cibinong</b><br>Lat:-6.4901067 Long:106.8306951 <br><br> Kabupaten Bogor Jawa Barat Indonesia</p>", "gambar": "images/cibinong.jpg", "review": r3 },
    { "lokasi": [-6.3478915, 106.7411559], "sponsor": "<p align='center'><b>Pamulang</b><br>Lat:-6.3478915 Long:106.7411559 <br><br> Tanggerang Selatan Banten Indonesia</p>", "gambar": "images/pamulang.jpg", "review": r4 }
];

for (var p of placesreview) {
    var markerreview = L.marker(p.lokasi).addTo(mymap).bindPopup(p.sponsor);
    markerreview.on('click', showLocation);
}




/* // ============ TUGAS 4 =============
var URL = "https://yusufrizalh-mws.firebaseapp.com/project3/data/peta.json";

async function f(URL){
    try {
        const resp = await(fetch(URL));
        const resp2 = await resp.json();
        localStorage.setItem('places', JSON.stringify(resp2.places));
    } catch (error) {
        console.log(error);
    }
}

f(URL);
let places = JSON.parse(localStorage.getItem('places'));
console.log(places);
for(var p of places){
    var marker = L.marker(p.lokasi).addTo(mymap).bindPopup(p.sponsor);
    marker.on('click', showLocation);
} */
