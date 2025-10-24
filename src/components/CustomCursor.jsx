import React, { useEffect, useRef } from 'react';

function CustomCursor() {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  const cursorPos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const outlinePos = useRef({ x: 0, y: 0 });
  const isPointerRef = useRef(false);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorOutline = cursorOutlineRef.current;

    if (!cursorDot || !cursorOutline) return;

    const handleMouseMove = (e) => {
      cursorPos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.onclick !== null ||
        target.type === 'submit' ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      if (isClickable !== isPointerRef.current) {
        isPointerRef.current = isClickable;
        
        if (isClickable) {
          cursorDot.style.width = '4px';
          cursorDot.style.height = '4px';
          cursorOutline.style.width = '48px';
          cursorOutline.style.height = '48px';
        } else {
          cursorDot.style.width = '8px';
          cursorDot.style.height = '8px';
          cursorOutline.style.width = '32px';
          cursorOutline.style.height = '32px';
        }
      }
    };

    const animate = () => {
      const dotSpeed = 0.18;
      const outlineSpeed = 0.1;

      dotPos.current.x += (cursorPos.current.x - dotPos.current.x) * dotSpeed;
      dotPos.current.y += (cursorPos.current.y - dotPos.current.y) * dotSpeed;

      outlinePos.current.x += (cursorPos.current.x - outlinePos.current.x) * outlineSpeed;
      outlinePos.current.y += (cursorPos.current.y - outlinePos.current.y) * outlineSpeed;

      cursorDot.style.transform = `translate(${dotPos.current.x}px, ${dotPos.current.y}px) translate(-50%, -50%)`;
      cursorOutline.style.transform = `translate(${outlinePos.current.x}px, ${outlinePos.current.y}px) translate(-50%, -50%)`;

      requestAnimationFrame(animate);
    };

    const rafId = requestAnimationFrame(animate);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>

      <div
        ref={cursorDotRef}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '8px',
          height: '8px',
          backgroundColor: '#fff',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
          transition: 'width 0.2s ease, height 0.2s ease',
          willChange: 'transform',
        }}
      />

      <div
        ref={cursorOutlineRef}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '32px',
          height: '32px',
          border: '2px solid rgba(255, 255, 255, 0.5)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          mixBlendMode: 'difference',
          transition: 'width 0.3s ease, height 0.3s ease',
          willChange: 'transform',
        }}
      />
    </>
  );
}

export default CustomCursor