const main = document.getElementById('root');

const externalHTML = `
<main id=main>
<div class=content>
<header>
<p style=padding:0;margin:0>
<a href=.><b>SusahBerak</b></a>
</p>

<ul style=padding:0;margin:0>
<li>
<a href=./projects>Projects</a>
</li>
<li>
<a href=./about>About</a>
</li>
</ul>
</header>
<hr class=hr-list style=padding:0;margin:0>

<h2 class=post>Twibbon Generator</h2>
<p>Silahkan unggah gambar dan bingkai, aplikasi ini akan otomatis menggabungkan unggahan gambar dan bingkai yang Anda pilih.</p>

<p>
<div class="file-cont">
<label for="image_input" class="label-file">File Gambar</label>
<input type="file" accept="image/*" onchange="loadFile(event)" multiple>
<!--<input class="input-file" type="file" name="image_input" id="image_input" multiple>-->
</div>
</p>

<p>Unggah karya seni bingkai Anda dengan latar belakang transparan sebagai File .PNG terpisah, dengan ukuran kurang dari 1 MB.</p>
<p>
<div class="file-cont">
<label for="image_input" class="label-file">File Bingkai</label>
<input type='file' accept="image/*" onchange="loadTemplate(event)" multiple>
<!--<input class="input-file" type="file" name="image_input" id="image_input" multiple>-->
</div>
</p>

<p>
<button class="button-4" role="button" onclick="gen()">SUBMIT!</button>
<button class="button-3" role="button" id="btndownload">UNDUH!</button>
</p>

<p>
<img id="avatar" style="display: none" src="img/placeholder.jpg"/>
<img id="bingkai" style="display: none" src="img/twibbon.png"/>
<canvas id="canvas"></canvas>
</p>


<hr class=hr-list style=padding:0;margin:0>
<p></p>
<p style=padding:0;margin:0>
© 2022 <a href=https://www.facebook.com/bungferry.wa><b>Ferry Ayunda</b></a>
<br>
<noscript><a href='https://u-on.eu/in.php?u=95775'><img src='https://u-on.eu/c.php?u=95775' alt='U-ON'></a></noscript>
</p>
</div>
</main>
`;
// shows the alert
main.innerHTML = externalHTML;
