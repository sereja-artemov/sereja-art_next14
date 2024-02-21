export default function Video({ url }: { url: string }) {
  return (
    <video loop preload="none" autoPlay muted>
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
