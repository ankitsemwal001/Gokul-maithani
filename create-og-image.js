import sharp from "sharp";
import fs from "fs";
import path from "path";

async function generateOgImage() {
  const width = 1200;
  const height = 630;

  const svgBanner = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FBF9F5"/>
        <stop offset="50%" stop-color="#F3EFE8"/>
        <stop offset="100%" stop-color="#E8EBE3"/>
      </linearGradient>
      <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#C87D53"/>
        <stop offset="100%" stop-color="#B06A42"/>
      </linearGradient>
      <linearGradient id="overlayGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#FBF9F5" stop-opacity="1"/>
        <stop offset="65%" stop-color="#FBF9F5" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#FBF9F5" stop-opacity="0.2"/>
      </linearGradient>
      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#3A3733" flood-opacity="0.12"/>
      </filter>
    </defs>

    <!-- Background -->
    <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>

    <!-- Sacred Mandala Accent (Right) -->
    <g transform="translate(980, 315) scale(1.6)" opacity="0.1" stroke="#4B5D45" fill="none" stroke-width="1.5">
      <circle cx="0" cy="0" r="180" stroke-dasharray="4 4"/>
      <circle cx="0" cy="0" r="140"/>
      <circle cx="0" cy="0" r="100" stroke-dasharray="6 3"/>
      <circle cx="0" cy="0" r="60"/>
      <circle cx="0" cy="0" r="20" fill="#4B5D45" fill-opacity="0.2"/>
      <path d="M -190 0 L 190 0 M 0 -190 L 0 190" stroke-dasharray="3 3"/>
    </g>

    <!-- Decorative Terracotta Arc (Left Top) -->
    <circle cx="80" cy="80" r="160" stroke="#C87D53" stroke-width="2" stroke-dasharray="8 6" fill="none" opacity="0.15"/>
    <circle cx="80" cy="80" r="120" stroke="#8A9A82" stroke-width="1.5" fill="none" opacity="0.12"/>

    <!-- Content Card Left Area -->
    <!-- Top Eyebrow Badge -->
    <g transform="translate(80, 75)">
      <rect x="0" y="0" width="320" height="36" rx="18" fill="#4B5D45" fill-opacity="0.12" stroke="#4B5D45" stroke-opacity="0.2"/>
      <text x="160" y="23" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#4B5D45" text-anchor="middle" letter-spacing="2">
        AUTHENTIC HIMALAYAN YOGA
      </text>
    </g>

    <!-- Main Title -->
    <text x="80" y="175" font-family="Georgia, serif" font-size="52" font-weight="bold" fill="#3A4934" letter-spacing="-0.5">
      Yogi Gokul Maithani
    </text>

    <!-- Subtitle -->
    <text x="80" y="230" font-family="Georgia, serif" font-size="28" font-style="italic" fill="#C87D53">
      Best Yoga Teacher in Rishikesh &amp; Online Classes
    </text>

    <!-- Description Paragraph -->
    <text x="80" y="285" font-family="Arial, sans-serif" font-size="17" fill="#4B4844" line-height="26">
      Transform your mind &amp; body with personalized Hatha, Ashtanga, Pranayama,
    </text>
    <text x="80" y="315" font-family="Arial, sans-serif" font-size="17" fill="#4B4844">
      and Therapeutic alignment sessions in Rishikesh and live online globally.
    </text>

    <!-- Tags Row -->
    <g transform="translate(80, 360)">
      <!-- Tag 1 -->
      <rect x="0" y="0" width="130" height="34" rx="17" fill="#FFFFFF" stroke="#8A9A82" stroke-opacity="0.3" filter="url(#shadow)"/>
      <text x="65" y="22" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#3A4934" text-anchor="middle">
        🧘 Hatha Yoga
      </text>

      <!-- Tag 2 -->
      <rect x="142" y="0" width="145" height="34" rx="17" fill="#FFFFFF" stroke="#8A9A82" stroke-opacity="0.3" filter="url(#shadow)"/>
      <text x="214" y="22" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#3A4934" text-anchor="middle">
        🔥 Ashtanga Flow
      </text>

      <!-- Tag 3 -->
      <rect x="299" y="0" width="170" height="34" rx="17" fill="#FFFFFF" stroke="#8A9A82" stroke-opacity="0.3" filter="url(#shadow)"/>
      <text x="384" y="22" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#3A4934" text-anchor="middle">
        🌿 Pranayama &amp; Breath
      </text>

      <!-- Tag 4 -->
      <rect x="481" y="0" width="175" height="34" rx="17" fill="#FFFFFF" stroke="#8A9A82" stroke-opacity="0.3" filter="url(#shadow)"/>
      <text x="568" y="22" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#3A4934" text-anchor="middle">
        ✨ 1-on-1 &amp; Group Batches
      </text>
    </g>

    <!-- Rating & Highlights Banner -->
    <g transform="translate(80, 425)">
      <rect x="0" y="0" width="580" height="60" rx="16" fill="#FFFFFF" stroke="#8A9A82" stroke-opacity="0.25" filter="url(#shadow)"/>
      
      <!-- Stars -->
      <text x="24" y="38" font-family="Arial, sans-serif" font-size="20" fill="#EAB308">
        ★★★★★
      </text>
      <text x="130" y="37" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#3A4934">
        4.9 / 5.0
      </text>
      <text x="200" y="37" font-family="Arial, sans-serif" font-size="14" fill="#6B7280">
        (120+ Reviews)
      </text>
      <line x1="320" y1="15" x2="320" y2="45" stroke="#E5E7EB" stroke-width="1.5"/>
      <text x="340" y="37" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="#C87D53">
        📍 Tapovan, Rishikesh &amp; Online
      </text>
    </g>

    <!-- Bottom Contact & Web Link -->
    <g transform="translate(80, 525)">
      <!-- CTA Button -->
      <rect x="0" y="0" width="220" height="50" rx="25" fill="url(#badgeGrad)" filter="url(#shadow)"/>
      <text x="110" y="31" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF" text-anchor="middle">
        Book Free Trial Class →
      </text>

      <!-- Phone / WhatsApp -->
      <text x="245" y="32" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#3A4934">
        📞 +91 89794 00645
      </text>

      <!-- URL -->
      <text x="440" y="32" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="#8A9A82">
        🌐 gokul-maithani.vercel.app
      </text>
    </g>
  </svg>
  `;

  // Overlay Yogi image on the right
  const yogiImagePath = path.resolve("public/assets/gokul-maithani-yoga-teacher-portrait-rishikesh.webp");
  let yogiBuffer = null;
  if (fs.existsSync(yogiImagePath)) {
    yogiBuffer = await sharp(yogiImagePath)
      .resize({ height: 560, fit: "inside" })
      .toBuffer();
  }

  const svgBuffer = Buffer.from(svgBanner);

  let image = sharp(svgBuffer);

  if (yogiBuffer) {
    image = image.composite([
      {
        input: yogiBuffer,
        top: 60,
        left: 780,
      },
    ]);
  }

const outImage = path.resolve("public/assets/gokul-maithani-yoga-og-image-rishikesh.webp");
  const outRootImage = path.resolve("public/gokul-maithani-yoga-og-image-rishikesh.webp");

  await image.clone().webp({ quality: 90 }).toFile(outImage);
  await image.clone().webp({ quality: 90 }).toFile(outRootImage);

  console.log("Successfully generated OG images at:", outImage, outRootImage);
}

generateOgImage().catch(console.error);
