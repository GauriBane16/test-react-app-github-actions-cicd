import { call, put } from "redux-saga/effects";
import { logoutActions} from "../reducers/logoutReducer";
import * as service from "../services/authService";


export default function* logoutSaga(data) {
    try {
      debugger;
      const response = yield call(
        service.logout
      );
      debugger;
      if (response.status === 200) {
        if (response.data) {
          yield put(logoutActions.fetchLogoutSuccess(response.data));
        } else {
          yield put(logoutActions.fetchLogoutFailure(response.data));
        }
      }
    } catch (e) {
      debugger;
      console.log("error",e)
      yield put(logoutActions.fetchLogoutFailure(e));
    }
  }