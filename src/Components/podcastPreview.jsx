export default function PodcastPreviews({ podcasts }) {
  return (
    <>
      <div className="podcastPreview">
        <img className="image" src={podcasts.img} />
        <h1 className="title">{podcasts.title}</h1>
        <p className="descriptions">{podcasts.description}</p>
        <p className="seasons">Seasons:{podcasts.seasons}</p>
        {podcasts.genres && (
          <p className="genres">{podcasts.genres.join(",")}</p>
        )}
        <p className="last-updated">{podcasts.updated}</p>
      </div>
    </>
  );
}
