import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Получаем dirname для ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_DIR = path.join(__dirname, '../src/assets/images/original');
const OUTPUT_DIR = path.join(__dirname, '../src/assets/images/optimized');
const THUMBNAIL_DIR = path.join(__dirname, '../src/assets/images/thumbnails');

// Размеры для превью
const THUMBNAIL_SIZE = {
  width: 400,
  height: 300
};

// Настройки качества
const JPEG_QUALITY = 80;
const WEBP_QUALITY = 75;

async function optimizeImages() {
  try {
    // Создаем директории если их нет
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    await fs.mkdir(THUMBNAIL_DIR, { recursive: true });

    // Получаем список файлов
    const files = await fs.readdir(INPUT_DIR);

    for (const file of files) {
      const inputPath = path.join(INPUT_DIR, file);
      const fileName = path.parse(file).name;

      // Оптимизируем основное изображение
      await sharp(inputPath)
        .resize(1920, null, { // максимальная ширина 1920px
          withoutEnlargement: true,
          fit: 'inside'
        })
        .jpeg({ quality: JPEG_QUALITY })
        .toFile(path.join(OUTPUT_DIR, `${fileName}.jpg`));

      // Создаем WebP версию
      await sharp(inputPath)
        .resize(1920, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: WEBP_QUALITY })
        .toFile(path.join(OUTPUT_DIR, `${fileName}.webp`));

      // Создаем превью
      await sharp(inputPath)
        .resize(THUMBNAIL_SIZE.width, THUMBNAIL_SIZE.height, {
          fit: 'cover',
          position: 'center'
        })
        .jpeg({ quality: JPEG_QUALITY })
        .toFile(path.join(THUMBNAIL_DIR, `${fileName}-thumb.jpg`));

      // WebP версия превью
      await sharp(inputPath)
        .resize(THUMBNAIL_SIZE.width, THUMBNAIL_SIZE.height, {
          fit: 'cover',
          position: 'center'
        })
        .webp({ quality: WEBP_QUALITY })
        .toFile(path.join(THUMBNAIL_DIR, `${fileName}-thumb.webp`));

      console.log(`Processed: ${file}`);
    }

    console.log('Image optimization completed!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages();