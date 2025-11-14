# Sinka Ivett - Coming Soon Oldal

Professzionális "coming soon" üdvözlő oldal pixel-pontos Figma design implementációval.

## 🎨 Design Jellemzők

- **Sötétkék háttér** (#1E3A8A) geometrikus vonalmintázattal
- **Animált typewriter** effekt: Hello → Szia → Hola → Bonjour
- **Lila logo** a jobb felső sarokban
- **Központosított tartalom** professzionális tipográfiával
- **Lágy animációk** a háttérmintázaton
- **Teljesen reszponzív** minden eszközön

## 📁 Fájlok

- `index.html` - HTML struktúra
- `styles.css` - Dizájn és animációk
- `script.js` - Typewriter logika
- `ComingSoon.png` - Eredeti Figma design

## 🚀 Használat

### Böngészőben

```bash
# Nyisd meg közvetlenül
open index.html

# Vagy indíts helyi szervert
python -m http.server 8000
# http://localhost:8000
```

### Szerverren

Másold fel mind a 3 fájlt (HTML, CSS, JS) a webszerveredre.

## ⚙️ Testreszabás

### Szövegek

**index.html** - Módosítsd a tartalmat:
- 35. sor: Név
- 37. sor: Üzenet
- 41-43. sor: Leírás
- 48. sor: Szakmai terület

### Animált üdvözlések

**script.js** (2. sor):
```javascript
const greetings = ['Hello', 'Szia', 'Hola', 'Bonjour'];
```

### Sebességek

**script.js** (11-14. sor):
```javascript
const typingSpeed = 150;       // ms/betű gépelés
const deletingSpeed = 100;     // ms/betű törlés
const pauseDuration = 3000;    // ms szünet
```

### Színek

**styles.css**:
```css
/* Háttér (9. sor) */
background-color: #1E3A8A;

/* Logo színek (HTML 22-23. sor) */
stop-color="#B14DC7"  /* kezdő */
stop-color="#7C3E9E"  /* befejező */
```

## 📱 Reszponzív

- **Desktop**: 1024px+
- **Tablet**: 768-1024px
- **Mobil**: <768px

## 🌐 Böngésző Támogatás

Chrome, Firefox, Safari, Edge (modern verziók)

## 📝 Licensz

Szabadon használható a ComingSon projektben.
