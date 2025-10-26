import test from '../../assets/test.mp4';

export default function VideoSection() {
  return (
    <section className="relative w-full h-[40vh] md:h-screen overflow-hidden featureBackground">
      <video
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={test} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </section>
  );
}