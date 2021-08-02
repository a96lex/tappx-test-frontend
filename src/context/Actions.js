import axios from "axios";
import {
  GET_ALL_BUNDLES_START,
  GET_ALL_BUNDLES_SUCCESS,
  GET_ALL_BUNDLES_FAIL,
  CREATE_BUNDLE_START,
  CREATE_BUNDLE_SUCCESS,
  CREATE_BUNDLE_FAIL,
  DELETE_BUNDLE_START,
  DELETE_BUNDLE_SUCCESS,
  DELETE_BUNDLE_FAIL,
  SELECT_BUNDLE,
  UNSELECT_BUNDLE,
} from "./types";

const endpoint = "https://localhost:8080/bundles";

function getBundles(dispatch) {
  return async function getBundlesDispatch() {
    dispatch({ type: GET_ALL_BUNDLES_START });
    try {
      const data = await axios.get(`${endpoint}/list`, "");
      const { bundles } = data;
      dispatch({ type: GET_ALL_BUNDLES_SUCCESS, payload: bundles });
    } catch (e) {
      console.log(e);
      dispatch({ type: GET_ALL_BUNDLES_FAIL });
    }
  };
}

function createBundle(dispatch) {
  return async function createBundleDispatch(bundle) {
    dispatch({ type: CREATE_BUNDLE_START });
    try {
      await axios.post(`${endpoint}/create`, "", bundle);
      dispatch({ type: CREATE_BUNDLE_SUCCESS });
    } catch (e) {
      console.log(e);
      dispatch({ type: CREATE_BUNDLE_FAIL });
    }
  };
}

function deleteBundle(dispatch) {
  return async function deleteBundleDispatch(bundle) {
    dispatch({ type: DELETE_BUNDLE_START });
    try {
      await axios.post(`${endpoint}/delete`, "", bundle);
      dispatch({ type: DELETE_BUNDLE_SUCCESS });
    } catch (e) {
      console.log(e);
      dispatch({ type: DELETE_BUNDLE_FAIL });
    }
  };
}

function selectBundle(dispatch) {
  return async function selectBundleDispatch(bundle) {
    dispatch({ type: SELECT_BUNDLE, payload: bundle });
  };
}
function unSelectBundle(dispatch) {
  return async function unSelectBundleDispatch() {
    dispatch({ type: UNSELECT_BUNDLE });
  };
}

export const Actions = {
  getBundles,
  createBundle,
  deleteBundle,
  selectBundle,
  unSelectBundle,
};
