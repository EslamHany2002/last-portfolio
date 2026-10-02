import { Download } from 'lucide-react';
import { cv } from '../data/portfolio.js';
import { getCv } from '../lib/assets.js';
import Button from './Button.jsx';
import DevNote from './DevNote.jsx';

const cvFile = getCv(cv.file);

// Links to the real file in assets/cv/; disabled until one exists.
export default function CvButton({ variant = 'primary', block = false, showNote = true }) {
  if (cvFile) {
    return (
      <Button href={cvFile.url} download={cvFile.name} icon={Download} variant={variant} block={block}>
        Download CV
      </Button>
    );
  }

  return (
    <>
      <Button icon={Download} variant={variant} block={block} disabled title="CV file not added yet">
        Download CV
      </Button>
      {showNote && <DevNote>No file in assets/cv/ yet</DevNote>}
    </>
  );
}
