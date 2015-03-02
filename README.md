# Outbreak Plugin
For when your infectious love of overlays just cannot be... contained

<h2>How to:</h2>
1. Link the 'outbreak.js' file to your HTML file.
2. Set up your Overlay.  I recommend a div with an id# on which you can call the main .js file.  
Within the div link your image and create a second div for the Overlay:
<pre>
&lt;div id=&quot;baseImg&quot;&gt;
  	&lt;img src=&quot;&quot;&gt;
	  &lt;div class=&quot;overlay&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>		
3. Setup your div to contain the Outbreak. Be sure to set the width and height of your img 
(or the element that you are applying the overlay to) in your CSS file:
<pre>
#baseImg {
	position:relative; 
	top:0px;
	margin: 0 auto;
	<span>width: 500px</span>;
	<span>height: 350px</span>;
	overflow: hidden;
}
</pre>
4. Set the styles for your Outbreak infection - copy & paste the following to your CSS:
<pre>
.spot {
	position: absolute;
	border-radius: 50%;
	color: #D12026;
	opacity: 0;
	/*-webkit-animation-name: infection;*/
	-webkit-animation-duration: 3s;
	-webkit-animation-fill-mode: forwards;
	-webkit-animation-timing-function: ease-in;
}	
</pre>
<pre>
@-webkit-keyframes infection {
	0% {
		box-shadow: 0 0 0 0 #D12026;
	}

	100% {
		box-shadow: 0 0 0 75px #D12026;
	}
}
</pre>			
5. In your 'main.js' file set the div ( or element) on which you will call the Overlay (**best not to use the img itself) 
& set the outbreak number to the number of spots you require to fill your Overlay:

Enjoy!
