import ReactPlayer from "react-player";
import "./headerHome.css";

const HeaderHome = ({ videos }) => {
  const ultimoVideo = videos.length > 0 ? videos[videos.length - 1] : null;

  return (
    <section className="header-home">
      <div className="info-header">
        <button>
          Visto <br /> por última vez
        </button>
        {ultimoVideo && <h3>{ultimoVideo.titulo}</h3>}
        {ultimoVideo && <p>{ultimoVideo.descripcion}</p>}
      </div>
      {ultimoVideo && (
        <ReactPlayer
          className="video-header"
          url={ultimoVideo.link}
          width="50%"
          controls
        />
      )}
    </section>
  );
};

export default HeaderHome;
