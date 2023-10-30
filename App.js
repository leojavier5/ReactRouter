import { useEffect, useState } from "react";
import Main from "./Component/Main";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import PostForm from "./Component/PostForm";
import Post from "./Component/Post";
import user from "./images/hombre.jpg";
import axios from "axios";

const ConfigPage = {
  titulo: "grupo4",
  anio: "2023",
  autor: "@Leo",
};

const _data = {
  usuario: {
    nombre: "Max",
    carreo: "max@algo.com",
    avatar: user,
  },
  posts: [
    {
      post_id: "1",
      postContenido:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
      postFecha: "",
      postComentarios: [
        {
          comentario_id: "1",
          comentarioTexto:
            "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
          comentarioFecha: "",
        },
        {
          comentario_id: "2",
          comentarioTexto:
            "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
          comentarioFecha: "",
        },
      ],
      counterLikes: 4,
    },
    {
      post_id: "2",
      postContenido:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
      postFecha: "",
      postComentarios: [
        {
          comentario_id: "1",
          comentarioTexto:
            "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
          comentarioFecha: "",
        },
        {
          comentario_id: "2",
          comentarioTexto:
            "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
          comentarioFecha: "",
        },
      ],
      counterLikes: 45,
    },
  ],
};

useEffect(() => {
  console.log("toy escuchando");
},[data]);

console.log(data);
return (
  <>
    {/* Este es un comentario */}
    {data.posts && (
      <>
        <Header
          titulo={ConfigPage.titulo}
          anio={ConfigPage.anio}
          avatarUser={data.usuario && data.usuario.avatar}
        />
        <Main>
          <PostForm userPost={data.usuario} />
          {data.posts.map((item) => (
            <div key={item.post_id}>
              <Post post={item} />
            </div>
          )}
        </Main>
        <Footer autor={ConfigPage.autor} />
      </>
    )}
  </>
),}
  
