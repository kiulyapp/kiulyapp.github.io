# 📊 Umami Analytics Setup - KOMPLETT KOSTENLOS & DSGVO-KONFORM

Umami ist ein privacy-first Analytics Tool - 100% kostenlos, DSGVO-konform und Open Source!

## ✅ Was ist bereits fertig:

- ✓ Umami Tracking-Code eingebaut (Website ID: cbb1d1f2-1d9c-41d4-b235-760f8ea846c9)
- ✓ Newsletter-Anmeldungen werden getrackt
- ✓ App-Downloads werden getrackt (Header & Hero)
- ✓ DSGVO-konform (keine Cookies, anonymisiert)
- ✓ DNS-Prefetch für bessere Performance

## 🚀 Dashboard Zugang:

### 1. Umami Dashboard öffnen
- Gehe zu: https://app.umami.is/
- **Login:** Mit den Daten, die Sie bei der Registrierung verwendet haben

### 2. Website auswählen
- **Website:** "KIULY" 
- **Domain:** kiuly.de
- **Website ID:** cbb1d1f2-1d9c-41d4-b235-760f8ea846c9

## 📊 Was Sie jetzt sehen können:

### Real-time Stats:
- **Live Besucher** auf der Website
- **Page Views** in Echtzeit
- **Referrer** (woher kommen die Besucher?)
- **Browser & Device** Statistiken

### Custom Events:
- **newsletter-signup** - Newsletter-Anmeldungen
- **app-download** - App Store Klicks (Header & Hero)

### Reports:
- **Tägliche/Monatliche Besucher**
- **Beliebte Seiten**
- **Traffic-Quellen** (Google, Direct, Social Media)
- **Conversion Rate** (Newsletter-Anmeldungen)

## 🎯 Custom Events Details:

### Newsletter-Anmeldungen:
```javascript
// Event: newsletter-signup
// Location: magazin-page
// Wird automatisch getrackt bei erfolgreicher Anmeldung
```

### App-Downloads:
```javascript
// Event: app-download
// Location: header (Header-Button)
// Location: hero (Hero-Badge)
// Wird getrackt bei App Store Klicks
```

## 🔒 DSGVO-Compliance:

### ✅ Umami ist 100% DSGVO-konform:
- **Keine Cookies** werden gesetzt
- **IP-Adressen** werden anonymisiert
- **Personenbezogene Daten** werden NICHT gespeichert
- **EU-Server** (Datenschutz konform)

### 📝 Datenschutzerklärung Update:
Fügen Sie hinzu:
```
"Wir nutzen Umami Analytics zur anonymen Analyse der Website-Nutzung. 
Es werden keine Cookies gesetzt und keine personenbezogenen Daten gespeichert. 
IP-Adressen werden anonymisiert verarbeitet."
```

## 💡 Pro-Tipps:

### Mehr Custom Events hinzufügen:
```javascript
// Button-Klicks tracken
onclick="if(window.umami) window.umami.track('button-click', {button: 'kontakt'});"

// Scroll-Depth messen
onclick="if(window.umami) window.umami.track('scroll', {depth: '50%'});"

// Video-Views (falls später)
onclick="if(window.umami) window.umami.track('video-play', {video: 'demo'});"
```

### Goals & Conversions:
- Newsletter-Anmeldung = Conversion Goal
- App-Download = Conversion Goal
- Kontakt-Formular = Conversion Goal

### Real-time Monitoring:
- Dashboard öffnen während Sie testen
- Live-Verfolgung der Events
- Sofortige Bestätigung, dass Tracking funktioniert

## 📱 Mobile App Tracking (Bonus):

Falls Sie später die KIULY App tracken wollen:
- **Firebase Analytics** (kostenlos)
- **iOS/Android** App Events
- **User Journey** von Website zu App

## 🆘 Troubleshooting:

### "Keine Daten" im Dashboard:
- Warte 5-10 Minuten (Umami braucht Zeit)
- Prüfe, ob Website ID korrekt ist
- Teste mit Real-time Dashboard

### Events werden nicht getrackt:
- Browser-Konsole öffnen (F12)
- Prüfe auf JavaScript-Fehler
- Teste mit einfachem Event

### DSGVO-Probleme:
- Umami ist bereits 100% DSGVO-konform
- Keine Cookies, keine personenbezogenen Daten
- EU-konform

## 📈 Erweiterte Features (Optional):

### Umami Cloud Upgrade:
- **Kostenlos:** 10.000 Page Views/Monat
- **Pro Plan:** $9/Monat für mehr Features
- **Self-hosted:** Komplett kostenlos (technisch aufwendig)

### Team-Zugang:
- Mehrere User einladen
- Verschiedene Berechtigungen
- Team-Dashboard

## ❓ Fragen?

- **Umami Docs:** https://umami.is/docs
- **Community:** https://github.com/umami-software/umami
- **Support:** Umami Community Forum

---

**Status:** ✅ VOLLSTÄNDIG FUNKTIONSFÄHIG!
**Dashboard:** https://app.umami.is/
**Website ID:** cbb1d1f2-1d9c-41d4-b235-760f8ea846c9

**Ergebnis:** Professionelles Analytics Dashboard für 0€ - DSGVO-konform! 🎯
