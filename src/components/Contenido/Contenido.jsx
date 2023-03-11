import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import WikipediaSearch from "../WikipediaSearch/WikipediaSearch";

const theme = {
  background: "#f5f8fb",
  headerBgColor: "#eb3449",
  headerFontColor: "#fff",
  headerFontSize: "20px",
  botBubbleColor: "#eb3449",
  botFontColor: "#fff",
  userBubbleColor: "#0cb3c9",
  userFontColor: "#fff",
};

export default class Contenido extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={[
            {
              id: "1",
              message: "Bienvenido!. Soy un Chatbot mi nombre es Chiringuito",
              trigger: "respuesta",
              placeholder: "Enviar mensaje...",
            },
            {
              id: "respuesta",
              message: "Cual es tu nombre?",
              placeholder: "Enviar mensaje...",
              trigger: "2",
            },
            {
              id: "2",
              user: true,
              placeholder: "Enviar mensaje...",
              validator: (value) => {
                if (/[a-z]{2,15}$/.test(value)) {
                  return true;
                } else {
                  return "Escriba un nombre.";
                }
              },
              trigger: "3",
            },
            {
              id: "3",
              message: "Hola {previousValue}, un gusto saludarte !",
              trigger: "4",
              placeholder: "Enviar mensaje...",
            },
            {
              id: "4",
              message: "En el dia de hoy yo te mostrare el menu ?",
              trigger: "5",
              placeholder: "Enviar mensaje...",
            },
            {
              id: "5",
              placeholder: "Enviar mensaje...",
              options: [
                { value: "Comida", label: "Comida", trigger: "Comida" },
                {
                  value: "Desayunos",
                  label: "Desayunos",
                  trigger: "Desayunos",
                },
                { value: "Bebidas", label: "Bebidas", trigger: "Bebidas" },
                { value: "Postres", label: "Postres", trigger: "Postres" },
                {
                  value: "Promociones",
                  label: "Promociones",
                  trigger: "Promociones",
                },
              ],
            },
            {
              id: "Comida",
              options: [
                { value: "Pizzas", label: "Pizzas", trigger: "Pizzas" },
                {value: "Lomitos", label: "Lomitos", trigger: "Lomitos"},
                {value: "Hamburguesas", label: "Hamburguesas", trigger: "Hamburguesas"},
                {value: "Sandwiches", label: "Sandwiches", trigger: "Sandwiches"},
                {value: "Empanadas", label: "Empanadas", trigger: "Empanadas"}
              ],
              placeholder: "Enviar mensaje...",
            },
            {
              id: "Pizzas",
              message: "Pizza Comun $ 250",
              trigger: "pizzaespecial",
            },
            {
              id: "pizzaespecial",
              message: "Pizza Especial $ 300",
              trigger: "pizzafugazzeta",
            },
            {
              id: "pizzafugazzeta",
              message: "Pizza Fugazzeta $ 350",
              trigger: "pizzacalabresa",
            },
            {
              id: "pizzacalabresa",
              message: "Pizza Calabresa $ 400",
              trigger: "pizzamuzzarella",
            },
            {
              id: "pizzamuzzarella",
              message: "Pizza Muzzarella $ 450",
              trigger: "pizzanapolitana",
            },
            {
              id: "pizzanapolitana",
              message: "Pizza Napolitana $ 500",
              trigger: "opcionsiono",
            },
            {
              id: "opcionsiono",
              message: "Desea ver otra opcion?",
              trigger: "opciones si o no",
            },
             ////////////////////////////// selections lomitos //////////////////////////////
            {
                id: "Lomitos",
                message: "Lomito Comun $ 250",
                trigger: "lomitoespecial",
            },
            {
                id: "lomitoespecial",
                message: "Lomito Especial $ 300",
                trigger: "lomitoarabe",
            },
            {
                id: "lomitoarabe",
                message: "Lomito Arabe $ 350",
                trigger: "opcionsiono",
            },
            ////////////////////////////// selections hamburguesas //////////////////////////////
            {
                id: "Hamburguesas",
                message: "Hamburguesa Simple $ 250",
                trigger: "hamburguesadoble",
            },
            {
                id: "hamburguesadoble",
                message: "Hamburguesa Doble $ 300",
                trigger: "hamburguesatriple",
            },
            {
                id: "hamburguesatriple",
                message: "Hamburguesa Triple $ 350",
                trigger: "hamburguesabeicon"
            },
            {
                id: "hamburguesabeicon",
                message: "Hamburguesa con Beicon $ 350",
                trigger: "opcionsiono",
            },
            ////////////////////////////// selections sandwiches //////////////////////////////
            {
                id: "Sandwiches",
                message: "Sandwich Comun $ 250",
                trigger: "sandwichespecial",
            },
            {
                id: "sandwichespecial",
                message: "Sandwich Especial $ 300",
                trigger: "sandwicharabe",
            },
            {
                id: "sandwicharabe",
                message: "Sandwich Pan Arabe $ 350",
                trigger: "sandwichhojaldre",
            },
            {
                id: "sandwichhojaldre",
                message: "Sandwich Pan Hojaldre $ 350",
                trigger: "opcionsiono",
            },
            ////////////////////////////// selections empanadas //////////////////////////////
            {
                id: "Empanadas",
                message: "Empanadas Carne $ 250",
                trigger: "empanadapollo",
            },
            {
                id: "empanadapollo",
                message: "Empanadas Pollo $ 300",
                trigger: "empanadajamonyqueso",
            },
            {
                id: "empanadajamonyqueso",
                message: "Empanadas Jamon y Queso $ 350",
                trigger: "empanadaarabes",
            },
            {
                id: "empanadaarabes",
                message: "Empanadas Arabes $ 350",
                trigger: "empanadaternera",
            },
            {
                id: "empanadaternera",
                message: "Empanadas Ternera $ 350",
                trigger: "opcionsiono",
            },
            {
              id: "opciones si o no",
              options: [
                { value: "si", label: "Si", trigger: "5" },
                { value: "no", label: "No", trigger: "FinDePedido" },
              ],
            },
            ////////////////////////////// selections desayunos //////////////////////////////
            {
              id: "Desayunos",
              message: "Cafe chico $ 100",
              trigger: "d1",
              placeholder: "Enviar mensaje...",
            },
            {
                id: "d1",
                message: "Cafe grande $ 150",
                trigger: "d2",
            },
            {
                id: "d2",
                message: "cafe,te o matecocido con medialunas $ 200",
                trigger: "d3",
            },
            {
                id: "d3",
                message: "cafe,te o matecocido con medialunas de jamon y queso $ 250",
                trigger: "d4",
            }, 
            {
                id: "d4",
                message: "cafe,te o matecocido con porcion de torta $ 550",
                trigger: "d5",
            },
            {
                id: "d5",
                message: "cafe,te o matecocido con tostadas, queso crema, mermelada y ensalada de frutas $ 650",
                trigger: "d6",
            },
            {
                id: "d6",
                message: "cafe,te o matecocido con tostadas, queso crema, mermelada y ensalada de frutas $ 650",
                trigger: "opcionsiono",
            },
            ////////////////////////////// selections bebidas //////////////////////////////
            {
              id: "Bebidas",
              options: [
                { value: "Licuados", label: "Licuados", trigger: "Licuados" },
                { value: "Gaseosas", label: "Gaseosas", trigger: "Gaseosas" },
                { value: "Cervezas", label: "Cervezas", trigger: "Cervezas" },
                ],
              placeholder: "Enviar mensaje...",
            },
            ////////////////////////////// selections Licuados //////////////////////////////
            {
                id: "Licuados",
                message: "Licuado de frutas $ 150",
                trigger: "l1",
            },
            {
                id: "l1",
                message: "durazno $ 200",
                trigger: "l2",
            },
            {
                id: "l2",
                message: "frutilla $ 200",
                trigger: "l3",
            },
            {
                id: "l3",
                message: "naranja $ 200",
                trigger: "l4",
            },
            {
                id: "l4",
                message: "banana $ 200",
                trigger: "opcionsiono",
            },
            ////////////////////////////// selections Gaseosas //////////////////////////////
            {
                id: "Gaseosas",
                message: "Coca Cola $ 100",
                trigger: "g1",
            },
            {
                id: "g1",
                message: "Sprite $ 100",
                trigger: "g2",
            },
            {
                id: "g2",
                message: "Fanta $ 100",
                trigger: "g3",
            },
            {
                id: "g3",
                message: "7up $ 100",
                trigger: "g4",
            },
            {
                id: "g4",
                message: "Manaos $ 100",
                trigger: "opcionsiono",
            },
            ////////////////////////////// selections Cervezas //////////////////////////////
            {
                id: "Cervezas",
                message: "Quilmes $ 100",
                trigger: "c1",
            },
            {
                id: "c1",
                message: "Patagonia $ 100",
                trigger: "c2",
            },
            {
                id: "c2",
                message: "Stella Artois $ 100",
                trigger: "c3",
            },
            {
                id: "c3",
                message: "Corona $ 100",
                trigger: "c4",
            },
            {
                id: "c4",
                message: "Brahma $ 100",
                trigger: "opcionsiono",
            },
            ////////////////////////////// selections postres //////////////////////////////
            {
              id: "Postres",
                message: "Torta de chocolate $ 350",
                trigger: "p1",
              placeholder: "Enviar mensaje...",
            },{
                id: "p1",
                message: "Torta de frutilla $ 350",
                trigger: "p2",
            },
            {
                id: "p2",
                message: "Torta de durazno $ 350",
                trigger: "p3",
            },
            {
                id: "p3",
                message: "Torta de banana $ 350",
                trigger: "p4",
            },{
                id: "p4",
                message: "Torta de naranja $ 350",
                trigger: "opcionsiono",
            },
            ////////////////////////////// selections promociones //////////////////////////////
            {
              id: "Promociones",
              message: "Promocion 1: 2x1 en bebidas",
              trigger: "pr1",
              placeholder: "Enviar mensaje...",
            },
            {
                id: "pr1",
                message: "Promocion 2: 2x1 en tortas",
                trigger: "pr2",
            },
            {
                id: "pr2",
                message: "Promocion 3: 2x1 en medialunas",
                trigger: "pr3",
            },
            {
                id: "pr3",
                message: "Promocion 4: 2x1 en tostadas",
                trigger: "pr4",
            },
            {
                id: "pr4",
                message: "Promocion 5: 2x1 en medialunas de jamon y queso",
                trigger: "opcionsiono",
            },
            {
              id: "FinDePedido",
              message: "Gracias! Fin del pedido ",
              end: true,
              placeholder: "Enviar mensaje...",
            },

            // {
            //     id: "9",
            //     component: <WikipediaSearch />,
            //     asMessage: true,
            //     trigger: "preguntaVuelta"
            // },
            // {
            //     id: "preguntaVuelta",
            //     message: "Do you need to know anything else?",
            //     trigger: "respuestaVuelta",
            // },
            // {
            //     id: "respuestaVuelta",
            //     options: [
            //         {value: "y", label: "Yes", trigger: "6A"},
            //         {value: "n", label: "No", trigger: "6B"},
            //     ],
            // }
          ]}
        />
      </ThemeProvider>
    );
  }
}
