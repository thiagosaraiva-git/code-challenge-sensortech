import { render, waitFor, act } from '@testing-library/react';
import App from './App';

// Mock the fetch function
global.fetch = jest.fn();

// Mock the data
const data = [
  {
    id: '1',
    name: 'Pilsner',
    minimumTemperature: 4,
    maximumTemperature: 6,
  },
  {
    id: '2',
    name: 'IPA',
    minimumTemperature: 5,
    maximumTemperature: 6,
  },
  {
    id: '3',
    name: 'Lager',
    minimumTemperature: 4,
    maximumTemperature: 7,
  },
  {
    id: '4',
    name: 'Stout',
    minimumTemperature: 6,
    maximumTemperature: 8,
  },
  {
    id: '5',
    name: 'Wheat beer',
    minimumTemperature: 3,
    maximumTemperature: 5,
  },
  {
    id: '6',
    name: 'Pale Ale',
    minimumTemperature: 4,
    maximumTemperature: 6,
  },
];

const mockResponse = (status, data) =>
  Promise.resolve({
    status,
    json: () => Promise.resolve(data),
  });

describe('<App />', () => {
  beforeEach(() => {
    // Reset fetch mock before each test
    fetch.mockReset();
  });

  it('renders without errors', async () => {
    // Mock a successful response
    data.forEach(() => {
      fetch.mockResolvedValueOnce(mockResponse(200, {}));
    });

    render(<App />);

    // Wait for the component to finish rendering
    await waitFor(() => {});
  });

  it('title should be "SensorTech"', async () => {
    // Mock a successful response
    data.forEach(() => {
      fetch.mockResolvedValueOnce(mockResponse(200, {}));
    });

    // Render the component
    const { getByRole } = render(<App />);

    // Wait for the component to finish rendering
    await waitFor(() => {});

    // Check if the title is rendered
    expect(getByRole('heading', { name: 'SensorTech' })).toBeInTheDocument();
  });

  it('subtitle should be "Beers"', async () => {
    // Mock a successful response
    data.forEach(() => {
      fetch.mockResolvedValueOnce(mockResponse(200, {}));
    });

    // Render the component
    const { getByRole } = render(<App />);

    // Wait for the component to finish rendering
    await waitFor(() => {});

    // Check if the subtitle is rendered
    expect(getByRole('heading', { name: 'Beers' })).toBeInTheDocument();
  });

  it('renders the list with correct number of items', async () => {
    // Mock a successful response
    data.forEach(() => {
      fetch.mockResolvedValueOnce(mockResponse(200, {}));
    });

    // Render the component
    const { getAllByRole } = render(<App />);

    // Wait for the component to finish rendering
    await waitFor(() => {});

    // Check if the list is rendered with the correct number of items
    expect(getAllByRole('cell')).toHaveLength(data.length * 3);
  });

  it('renders the list with correct data', async () => {
    // Mock successful responses for each item in data
    data.forEach(() => {
      fetch.mockResolvedValueOnce(mockResponse(200, { temperature: 5 }));
    });

    // Render the component
    const { getByText } = render(<App />);

    // Wait for the component to finish rendering
    await waitFor(() => {});

    // Check if each item's name and temperature are rendered
    data.forEach((item) => {
      expect(getByText(item.name)).toBeInTheDocument();

      if (item.temperature !== undefined && item.temperature !== null) {
        expect(getByText(item.temperature.toString())).toBeInTheDocument();
      } else {
        // Handle the case when temperature is undefined or null (if needed)
        // For example, you could expect a placeholder text or another specific behavior
        // expect(getByText('N/A')).toBeInTheDocument();
      }
    });
  });

  it('updates the list after 5 seconds', async () => {
    // Mock successful responses for each item in data
    data.forEach(() => {
      fetch.mockResolvedValueOnce(mockResponse(200, { temperature: 5 }));
    });

    // Render the component
    const { getByText } = render(<App />);

    // Wait for the component to finish rendering
    await waitFor(() => {});

    // Check if the initial list is rendered
    data.forEach((item) => {
      expect(getByText(item.name)).toBeInTheDocument();
    });

    // Advance the timer by 5 seconds
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    // Wait for the component to update
    await waitFor(() => {});

    // Check if the updated list is rendered
    data.forEach((item) => {
      expect(getByText(item.name)).toBeInTheDocument();
    });
  });
});
