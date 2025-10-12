# Videos in KIULY Website einbauen

## 🎬 3 Varianten für Video-Einbau

### **Variante 1: Natives HTML5 `<video>` (empfohlen für selbst gehostete Videos)**
Für `.mp4`, `.webm` oder `.mov` Dateien, die im Repo liegen.

```html
<!-- Beispiel: Zwischen den Screenshot-Sektionen einfügen -->
<div class="glass p-6 mb-8 max-w-4xl mx-auto" data-aos="zoom-in">
  <h3 class="text-2xl font-extrabold text-center mb-6 text-white">KIULY Demo-Video</h3>
  <video 
    class="w-full rounded-2xl shadow-2xl border-2 border-fuchsia-200/40"
    controls 
    preload="metadata"
    poster="https://kiuly.de/video-thumbnail.webp"
  >
    <source src="https://kiuly.de/kiuly-demo.mp4" type="video/mp4">
    <source src="https://kiuly.de/kiuly-demo.webm" type="video/webm">
    Dein Browser unterstützt dieses Video nicht. 
    <a href="https://kiuly.de/kiuly-demo.mp4" class="underline">Video herunterladen</a>
  </video>
  <p class="text-center mt-4 text-sm text-fuchsia-100/80">
    Sehe KIULY in Aktion: Von der Planung bis zum fertigen Unterrichtsentwurf
  </p>
</div>
```

**Vorteile:**
- ✅ Volle Kontrolle über Design & Verhalten
- ✅ Keine externen Dienste (DSGVO-freundlich)
- ✅ Funktioniert offline

**Nachteile:**
- ❌ Große Dateien (100+ MB) verlangsamen Ladezeiten
- ❌ GitHub Pages hat 1 GB Limit

---

### **Variante 2: YouTube (einfachste Lösung für große Videos)**
Falls das Video auf YouTube hochgeladen ist.

```html
<div class="glass p-6 mb-8 max-w-4xl mx-auto" data-aos="zoom-in">
  <h3 class="text-2xl font-extrabold text-center mb-6 text-white">KIULY Demo-Video</h3>
  <div class="relative w-full" style="padding-bottom: 56.25%; /* 16:9 Aspect Ratio */">
    <iframe 
      class="absolute inset-0 w-full h-full rounded-2xl shadow-2xl border-2 border-fuchsia-200/40"
      src="https://www.youtube-nocookie.com/embed/DEINE_VIDEO_ID?rel=0&modestbranding=1" 
      title="KIULY Demo"
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
      loading="lazy"
    ></iframe>
  </div>
  <p class="text-center mt-4 text-sm text-fuchsia-100/80">
    Sehe KIULY in Aktion: Von der Planung bis zum fertigen Unterrichtsentwurf
  </p>
</div>
```

**Vorteile:**
- ✅ Kostenlos & unbegrenzter Speicher
- ✅ Automatische Kompression & adaptive Qualität
- ✅ Funktioniert auf allen Geräten

**Nachteile:**
- ❌ Externe Abhängigkeit
- ❌ YouTube-Branding (minimal mit `youtube-nocookie.com`)

---

### **Variante 3: Auto-Play Hintergrund-Video (für Hero-Bereich)**
Kurzes, stilles Video als Hingucker (max. 10 Sek Loop, <5 MB).

```html
<!-- Im Hero-Bereich (#hero) als Hintergrund -->
<section id="hero" class="pt-36 pb-24 px-6 text-center relative overflow-hidden">
  <!-- Video Background -->
  <video 
    class="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
    autoplay 
    loop 
    muted 
    playsinline
    preload="auto"
  >
    <source src="https://kiuly.de/hero-background.mp4" type="video/mp4">
    <source src="https://kiuly.de/hero-background.webm" type="video/webm">
  </video>
  
  <!-- Gradient Overlay (wie bisher) -->
  <div class="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 to-transparent z-[1]"></div>
  
  <!-- Bestehender Hero-Content (z-10 damit er über Video liegt) -->
  <div class="relative z-10 max-w-3xl mx-auto flex flex-col items-center" data-aos="fade-up">
    <h1 class="text-4xl md:text-6xl font-black leading-tight drop-shadow-xl">
      Reihenplanung<br /><span class="text-fuchsia-200">in Sekunden</span>
    </h1>
    <!-- ... restlicher Hero-Content ... -->
  </div>
</section>
```

**Vorteile:**
- ✅ Moderner, dynamischer Look
- ✅ Zieht Aufmerksamkeit

**Nachteile:**
- ❌ Video muss klein & optimiert sein (<5 MB)
- ❌ Kann ablenkend wirken

---

## 📦 Video-Dateien optimieren (vor Upload)

