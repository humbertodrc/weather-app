import { CallEffect, PutEffect, call, put, takeEvery } from "redux-saga/effects";
import { getClimate, getForecast } from "../../services/getClimate";
import { SearchType } from "../../types/search.types";

interface GetWeatherAction {
	type: string;
	payload: SearchType;
}

// Obtener el clima de la ciudad que se busca
function* getWeather(
	action: GetWeatherAction
): Generator<CallEffect<unknown> | PutEffect, void, unknown> {
	try {
		const resultado = yield call(getClimate, action.payload);
		yield put({type: "clima/setClimate", payload: resultado});
	} catch (error) {
		console.log(error);
	}
}

// Obtener el clima de los proximos 5 dias
function* getPronosticoSaga(
	action: GetWeatherAction
): Generator<CallEffect<unknown> | PutEffect, void, unknown> {
	try {
		const pronostico = yield call(getForecast, action.payload);
		yield put({type: "clima/setForecast", payload: pronostico});
	} catch (error) {
		console.log(error);
	}
}

function* climaSagas() {
	yield takeEvery("clima/fetchClimate", getWeather);
	yield takeEvery("clima/fetchForecast", getPronosticoSaga);
}

export default climaSagas;
