import React from "react";
import PropTypes from "prop-types";
import { Actions } from "./Actions";
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

const UserStateContext = React.createContext();
const UserDispatchContext = React.createContext();

function userReducer(state, action) {
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
      return { ...state, selectedBundle: action.payload };
    case UNSELECT_BUNDLE:
      return { ...state, selectedBundle: null };
    default:
      return state;
  }
}

const INITIAL_STATE = {
  getBundleLoading: false,
  createBundleLoading: false,
  deleteBundleLoading: false,
  bundleList: null,
  selectedBundle: null,
  bundleError: null,
};

function UserProvider({ children }) {
  // Dispatch all functions here, so no dispatch is needed at component level
  const [state, dispatch] = React.useReducer(userReducer, INITIAL_STATE);

  const dispatchedFunctions = {};
  const actions = Object.keys(Actions);
  for (let i = 0; i < actions.length; i += 1) {
    const action = Actions[actions[i]];
    dispatchedFunctions[actions[i]] = action(dispatch);
  }

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatchedFunctions}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

function useUserState() {
  const context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
}

function useUserActions() {
  const context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useUserActions must be used within a UserProvider");
  }
  return context;
}

export { UserProvider, useUserState, useUserActions };
