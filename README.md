# Mobile Web App

A mobile-friendly web application optimized for Safari on iPhone and iPad.

## Features

✅ **Responsive Design** - Works on all screen sizes
✅ **Safari Optimized** - Uses iOS-specific meta tags and features
✅ **Offline Support** - Service worker enables offline functionality
✅ **Installable** - Can be added to home screen
✅ **Touch Friendly** - Optimized for touch interactions
✅ **Safe Area Support** - Respects notches and home indicators

## Installation

### Deploy to a Server

1. Upload all files to your web server
2. Access via HTTPS (required for service workers)
3. Open in Safari on iPhone/iPad

### Add to Home Screen

1. Open the app in Safari
2. Tap the Share button
3. Select "Add to Home Screen"
4. The app will run in standalone mode

## Files

- `index.html` - Main HTML structure
- `styles.css` - Mobile-optimized styling
- `script.js` - JavaScript functionality
- `sw.js` - Service worker for offline support

## Browser Support

- iOS Safari 11.3+
- Modern Android browsers
- Desktop browsers (responsive)

## Development

To test locally:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## Customization

Edit the following to customize:

- Change colors in `styles.css` (gradient colors, card backgrounds)
- Modify content in `index.html` (title, sections, buttons)
- Add functionality in `script.js`

## Next Steps

1. Add your app icon (update `apple-touch-icon.png`)
2. Add a manifest.json for PWA features
3. Implement your specific app functionality
4. Add database or API integration
5. Deploy to a hosting service

## Hosting Options

- GitHub Pages (free)
- Netlify (free)
- Vercel (free)
- AWS S3 (minimal cost)
- Firebase Hosting (free tier)

---

Built for mobile. Made simple.
