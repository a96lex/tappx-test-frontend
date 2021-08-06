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
} from "./Types";

const endpoint = "http://localhost:8000/";

function getBundles(dispatch) {
  return async function getBundlesDispatch() {
    dispatch({ type: GET_ALL_BUNDLES_START });
    try {
      const { data } = await axios.get(`${endpoint}`, "");
      dispatch({ type: GET_ALL_BUNDLES_SUCCESS, payload: data });
    } catch (e) {
      console.log(e);
      dispatch({ type: GET_ALL_BUNDLES_FAIL });
    }
  };
}

function createBundle(dispatch) {
  return async function createBundleDispatch(bundle) {
    console.log("here");
    console.log({ bundle });
    dispatch({ type: CREATE_BUNDLE_START });
    try {
      await axios.post(`${endpoint}`, bundle, {
        headers: { "Content-Type": "application/json" },
      });
      dispatch({ type: CREATE_BUNDLE_SUCCESS });
      getBundles(dispatch)();
      unSelectBundle(dispatch)();
    } catch (e) {
      console.log(e);
      dispatch({ type: CREATE_BUNDLE_FAIL });
    }
  };
}

function deleteBundle(dispatch) {
  return async function deleteBundleDispatch(id) {
    dispatch({ type: DELETE_BUNDLE_START });
    try {
      await axios.delete(`${endpoint}`, { data: { id } });
      dispatch({ type: DELETE_BUNDLE_SUCCESS });
      getBundles(dispatch)();
      unSelectBundle(dispatch)();
    } catch (e) {
      console.log(e);
      dispatch({ type: DELETE_BUNDLE_FAIL });
    }
  };
}

function updateBundle(dispatch) {
  return async function updateBundleDispatch(bundle) {
    dispatch({ type: DELETE_BUNDLE_START });
    try {
      await axios.put(`${endpoint}`, { data: bundle });
      dispatch({ type: DELETE_BUNDLE_SUCCESS });
      getBundles(dispatch)();
      unSelectBundle(dispatch)();
    } catch (e) {
      console.log(e);
      dispatch({ type: DELETE_BUNDLE_FAIL });
    }
  };
}

function selectBundle(dispatch) {
  return async function selectBundleDispatch(bundle = null) {
    let isCreation = false;
    if (!bundle) {
      bundle = {
        name: "",
        bundle: "",
        company: "",
        email: "",
        active: true,
        category: "",
      };
      isCreation = true;
    }
    dispatch({ type: SELECT_BUNDLE, bundle, isCreation });
  };
}
function unSelectBundle(dispatch) {
  return async function unSelectBundleDispatch() {
    dispatch({ type: UNSELECT_BUNDLE });
  };
}

export const BundleActions = {
  getBundles,
  createBundle,
  deleteBundle,
  updateBundle,
  selectBundle,
  unSelectBundle,
};
