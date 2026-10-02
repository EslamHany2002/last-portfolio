import SkillIcon from './SkillIcon.jsx';

/*
 * `level` (0–100) sets the bar length as a visual guide only — no percentage is shown.
 * `label` (e.g. "Beginner") is displayed when the source states a level.
 * Without a level, the skill is listed by name only.
 */
export default function SkillBar({ name, level = null, label = null }) {
  const hasLevel = typeof level === 'number';

  return (
    <div className="skill-bar">
      <div className="skill-bar__head">
        <span className="skill-bar__name">
          <SkillIcon name={name} />
          {name}
        </span>
        {label && <span className="skill-bar__value">{label}</span>}
      </div>
      {hasLevel && (
        <div
          className="skill-bar__track"
          role="progressbar"
          aria-label={name}
          aria-valuenow={level}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuetext={label ?? 'Relative focus indicator'}
        >
          <span className="skill-bar__fill" style={{ '--level': `${level}%` }} />
        </div>
      )}
    </div>
  );
}
