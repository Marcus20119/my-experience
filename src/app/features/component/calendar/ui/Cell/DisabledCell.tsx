function DisabledCell() {
  return (
    <div
      className="h-full w-full bg-neutral-0"
      style={{
        backgroundImage:
          'repeating-linear-gradient(135deg, var(--neutral-300-color) 0, var(--neutral-300-color) 1px, transparent 0, transparent 50%)',
        backgroundSize: '12px 12px',
      }}
    />
  );
}

export default DisabledCell;
