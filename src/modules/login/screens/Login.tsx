import { View } from "react-native";

import { Button } from "../../../shared/components/button/Button";
import { Input } from "../../../shared/components/input/Input";
import { theme } from "../../../shared/themes/theme";
import { ContainerLogin } from "../styles/login.style";

const Login = () => {
  const handleOnPress = () => {
    console.log("clicou ");
  };
  return (
    <View>
      <ContainerLogin>
        <Input />
        <Button
          type={theme.buttons.buttonsTheme.primary}
          margin="16px"
          title="ENTRAR"
          onPress={handleOnPress}
        />
      </ContainerLogin>
    </View>
  );
};

export { Login };
