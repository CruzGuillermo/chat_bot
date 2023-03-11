import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import WikipediaSearch from "../WikipediaSearch/WikipediaSearch";

const theme = {
  background: "#f5f8fb",
  headerBgColor: "#128C7E",
  headerFontColor: "#fff",
  headerFontSize: "20px",
  botBubbleColor: "#128C7E",
  botFontColor: "#fff",
  userBubbleColor: "#0cb3c9",
  userFontColor: "#fff",
  contentStyle: {
    width: "100%",
    height: "100%",
    overflow: "auto",
  },
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
                { value: "Comida", label: "Comida", trigger: "Comida" ,   placeholder: "Enviar mensaje...",},
                {
                  value: "Desayunos",
                  label: "Desayunos",
                  trigger: "Desayunos",   placeholder: "Enviar mensaje...",
                },
                { value: "Bebidas", label: "Bebidas", trigger: "Bebidas",   placeholder: "Enviar mensaje...", },
                { value: "Postres", label: "Postres", trigger: "Postres",   placeholder: "Enviar mensaje...", },
                {
                  value: "Promociones",
                  label: "Promociones",
                  trigger: "Promociones",
                  placeholder: "Enviar mensaje...",
                },
              ],
            },
            {
              id: "Comida",
              options: [
                { value: "Pizzas", label: "Pizzas", trigger: "Pizzas",   placeholder: "Enviar mensaje...", },
                {value: "Lomitos", label: "Lomitos", trigger: "Lomitos" ,   placeholder: "Enviar mensaje...",},
                {value: "Hamburguesas", label: "Hamburguesas", trigger: "Hamburguesas" ,   placeholder: "Enviar mensaje...",},
                {value: "Sandwiches", label: "Sandwiches", trigger: "Sandwiches",   placeholder: "Enviar mensaje...", },
                {value: "Empanadas", label: "Empanadas", trigger: "Empanadas",   placeholder: "Enviar mensaje...", },
              ],
              placeholder: "Enviar mensaje...",
            },
            {
              id: "Pizzas",
              message: "Pizza Comun $ 250",
              trigger: "pizzaespecial",
              placeholder: "Enviar mensaje...",
            },
            {
              id: "pizzaespecial",
              message: "Pizza Especial $ 300",
              trigger: "pizzafugazzeta",
              placeholder: "Enviar mensaje...",
            },
            {
              id: "pizzafugazzeta",
              message: "Pizza Fugazzeta $ 350",
              trigger: "pizzacalabresa",
              placeholder: "Enviar mensaje...",
            },
            {
              id: "pizzacalabresa",
              message: "Pizza Calabresa $ 400",
              trigger: "pizzamuzzarella",
              placeholder: "Enviar mensaje...",
            },
            {
              id: "pizzamuzzarella",
              message: "Pizza Muzzarella $ 450",
              trigger: "pizzanapolitana",
              placeholder: "Enviar mensaje...",
            },
            {
              id: "pizzanapolitana",
              message: "Pizza Napolitana $ 500",
              trigger: "opcionsiono",
              placeholder: "Enviar mensaje...",
            },
            {
              id: "opcionsiono",
              message: "Desea ver otra opcion?",
              trigger: "opciones si o no",
              placeholder: "Enviar mensaje...",
            },
             ////////////////////////////// selections lomitos //////////////////////////////
            {
                id: "Lomitos",
                message: "Lomito Comun $ 250",
                trigger: "lomitoespecial",
                placeholder: "Enviar mensaje...",
            },
            {
                id: "lomitoespecial",
                message: "Lomito Especial $ 300",
                trigger: "lomitoarabe",
                placeholder: "Enviar mensaje...",
            },
            {
                id: "lomitoarabe",
                message: "Lomito Arabe $ 350",
                trigger: "opcionsiono",
                placeholder: "Enviar mensaje...",
            },
            ////////////////////////////// selections hamburguesas //////////////////////////////
            {
                id: "Hamburguesas",
                message: "Hamburguesa Simple $ 250",
                trigger: "hamburguesadoble",
                placeholder: "Enviar mensaje...",
            },
            {
                id: "hamburguesadoble",
                message: "Hamburguesa Doble $ 300",
                trigger: "hamburguesatriple",
                placeholder: "Enviar mensaje...",
            },
            {
                id: "hamburguesatriple",
                message: "Hamburguesa Triple $ 350",
                trigger: "hamburguesabeicon",
                placeholder: "Enviar mensaje...",
            },
            {
                id: "hamburguesabeicon",
                message: "Hamburguesa con Beicon $ 350",
                trigger: "opcionsiono",
                placeholder: "Enviar mensaje...",
            },
            ////////////////////////////// selections sandwiches //////////////////////////////
            {
                id: "Sandwiches",
                message: "Sandwich Comun $ 250",
                trigger: "sandwichespecial",
                placeholder: "Enviar mensaje...",
            },
            {
                id: "sandwichespecial",
                message: "Sandwich Especial $ 300",
                trigger: "sandwicharabe",
                placeholder: "Enviar mensaje...",
            },
            {
                id: "sandwicharabe",
                message: "Sandwich Pan Arabe $ 350",
                trigger: "sandwichhojaldre",
                placeholder: "Enviar mensaje...",
            },
            {
                id: "sandwichhojaldre",
                message: "Sandwich Pan Hojaldre $ 350",
                trigger: "opcionsiono",
                placeholder: "Enviar mensaje...",
            },
            ////////////////////////////// selections empanadas //////////////////////////////
            {
                id: "Empanadas",
                message: "Empanadas Carne $ 250",
                trigger: "empanadapollo",
                placeholder: "Enviar mensaje...",
            },
            {
                id: "empanadapollo",
                message: "Empanadas Pollo $ 300",
                trigger: "empanadajamonyqueso",
                placeholder: "Enviar mensaje...",
            },
            {
                id: "empanadajamonyqueso",
                message: "Empanadas Jamon y Queso $ 350",
                trigger: "empanadaarabes",
                placeholder: "Enviar mensaje...",
            },
            {
                id: "empanadaarabes",
                message: "Empanadas Arabes $ 350",
                trigger: "empanadaternera",
                placeholder: "Enviar mensaje...",
            },
            {
                id: "empanadaternera",
                message: "Empanadas Ternera $ 350",
                trigger: "opcionsiono",
                placeholder: "Enviar mensaje...",
            },
            {
              id: "opciones si o no",
              options: [
                { value: "si", label: "Si", trigger: "5", placeholder: "Enviar mensaje...", },
                { value: "no", label: "No", trigger: "FinDePedido", placeholder: "Enviar mensaje...", },
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
                placeholder: "Enviar mensaje...",
            },
            {
                id: "d2",
                message: "cafe,te o matecocido con medialunas $ 200",
                trigger: "d3",
                placeholder: "Enviar mensaje...",
            },
            {
                id: "d3",
                message: "cafe,te o matecocido con medialunas de jamon y queso $ 250",
                trigger: "d4",
                placeholder: "Enviar mensaje...",
            }, 
            {
                id: "d4",
                message: "cafe,te o matecocido con porcion de torta $ 550",
                trigger: "d5",
                placeholder: "Enviar mensaje...",
            },
            {
                id: "d5",
                message: "cafe,te o matecocido con tostadas, queso crema, mermelada y ensalada de frutas $ 650",
                trigger: "d6",
                placeholder: "Enviar mensaje...",
            },
            {
                id: "d6",
                message: "cafe,te o matecocido con tostadas, queso crema, mermelada y ensalada de frutas $ 650",
                trigger: "opcionsiono",
                placeholder: "Enviar mensaje...",
            },
            ////////////////////////////// selections bebidas //////////////////////////////
            {
              id: "Bebidas",
              options: [
                { value: "Licuados", label: "Licuados", trigger: "Licuados", placeholder: "Enviar mensaje...", },
                { value: "Gaseosas", label: "Gaseosas", trigger: "Gaseosas" , placeholder: "Enviar mensaje...", },
                { value: "Cervezas", label: "Cervezas", trigger: "Cervezas" , placeholder: "Enviar mensaje...", },
                ],
              placeholder: "Enviar mensaje...",
            },
            ////////////////////////////// selections Licuados //////////////////////////////
            {
                id: "Licuados",
                message: "Licuado de frutas $ 150",
                trigger: "l1",
                placeholder: "Enviar mensaje...",
            },
            {
                id: "l1",
                message: "durazno $ 200",
                trigger: "l2",
                placeholder: "Enviar mensaje...",
            },
            {
                id: "l2",
                message: "frutilla $ 200",
                trigger: "l3",
                placeholder: "Enviar mensaje...",
            },
            {
                id: "l3",
                message: "naranja $ 200",
                trigger: "l4",
                placeholder: "Enviar mensaje...",
            },
            {
                id: "l4",
                message: "banana $ 200",
                trigger: "opcionsiono",
                placeholder: "Enviar mensaje...",
            },
            ////////////////////////////// selections Gaseosas //////////////////////////////
            {
                id: "Gaseosas",
                message: "Coca Cola $ 100",
                trigger: "g1",
                placeholder: "Enviar mensaje...",
            },
            {
                id: "g1",
                message: "Sprite $ 100",
                trigger: "g2",
                placeholder: "Enviar mensaje...",
            },
            {
                id: "g2",
                message: "Fanta $ 100",
                trigger: "g3",
                placeholder: "Enviar mensaje...",
            },
            {
                id: "g3",
                message: "7up $ 100",
                trigger: "g4",
                placeholder: "Enviar mensaje...",
            },
            {
                id: "g4",
                message: "Manaos $ 100",
                trigger: "opcionsiono",
                placeholder: "Enviar mensaje...",
            },
            ////////////////////////////// selections Cervezas //////////////////////////////
            {
                id: "Cervezas",
                message: "Quilmes $ 100",
                trigger: "c1",
                placeholder: "Enviar mensaje...",
            },
            {
                id: "c1",
                message: "Patagonia $ 100",
                trigger: "c2",
                placeholder: "Enviar mensaje...",
            },
            {
                id: "c2",
                message: "Stella Artois $ 100",
                trigger: "c3",
                placeholder: "Enviar mensaje...",
            },
            {
                id: "c3",
                message: "Corona $ 100",
                trigger: "c4",
                placeholder: "Enviar mensaje...",
            },
            {
                id: "c4",
                message: "Brahma $ 100",
                trigger: "opcionsiono",
                placeholder: "Enviar mensaje...",
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
                placeholder: "Enviar mensaje...",
            },
            {
                id: "p2",
                message: "Torta de durazno $ 350",
                trigger: "p3",
                placeholder: "Enviar mensaje...",
            },
            {
                id: "p3",
                message: "Torta de banana $ 350",
                trigger: "p4",
                placeholder: "Enviar mensaje...",
            },{
                id: "p4",
                message: "Torta de naranja $ 350",
                trigger: "opcionsiono",
                placeholder: "Enviar mensaje...",
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
                placeholder: "Enviar mensaje...",
            },
            {
                id: "pr2",
                message: "Promocion 3: 2x1 en medialunas",
                trigger: "pr3",
                placeholder: "Enviar mensaje...",
            },
            {
                id: "pr3",
                message: "Promocion 4: 2x1 en tostadas",
                trigger: "pr4",
                placeholder: "Enviar mensaje...",
            },
            {
                id: "pr4",
                message: "Promocion 5: 2x1 en medialunas de jamon y queso",
                trigger: "opcionsiono",
                placeholder: "Enviar mensaje...",
            },
            {
              id: "FinDePedido",
              message: "Gracias! Fin del pedido ",
              end: true,
              placeholder: "Enviar mensaje...",
            },
          ]}
        />
      </ThemeProvider>
    );
  }
}
