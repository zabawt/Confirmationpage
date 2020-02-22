import products from "./products";

export default {
  DE: {
    welcome: `Wilkommen`,
    VIPWelcome: `Ahhh, also Herr Special hat gerade mitgemacht!`,
    errorText: `Es tut uns leid! Bei Ihrer Bestellung ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut`,
    successText: `Ihre Bestellung wurde versandt!`,
    productDescription: `Produktbeschreibung`,
    ...products.DE
  },
  EN: {
    welcome: `Welcome`,
    VIPWelcome: `Ahhh, so mr special just joined in!`,
    errorText: `Sorry! Something went wrong with Your order, please try again later`,
    successText: `Your order has been shipped out!`,
    productDescription: `Product description`,
    ...products.EN
  }
};
