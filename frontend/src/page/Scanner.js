import React, { useEffect, useRef } from 'react';
import QrScanner from 'qr-scanner';

function QRScanner() {
  const videoRef = useRef(null);

  useEffect(() => {
    QrScanner.hasCamera().then(hasCamera => {
      if (!hasCamera) {
        console.error('No camera found.');
        return;
      }

      const scanner = new QrScanner(videoRef.current, result => {
        console.log('QR code detected:', result);
      });

      scanner.start();
    }).catch(error => {
      console.error('Failed to check camera availability:', error);
    });
  }, []);

  return (
    <div>
      <video ref={videoRef} style={{ width: '100%', height: 'auto' }}></video>
    </div>
  );
}

export default QRScanner;
