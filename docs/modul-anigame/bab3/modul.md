# Camera Movement & Layer Parenting

## 3.1 Adobe Animate Camera

 &emsp;&emsp;Adobe Animate merupakan Adobe Flash dalam versi yang telah diperbaharui. Sesuai dengan namanya, Adobe Animate dapat digunakan untuk membuat animasi bergerak berbasis vektor. Adobe Animate mendukung embedding audio dan video, grafik raster, teks, dan ActionScript.

&emsp;&emsp;Pada Adobe Animate CC terdapat fitur bernama Camera Tool. Dengan fitur tersebut pengguna dapat membuat gerakan kamera sehingga tampilan terkesan lebih realistis pada animasi yang dibuat. Misalnya jika ada animasi berjalan, maka penggunaan camera tool dapat digunakan untuk membuat efek background parallax agar pergerakan karakter dan latar belakang terlihat lebih dinamis.

&emsp;&emsp;Gerakan kamera tool (Camera Movement) merupakan sebuah aktivitas membangun suasana dramatis dalam sebuah video maupun film dengan cara menggerakan kamera. Banyak alasan mengapa kamera harus bergerak, selain dapat membangun suasana dramatis, penggunaan gerakan kamera secara tepat dapat menciptakan visual yang lebih dinamis, mengarahkan perhatian penonton pada subyek tertentu, mengungkap maupun menyembunyikan dimensi ruang, dan juga dapat menciptakan visual yang lebih ekspresif.

&emsp;&emsp;Sedangkan Parallax biasanya digunakan dalam bidang 3 dimensi atau bidang nyata seperti depth perception (persepsi kedalaman) parallax biasanya dapat ditemui pada video game 2D tahun 90an yang digunakan sebagai ilusi agar gambar berjalan atau bergerak cepat, hal ini akan membuat latar belakang bergerak lebih lambat tetapi layer bagian depan bergerak lebih cepat.


## 3.2 Background Parallax
&emsp;&emsp;Parallax Background sendiri merupakan background yang menyambung pada kedua sisi nya sehingga saat digeser secara terus menerus tidak akan terlihat border atau batasan background tersebut, dan biasanya terdiri dari 2 atau lebih layer bergantung kebutuhan yang memiliki kecepatan berbeda untuk menciptakan ilusi jarak.Efek paralaks adalah cara terbaik untuk memperkaya situs, memamerkan produk, dan menciptakan kesan mendalam. Berikut beberapa manfaat penggunaannya.

1.	Kedalaman 3D: Dengan memisahkan lapisan dan memindahkannya dengan kecepatan berbeda, dapat mengelabui pikiran pengguna agar merasakan kedalaman 3D.
2.	Skala pengertian: Memiliki lebih banyak elemen pada level berbeda memungkinkan dapat membedakannya satu sama lain dan memberikan kesan skala yang biasanya sulit disampaikan dengan gambar statis 2D.
3.	Menargetkan fokus pengguna: Jika ingin tetap memperhatikan elemen tertentu, efek gulir memungkinkan menganimasi sesuatu atau segala sesuatu di sekitarnya untuk mempertahankan fokus.
4.	Pisahkan konten: Situs B2B sering menggunakan efek paralaks untuk menampilkan penawaran penting perusahaan. Situs-situs ini memiliki banyak informasi, jadi ini adalah cara yang baik untuk membagi kontennya.
5.	Desain modern: Desain yang ramping dan mengalir adalah bagian dari estetika web dan aplikasi seluler modern yang diikuti oleh perusahaan dari semua industri. Manfaatkan efek gulir semaksimal mungkin untuk menjaga desain tetap terkini.

&emsp;&emsp;Dengan menggunakan objek yang berbeda dilapisan latar depan dan latar belakang, dapat mengontrol kecepatan dan posisi objek tersebut. Dengan menjaga kamera tetap fokus pada titik fokus konsta. Dapat juga menggerakkan objek dengan kecepatan berbeda untuk menciptakan efek tiga dimensi. Di Animate, saat membuat animasi 2D, dapat mencapai efek ini dengan menggunakan kamera dan fitur kedalaman lapisan. Seperti membuat efek paralaks untuk objek dengan mengubah kedalaman lapisan menggunakan panel Layer Depth.

## 3.3 Layer Parenting
&emsp;&emsp;Layer parenting merupakan fitur tebaru yang ada pada Adobe Animate, fitur ini dapat digunakan sebagai alternatif bone tool untuk membuat animasi pergerakan karakter seperti berjalan atau pegerakan badan lainnya, sesuai dengan istilahnya, layer parenting digunakan untuk membuat sebuah layer induk, dalam praktik penggunaannya, layer parenting sering digunakan untuk membuat gerakan karakter, bagian tumpuhan tubuh akan menjadi layer induk dan bagian bawahnya akan menjadi layer anak.

&emsp;&emsp;Cara yang baik untuk membayangkan hubungan ini adalah dengan memvisualisasikan lengan manusia. Jika ingin menggerakkan tangan tanpa bagian lengan lainnya, maka dapat dengan mudah diputar di pergelangan tangan dan tidak mempengaruhi lengan bawah atau atas. Namun, menggerakkan lengan bawah atau atas juga akan mengubah posisi tangan karena tangan terikat pada kedua struktur tambahan tersebut. Pembuatan animasi menunjukkan bahwa layer parenting paling baik diterapkan hanya pada elemen tertentu selama tween span tertentu, dimana dislokasi sendi menjadi terlalu jelas. Dalam keadaan lain, akan lebih praktis untuk membiarkan elemen-elemennya independent dan menjaga fleksibilitas.









