/**
 * HeroPanel
 *
 * Renders hero-panel.png as a full-bleed right column image.
 * object-fit: cover keeps it perfectly cropped at any column height.
 * aria-hidden — purely decorative.
 */
export function GeometricBackground() {
  return (
    <div className="geo-bg-wrapper" aria-hidden="true">
      <img
        src="/hero-panel.png"
        alt=""
        className="geo-bg-img"
        draggable={false}
      />
    </div>
  );
}
