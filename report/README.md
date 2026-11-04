# Academic Technical Report: Digital Food Atlas of India

**Project Title:** Digital Food Atlas of India: An Interactive 3D Gastronomic Cartography and Chronological Historiographical Archive of Bharat  
**Subtitle:** A WebGL, Motion-Path and Digital Humanities System for Safeguarding India's Living Culinary Heritage  

---

## 👥 Project Team & Contributors

| Student Name | Roll Number | Primary Specialization |
|:---|:---|:---|
| **K. Bhavik** | `25BCS063` | 3D WebGL Graphics & Mathematical Cartography |
| **G. Ashwini** | `25BCS045` | UI/UX Design, Theming & Component Engineering |
| **B. Sai Pragna** | `25BCS028` | Historiographical Data Schema & Scholarly Research |
| **P. Prasanth** | `25BCS110` | Full-Stack Architecture & Integration |
| **P. Pranay** | `25BCS109` | Kinetic GSAP MotionPath & Parallax Engine |
| **K. Ashwitha** | `25BDA055` | Data Engineering, Verification & Photo Archival |

---

## 📁 Directory Contents

- **`main.tex`**: The primary LaTeX master document (~1,000+ lines). Includes comprehensive chapters, mathematical derivations (spherical projections, quaternion alignment, biquad filter transfer functions), system architecture diagrams in TikZ, verification outputs, and the master table of all 96 cataloged dishes.
- **`references.bib`**: BibTeX file containing academic, historical, and software citations (Achaya, Sen, Manasollasa, UNESCO, Three.js, GSAP, Web Audio API, etc.).
- **`compile.bat`**: Windows batch script to compile with `pdflatex` + `bibtex` in 4 passes.
- **`compile.sh`**: Unix/Linux/macOS bash script for automated compilation.
- **`Makefile`**: Standard build Makefile with targets: `all`, `quick`, `latexmk`, `clean`, `distclean`.

---

## 🚀 How to Compile to PDF

### Option 1: Using Overleaf (Recommended - No Local Install Required)
1. Go to [Overleaf](https://www.overleaf.com/).
2. Click **New Project** $\to$ **Upload Project**.
3. Zip this `report` folder or upload `main.tex` and `references.bib`.
4. Click **Recompile**. Overleaf automatically compiles with `pdflatex` and `bibtex`.

### Option 2: Using Local LaTeX (Windows / Linux / macOS)
Ensure you have **TeX Live** or **MiKTeX** installed.

#### On Windows:
Double-click `compile.bat` or run:
```cmd
pdflatex main.tex
bibtex main
pdflatex main.tex
pdflatex main.tex
```

#### On Linux / macOS:
```bash
chmod +x compile.sh
./compile.sh
```
Or with `make`:
```bash
make
```

---

## 📖 Report Summary & Table of Contents

- **Chapter 1: Introduction and Project Overview**
  - Cultural significance, the digital dilemma (historical flatness, AI hallucinations), vision and objectives.
- **Chapter 2: Historiographical Methodology and Scholarly Framework**
  - The canonical four-stage chronological model (Origin, Botanical Ingredients, Craftsmanship/Heat, Modern Form/GI).
  - Epistemic confidence levels (`documented`, `regional-tradition`, `oral-tradition`).
  - The Columbian Exchange demarcation (Solanaceae post-1492 constraints).
- **Chapter 3: System Architecture and Implementation**
  - High-level system design, React 19, TypeScript 5.9, Vite 7, Tailwind CSS v4.
  - Dual-view paradigm (`IndiaMap3D` vs `BharatDishExperience`).
  - Hash routing (`#/map`, `#/dish/:id`).
- **Chapter 4: 3D Cartographic Engine and Mathematical Modeling**
  - Centered tangent Mercator projection ($\lambda_0 = 82.8^\circ\text{ E}, \phi_0 = 22.5^\circ\text{ N}$).
  - Spherical surface drop-off formulation: $y(x, z) = \sqrt{R^2 - (x^2+z^2)} - R$ ($R=50$).
  - Unit quaternion alignment to the zenith apex.
  - GeoJSON polygon extrusion, triangulation, and smoothstep camera flight interpolation.
- **Chapter 5: Kinetic MotionPath and Scroll Architecture**
  - Parametric cubic Bézier spline trajectory.
  - GSAP ScrollTrigger scrubbing and dynamic card tilting.
  - Multi-plane ocular parallax and reduced motion accessibility.
- **Chapter 6: Procedural Ambient Web Audio Synthesis**
  - Additive synthesis: $138.59\text{ Hz}$ sine (Root C#3) + $207.65\text{ Hz}$ triangle (Fifth G#3).
  - Butterworth low-pass biquad filter ($f_c = 320\text{ Hz}$) and exponential gain envelope ($g \to 0.08$).
- **Chapter 7: Photographic Integrity and Archival Methodology**
  - The "Honest Empty Frame" doctrine (0% AI generation, 0% stock misrepresentation).
  - Cryptographic SHA-256 anti-clash verification (zero binary clashes).
  - 143 locally hosted, verified WebP photographs.
- **Chapter 8: Experimental Validation and Quality Assurance**
  - Automated continuous validation (`npm run atlas:check`, `npm run ui:smoke`).
  - Performance profiling (60 FPS rendering, < 50ms camera tweening).
- **Chapter 9: Comprehensive Gastronomic Atlas Catalog**
  - The Seven Culinary Zones of Bharat.
  - Complete master table of all 96 dishes across 34 administrative units.
- **Chapter 10: Discussion, Ethical Considerations, and Future Scope**
  - Safeguarding intangible cultural heritage (UNESCO 2003).
  - Resisting generative homogenization.
  - Roadmap: WebXR Gaussian splatting, flavor network graphs, multilingual audio.
- **Chapter 11: Conclusion**
- **Bibliography & Scholarly References**
