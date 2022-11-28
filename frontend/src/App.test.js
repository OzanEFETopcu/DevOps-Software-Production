import { render, screen } from '@testing-library/react';
import TaskList from './TaskList';


test('renders task list', () => {
  render(<TaskList data={[]}/>)
    expect(screen.getByText('Tasks')).toBeInTheDocument()
});