import { useThemeContext } from "../../Contexts/ThemeContext";
import { Form } from "react-bootstrap";

function ThemeButtonPage() {
  const { toggleTheme, theme } = useThemeContext();

  return (
    <Form.Check onChange={toggleTheme} checked={theme === 'dark'}
    type="switch"
    id="custom-switch"
    className="btn-tema"/>   
  );
}

export default ThemeButtonPage;