import { render, screen, fireEvent } from '@testing-library/react';
import { CharacterList } from '.';
import { Character } from '@/shared/types';

const mockCharacters: Character[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Character ${i + 1}`,
  location: { name: 'Earth' },
  status: 'Alive',
  gender: 'Male',
  created: '2017-11-04T18:48:46.250Z',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
}));

describe('CharacterList Component', () => {
  test('Отображает первых 5 персонажей на первой странице', () => {
    render(<CharacterList characters={mockCharacters} loading={false} />);

    for (let i = 1; i <= 4; i++) {
      expect(screen.getByText(`Character ${i}`)).toBeInTheDocument();
    }

    expect(screen.queryByText('Character 6')).not.toBeInTheDocument();
  });

  test('Переключается на следующую страницу при нажатии кнопки', () => {
    render(<CharacterList characters={mockCharacters} loading={false} />);

    fireEvent.click(screen.getByText('→'));

    for (let i = 5; i <= 8; i++) {
      expect(screen.getByText(`Character ${i}`)).toBeInTheDocument();
    }

    expect(screen.queryByText('Character 1')).not.toBeInTheDocument();
  });

  test("Кнопка '←' отключена на первой странице", () => {
    render(<CharacterList characters={mockCharacters} loading={false} />);
    expect(screen.getByText('←')).toBeDisabled();
  });

  test("Кнопка '→' отключена на последней странице", () => {
    render(<CharacterList characters={mockCharacters} loading={false} />);

    // Переход на последнюю страницу (страница 4 из 4)
    fireEvent.click(screen.getByText('→')); // стр. 2
    fireEvent.click(screen.getByText('→')); // стр. 3
    fireEvent.click(screen.getByText('→')); // стр. 4
    fireEvent.click(screen.getByText('→')); // стр. 5

    // Проверка, что отображается Character 20 (последний)
    expect(screen.getByText('Character 20')).toBeInTheDocument();

    // Проверка, что кнопка отключена
    expect(screen.getByText('→')).toBeDisabled();
  });
});
