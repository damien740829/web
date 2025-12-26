$(function(){
    		var list = [];var title = [];var img = [];var source = [];
    		$.getJSON('https://spreadsheets.google.com/feeds/list/1j4JAXfadKrsE8TOBOI-Qsvxg-zTTCn2rrVHI0ljKrO0/1/public/values?alt=json', function (data){
        	for (var i=0; i < 100; i++){
		          title[i] = data.feed.entry[i].gsx$title.$t;
                  img[i] = data.feed.entry[i].gsx$img.$t;
                  list[i] = data.feed.entry[i].gsx$list.$t;
                  source[i] = data.feed.entry[i].gsx$source.$t;
	    	      $('#producttable1').append("<div class='news' style='border-top-style:dotted;border-width:1px;border-color:#cfd9e3;float:left;padding: 5px 0 3px 0'><img class='img2' src='" + img[i] + "'/><div class='newstitle'><strong>" + title[i] + "</strong><br><small>&nbsp;-&nbsp;" + source[i] + "</small><p style='text-align:justify'>" + list[i] + "</p></div></div>");}});});


$(function(){
    		var list = [];var title = [];var img = [];var source = [];
    		$.getJSON('https://spreadsheets.google.com/feeds/list/1j4JAXfadKrsE8TOBOI-Qsvxg-zTTCn2rrVHI0ljKrO0/1/public/values?alt=json', function (data){
        	for (var i=0; i < 10; i++){
		          title[i] = data.feed.entry[i].gsx$title.$t;
                  img[i] = data.feed.entry[i].gsx$img.$t;
                  list[i] = data.feed.entry[i].gsx$list.$t;
                  source[i] = data.feed.entry[i].gsx$source.$t;
	    	      $('#producttable1a').append("<div class='news' style='border-top-style:dotted;border-width:1px;border-color:#cfd9e3;float:left;padding: 5px 0 3px 0'><img class='img2' src='" + img[i] + "'/><div class='newstitle'><strong>" + title[i] + "</strong><br><small>&nbsp;-&nbsp;" + source[i] + "</small><p style='text-align:justify'>" + list[i] + "</p></div></div>");}});});

$(function(){
    		var list = [];var title = [];var img = [];var source = [];
    		$.getJSON('https://spreadsheets.google.com/feeds/list/1j4JAXfadKrsE8TOBOI-Qsvxg-zTTCn2rrVHI0ljKrO0/1/public/values?alt=json', function (data){
        	for (var i=10; i < 20; i++){
		          title[i] = data.feed.entry[i].gsx$title.$t;
                  img[i] = data.feed.entry[i].gsx$img.$t;
                  list[i] = data.feed.entry[i].gsx$list.$t;
                  source[i] = data.feed.entry[i].gsx$source.$t;
	    	      $('#producttable1b').append("<div class='news' style='border-top-style:dotted;border-width:1px;border-color:#cfd9e3;float:left;padding: 5px 0 3px 0'><img class='img2' src='" + img[i] + "'/><div class='newstitle'><strong>" + title[i] + "</strong><br><small>&nbsp;-&nbsp;" + source[i] + "</small><p style='text-align:justify'>" + list[i] + "</p></div></div>");}});});

$(function(){
    		var list = [];var title = [];var img = [];var source = [];
    		$.getJSON('https://spreadsheets.google.com/feeds/list/1j4JAXfadKrsE8TOBOI-Qsvxg-zTTCn2rrVHI0ljKrO0/1/public/values?alt=json', function (data){
        	for (var i=20; i < 30; i++){
		          title[i] = data.feed.entry[i].gsx$title.$t;
                  img[i] = data.feed.entry[i].gsx$img.$t;
                  list[i] = data.feed.entry[i].gsx$list.$t;
                  source[i] = data.feed.entry[i].gsx$source.$t;
	    	      $('#producttable1c').append("<div class='news' style='border-top-style:dotted;border-width:1px;border-color:#cfd9e3;float:left;padding: 5px 0 3px 0'><img class='img2' src='" + img[i] + "'/><div class='newstitle'><strong>" + title[i] + "</strong><br><small>&nbsp;-&nbsp;" + source[i] + "</small><p style='text-align:justify'>" + list[i] + "</p></div></div>");}});});

$(function(){
    		var list = [];var title = [];var img = [];var source = [];
    		$.getJSON('https://spreadsheets.google.com/feeds/list/1j4JAXfadKrsE8TOBOI-Qsvxg-zTTCn2rrVHI0ljKrO0/1/public/values?alt=json', function (data){
        	for (var i=30; i < 40; i++){
		          title[i] = data.feed.entry[i].gsx$title.$t;
                  img[i] = data.feed.entry[i].gsx$img.$t;
                  list[i] = data.feed.entry[i].gsx$list.$t;
                  source[i] = data.feed.entry[i].gsx$source.$t;
	    	      $('#producttable1d').append("<div class='news' style='border-top-style:dotted;border-width:1px;border-color:#cfd9e3;float:left;padding: 5px 0 3px 0'><img class='img2' src='" + img[i] + "'/><div class='newstitle'><strong>" + title[i] + "</strong><br><small>&nbsp;-&nbsp;" + source[i] + "</small><p style='text-align:justify'>" + list[i] + "</p></div></div>");}});});

