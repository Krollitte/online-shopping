import { SafeAreaView } from "react-native";
import { ThemeProvider } from "styled-components/native";

import { Login } from "./modules/login";
import { theme } from "./shared/themes/theme";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Login />
      </SafeAreaView>
    </ThemeProvider>
  );
};
