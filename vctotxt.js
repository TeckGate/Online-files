<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Metadata Powered by www.technicalarp.com -->
    <title>Voice To Text Converter</title>
    <meta name="description"content="Voice To Text Converter tool online for free in many language."/>
    <meta name="robots" content="noodp" />
    <meta name="keywords"content="Voice To Text Converter tool online for free in many language."/>
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Voice To Text Converter" />
	<meta itemprop="url" content="yoursiteurl" />
    <meta itemprop="name" content="Voice To Text Converter" />
	<meta name="author" content="Technical Arp" />
    <meta property="og:description" content="Voice To Text Converter tool online for free in many language."/>
    <meta property="og:site_name"content="Voice To Text Converter tool online for free in many language."/>
    <meta property="og:image"content="https://cloud.google.com/images/products/speech/speech-api-lead.png">
    <!-- / Powered by www.technicalarp.com free version -->

    <!-- Favicons-->
	<link rel="shortcut icon" href="https://1.bp.blogspot.com/-SuTIvxc7uKw/YOFG1-Rbj9I/AAAAAAAAAdU/zJalbC4Mjog5NsOPpCtNoEVl4X0EJtFBQCLcBGAsYHQ/s320/keyphrase.png">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
<style>
	@import url("https://fonts.googleapis.com/css?family=Open+Sans");

	html {
	font-size: 10px;
	}

	body {
	background: #fce6d3;
	font-family: "Open Sans", sans-serif;
	font-size: 2rem;
	color: #1d2e4b;
	}

	.technicalarpwords {
	max-width: 800px;
	margin: 50px auto;
	background: #fff;
	border-radius: 5px;
	padding: 1rem 2rem 1rem 5rem;
	background: -webkit-gradient(linear, 0 0, 0 100%, from(#cfddf9), color-stop(4%, #fff)) 0 4px;
	background-size: 100% 3rem;
	position: relative;
	line-height: 3rem;
	-moz-box-shadow: 2px 8px 15px rgba(228, 126, 118, 0.5);
	-webkit-box-shadow: 2px 8px 15px rgba(228, 126, 118, 0.5);
	box-shadow: 2px 8px 15px rgba(228, 126, 118, 0.5);
	}

	p {
	margin: 0 0 3rem;
	}

	.technicalarpwords:before {
	content: "";
	position: absolute;
	width: 4px;
	top: 0;
	left: 30px;
	bottom: 0;
	border: 1px solid;
	border-color: transparent #ffd9d9;
	}
	{"mode":"full","isActive":false}

	.adspacebytechnicalarp{ max-width:700px; padding:2em;box-shadow:0 5px 15px rgba(0,0,0,.16);border-radius:5px;margin-top:1em;background:#fff;text-align:left}

</style>

</head>
<body>
<center>
<br>
<img src="https://cloud.google.com/images/products/speech/speech-api-lead.png"></img> 

<h3> Voice To Text Note Maker Tool </h3>

</center>
<br> 

<div class="container" >

				<div class="adspacebytechnicalarp container">
					Place your Ad Code 1     
				 </div>
				</br>

	<div id="info" style="color: red; font-size: 16px; padding: 3px 6px; text-align:center;">
			<div id="info_start">
			Click on the microphone icon and start speaking.
			 </div>
			<div id="info_speak_now" style="display: none;">
			Speak now || बोलना शुरू करें !
			 </div>
			<div id="info_no_speech" style="display: none;">
			No speech was detected. adjust your microphone settings.
			 </div>
			<div id="info_no_microphone" style="display: none;">
			No microphone.! Ensure that a microphone configured correctly.
			 </div>
			<div id="info_allow" style="display: none;">
			Click the "Allow" button above to enable your microphone.
			 </div>
			<div id="info_denied" style="display: none;">
			Permission to use microphone was denied.
			 </div>
			<div id="info_blocked" style="display: none;">
			Permission to use microphone is blocked. To change, go to chrome://settings/contentExceptions#media-stream
			 </div>
			<div id="info_upgrade" style="display: none;">
			This facility is not supported by your browser. Upgrade to <a href="https://www.google.com/chrome" target="_blank">Chrome</a>.
			 </div>
		<br>
	</div>

	<div class="flex-box" style="text-align:center;">
		<select id="select_language" class="" onchange="updateCountry()" style=""></select>
		<select id="select_dialect" style="margin: 1px 0px; padding: 0px;"></select>
		<button id="start_button" onclick="startButton(event)" style="background: #fff; padding: 0;" title="Click and Start Speaking">
		<img alt="Start" height="30" id="start_img" src="https://www.google.com/intl/en/chrome/assets/common/images/content/mic.gif" width="54" /></button>
	</div>

	<div class="technicalarpwords" contenteditable>
		<div id="results" class="technicalarp-converter" >
			<span class="final" id="final_span" ></span> <span class="interim" id="interim_span" style="color: red;"></span>
		</div>
	</div>

	<div class="technicalarp-wrapper flex-box" style="text-align:center;">
		<input class="btn btn-lg btn-success" id="button1" onclick="CopyToClipboard('results')" value="Copy" title="Copy Text" type="button"/>
	</div>

				<div class="adspacebytechnicalarp container">
					Place your Ad Code 2  
				 </div>
				</br>

		<footer id='footer' style="">
                <p class="text-center" >Copyright &#169; <script type='text/javascript'>var creditsyear = new Date();document.write(creditsyear.getFullYear());</script> 
				<a href="yourwebsiteurl" >YOUR WEBSITE</a></p>
				<div id="credits" class="text-center" style="margin-bottom:1.5rem;" >
					Distributed With 💗 by <a href="https://www.technicalarp.com/" rel="ugc" id="creditlink">Technical Arp</a>
					<!--Released under the Creative Commons Attribution-ShareAlike 3.0 Unported License. So you can use but don't allow to remove credits.-->
					</br>
				</div>			
        </footer>
		
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js" integrity="sha512-AFwxAkWdvxRd9qhYYp1qbeRZj6/iTNmJ2GFwcxsMOzwwTaRwz2a/2TX225Ebcj3whXte1WGQb38cXE5j7ZQw3g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script src="https://github.com/TeckGate/OnlineWebFiles/blob/main/voicetotext.js"></script>
 
<body>
<html>