$(function(){
    		var list = [];var title = [];var img = [];var source = [];
    		$.getJSON('https://spreadsheets.google.com/feeds/list/1j4JAXfadKrsE8TOBOI-Qsvxg-zTTCn2rrVHI0ljKrO0/1/public/values?alt=json', function (data){
        	for (var i=40; i < 50; i++){
		          title[i] = data.feed.entry[i].gsx$title.$t;
                  img[i] = data.feed.entry[i].gsx$img.$t;
                  list[i] = data.feed.entry[i].gsx$list.$t;
                  source[i] = data.feed.entry[i].gsx$source.$t;
	    	      $('#producttable1e').append("<div class='news' style='border-top-style:dotted;border-width:1px;border-color:#cfd9e3;float:left;padding: 5px 0 3px 0'><img class='img2' src='" + img[i] + "'/><div class='newstitle'><strong>" + title[i] + "</strong><br><small>&nbsp;-&nbsp;" + source[i] + "</small><p style='text-align:justify'>" + list[i] + "</p></div></div>");}});});

$(function(){
    		var list = [];var title = [];var img = [];var source = [];
    		$.getJSON('https://spreadsheets.google.com/feeds/list/1j4JAXfadKrsE8TOBOI-Qsvxg-zTTCn2rrVHI0ljKrO0/2/public/values?alt=json', function (data){
        	for (var i=0; i < 100; i++){
		          title[i] = data.feed.entry[i].gsx$title.$t;
                  img[i] = data.feed.entry[i].gsx$img.$t;
                  list[i] = data.feed.entry[i].gsx$list.$t;
                  source[i] = data.feed.entry[i].gsx$source.$t;
	    	      $('#producttable2').append("<div class='news' style='border-top-style:dotted;border-width:1px;border-color:#cfd9e3;float:left;padding: 5px 0 3px 0'><img class='img2' src='" + img[i] + "'/><div class='newstitle'><strong>" + title[i] + "</strong><br><small>&nbsp;-&nbsp;" + source[i] + "</small><p style='text-align:justify'>" + list[i] + "</p></div></div>");}});});

$(function(){
    		var list = [];var title = [];var img = [];var source = [];
    		$.getJSON('https://spreadsheets.google.com/feeds/list/1j4JAXfadKrsE8TOBOI-Qsvxg-zTTCn2rrVHI0ljKrO0/2/public/values?alt=json', function (data){
        	for (var i=0; i < 10; i++){
		          title[i] = data.feed.entry[i].gsx$title.$t;
                  img[i] = data.feed.entry[i].gsx$img.$t;
                  list[i] = data.feed.entry[i].gsx$list.$t;
                  source[i] = data.feed.entry[i].gsx$source.$t;
	    	      $('#producttable2a').append("<div class='news' style='border-top-style:dotted;border-width:1px;border-color:#cfd9e3;float:left;padding: 5px 0 3px 0'><img class='img2' src='" + img[i] + "'/><div class='newstitle'><strong>" + title[i] + "</strong><br><small>&nbsp;-&nbsp;" + source[i] + "</small><p style='text-align:justify'>" + list[i] + "</p></div></div>");}});});

$(function(){
    		var list = [];var title = [];var img = [];var source = [];
    		$.getJSON('https://spreadsheets.google.com/feeds/list/1j4JAXfadKrsE8TOBOI-Qsvxg-zTTCn2rrVHI0ljKrO0/2/public/values?alt=json', function (data){
        	for (var i=10; i < 20; i++){
		          title[i] = data.feed.entry[i].gsx$title.$t;
                  img[i] = data.feed.entry[i].gsx$img.$t;
                  list[i] = data.feed.entry[i].gsx$list.$t;
                  source[i] = data.feed.entry[i].gsx$source.$t;
	    	      $('#producttable2b').append("<div class='news' style='border-top-style:dotted;border-width:1px;border-color:#cfd9e3;float:left;padding: 5px 0 3px 0'><img class='img2' src='" + img[i] + "'/><div class='newstitle'><strong>" + title[i] + "</strong><br><small>&nbsp;-&nbsp;" + source[i] + "</small><p style='text-align:justify'>" + list[i] + "</p></div></div>");}});});

