# Design System: Portfolio Kevin Ramirez

## 1. Visual Theme & Atmosphere

Un portafolio developer con personalidad tecnica pero con calor humano. La atmosfera es "tech studio" — profesional pero no corporativo, moderno pero no frio. El balance entre espacios blancos generosos y contenido denso crea ritmo. Las animaciones son fluidas y sutiles, nunca intrusivas.

**Density:** 5/10 (balanced)
**Variance:** 6/10 (asimetrico, no monótono)
**Motion:** 6/10 (fluid CSS con proposito)

---

## 2. Color Palette & Roles

**Light Mode:**
- **Canvas** (#FAFAFA) — Background principal
- **Surface** (#FFFFFF) — Tarjetas y contenedores elevados
- **Ink Primary** (#18181B) — Texto principal, Zinc-950
- **Ink Secondary** (#71717A) — Texto secundario, descripciones
- **Ink Tertiary** (#A1A1AA) — Metadata, timestamps
- **Border Whisper** (#E4E4E7) — Lineas sutiles, 1px

**Dark Mode:**
- **Void** (#09090B) — Background principal
- **Surface Dark** (#18181B) — Tarjetas y contenedores
- **Ink Light** (#F4F4F5) — Texto principal
- **Ink Muted** (#A1A1AA) — Texto secundario
- **Border Dark** (#27272A) — Lineas sutiles

**Accent (Coral Energico):**
- **Accent Primary** (#F97316) — Orange-500, CTAs principales, estados activos
- **Accent Hover** (#EA580C) — Orange-600
- **Accent Muted** (rgba(249,115,22,0.15)) — Fondos de badges, tags

**Restriction:** Maximo 1 accent. Sin neon, sin purple, sin glows externos.

---

## 3. Typography Rules

**Font Family:**
- **Display/Headlines:** `Outfit` (Google Fonts) — Track-tight, peso 600-700
- **Body:** `Outfit` — Leading relajado (1.6-1.7), max 65ch por linea
- **Mono:** `JetBrains Mono` — Para tags de tecnologia, codigo

**Scale:**
- Hero: 3rem-3.5rem (48-56px), weight 700, tracking -0.02em
- H2 Section: 1.75rem-2rem (28-32px), weight 600, tracking -0.01em
- H3 Project: 1.25rem-1.5rem (20-24px), weight 600
- Body: 1rem-1.125rem (16-18px), weight 400
- Small/Meta: 0.875rem (14px), weight 500, uppercase tracking wide

**Banned:** Inter (generico), system fonts para contextos premium, generic serifs.

---

## 4. Component Stylings

### Buttons
- **Primary:** Filled accent (#F97316), text white, rounded-xl (12px), px-6 py-3
  - Hover: scale(1.02), background #EA580C
  - Active: translateY(1px), scale(0.98)
- **Secondary:** Ghost/outline, border 1px #E4E4E7, rounded-xl
  - Hover: background rgba(0,0,0,0.03), border-color darken
- **Icon Button:** 44x44px tap target minimo, rounded-full

### Cards
- Solo cuando elevacion comunica jerarquia
- Border radius: 1rem (16px)
- Shadow: none en general, solo border sutil
- Si density > 6: reemplazar con border-top dividers

### Navigation
- Sticky header, altura 64px
- Links horizontales en desktop, menu hamburger en mobile
- Indicador activo: underline accent color o badge
- Blur backdrop en scroll

### Tags de Tecnologia
- Pill shape: rounded-full, px-3 py-1
- Background: accent muted (rgba(249,115,22,0.1))
- Text: accent primary
- Font: mono, 12-13px, uppercase

### List Items (Features)
- Bullet: circle 6px accent muted, no dot
- Gap: 0.75rem (12px) entre items
- Indent consistente

---

## 5. Layout Principles

**Container:**
- Max-width: 1200px (max-w-5xl)
- Padding responsive: px-4 mobile, px-8 tablet, px-16 desktop
- Centrado con mx-auto

**Secciones:**
- Gap vertical: 5rem-6rem (80-96px) entre secciones mayores
- Cada seccion tiene heading + contenido

**Hero/Header:**
- Asimetrico: imagen a un lado, info al otro
- NO centered, NO overlapping

**Project Cards:**
- Stack vertical en mobile
- En desktop: layout consistente entre proyectos
- Imagenes con aspect-ratio 16/9, rounded-xl

**Grid System:**
- 2 columnas en desktop para lists (skills, features)
- Collapse a 1 columna en mobile
- No 3-column equal card grids

---

## 6. Motion & Interaction

**Spring Physics Default:**
```js
stiffness: 100, damping: 20
```

**Transiciones:**
- Hover en elementos: 200-300ms ease-out
- Page transitions: 400-600ms
- Staggered lists: delay 0.08s entre items

**Animaciones Permitidas:**
- Fade + slide (y: 20px)
- Scale en hover (1.02-1.05 max)
- Opacity fade

**Animaciones Prohibidas:**
- Bounce, elastic, spring exagerados
- Animar top, left, width, height
- Layout properties

**Microinteracciones:**
- Iconos sociales: scale(1.1) + lift en hover
- Imagenes de proyecto: subtle scale en hover con overlay
- Tags: nenhum efecto alem do hover state padrao

---

## 7. Anti-Patrones (Banned)

- Emojis en cualquier parte del codigo o UI
- Inter font
- Pure black (#000000) o pure white (#FFFFFF)
- Neon glows o outer shadows coloridos
- Acentos oversaturated (>80% sat)
- Gradient text em headers principais
- 3-column equal card layouts
- Centered hero sections
- AI copywriting cliches ("Elevate", "Seamless", "Unleash")
- Placeholder names genericos ("John Doe", "Acme")
- Fake metrics ou statistics
- "Scroll to explore", "Swipe down" texto
- Generic circular spinners
- Floating labels em inputs
- Custom mouse cursors

---

## 8. Responsive Strategy

**Breakpoints:**
- Mobile first: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

**Mobile:**
- Navegacion hamburger menu
- Todo 1 columna
- Typography scaling con clamp()
- Touch targets min 44px

**Tablet:**
- 2 columnas donde aplique
- Padding aumenta proporcionalmente

**Desktop:**
- Layout completo horizontal
- Hover states activos
- Max-width contenido 1200px