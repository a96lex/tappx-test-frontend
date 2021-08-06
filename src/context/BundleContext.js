import React from "react";
import PropTypes from "prop-types";
import { BundleActions } from "./BundleActions";
import {
  GET_ALL_BUNDLES_START,
  GET_ALL_BUNDLES_SUCCESS,
  GET_ALL_BUNDLES_FAIL,
  CREATE_BUNDLE_START,
  CREATE_BUNDLE_SUCCESS,
  CREATE_BUNDLE_FAIL,
  UPDATE_BUNDLE_START,
  UPDATE_BUNDLE_SUCCESS,
  UPDATE_BUNDLE_FAIL,
  DELETE_BUNDLE_START,
  DELETE_BUNDLE_SUCCESS,
  DELETE_BUNDLE_FAIL,
  SELECT_BUNDLE,
  UNSELECT_BUNDLE,
} from "./Types";

const BundleStateContext = React.createContext();
const BundleDispatchContext = React.createContext();

function bundleReducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    case GET_ALL_BUNDLES_START:
      return { ...state, getBundleLoading: true };
    case GET_ALL_BUNDLES_SUCCESS:
      return { ...state, getBundleLoading: false, bundleList: action.payload };
    case GET_ALL_BUNDLES_FAIL:
      return {
        ...state,
        getBundleLoading: false,
        bundleError: action.payload,
      };
    case CREATE_BUNDLE_START:
      return { ...state, createBundleLoading: true };
    case CREATE_BUNDLE_SUCCESS:
      return { ...state, createBundleLoading: false };
    case CREATE_BUNDLE_FAIL:
      return {
        ...state,
        createBundleLoading: false,
        bundleError: action.payload,
      };
    case UPDATE_BUNDLE_START:
      return { ...state, updateBundleLoading: true };
    case UPDATE_BUNDLE_SUCCESS:
      return { ...state, updateBundleLoading: false };
    case UPDATE_BUNDLE_FAIL:
      return {
        ...state,
        updateBundleLoading: false,
        bundleError: action.payload,
      };
    case DELETE_BUNDLE_START:
      return { ...state, deleteBundleLoading: true };
    case DELETE_BUNDLE_SUCCESS:
      return { ...state, deleteBundleLoading: false };
    case DELETE_BUNDLE_FAIL:
      return {
        ...state,
        deleteBundleLoading: false,
        bundleError: action.payload,
      };
    case SELECT_BUNDLE:
      return {
        ...state,
        selectedBundle: action.bundle,
        isCreation: action.isCreation,
      };
    case UNSELECT_BUNDLE:
      return { ...state, selectedBundle: null };
    default:
      return state;
  }
}

const INITIAL_STATE = {
  getBundleLoading: false,
  createBundleLoading: false,
  updateBundleLoading: false,
  deleteBundleLoading: false,
  bundleList: [],
  selectedBundle: null,
  isCreation: false,
  bundleError: null,
};

function BundleProvider({ children }) {
  // Dispatch all functions here, so no dispatch is needed at component level
  const [state, dispatch] = React.useReducer(bundleReducer, INITIAL_STATE);

  const dispatchedFunctions = {};
  const actions = Object.keys(BundleActions);
  for (let i = 0; i < actions.length; i += 1) {
    const action = BundleActions[actions[i]];
    dispatchedFunctions[actions[i]] = action(dispatch);
  }

  return (
    <BundleStateContext.Provider value={state}>
      <BundleDispatchContext.Provider value={dispatchedFunctions}>
        {children}
      </BundleDispatchContext.Provider>
    </BundleStateContext.Provider>
  );
}

BundleProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

function useBundleState() {
  const context = React.useContext(BundleStateContext);
  if (context === undefined) {
    throw new Error("useBundleState must be used within a BundleProvider");
  }
  return context;
}

function useBundleActions() {
  const context = React.useContext(BundleDispatchContext);
  if (context === undefined) {
    throw new Error("useBundleActions must be used within a BundleProvider");
  }
  return context;
}

export { BundleProvider, useBundleState, useBundleActions };
