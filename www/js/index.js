// Add to index.js or the first page that loads with your app.
// For Intel XDK and please add this to your app.js.
document.addEventListener('deviceready', function () {
  onLoad();
}, false);

function onLoad() {
  // $.get("https://meuapp.foxtech.io/isonline.php", function () {
     openWebSite();
      // push();
  // })
  // .fail(function () {
  //     confirme();
  // });

}

function openWebSite(){
  var url = 'https://www.asiparts.com.br/';
  var target = '_blank';
  var ref = cordova.InAppBrowser.open(url, target, 'location=no,toolbar=no,zoom=no');
}

function push(){
  var notificationOpenedCallback = function (jsonData) {
      var url = jsonData.notification.payload.additionalData.foo;
      if (url != undefined && url != "") {
          var target = '_blank';
          cordova.InAppBrowser.open(url, target, 'location=no,toolbar=no');
      }
  };

  window.plugins.OneSignal
      .startInit("1e0a4294-fcef-4a37-a041-78b73848b6a0")
      .handleNotificationOpened(notificationOpenedCallback)
      .endInit();
}

function confirme() {
  $.confirm({
      title: 'Sem internet!',
      content: 'Conecte dispositivo e tente novamente',
      buttons: {
          tentarNovamente: {
              text: 'Tentar Novamente',
              btnClass: 'btn-blue',
              keys: ['enter', 'shift'],
              action: function () {
                  onLoad();
              }
          },
          Sair: function () {
              navigator.app.exitApp();
          }
      }
  });
}