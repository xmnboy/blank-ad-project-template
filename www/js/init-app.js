/*
 * Copyright (c) 2014, Intel Corporation. All rights reserved.
 * Please see http://software.intel.com/html5/license/samples
 * and included README.md file for license terms and conditions.
 */


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false, app:false, dev:false */
/*global myEventHandler:false, cordova:false, device:false */



window.app = window.app || {} ;         // there should only be one of these, but...

app.initApplication = function() {
    "use strict" ;
    var fName = "app.initApplication():" ;
    console.log(fName, "entry") ;

// Main app init point (where we capture app.Ready event).
// Runs after underlying device native code and webview/browser is ready.
// Where you should "kick off" your application by initializing app events, etc.

// NOTE: Customize this function to initialize your application, as required.

    // initialize third-party libraries and event handlers

    // initThirdPartyLibraryNumberOne() ;
    // initThirdPartyLibraryNumberTwo() ;
    // initThirdPartyLibraryNumberEtc() ;

    // initialize application code

    // initMyAppCodeNumberOne() ;
    // initMyAppCodeNumberTwo() ;
    // initMyAppCodeNumberEtc() ;

    // Initialize app event handlers.

    // ...overly simple example...
    // var el = document.getElementById("id_btnHello") ;
    // el.addEventListener("click", myEventHandler, false) ;

    // after init is all done is a good time to remove our splash screen

    // see https://github.com/01org/appframework/blob/master/documentation/detail/%24.ui.launch.md
    // Do following if you disabled App Framework autolaunch (in index.html, for example)
    // $.ui.launch() ;

    app.hideSplashScreen() ;                // a splash screen is optional for your app

    // ...and whatever else you want to do now that the app has started...
    // The following is just for debug, not required; keep it if you want or get rid of it.

    if( window.device && device.cordova ) {                         // old Cordova 2.x version detection
        console.log("device.version: " + device.cordova) ;          // print the cordova version string...
        console.log("device.model: " + device.model) ;
        console.log("device.platform: " + device.platform) ;
        console.log("device.version: " + device.version) ;
    }

    if( window.cordova && cordova.version ) {                       // only works in Cordova 3.x
        console.log("cordova.version: " + cordova.version) ;        // print new Cordova 3.x version string...

        if( cordova.require ) {                                     // print included cordova plugins
            console.log(JSON.stringify(cordova.require('cordova/plugin_list').metadata, null, 1)) ;
        }
    }


    // app initialization is done
    // app event handlers are ready
    // exit to idle state and wait for app events...

    console.log(fName, "exit") ;
} ;
document.addEventListener("app.Ready", app.initApplication, false) ;



// Using a splash screen is optional. This function will not fail if none is present.
// This is also a simple study in the art of multi-platform device API detection.

app.hideSplashScreen = function() {
    "use strict" ;
    var fName = "app.hideSplashScreen():" ;
    console.log(fName, "entry") ;

    if( navigator.splashscreen ) {                              // Cordova API detected
        navigator.splashscreen.hide() ;
    }
    else if( window.intel && intel.xdk && intel.xdk.device ) {  // Intel XDK API detected
        intel.xdk.device.hideSplashScreen() ;
    }
    else {                                                      // might be in a browser
        // nothing to do...                                     // or just not available
    }

    console.log(fName, "exit") ;
} ;
