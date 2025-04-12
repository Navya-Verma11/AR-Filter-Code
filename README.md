# Cyberpunk AR Face Filter

**Live Demo:** [Try it on Glitch](https://cyberpunkfilter-navyaverma.glitch.me)

This project is an Augmented Reality (AR) face filter with a cyberpunk aesthetic, built using p5.js and clmtrackr. It overlays animated cybernetic elements on the user's face, responding to facial expressions like blinks and mouth movements. The filter features glowing implants, neon grids, glitch effects, and holographic data streams, creating a futuristic vibe.

## Features

- **Face Tracking:** Uses clmtrackr to track facial landmarks in real-time via webcam.
- **Cybernetic Elements:**
  - Animated eye lens that pulses when you blink.
  - Cheek circuit implant that jitters when you open your mouth.
  - Neon face outline, eye scanners, forehead HUD triangle, and dynamic mouth wireframe.
- **Interactive Animations:**
  - Visual effects react to blinks (eye lens expands) and mouth movements (circuit pulses, data stream scatters).
- **Visual Effects:**
  - Neon grid overlay for a cyberpunk HUD feel.
  - Glitchy screen distortions with magenta and cyan tints.
  - Holographic data stream particles that respond to face position.
- **Responsive Design:** Canvas scales to different screen sizes with a cyberpunk-styled border and glow.

## Prerequisites

- A modern web browser (Chrome, Firefox, or Edge recommended).
- A webcam for face tracking.
- An internet connection to load external libraries (p5.js and clmtrackr).

## Installation

###Run on Glitch

**Remix the Project:**
- Visit [Glitch](https://cyberpunkfilter-navyaverma.glitch.me) and remix this project.
- Alternatively, create a new Glitch project and upload the files from this repository.

**Verify Files:**
- Ensure the following files are in your Glitch project:
  - `index.html`
  - `style.css`
  - `sketch.js`
  - No additional assets are required (audio was removed).

**Run the Project:**
- Click "Show" in Glitch to open the live preview.
- Allow camera access when prompted by the browser.
- The filter should start, overlaying cybernetic elements on your face.

## Project Structure

- **index.html:** Sets up the HTML structure, loads p5.js and clmtrackr libraries, and links to CSS and JS files.
- **style.css:** Styles the canvas with a neon border, cyberpunk gradient overlay, and responsive centering.
- **sketch.js:** Core logic for:
  - Initializing the webcam and face tracker.
  - Detecting facial expressions (blinks and mouth movements).
  - Rendering cybernetic implants, glitch effects, neon grid, and data streams.

## Usage

1. Open the project in a browser (via Glitch or locally).
2. Grant camera access when prompted.
3. Position your face in front of the webcam.
4. Try the following to see interactive effects:
   - **Blink:** The eye lens pulses briefly.
   - **Open your mouth:** The cheek circuit jitters, and nearby data stream particles scatter.
5. Enjoy the cyberpunk aesthetic with glowing implants, glitchy distortions, and neon visuals!

## Dependencies

- **p5.js (v1.4.2):** For canvas rendering and animation.
- **clmtrackr (v1.1.2):** For real-time face tracking.

Loaded via CDN in index.html:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.2/p5.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/clmtrackr/1.1.2/clmtrackr.min.js"></script>
```

## Customization

**Adjust Expression Sensitivity:**
- In `sketch.js`, modify thresholds in `detectExpressions()`:
  - `mouthDist > 20`: Increase/decrease for more/less sensitivity to mouth opening.
  - `leftEyeDist < 5`: Adjust for blink detection accuracy.

**Change Colors:**
- Edit RGB values in `applyCyberpunkFilter()` (e.g., `stroke(0, 255, 204)` for cyan) to match your aesthetic.

**Modify Glitch Effects:**
- In `draw()`, tweak `glitchOffset = random(-20, 20)` for stronger/weaker glitches or adjust `frameCount % 15 < 3` for frequency.

**Add New Implants:**
- Extend `applyCyberpunkFilter()` to draw additional shapes (e.g., a jawline circuit) using positions for face landmarks.

## Known Limitations

- **Face Tracking:** clmtrackr may struggle with low lighting, angled faces, or partial occlusion. Ensure good lighting and face the camera directly.
- **Performance:** Heavy animations (glitch effects, particles) may lag on low-end devices. Reduce particle count in dataStream (e.g., from 20 to 10) if needed.
- **No Body Tracking:** This filter only supports face tracking. For body tracking, consider integrating PoseNet or MediaPipe (requires additional setup).
- **Browser Compatibility:** Works best in Chrome and Firefox. Safari may have webcam access issues.

## Troubleshooting

**Filter Not Loading:**
- Check the browser console (F12 > Console) for errors.
- Ensure camera access is allowed.
- Verify CDN links in index.html are accessible.

**Face Not Detected:**
- Adjust lighting or face position.
- Confirm clmtrackr is loaded (`<script>` tag in index.html).

**Glitches Too Intense:**
- Reduce `glitchOffset` range in `draw()` or increase the frame interval (e.g., `frameCount % 15` to `frameCount % 30`).

## Contributing

Feel free to fork this project and submit pull requests with enhancements! Ideas for improvement:

- Add body tracking with TensorFlow.js or MediaPipe.
- Introduce touch controls for mobile devices.
- Implement color scheme toggles for different cyberpunk vibes.
- Optimize performance for low-end devices.

## Acknowledgments

- Built with p5.js and clmtrackr.
- Inspired by cyberpunk aesthetics from sci-fi media.
- Created for fun and learning on Glitch.