### Empfohlene Einstellungen:
- **Format:** MP4 (H.264) + WebM (VP9) für beste Kompatibilität
- **Auflösung:** 1920×1080 (Full HD) oder 1280×720 (HD)
- **Bitrate:** 2-4 Mbps (für gute Qualität bei kleiner Größe)
- **FPS:** 30 (24 für filmischen Look)

### Komprimier-Tools:
1. **Online:** [Handbrake](https://handbrake.fr/) (kostenlos, Desktop-App)
2. **Terminal (FFmpeg):**
   ```bash
   # MP4 (H.264)
   ffmpeg -i input.mov -c:v libx264 -preset slow -crf 23 -c:a aac -b:a 128k output.mp4
   
   # WebM (VP9, kleiner als MP4)
   ffmpeg -i input.mov -c:v libvpx-vp9 -crf 30 -b:v 0 -c:a libopus output.webm
   ```

---

## 🎨 Design-Beispiele für deine Website

### **Option A: Video zwischen Screenshots einfügen**
Füge nach Zeile 635 (nach dem Auto-Carousel) ein:

```html
    </div>

    <!-- Demo Video -->
    <div class="glass p-6 mb-8 max-w-4xl mx-auto" data-aos="zoom-in">
      <h3 class="text-2xl font-extrabold text-center mb-6 text-white">So funktioniert KIULY</h3>
      <video 
        class="w-full rounded-2xl shadow-2xl border-2 border-fuchsia-200/40"
        controls 
        preload="metadata"
        poster="https://kiuly.de/video-poster.webp"
      >
        <source src="https://kiuly.de/kiuly-demo.mp4" type="video/mp4">
        Dein Browser unterstützt dieses Video nicht.
      </video>
    </div>

    <!-- iPad Screenshots Grid -->
    <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
```

### **Option B: Video als eigene Sektion (nach Screenshots)**
Füge nach der gesamten `#app` Sektion (Zeile 667) ein:

```html
</section>

<!-- ────────── VIDEO DEMO ────────── -->
<section id="demo" class="py-24 px-6 bg-gradient-to-b from-transparent to-fuchsia-950/20">
  <div class="max-w-5xl mx-auto">
    <h2 class="text-3xl font-extrabold text-center mb-4" data-aos="fade-up">KIULY in 90 Sekunden</h2>
    <p class="text-center text-lg text-fuchsia-100/90 mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
      Sehe, wie KIULY in Sekunden komplette Unterrichtsentwürfe erstellt – lehrplankonform, differenziert & direkt nutzbar.
    </p>
    
    <div class="glass p-6" data-aos="zoom-in">
      <video 
        class="w-full rounded-2xl shadow-2xl border-2 border-fuchsia-200/40"
        controls 
        preload="metadata"
        poster="https://kiuly.de/video-poster.webp"
      >
        <source src="https://kiuly.de/kiuly-demo.mp4" type="video/mp4">
        <source src="https://kiuly.de/kiuly-demo.webm" type="video/webm">
        Dein Browser unterstützt dieses Video nicht. 
        <a href="https://kiuly.de/kiuly-demo.mp4" class="underline text-fuchsia-300">Video herunterladen</a>
      </video>
    </div>
  </div>
</section>

<!-- ────────── KALENDER (Neuerung) ────────── -->
```

---

## 📝 So fügst du es ein:

1. **Video-Datei hochladen:**
   - Optimierte MP4/WebM in dein Repo kopieren
   - Commit & Push

2. **HTML-Code anpassen:**
   - Einen der obigen Code-Blöcke an gewünschter Stelle einfügen
   - `src="https://kiuly.de/DEIN_VIDEO.mp4"` anpassen
   - Optional: `poster="https://kiuly.de/VORSCHAUBILD.webp"` (Thumbnail) setzen

3. **Navigation aktualisieren (optional):**
   Falls du eine eigene Video-Sektion erstellst, füge im Header und Footer hinzu:
   ```html
   <a href="#demo" class="hover:text-fuchsia-300">Demo-Video</a>
   ```

---

## 🚀 Performance-Tipps:

1. **Lazy Loading:** `preload="metadata"` (lädt erst bei Bedarf)
2. **Poster-Bild:** Zeigt Vorschau, bevor Video geladen ist
3. **Multiple Formate:** MP4 (Safari) + WebM (Chrome/Firefox) für beste Kompatibilität
4. **Größenlimit:** Halte Videos unter 20 MB für schnelle Ladezeiten

---

## ❓ Fragen?

- **Wo soll Video hin?** → Sag mir die Position (zwischen welchen Sektionen?)
- **Hast du Video-Datei?** → Ich helfe beim Einbau
- **YouTube oder selbst hosten?** → Ich passe Code an