$(function(){
    		var list = [];var title = [];var img = [];var source = [];
    		$.getJSON('https://spreadsheets.google.com/feeds/list/1j4JAXfadKrsE8TOBOI-Qsvxg-zTTCn2rrVHI0ljKrO0/2/public/values?alt=json', function (data){
        	for (var i=20; i < 30; i++){
		          title[i] = data.feed.entry[i].gsx$title.$t;
                  img[i] = data.feed.entry[i].gsx$img.$t;
                  list[i] = data.feed.entry[i].gsx$list.$t;
                  source[i] = data.feed.entry[i].gsx$source.$t;
	    	      $('#producttable2c').append("<div class='news' style='border-top-style:dotted;border-width:1px;border-color:#cfd9e3;float:left;padding: 5px 0 3px 0'><img class='img2' src='" + img[i] + "'/><div class='newstitle'><strong>" + title[i] + "</strong><br><small>&nbsp;-&nbsp;" + source[i] + "</small><p style='text-align:justify'>" + list[i] + "</p></div></div>");}});});

$(function(){
    		var list = [];var title = [];var img = [];var source = [];
    		$.getJSON('https://spreadsheets.google.com/feeds/list/1j4JAXfadKrsE8TOBOI-Qsvxg-zTTCn2rrVHI0ljKrO0/2/public/values?alt=json', function (data){
        	for (var i=30; i < 40; i++){
		          title[i] = data.feed.entry[i].gsx$title.$t;
                  img[i] = data.feed.entry[i].gsx$img.$t;
                  list[i] = data.feed.entry[i].gsx$list.$t;
                  source[i] = data.feed.entry[i].gsx$source.$t;
	    	      $('#producttable2d').append("<div class='news' style='border-top-style:dotted;border-width:1px;border-color:#cfd9e3;float:left;padding: 5px 0 3px 0'><img class='img2' src='" + img[i] + "'/><div class='newstitle'><strong>" + title[i] + "</strong><br><small>&nbsp;-&nbsp;" + source[i] + "</small><p style='text-align:justify'>" + list[i] + "</p></div></div>");}});});

$(function(){
    		var list = [];var title = [];var img = [];var source = [];
    		$.getJSON('https://spreadsheets.google.com/feeds/list/1j4JAXfadKrsE8TOBOI-Qsvxg-zTTCn2rrVHI0ljKrO0/2/public/values?alt=json', function (data){
        	for (var i=40; i < 50; i++){
		          title[i] = data.feed.entry[i].gsx$title.$t;
                  img[i] = data.feed.entry[i].gsx$img.$t;
                  list[i] = data.feed.entry[i].gsx$list.$t;
                  source[i] = data.feed.entry[i].gsx$source.$t;
	    	      $('#producttable2e').append("<div class='news' style='border-top-style:dotted;border-width:1px;border-color:#cfd9e3;float:left;padding: 5px 0 3px 0'><img class='img2' src='" + img[i] + "'/><div class='newstitle'><strong>" + title[i] + "</strong><br><small>&nbsp;-&nbsp;" + source[i] + "</small><p style='text-align:justify'>" + list[i] + "</p></div></div>");}});});

$(function(){
    		  var list = [];var title = [];var date = [];var abstract = [];var img = [];var source = [];
              $.getJSON('https://spreadsheets.google.com/feeds/list/1j4JAXfadKrsE8TOBOI-Qsvxg-zTTCn2rrVHI0ljKrO0/3/public/values?alt=json',  function (data){
               for (var i=0; i < 100; i++){
		          title[i] = data.feed.entry[i].gsx$title.$t;
                  img[i] = data.feed.entry[i].gsx$img.$t;
                  list[i] = data.feed.entry[i].gsx$list.$t;
                  source[i] = data.feed.entry[i].gsx$source.$t;
	    	      $('#producttable3').append("<div class='news' style='border-top-style:dotted;border-width:1px;border-color:#cfd9e3;float:left;padding: 5px 0 3px 0'><img class='img2' src='" + img[i] + "'/><div class='newstitle'><strong>" + title[i] + "</strong><br><small>&nbsp;-&nbsp;" + source[i] + "</small><p style='text-align:justify'>" + list[i] + "</p></div></div>");}});});

$(function(){
    		  var list = [];var title = [];var date = [];var abstract = [];var img = [];var source = [];
              $.getJSON('https://spreadsheets.google.com/feeds/list/1j4JAXfadKrsE8TOBOI-Qsvxg-zTTCn2rrVHI0ljKrO0/3/public/values?alt=json',  function (data){
               for (var i=0; i < 10; i++){
		          title[i] = data.feed.entry[i].gsx$title.$t;
                  img[i] = data.feed.entry[i].gsx$img.$t;
                  list[i] = data.feed.entry[i].gsx$list.$t;
                  source[i] = data.feed.entry[i].gsx$source.$t;
	    	      $('#producttable3a').append("<div class='news' style='border-top-style:dotted;border-width:1px;border-color:#cfd9e3;float:left;padding: 5px 0 3px 0'><img class='img2' src='" + img[i] + "'/><div class='newstitle'><strong>" + title[i] + "</strong><br><small>&nbsp;-&nbsp;" + source[i] + "</small><p style='text-align:justify'>" + list[i] + "</p></div></div>");}});});

