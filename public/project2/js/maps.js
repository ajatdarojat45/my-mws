// tugas 1
let lokasi = [-6.4576306, 106.6464973];
let detail = "<p align='center'><b>Rumpin</b><br>Lat:-6.4576306 Long:106.6464973 <br><br>Kabupaten Bogor, Jawa Barat</p>";
let marker = L.marker(lokasi).addTo(mymap).bindPopup(detail);

//  tugas 2
let places = [
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
  var markerlist = L.marker(p.lokasi).addTo(mymap).bindPopup(p.detail);
}
