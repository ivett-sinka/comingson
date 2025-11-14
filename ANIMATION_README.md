# Animált Üdvözlő Oldal

Ez egy modern, animált üdvözlő oldal geometrikus háttéranimációval és typewriter effekttel.

## Funkciók

### 1. Animált Háttér
A háttérben 10 különböző geometrikus forma lebeg és mozog:
- **3 kör** - különböző méretekben, lebegő animációval
- **2 négyzet** - forgó és lebegő animációval
- **2 háromszög** - összetett forgó-lebegő mozgással
- **3 vonal** - horizontális, vertikális és diagonális mozgással

Minden forma más sebességgel és késleltetéssel animálódik, lágyan mozog a térben, vizuálisan érdekes hátteret alkotva.

### 2. Typewriter Animáció
A középen megjelenő szöveg typewriter (írógép) effekttel jelenik meg:
- **Szavak sorrendje**: "Szia" → "Hola" → "Bonjour" → ismétlés
- **Betűnkénti megjelenés**: Minden betű egyenként jelenik meg (150ms/betű)
- **3 másodperces szünet**: A teljes szó megjelenése után 3 másodpercig látható
- **Törlés**: A szó betűnként törlődik (100ms/betű)
- **Folyamatos ciklus**: Az animáció végtelenül ismétlődik

### 3. Modern Design
- Színátmenetes háttér (lila-kék tónusok)
- Fehér szöveg árnyékkal a jobb láthatóságért
- Villogó kurzor a typewriter effekt mellett
- Teljesen reszponzív, mobilon is jól néz ki

## Használat

### Weboldalon való használat

1. **Fájlok elhelyezése**: Másold az alábbi fájlokat a weboldal könyvtárába:
   - `index.html`
   - `styles.css`
   - `script.js`

2. **Megnyitás**: Nyisd meg az `index.html` fájlt böngészőben vagy helyezd el a szerveren

3. **Testreszabás**:

   **Színek módosítása** (`styles.css`):
   ```css
   /* Háttér színátmenet */
   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

   /* Formák átlátszósága */
   opacity: 0.3;
   ```

   **Szövegek módosítása** (`script.js`):
   ```javascript
   const greetings = ['Szia', 'Hola', 'Bonjour']; // Add hozzá a saját szavaidat
   ```

   **Animációs sebességek** (`script.js`):
   ```javascript
   const typingSpeed = 150;      // Gépelés sebessége (ms)
   const deletingSpeed = 100;    // Törlés sebessége (ms)
   const pauseDuration = 3000;   // Szünet teljes szó után (ms)
   ```

## Technikai Részletek

### HTML Struktúra
- Szemantikus HTML5
- Tiszta, könnyen karbantartható kód
- SEO-barát meta tagek

### CSS Funkciók
- Modern CSS3 animációk
- Keyframe animációk folyékony mozgáshoz
- Flexbox layout a központosításhoz
- Reszponzív media query-k mobilhoz
- GPU-gyorsított transform tulajdonságok

### JavaScript Logika
- Tiszta vanilla JavaScript (nincs külső függőség)
- Állapot-alapú typewriter logika
- Hatékony timeout kezelés
- Könnyen testreszabható paraméterek

## Böngésző Támogatás

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+
- Mobilböngészők

## Teljesítmény

Az animációk GPU-gyorsítottak (`transform` és `opacity` használatával), így folyékonyak és nem terhelik a CPU-t túlságosan.

## Licenc

Szabadon használható és módosítható a ComingSon projektben.