$(function(){
    		  var list = [];var title = [];var date = [];var abstract = [];var img = [];var source = [];
              $.getJSON('https://spreadsheets.google.com/feeds/list/1j4JAXfadKrsE8TOBOI-Qsvxg-zTTCn2rrVHI0ljKrO0/3/public/values?alt=json',  function (data){
               for (var i=10; i < 20; i++){
		          title[i] = data.feed.entry[i].gsx$title.$t;
                  img[i] = data.feed.entry[i].gsx$img.$t;
                  list[i] = data.feed.entry[i].gsx$list.$t;
                  source[i] = data.feed.entry[i].gsx$source.$t;
	    	      $('#producttable3b').append("<div class='news' style='border-top-style:dotted;border-width:1px;border-color:#cfd9e3;float:left;padding: 5px 0 3px 0'><img class='img2' src='" + img[i] + "'/><div class='newstitle'><strong>" + title[i] + "</strong><br><small>&nbsp;-&nbsp;" + source[i] + "</small><p style='text-align:justify'>" + list[i] + "</p></div></div>");}});});

$(function(){
    		  var list = [];var title = [];var date = [];var abstract = [];var img = [];var source = [];
              $.getJSON('https://spreadsheets.google.com/feeds/list/1j4JAXfadKrsE8TOBOI-Qsvxg-zTTCn2rrVHI0ljKrO0/3/public/values?alt=json',  function (data){
               for (var i=20; i < 30; i++){
		          title[i] = data.feed.entry[i].gsx$title.$t;
                  img[i] = data.feed.entry[i].gsx$img.$t;
                  list[i] = data.feed.entry[i].gsx$list.$t;
                  source[i] = data.feed.entry[i].gsx$source.$t;
	    	      $('#producttable3c').append("<div class='news' style='border-top-style:dotted;border-width:1px;border-color:#cfd9e3;float:left;padding: 5px 0 3px 0'><img class='img2' src='" + img[i] + "'/><div class='newstitle'><strong>" + title[i] + "</strong><br><small>&nbsp;-&nbsp;" + source[i] + "</small><p style='text-align:justify'>" + list[i] + "</p></div></div>");}});});

$(function(){
    		  var list = [];var title = [];var date = [];var abstract = [];var img = [];var source = [];
              $.getJSON('https://spreadsheets.google.com/feeds/list/1j4JAXfadKrsE8TOBOI-Qsvxg-zTTCn2rrVHI0ljKrO0/3/public/values?alt=json',  function (data){
               for (var i=30; i < 40; i++){
		          title[i] = data.feed.entry[i].gsx$title.$t;
                  img[i] = data.feed.entry[i].gsx$img.$t;
                  list[i] = data.feed.entry[i].gsx$list.$t;
                  source[i] = data.feed.entry[i].gsx$source.$t;
	    	      $('#producttable3d').append("<div class='news' style='border-top-style:dotted;border-width:1px;border-color:#cfd9e3;float:left;padding: 5px 0 3px 0'><img class='img2' src='" + img[i] + "'/><div class='newstitle'><strong>" + title[i] + "</strong><br><small>&nbsp;-&nbsp;" + source[i] + "</small><p style='text-align:justify'>" + list[i] + "</p></div></div>");}});});

$(function(){
    		  var list = [];var title = [];var date = [];var abstract = [];var img = [];var source = [];
              $.getJSON('https://spreadsheets.google.com/feeds/list/1j4JAXfadKrsE8TOBOI-Qsvxg-zTTCn2rrVHI0ljKrO0/3/public/values?alt=json',  function (data){
               for (var i=40; i < 50; i++){
		          title[i] = data.feed.entry[i].gsx$title.$t;
                  img[i] = data.feed.entry[i].gsx$img.$t;
                  list[i] = data.feed.entry[i].gsx$list.$t;
                  source[i] = data.feed.entry[i].gsx$source.$t;
	    	      $('#producttable3e').append("<div class='news' style='border-top-style:dotted;border-width:1px;border-color:#cfd9e3;float:left;padding: 5px 0 3px 0'><img class='img2' src='" + img[i] + "'/><div class='newstitle'><strong>" + title[i] + "</strong><br><small>&nbsp;-&nbsp;" + source[i] + "</small><p style='text-align:justify'>" + list[i] + "</p></div></div>");}});});