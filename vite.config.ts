import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Automatically copy the user's actual product images
try {
  const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity\\brain\\4bf0b8eb-8238-428a-8548-1730c8f6bc56';
  const mappings = [
    { src: 'media__1778973796945.png', dest: 'moon_glow_polish_1777837345593.png' },
    { src: 'media__1778973805315.png', dest: 'rose_cloud_polish_1777836603661.png' },
    { src: 'media__1778973811626.png', dest: 'coffee_velvet_scrub_1777836588363.png' },
    { src: 'media__1778973818985.png', dest: 'brightening_botanical_1777839888932.png' },
    { src: 'media__1778973830358.png', dest: 'deep_tan_rescue_1777839903980.png' },
    { src: 'media__1778974743963.png', dest: 'golden_rio_scrub_1777836620027.png' },
    { src: 'media__1778974756256.png', dest: 'floral_luxury_polish_1777837362238.png' },
    { src: 'media__1778974767892.png', dest: 'bloom_couture_1777839918477.png' }
  ];

  const destDirs = [
    'c:\\Users\\HP\\.gemini\\antigravity\\scratch\\veloura\\public',
    'c:\\Users\\HP\\Desktop\\veloura\\public'
  ];

  destDirs.forEach(destDir => {
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    mappings.forEach(m => {
      const srcPath = path.join(srcDir, m.src);
      const destPath = path.join(destDir, m.dest);
      if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`[Veloura Image Copier] Copied ${m.src} -> ${destPath}`);
      } else {
        console.warn(`[Veloura Image Copier] Source not found: ${srcPath}`);
      }
    });
  });
} catch (err) {
  console.error('[Veloura Image Copier] Error during copy:', err);
}

// Automatically copy the Golden Oat Repair image from the current conversation
try {
  const currentSrcImg = 'C:\\Users\\HP\\.gemini\\antigravity\\brain\\dbc5b5e2-f6c0-4a3e-9c43-b8fcef3f9ba0\\media__1778978998968.png';
  const destDirs = [
    'c:\\Users\\HP\\.gemini\\antigravity\\scratch\\veloura\\public\\golden_oat_repair_1777839874318.png',
    'c:\\Users\\HP\\Desktop\\veloura\\public\\golden_oat_repair_1777839874318.png'
  ];

  if (fs.existsSync(currentSrcImg)) {
    destDirs.forEach(destPath => {
      const destDir = path.dirname(destPath);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      fs.copyFileSync(currentSrcImg, destPath);
      console.log(`[Veloura Image Copier] Copied Golden Oat Repair image -> ${destPath}`);
    });
  } else {
    console.warn(`[Veloura Image Copier] Golden Oat Repair source not found: ${currentSrcImg}`);
  }
} catch (err) {
  console.error('[Veloura Image Copier] Error during Golden Oat Repair image copy:', err);
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
