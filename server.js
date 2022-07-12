const express = require('express');
const app = express(); //instanciando
// app - carrega tudo do express 

app.set("view engine", "ejs");
// set - metodo que existe dentro do express - Fala pro express que vai usar o ejs
// view engine - ferramenta pra renderizar o html
// ejs - qual ferramenta vai usar

app.get("/", function (req, res){
  const items = [
    { title: "D",
      message: "esenvolver aplicações/serviços de forma fácil"
    },
    {
      title: "E",
      message: "JS usa JavaScript para renderizar HTML"
    },
    { title: "M",
      message: "uito fácil de usar"
    },
    {
      title: "A",
      message: "morzinho"
    },
    { title: "I",
      message: "sntall ejs"
    },
    {
      title: "S",
      message: "intaxe simples"
    }
  ];
  const subtitle = "Uma linguam de modelagem para criação de páginas HTML utilizando JavaScript"
  res.render("pages/index", {
    qualitys: items,
    subtitle: subtitle,
  });
});
// app.get - Cria uma rota
// "/" - chama a pagina princiapal do site
// vai executar a função
// res - resposta. A resposta é renderizar o index.

app.get("/sobre", function (req, res){
  res.render("pages/about");
})

app.listen(8080)
// rodar - ouve a porta 8080
// localhost:8080
console.log("Servidor funcionando")

// node server - nome do arquivo js