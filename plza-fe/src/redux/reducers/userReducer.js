import * as types from "../types/userTypes";
const initialState = {
  friends: [],
  field: "",
  pendingUserChanges: {},
  events: [],
  reviews: [],
  friends: [],
  favShopDetails: {},
  isLoading: false,
  error: undefined,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.USER_LOGIN_START:
    case types.USER_REGISTER_START:
    case types.SUBMIT_SETTINGS_START:
    case types.USER_LOCATION_START:
    case types.IMAGE_UPLOAD_START:
    case types.USER_EVENT_START:
    case types.IMAGE_DELETE_START:
      return {
        ...state,
        isLoading: payload,
      };
    case types.USER_LOGIN_SUCCESS:
    case types.USER_REGISTER_SUCCESS:
    case types.SUBMIT_SETTINGS_SUCCESS:
    case types.IMAGE_UPLOAD_SUCCESS:
    case types.IMAGE_DELETE_SUCCESS:
      return {
        ...state,
        ...payload,
        isLoading: false,
        error: undefined,
        pendingUserChanges: { ...payload },
      };
    case types.USER_LOGIN_FAIL:
    case types.USER_REGISTER_FAIL:
      return {
        ...state,
        isLoading: payload.isLoading,
        error: payload.error,
      };
    case types.SUBMIT_SETTINGS_FAIL:
    case types.USER_LOCATION_FAIL:
    case types.USER_EVENT_FAIL:
      return {
        ...state,
        isLoading: payload,
      };
    case types.USER_LOCATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        favShopDetails: { ...payload },
        error: undefined,
      };
    case types.TOGGLE_EDIT:
      return {
        ...state,
        field: payload,
      };
    case types.EDIT_SETTINGS:
      return {
        ...state,
        pendingUserChanges: { ...state.pendingUserChanges, ...payload },
      };
    case types.EDIT_CANCEL_CHANGES:
      return {
        ...state,
        pendingUserChanges: {
          ...state.pendingUserChanges,
          display_name: state.display_name,
          dietary_preference: state.dietary_preference,
          display_location: state.display_location,
          email: state.email,
          favorite_pizza_shop: state.favorite_pizza_shop,
          favorite_pizza_toppings: state.favorite_pizza_toppings,
          profile_image: state.profile_image,
        },
      };
    case types.IMAGE_UPLOAD_FAIL:
    case types.IMAGE_DELETE_FAIL:
      return {
        ...state,
        isLoading: payload.isLoading,
        error: payload.error,
      };
    case types.USER_EVENT_SUCCESS:
      return {
        ...state,
        events: [...payload],
      };
    case types.USER_EVENT_DELETE_SUCCESS:
      return {
        ...state,
        events: [...payload],
      };
    case types.USER_EVENT_EDIT_SUCCESS:
      return {
        ...state,
        events: [...payload],
      };
    case types.USER_REVIEW_SUCCESS:
      return {
        ...state,
        isLoading: false,
        reviews: payload,
      };
    default:
      return state;
  }
};