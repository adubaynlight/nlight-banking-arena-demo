/* global document, window */
// Applies the saved theme, density and sidebar state before the first paint, so a
// dark-mode user never sees a light flash. An external file because the CSP allows
// no inline script. The app mirrors the signed-in user's preferences to this key.
(function () {
  var root = document.documentElement;
  var prefs;
  try {
    prefs = JSON.parse(window.localStorage.getItem('ba.prefs') || 'null');
  } catch {
    prefs = null;
  }
  var theme = prefs && (prefs.theme === 'light' || prefs.theme === 'dark') ? prefs.theme : 'system';
  root.setAttribute('data-theme', theme);
  root.setAttribute('data-density', prefs && prefs.density === 'compact' ? 'compact' : 'comfortable');
  root.setAttribute('data-sidebar', prefs && prefs.sidebarCollapsed === true ? 'rail' : 'full');
})();
