'use client';

export const Hero = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '4rem',
      }}
    >
      <p
        className='pixel-text'
        style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}
      >
        Regala y decora con tus emociones, lugares, sonidos... con hitos de tu
        historia.
      </p>
    </div>
  );
};
