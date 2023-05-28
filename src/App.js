import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState } from "react";
import { v4 as uuid } from "uuid";

import "./reset.css";
import Header from "./components/Header/Header";
import FormularioNuevoVideo from "./components/FormNuevoVideo";
import FormularioNuevaCategoria from "./components/FormNuevaCategoria";
import Home from "./components/Home";
import HeaderHome from "./components/HeaderHome";
import Section from "./components/Section";
import Footer from "./components/footer";
import NotFoundPage from "./pages/404";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mostrarForm, setMostrarForm] = useState(false);
  const [videos, setVideos] = useState([
    {
      id: uuid(),
      titulo: "Karaku",
      link: "https://youtu.be/DnbFIwO4Df8",
      imagen: "http://i3.ytimg.com/vi/DnbFIwO4Df8/hqdefault.jpg",
      categoria: "Kimetsu",
      descripcion: "Aparece el demonio más fortalecido",
    },
    {
      id: uuid(),
      titulo: "Siguiente Episodio",
      link: "https://youtu.be/hLZkD2VN-gQ",
      imagen: "http://i3.ytimg.com/vi/hLZkD2VN-gQ/hqdefault.jpg",
      categoria: "Kimetsu",
      descripcion: "Adelanto del cap. 8",
    },
    {
      id: uuid(),
      titulo: "Resumen",
      link: "https://youtu.be/2Eqkg8U9ZtE",
      imagen: "http://i3.ytimg.com/vi/2Eqkg8U9ZtE/hqdefault.jpg",
      categoria: "Kimetsu",
      descripcion: "Resumen de episodio 7 y 8",
    },
    {
      id: uuid(),
      titulo: "Técnicas demoniacas",
      link: "https://youtu.be/rn00KMYUdIQ",
      imagen: "http://i3.ytimg.com/vi/rn00KMYUdIQ/hqdefault.jpg",
      categoria: "Kimetsu",
      descripcion: "Las seis técnicas demoniacas",
    },
    {
      id: uuid(),
      titulo: "Genya Muere",
      link: "https://youtu.be/2_vozJASSNE",
      imagen: "http://i3.ytimg.com/vi/2_vozJASSNE/hqdefault.jpg",
      categoria: "Kimetsu",
      descripcion: "Se acerca el final de Genya",
    },

    {
      id: uuid(),
      titulo: "Estrenos",
      link: "https://youtu.be/m3SvDJpCuZY",
      imagen: "http://i3.ytimg.com/vi/m3SvDJpCuZY/hqdefault.jpg",
      categoria: "Anime",
      descripcion: "Estrenos en netflix de animes",
    },
    {
      id: uuid(),
      titulo: "Bullying",
      link: "https://youtu.be/C0a1KJHGkeQ",
      imagen: "http://i3.ytimg.com/vi/C0a1KJHGkeQ/hqdefault.jpg",
      categoria: "Anime",
      descripcion: "Niño bulleado que se volvió invencible",
    },
    {
      id: uuid(),
      titulo: "Me gustan..",
      link: "https://youtu.be/TgnPGEV2Bbs",
      imagen: "http://i3.ytimg.com/vi/TgnPGEV2Bbs/hqdefault.jpg",
      categoria: "Anime",
      descripcion: "Le gustan Mayores, vaya gustos.",
    },
    {
      id: uuid(),
      titulo: "Reencarnación",
      link: "https://youtu.be/DnD1pCmstEA",
      imagen: "http://i3.ytimg.com/vi/DnD1pCmstEA/hqdefault.jpg",
      categoria: "Anime",
      descripcion: "Niño que reencarnó con nivel máximo",
    },
    {
      id: uuid(),
      titulo: "Ragnarok",
      link: "https://youtu.be/9AgguiNMsPY",
      imagen: "http://i3.ytimg.com/vi/9AgguiNMsPY/hqdefault.jpg",
      categoria: "Anime",
      descripcion: "Ragnarok llega a una nueva plataforma de anime",
    },
  ]);

  const [categorias, setCategorias] = useState([
    {
      id: uuid(),
      nombre: "Kimetsu",
      colorPrimario: "#ff8097",
      descripcion: "Videos Kimetsukis",
    },
    {
      id: uuid(),
      nombre: "Anime",
      colorPrimario: "#eaffc2",
      descripcion: "Videos del mundo asiático, japonés.",
    },
    {
      id: uuid(),
      nombre: "Frontend",
      colorPrimario: "#cce5ff",
      descripcion: "Videos para introducirte al desarrollo Web",
    },
    {
      id: uuid(),
      nombre: "Lógica",
      colorPrimario: "#a3ffac",
      descripcion: "Videos para fortalecer tú lógica programacional",
    },
    {
      id: uuid(),
      nombre: "Música",
      colorPrimario: "#ffca99",
      descripcion: "Videos Musicales",
    },
  ]);

  const actualizarCategorias = (nuevasCategorias) => {
    setCategorias(nuevasCategorias);
  };

  const cambiarEstado = () => {
    setMostrarForm(!mostrarForm);
  };

  //Registrando videos
  const registrarVideo = (e) => {
    setVideos([...videos, e]);
  };

  //Registrando Categorias
  const registrarCategoria = (categoriaNueva) => {
    actualizarCategorias([...categorias, { ...categoriaNueva, id: uuid() }]);
  };

  //eliminar video
  const eliminarVideo = (id) => {
    const newVideos = videos.filter((video) => video.id !== id);
    setVideos(newVideos);
  };

  //eliminar Categoria
  const eliminarCategoria = (id) => {
    const newCategorias = categorias.filter((categoria) => categoria.id !== id);
    actualizarCategorias(newCategorias);
  };

  return (
    <div className="App">
      <Router>
        <Header cambiarEstado={cambiarEstado} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeaderHome videos={videos} />
                <Home />
                {categorias.map((categoria, index) => (
                  <Section
                    datos={categoria}
                    key={categoria.nombre}
                    nombre={categoria.nombre}
                    color={categoria.colorPrimario}
                    videos={videos.filter(
                      (video) => video.categoria === categoria.nombre
                    )}
                    eliminarVideo={eliminarVideo}
                  />
                ))}
              </>
            }
          />

          <Route
            path="/nuevo-video"
            element={
              <FormularioNuevoVideo
                categorias={categorias.map((categoria) => categoria.nombre)}
                registrarVideo={registrarVideo}
              />
            }
          />
          <Route
            path="/crear-categoria"
            element={
              <FormularioNuevaCategoria
                categorias={categorias}
                registrarCategoria={registrarCategoria}
                actualizarCategorias={actualizarCategorias}
                eliminarCategoria={eliminarCategoria}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
