# Sensory Overload - Wiki

A visually stunning, deliberately disorienting wiki for the game **Sensory Overload**. Built with GitHub Pages in mind, this wiki features neon aesthetics, glitch effects, subtle animations, and a "this feels weird but dope" vibe.

## Features

### Visual Design
- **Neon Gradients**: Purples, blues, and reds throughout
- **Glitch Effects**: Headers with subtle chromatic aberration and text displacement
- **Subtle Animations**: Drifting backgrounds, pulsing elements, and smooth transitions
- **Hover Effects**: Blur shifts, 3D perspective transforms, and glow effects
- **Chromatic Aberration**: Carefully calibrated for effect without overwhelming
- **Dark Theme**: Eye-friendly with high contrast readable text

### Interactive Elements
- **Sticky Navigation**: Easy section switching
- **Dynamic Sections**: 
  - Overview
  - Disorientation Mechanics (Gameplay)
  - Sensory Attacks (Visual Effects)
  - Escalation Curve (Difficulty)
  - Levels of Breakdown (Level List)
- **Smooth Transitions**: Section changes with fade-in animations
- **Keyboard Navigation**: Arrow keys to switch sections, Tab for accessibility

### Sound Design Ready
- Audio hooks prepared for custom SFX
- Navigation sounds, UI feedback, and effect sounds ready to implement
- Place audio files in `assets/sounds/` and they'll automatically load

### Future Expansion
- Asset folder ready for images and sounds
- Level data updater function for dynamic level information
- Performance monitoring system
- Easter eggs (Konami code support)

## File Structure

```
SensoryOverloadWiki/
├── index.html          # Main page with all sections
├── styles.css          # All visual effects and styling
├── script.js           # Interactive features and animations
├── assets/             # Folder for images and sounds
│   ├── images/        # Game images (to be added)
│   └── sounds/        # Custom SFX (to be added)
├── .gitignore         # Git ignore file
└── README.md          # This file
```

## Quick Start

1. Place this folder in your GitHub repository
2. Enable GitHub Pages in repository settings
3. Site will be live at `https://yourusername.github.io/SensoryOverloadWiki`

## Adding Assets

### Images
1. Create `assets/images/` folder
2. Add your image files
3. Reference in HTML/CSS as needed

### Sounds
1. Create `assets/sounds/` folder  
2. Add MP3 files with names matching these events:
   - `nav-switch.mp3` - When navigating sections
   - `button-hover.mp3` - On button hover
   - `easter-egg.mp3` - Konami code activation
   - Custom sounds for your effects

The JavaScript is ready to play these automatically.

## Updating Level Information

When the dev provides level names and descriptions, use the `updateLevelData()` function:

```javascript
const levelData = [
    {
        name: "Level 1: Name Here",
        description: "Description here",
        intensity: "Low",
        type: "Tutorial"
    },
    // ... more levels
];

updateLevelData(levelData);
```

## Customization

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-pink: #ff006e;
    --primary-cyan: #00d9ff;
    --primary-purple: #a538ff;
    /* ... more colors ... */
}
```

### Adjust Animation Speed
Change timing values in CSS animations (currently 3-8 seconds for subtle effect).

### Modify Section Names
Update navigation buttons in `index.html` to match your preference.

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support with minor gradient differences
- Mobile: Fully responsive design

## Performance Notes

- All animations use CSS for efficiency
- Background drift is GPU-accelerated
- Hover effects are performance-optimized
- Optional FPS monitor available in script.js

## The Vibe

This wiki is designed to make visitors feel like something is slightly *off* without being unplayable or unreadable. The aesthetic matches a game about sensory overload - weird, dope, unsettling, but functional.

**The information is stable. The world isn't.**

---

Ready to add your content and make the chaos beautiful!
