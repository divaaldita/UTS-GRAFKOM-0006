function setup() {
            createCanvas(800, 400);
        }

        function draw() {
            // Langit
            background(135, 206, 235); // Warna langit
           // burung
           fill(0);
           ellipse(250, 100, 10, 10); // kepala
           arc(250, 100, 29, 10, 0, PI, PIE); // sayap (busur tertutup)
          // burung
           fill(0);
           ellipse(200, 70, 10, 10); // kepala
           arc(200, 70, 29, 10, 0, PI, PIE); // sayap (busur tertutup)
          // burung
           fill(0);
           ellipse(150, 100, 10, 10); // kepala
           arc(150, 100, 29, 10, 0, PI, PIE); // sayap (busur tertutup)
          // burung
           fill(0);
           ellipse(300, 70, 10, 10); // kepala
           arc(300, 70, 29, 10, 0, PI, PIE); // sayap (busur tertutup)
          // burung
           fill(0);
           ellipse(400, 7, 10, 10); // kepala
           arc(400, 7, 29, 10, 0, PI, PIE); // sayap (busur tertutup)



            // Matahari
            fill(250, 100, 0);
            ellipse(350, 250, 80, 80);

            // Gunung 1
            fill(34, 139, 34); // Warna gunung
            triangle(0, 300, 200, 100, 400, 300);

            // Gunung 2
            fill(34, 139, 34); // Warna gunung
            triangle(300, 300, 500, 100, 800, 300);
// Menggambar jalan menanjak
            fill(169, 169, 169); // Warna jalan
            beginShape();
            vertex(100, height);
            vertex(300, height - 100); // Titik awal jalan menanja
            vertex(350, height - 100); // Titik akhir jalan menanjak
            vertex(400, height);
            endShape(CLOSE);
           

           // Tambahkan pohon-pohon di sekitar jalan dan gunung
  drawTree(100, 300);
  drawTree(180, 320);
  drawTree(250, 290);
  drawTree(450, 310);
  drawTree(520, 330);
          // Fungsi untuk menggambar pohon
function drawTree(x, y) {
  // Batang pohon
  fill(101, 67, 33); // Warna coklat batang
  rect(x - 5, y, 10, 40); // Batang pohon

  // Daun pohon (bentuk segitiga)
  fill(34, 139, 34); // Warna hijau daun
  triangle(x - 20, y, x, y - 40, x + 20, y); // Segitiga daun bawah
  triangle(x - 15, y - 20, x, y - 60, x + 15, y - 20); // Segitiga daun tengah
  triangle(x - 10, y - 40, x, y - 80, x + 10, y - 40); // Segitiga daun atas
}
          
          
}