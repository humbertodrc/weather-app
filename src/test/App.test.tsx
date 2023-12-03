import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { describe, expect, test, vi } from "vitest";
import App from "../App";
import store from "../store";

// Mockear navigator.geolocation
const mockGeolocation = {
	getCurrentPosition: vi.fn().mockImplementationOnce((successCallback) => {
		// Simula las coordenadas de Buenos Aires
		successCallback({
			coords: {
				latitude: -34.61,
				longitude: -58.38,
			},
		});
	}),
};

Object.defineProperty(global.navigator, "geolocation", {
	value: mockGeolocation,
});

describe("<App />", () => {
	test("renders App del Clima", async () => {
		const user = userEvent.setup();

		render(
			<Provider store={store}>
				<App />
			</Provider>
		);

		const title = screen.getByText(/App del Clima/i);
		const form = screen.getByRole("form");
		const ciudadInput = screen.getByRole("textbox", {name: /Ciudad/i});
		const paisSelect = screen.getByRole("combobox", {name: /Pais/i});
    const submitButton = screen.getByRole("button", { name: /Consultar Clima/i });
    const forecastTitle = screen.getByText(/Pronostico por los proximos 5 dias cada 3 horas/i);

		expect(title).toBeDefined();
		expect(form).toBeDefined();
		expect(ciudadInput).toBeDefined();
		expect(paisSelect).toBeDefined();
    expect(submitButton).toBeDefined();
    expect(forecastTitle).toBeDefined();

		// Buscar mensaje de carga para ubicación
		const loadingMessage = screen.getAllByText(/Obteniendo ubicación.../i);
		expect(loadingMessage).toBeDefined();

		// Buscar el clima de una ciudad
		await user.type(ciudadInput, "Buenos Aires");
		await user.selectOptions(paisSelect, "AR");
		userEvent.click(submitButton);

		// Esperar a que se cargue el clima
		await waitFor(async () => {
			const weatherCard = await screen.findByRole("heading", {
				name: /Buenos Aires/i,
			});
      expect(weatherCard).toBeDefined();

    }, { timeout: 5000 }); 

  });
  
});
