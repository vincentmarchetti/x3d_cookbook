// Description: Type conversion of position and orientation values to MFString
// Filename:    ProximitySensorScriptConvertText.js
// Author:      Leonard Daly and Don Brutzman
// Identifier:  http://X3dGraphics.com/examples/X3dForWebAuthors/Chapter12EnvironmentSensorSound/ProximitySensorScriptConvertText.js
// Reference:   http://X3dGraphics.com/examples/X3dForWebAuthors/Chapter12EnvironmentSensorSound/ProximitySensor.x3d
// Created:     15 July 2006
// Revised:     10 October 2015
// License:     ../license.html

function setDigits (val, precision) {
  return Math.floor (val*precision + 0.5) / precision;
}

function position (positionValue) {
  var x = setDigits (positionValue[0], 100);
  var y = setDigits (positionValue[1], 100);
  var z = setDigits (positionValue[2], 100);

  positionText = new MFString ('Position  ' + x + '  ' + y + '  ' + z);
//  Browser.print (positionText[0]+'\n');
}
function orientation (orientationValue) {
  var x = setDigits (orientationValue[0], 1000);
  var y = setDigits (orientationValue[1], 1000);
  var z = setDigits (orientationValue[2], 1000);
  var r = setDigits (orientationValue[3], 100);
  orientationText = new MFString ('Orientation  ' + x + '  ' + y + '  ' + z + '  ' + r);
  Browser.print (orientationText[0]+'\n');
}
