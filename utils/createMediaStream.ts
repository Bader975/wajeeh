const getPeakLevel = (analyzer: any) => {
  const array = new Uint8Array(analyzer.fftSize);
  analyzer.getByteTimeDomainData(array);
  return (
    array.reduce((max, current) => Math.max(max, Math.abs(current - 127)), 0) / 128
  );
};

const createMediaStream = (stream: MediaStream, isRecordingRef: React.MutableRefObject<boolean>, callback: (peak: number) => void) => {
  const context = new AudioContext();
  const source = context.createMediaStreamSource(stream);
  const analyzer = context.createAnalyser();
  source.connect(analyzer);

  const tick = () => {
    if (!isRecordingRef.current) {
      return;
    }

    const peak = getPeakLevel(analyzer);
    callback(peak);

    requestAnimationFrame(tick);
  };

  tick();
};

export { createMediaStream };
