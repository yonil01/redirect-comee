(function (window) {
  var color1 = 'green';
  var AutoGestion_titulo1 = 'BPO DOCUMENTAL';
  var AutoGestion_titulo2 = 'SOLUCIONES BPM';
  var AutoGestion_titulo3 = 'IMPLEMENTACION';
  var AutoGestion_parrafo1 = 'Estructuramos, desarrollamos y operamos todos los procesos documentales de su empresa.';
  var AutoGestion_parrafo2 = `Líderes en Soluciones de software para automatización, gestión y operación documental,
  ajustadas a las necesidades de nuestros clientes.`;
  var AutoGestion_parrafo3 = 'Proveemos servicios profesionales de consultoría técnica de implementación.';

  var Login_nombre_proyecto = '';
  var Login_version = 'v.6.2.2';
  var Login_slogan = '';


  /** ASSETS CORE **/
  var logo_core = 'assets/core/logo-btiger.png';
  var logo_parnet = 'assets/core/logo-bjungle-bw.png';

  /**  CONFIGURACIÓN DE LOGOS **/
  var Logo_client = 'assets/logos/logo-comfandi.png';
  var Banner_login = 'assets/img/banner-login-client-comfandi.png';
  var Banner_home = 'assets/img/banner-home-client-comfandi.png';

  /**  CONFIGURACIÓN DE ICONOS **/
  var Icon_ecapture = 'assets/img/icon.svg';
  var Icon_reseller = 'assets/img/icon.svg';

  var menu_url_logo = 'assets/img/logoSmall.png';
  var footer_url_logo = '';
  var AutoGestion_url_logo_barHead = 'assets/img/Seg_Blanco.png';
  var Autogestion_url_icon1 = 'assets/img/ideas.jpg';
  var Autogestion_url_icon2 = 'assets/img/icontarget.jpg';
  var Autogestion_url_icon3 = 'assets/img/img_manos.jpg';


  // Params colors
  var primary = '#353A48';
  var secondary = '#039be5';
  var tertiary = '#262933';

  window.__env = window.__env || {};

  // variables contenidos de textos, urls Paginas de autogestion
  window.__env.STYLE_H1 = color1;
  window.__env.TITULO_1 = AutoGestion_titulo1;
  window.__env.PARRAFO_1 = AutoGestion_parrafo1;
  window.__env.TITULO_2 = AutoGestion_titulo2;
  window.__env.PARRAFO_2 = AutoGestion_parrafo2;
  window.__env.TITULO_3 = AutoGestion_titulo3;
  window.__env.PARRAFO_3 = AutoGestion_parrafo3;
  window.__env.AUTOGESTION_URL_LOGO_TOP = AutoGestion_url_logo_barHead;
  window.__env.AUTOGESTION_URL_ICON_TITLE1 = Autogestion_url_icon1;
  window.__env.AUTOGESTION_URL_ICON_TITLE2 = Autogestion_url_icon2;
  window.__env.AUTOGESTION_URL_ICON_TITLE3 = Autogestion_url_icon3;

  //Var Assets Core
  window.__env.LOGO_CORE = logo_core;
  window.__env.LOGO_PARNET = logo_parnet;

  // Variables contenidos de textos urls de imagenes LOGIN
  window.__env.LOGIN_URL_LOGO = Logo_client;
  window.__env.BANNER_URL_LOGIN = Banner_login;
  window.__env.BANNER_URL_HOME = Banner_home;
  window.__env.ICON_ECAPTURE = Icon_ecapture;
  window.__env.ICON_RESELLER = Icon_reseller;
  window.__env.LOGIN_PROYECTO = Login_nombre_proyecto;
  window.__env.LOGIN_VERSION = Login_version;
  window.__env.LOGIN_SLOGAN = Login_slogan;

  window.__env.MENU_URL_LOGO = menu_url_logo;
  window.__env.FOOTER_URL_LOGO = footer_url_logo;

  // Whether or not to enable debug mode
  // Setting this to false will disable console output
  window.__env.enableDebug = true;

  // Params colors
  window.__env.PRIMARY = primary;
  window.__env.SECONDARY = secondary;
  window.__env.TERTIARY = tertiary;

})(this);
