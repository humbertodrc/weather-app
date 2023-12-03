// rootSaga.ts
import { all } from 'redux-saga/effects';
import climaSagas from './saga';


export default function* rootSaga() {
  yield all([climaSagas()]);
}
