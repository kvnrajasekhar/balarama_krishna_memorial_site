import { getCloudinaryVideoUrl } from "../../utils/cloudinaryVideo";

function CloudinaryVideo({
  publicId,
  title,
  className = "",
  poster,
  controls = true,
  autoPlay = false,
  muted = false,
  loop = false,
  preload = "metadata",
}) {
  const videoUrl = getCloudinaryVideoUrl(publicId);

  return (
    <video
      className={className}
      controls={controls}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      preload={preload}
      poster={poster}
      playsInline
      aria-label={title}
    >
      <source src={videoUrl} type="video/mp4" />

      Your browser does not support the video element.
    </video>
  );
}

export default CloudinaryVideo;