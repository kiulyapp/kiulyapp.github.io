# Grok Video Prompt für KIULY Demo

## 🎬 Prompt für Grok (Copy & Paste)

```
Erstelle ein professionelles 60-Sekunden Demo-Video für die iOS-App "KIULY" – eine KI-gestützte Unterrichtsplanungs-App für Lehrkräfte.

VIDEO-STIL:
- Modern, minimalistisch, professionell
- Vertikales Format (9:16, optimiert für Mobile/iPad)
- Farbschema: Dunkler Hintergrund mit Fuchsia/Lila Akzenten (#7c3aed, #f472b6, #c084fc)
- Glatte Animationen, keine hektischen Schnitte
- Musik: Ruhig, inspirierend, produktiv (ohne Copyright)

SZENEN (je 12-15 Sekunden):

1. INTRO (0-15s):
   - Text einblenden: "Unterrichtsplanung in Sekunden"
   - Zeige KIULY Logo (lila/fuchsia Gradient)
   - iPhone/iPad Mockup erscheint elegant
   - Untertitel: "Von Lehrer*innen für Lehrer*innen"

2. PROBLEM (15-30s):
   - Split-Screen: Gestresste Lehrkraft am Schreibtisch (links) vs. entspannte Lehrkraft mit iPad (rechts)
   - Text: "Stundenlange Planung → Sekunden mit KIULY"
   - Icons fliegen ein: Bundesland, Schulform, Fach, Klasse
   - Visuell: Chaos (links) → Ordnung (rechts)

3. LÖSUNG (30-45s):
   - Zeige App-Interface auf iPad:
     * Eingabemaske mit Dropdown-Menüs
     * Fortschrittsbalken (schnell von 0→100%)
     * Fertiger Unterrichtsentwurf erscheint
   - Highlights einblenden:
     ✓ Lehrplankonform
     ✓ Differenziert
     ✓ Inklusiv
     ✓ DSGVO-konform

4. FEATURES (45-55s):
   - Schnelle Sequenz zeigt:
     * One-Click Material-Generator
     * Kalender-Integration (iOS)
     * Export-Funktionen (PDF, Word)
     * Offline-Modus
   - Jedes Feature mit Icon + kurzem Text

5. OUTRO/CTA (55-60s):
   - Text: "0,99 €/Monat · Monatlich kündbar"
   - App Store Badge einblenden
   - QR-Code für Download
   - Finaler Text: "Jetzt im App Store laden"
   - URL: kiuly.de

TECHNISCHE SPECS:
- Auflösung: 1080x1920 (9:16 vertikal) oder 1920x1080 (16:9 horizontal)
- Framerate: 30 fps
- Länge: exakt 60 Sekunden
- Format: MP4 (H.264)
- Ziel-Dateigröße: < 30 MB

TEXT-OVERLAYS (Deutsch):
- Klare, große Sans-Serif Schrift (Inter oder ähnlich)
- Kontrast: Weiß auf dunklem Hintergrund
- Animationen: Smooth fade-in/out, keine plötzlichen Cuts

FARBPALETTE:
- Primär: #7c3aed (Lila)
- Akzent 1: #f472b6 (Pink)
- Akzent 2: #c084fc (Helles Lila)
- Hintergrund: #13141B (Dunkelgrau)
- Text: #FFFFFF (Weiß)

CALL-TO-ACTION:
- Ende mit großem "App laden" Button
- App Store Badge
- kiuly.de URL

Generiere das Video im modernen, cleanen Stil wie Apple Product-Videos, aber mit warmen Farben und Fokus auf Bildung.
```

---

## 🎯 Alternative: Kürzerer Prompt (falls zu lang)

