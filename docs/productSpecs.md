# Event Jepang Jatim Discord Bot Proposal

Proposal Pengerjaan Bot Utility discord.

## Latarbelakang

Karena komunitas EJJ membuat discord server dan seluruh manajemen server masih melalui para staff dan admin, maka dibutuhkan sebuah tool untuk memudahkan dalam melakukan manajemen dengan tujuan meringankan beban para admin dan staff.

Selain itu, karena jumlah staff dan admin yang dapat 24/7 jam dalam proses monitoring pada server discord maka utility ini dapat membantu setidaknya disaat sebagian besar admin sedang sibuk dalam Real Life dan tidak sempat untuk mengakses discord.

## Masalah yang dihadapi para staff dan admins saat ini

Berikut di bawah ini adalah penjabaran dengan kondisi yang sedang terjadi pada admins maupun server

### Main Goals

1. Memudahkan proses manajemen sederhana para member.
2. Membantu para member dalam mencari informasi terkait server dan admins.
3. Mengawasi behavior sederhana para member dan membuat backlog.

### Tugas para staff dan admin saat ini:

1. Melakukan rename pada nickname member baru sesuai dengan nama panggilan dan region.
2. Memberi/mencabut role sesuai dengan permintaan maupun keadaan member.
3. Memberikan penjelasan rule sederhana dan informasi sederhana.
4. Melakukan Kick dan Ban member sesuai dengan peraturan.

### Masalah/Struggle yang dihadapi

1. Member baru tidak mendapat pengumuman/perhatian ketika memasuki server.
2. Admins/staff tidak menotice adanya penambahan memeber pada server
3. Filter kata tidak maksimal karena kelemahan dari discord itu sendiri.
4. Proses verifikasi member masih manual dan menunggu member tersebut online atau "nimbrung"

### Solusi masalah secara umum

List ini berurutan sesuai dengan point sebelumnya:

1. Membuat Welcome/Pesan Otomatis kepada member yang baru bergabung pada server.
2. Membuat Notice pada admins/staff ketika ada member yang bergabung pada server di channel tertentu.
3. TBA
4. Melakukan proses verifikasi mandiri ketika bergabung pada server.

#### Kelebihan

1. Proses dapat dilakukan 24/7 dan dilakukan secara otomatis tanpa campur tangan admin/staff.
2. Mudah Digunakan bahkan bagi para member baru yang pemula dalam discord.
3. Terdapat backlog yang dapat melakukan tracking pada kelakuan user.

#### Kelemahan

1. Tetap harus ada campur tangan manusia dalam pengawasan user dan wajib dilakukan secara berkala.
2. Proses verifikasi dapat ditipu karena bersifat interaktif dan Admin mungkin tidak dapat mengetahuinya.

### Pendekatan Dialog/User Interaction

Berikut dijelaskan bagaimana solusi tersebut dibuat dengan pendekatan secara lisan/tulis.

#### Solusi Masalah #1

Sesuai dengan solusi secara umum, maka didapatkan spektek seperti ini :

1. Seorang member bergabung pada server.
2. Member tersebut melakukan verifikasi mandiri maupun dibantu staff.
3. Setelah melakukan verifikasi, user tersebut mendapat role sesuai dengan teknis dan dapat bergabung secara penuh.
4. Bot akan melakukan pengumuman di channerl #chat-** sesuai dengan hasil verifikasi dengan bentu seperti ini.

```
Hallo semua, kita mendapat member baru nih di Server kita :)
Namanya : <namamember>
<namamemebr> ini dari region <regionmember>

Saya harap kalian semua bisa akrab dengan <> yak!
Tolong bantuan dan kerjasamanya :)
```

5. Selesai.

#### Solusi Masalah #2

Hampir Sama dengan proses #1 tetapi pesan tersebut juga dikirimkan pada channel khusus admin yang sekaligus melakukan mention pada seluruh admins.

#### Solusi Masalah #3 

TBA

#### Solusi Masalah #4

1. Disaat member baru memasuki server, ia akan disambut oleh bot

```
Hallo! Selamat datang di Server Event Jepang Jatim.
Biar bisa dapet semua akses di server ini dengan baik, kamu harus
melakukan verifikasi ya.

Kamu bisa melakukan verifikasi dengan mengetik "mulai verifikasi" di chat ini oke <mentionuser>
```

> Catatan, Mungkin saja member tersebut tidak melakukan verfikasi, demi menghindari kejadian tersebut, maka akan ada pembatasan pada fitur yang dapat diakses oleh member tersebut. Karena bisa saja member tersebut adalah member selubungan hohohoho

2. Ketika member memasukkan "mulai verifikasi" makan akan terjadi dialog seperti ini:

```
Bot : Hai!, Boleh kasih tau nama kamu? Biar pada kenal hehe:

Member: <MemasukkanNama>

Bot : Oke <namamemebr>, kamu dari region mana nih? Tulis angkanya aja yak!
1. Surabaya
2. Sidoarjo
3. Malang
4. Blitar
5. Tulungagung
6. Kediri
7. Etc

Member : Masukkan Angka

Bot : Oke deh, <Nama memebr> dari <region> ya :) Makasih udah verifikasi dan selamat bergabung :) Be Nice and Be Wise

END;
```

3. Lalu user mendapat role sesuai region serta dapat mengakses seluruh fitur yang ada di server.


## Teknis Pembuatan dan Arsitektur

Dikarenakan ini bersifat teknis dan menyangkut banyak infrastruktur maka sayanganya tidap dapat dijelaskan secara rinci kepada orang awam/umum.

Tetapi, seluruh biaya dan pengerjaan ini adalah NOL RUPIAH. dan hanya perlu memiliki pemaham pada bahasa pemrograma terutama javascript dan arsitektur Node.js

## Team dan PIC

Sesuai dengan proposal ini, saya bersedir untuk menjadi Person In Charge dalam proyek ini dan rancangan ini dapat diubah sesuai dengan kebutuhan serta keadaan:

PIC                 : Rengga Prakoso Nugroho, ?
Project Manager     :
Development Team    :
UI/UX Design Team   :
Research Team       :

## Timeline dan Workpace 

1. Agile Develoment, Sebisa mungkin melakukan pengerjaan dengan MVP yang ditentukan tetapi tidak terbatas jadwal
2. Pararell Developmet, seluruh tim tidak melakukan waiting from other
3. Dependent goals, Seluruh tim dapat menentukan goals tersendiri seseuai dengan menyesuaikan goals dari tim lain
4. Workpace menyesuikan goals

## MVP
1. Bot dapat melakukan welcome message dan verifikasi sederhana
2. Dapat digunakan secara mudah.


## Author

Rengga Prakoso Nugroho
UI/UX Designer at Sakura Fukoka Studio
Sidoarjo, Indonesia
https://renggaprakosonugroho.my.id
email : hi@renggaprakosonugroho.my.id
Linkedin : https://linkedin.com/in/vzrenggamani