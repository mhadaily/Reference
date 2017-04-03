'use strict';

var os 		= require('os');
var platform 	= os.platform();


function addStylesheet (stylesheet) {
  var head = document.getElementsByTagName('head')[0];
  var link = document.createElement('link');
  link.setAttribute('rel','stylesheet');
  link.setAttribute('href',stylesheet+'.css');
  head.appendChild(link);
}

function labelOS (osName) {
  document.getElementById('os-label').innerText = osName;
}

function initialize () {
  switch (platform) {
  	case 'darwin':
  	  addStylesheet('mac');
      labelOS('Mac OS X');
  	  break;
  	case 'linux':
  	  addStylesheet('linux');
      labelOS('Linux');
  	  break;
  	case 'win32':
  	  addStylesheet('windows');
      labelOS('Microsoft Windows');
  	  break;
  	default:
  	  console.log('Could not detect OS for platform',platform);
  }
}

window.onload = initialize;