```
Erstelle ein 60-Sekunden Demo-Video für KIULY – eine iOS-App für Unterrichtsplanung:

STIL: Modern, minimalistisch, Farbschema Lila/Pink/Fuchsia (#7c3aed, #f472b6), dunkler Hintergrund

SZENEN:
1. Intro: "Unterrichtsplanung in Sekunden" + Logo
2. Problem: Gestresste Lehrkraft → KIULY → entspannte Lehrkraft
3. Lösung: App-Interface zeigt schnelle Entwurf-Erstellung
4. Features: One-Click Material, Kalender, Export, Offline
5. Outro: "0,99 €/Monat" + App Store Badge + kiuly.de

FORMAT: 9:16 vertikal (Mobile), 1080x1920, 30fps, MP4, <30MB

TEXT: Deutsch, moderne Sans-Serif, weiß auf dunkel

CTA: "Jetzt im App Store laden"

Apple-ähnlicher Stil, professionell, inspirierend.
```

---

## 📱 Alternative Formate

### **Für Instagram/TikTok (9:16 vertikal):**
```
Format: 1080x1920 (9:16)
Länge: 30-60 Sekunden
Stil: Dynamisch, schnelle Schnitte
```

### **Für YouTube/Website (16:9 horizontal):**
```
Format: 1920x1080 (16:9)
Länge: 60-90 Sekunden
Stil: Ausführlicher, mehr Details
```

### **Für Hero-Background (kurzer Loop):**
```
Format: 1920x1080 (16:9)
Länge: 10 Sekunden Loop
Stil: Subtil, ohne Text, nur visuelle Elemente
Stumm (kein Ton)
```

---

## 🎨 Visuelle Referenzen (für Grok)

**Inspiration:**
- Apple Produkt-Videos (clean, minimalistisch)
- Notion App-Demos (modern, produktiv)
- Linear App-Videos (dunkles UI, glatte Animationen)

**Vermeiden:**
- Stock-Footage mit wasserzeichen
- Kitschige Übergänge
- Zu viel Text auf einmal
- Hektische Musik

---

## 🚀 Nach Video-Erstellung:

1. **Video von Grok herunterladen**
2. **Optional komprimieren** (falls > 30 MB):
   ```bash
   ffmpeg -i grok-video.mp4 -c:v libx264 -crf 28 -c:a aac -b:a 96k kiuly-demo.mp4
   ```
3. **Ins Repo hochladen:**
   ```bash
   cp kiuly-demo.mp4 /Users/pascalobermeit/kiulyapp.github.io/
   cd /Users/pascalobermeit/kiulyapp.github.io
   git add kiuly-demo.mp4
   git commit -m "Add: KIULY Demo-Video"
   git push origin main
   ```
4. **Sag mir Bescheid** → Ich baue es in die Website ein!

---

## 💡 Bonus-Ideen für weitere Videos:

### **Video 2: Feature Deep-Dive (90 Sek)**
```
Fokus auf ONE-CLICK MATERIAL Feature
Zeige Schritt-für-Schritt, wie ein kompletter Unterrichtsentwurf entsteht
```

### **Video 3: Testimonial-Style (45 Sek)**
```
"So hat KIULY meinen Unterricht verändert"
Kurze Statements von Lehrkräften (animierter Text)
```

### **Video 4: Comparison (60 Sek)**
```
KIULY vs. Traditionelle Planung
Split-Screen: alt vs. neu
```

---

## 📋 Checkliste nach Grok-Erstellung:

- [ ] Video ist < 30 MB groß
- [ ] Format ist MP4 (H.264)
- [ ] Auflösung passt (9:16 oder 16:9)
- [ ] Text ist gut lesbar
- [ ] Farben matchen Website-Design
- [ ] CTA ist klar am Ende
- [ ] Musik ist nicht zu laut
- [ ] Kein Copyright-Problem

---

## 🎬 Fertig?

Sobald du das Video von Grok hast:
1. Schick mir den Dateinamen
2. Sag mir, wo es auf der Website hin soll
3. Ich baue es sofort ein!

**Empfohlene Position:** Direkt nach "So sieht's aus" Sektion, vor Kalender-Integration

