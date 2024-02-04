(function (window) {
  window.__env = window.__env || {};

  window.__env.WEB_CUSTOMER = 'https://www.comfandi.com.co/'; //WebSide del cliente
  window.__env.ECATCH_API = 'https://www.comfandi.com.co/';

  //COMFANDI prod
  // window.__env.GRAPHQL_API = 'https://comfandi.btigersystem.net:1051';
  // window.__env.REST_API = 'https://comfandi.btigersystem.net:1056';

  // COMFANDI dev
  //window.__env.GRAPHQL_API = 'https://preproduccioncomfandi.btigersystem.net:4051';
  //window.__env.REST_API = 'https://preproduccioncomfandi.btigersystem.net:4056';

  // Indra
  window.__env.GRAPHQL_API = 'http://127.0.0.1:6031';
  window.__env.REST_API = 'http://54.218.165.69:6030';

  // # RUTA POR DEFECTO A DEVELOP
  // Ec-cloud
  //window.__env.GRAPHQL_API = 'http://172.174.77.149:7121';
  //window.__env.REST_API = 'http://172.174.77.149:7126';

  window.__env.REDIRECT_URL = '';
  window.__env.ECM_CONFIGURATION_URL = 'http://ecapture.co:3007/configuration';
  window.__env.API_VERSION = '/api/v2';
  window.__env.ECM_DOCPOP_BASE_URL = 'http://ecatch.ecapture.com.co';
  window.__env.APP_KEY = 'ECATCHFRONTENDBY';
  window.__env.GOOGLE_RECAPTCHA_SITEKEY = '' //'6LeVEagUAAAAACKCvA_vogrOvukseRPielnEgp56';
  window.__env.AUTOLOGIN = true;
  window.__env.REDIRECT_TO = false;
  window.__env.AUTOLOGIN_USER = '';
  window.__env.AUTOLOGIN_PASSWORD = '';


  // Whether or not to enable debug mode
  // Setting this to false will disable console output
  window.__env.enableDebug = true;
})(this);
