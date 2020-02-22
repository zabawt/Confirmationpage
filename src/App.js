import React, { useState } from "react";
import LabelProvider from "./LabelsProvider";
import ErrorPage from "./ErrorPage";
import SuccessPage from "./SuccessPage";
import VIPSuccessPage from "./VIPSuccessPage";
import "./styles.css";

const ToggleElement = text => ({ handle }) => {
  return <button onClick={handle}>{text}</button>;
};
/** demo purposes */
const ToggleLoginLogut = ToggleElement("Toggle login/logout");
const ToggleLanguage = ToggleElement("Toggle Language");
const ToggleProduct = ToggleElement("Toggle Product");

export default function App(props) {
  const initialState = props;
  const [state, setState] = useState(initialState);
  const { siteLang, userData, loggedIn, product } = state;

  return (
    <React.StrictMode>
      <div className="App">
        <ToggleLoginLogut
          handle={e => void setState({ ...state, loggedIn: !state.loggedIn })}
        />
        <ToggleLanguage
          handle={e =>
            void setState({
              ...state,
              siteLang: state.siteLang === "DE" ? "EN" : "DE"
            })
          }
        />
        <ToggleProduct
          handle={e =>
            void setState({
              ...state,
              product: state.product === "starter" ? "professional" : "starter"
            })
          }
        />
        <LabelProvider
          lang={siteLang}
          userLoggedIn={loggedIn}
          userData={userData}
        >
          {labels => <SuccessPage {...labels} productName={product} userLoggedIn={loggedIn} />}
        </LabelProvider>

        <LabelProvider
          lang={siteLang}
          userLoggedIn={loggedIn}
          userData={userData}
        >
          {labels => <ErrorPage {...labels} />}
        </LabelProvider>

        <LabelProvider
          lang={siteLang}
          userLoggedIn={loggedIn}
          userData={userData}
        >
          {labels => <VIPSuccessPage {...labels} />}
        </LabelProvider>
      </div>
    </React.StrictMode>
  );
}
