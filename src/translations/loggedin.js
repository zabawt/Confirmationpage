  import common from "./common";

  export default ({ name, lastName }) => {
    return {
      DE: {
        ...common.DE,
        welcome: `Wilkommen ${name} ${lastName}`,
        errorLink: `Sie können ein Problem über das Admin-Panel melden`,
        contactForm: `hiere`
      },
      EN: {
        ...common.EN,
        welcome: `Welcome ${name} ${lastName}`,
        errorLink: `You can report an issue through admin panel`,
        contactForm: `here`
      }
    };
  };

