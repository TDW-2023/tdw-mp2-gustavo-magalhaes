import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Van Gogh image', () => {
  render(<App />);
  
  // Use uma função de correspondência personalizada para tornar a busca mais flexível
  const imageElement = screen.getByAltText((content, element) => {
    // Verifique se o texto da imagem contém "Van Gogh"
    return element.tagName.toLowerCase() === 'img' && /Van Gogh/i.test(content);
  });

  expect(imageElement).toBeInTheDocument();
});