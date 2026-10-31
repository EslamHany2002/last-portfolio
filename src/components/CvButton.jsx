import { Download } from 'lucide-react';
import { cv } from '../data/portfolio.js';
import { useContent } from '../i18n/LanguageContext.jsx';
import { getCv } from '../lib/assets.js';
import Button from './Button.jsx';
import DevNote from './DevNote.jsx';

const cvFile = getCv(cv.file);

// Links to the real file in assets/cv/; disabled until one exists.
export default function CvButton({ variant = 'primary', block = false }) {
  const { ui } = useContent();
  if (cvFile) {
    return (
      <Button href={cvFile.url} download={cvFile.name} icon={Download} variant={variant} block={block}>
        {ui.downloadCv}
      </Button>
    );
  }

  return (
    <>
      <Button icon={Download} variant={variant} block={block} disabled title="CV file not added yet">
        {ui.downloadCv}
      </Button>
      <DevNote>No file in assets/cv/ yet</DevNote>
    </>
  );
}
