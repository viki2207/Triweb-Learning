import * as Action from "../Redux/result_reducer";
import { postServerData } from "../helper/helper";
export const PushAnswer = (result) => async (dispatch) => {
  try {
    await dispatch(Action.pushResultAction(result));
  } catch (error) {
    console.log(error);
  }
};
export const updateResult = (index) => async (dispatch) => {
  try {
    dispatch(Action.updateResultAction(index));
  } catch (error) {}
};
/**insert user data */
export const usePublishResult = (resultData) => {
  const { result, username } = resultData;
  (async () => {
    try {
      if (result !== [] && !username) throw new Error("Couldn't get Result");
      await postServerData(
        "http://localhost:5005/api/result",
        resultData,
        (data) => data
      );
    } catch (error) {
      console.log(error);
    }
  })([]);
};
