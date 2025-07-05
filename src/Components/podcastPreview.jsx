export default function PodcastPreviews({ podcasts }) {
  return (
    <>
      <div className="podcastPreview">
        <img src={podcasts.img} />
        <h1 className="title">{podcasts.title}</h1>
        <p className="descriptions">{podcasts.description}</p>
        <p className="seasons">{podcasts.seasons}</p>
        {podcasts.genres && (
          <p className="genres">{podcasts.genres.join(",")}</p>
        )}
      </div>
    </>
  );
}
