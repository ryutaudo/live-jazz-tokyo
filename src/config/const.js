/* FB AUTH */
export const FB_APP_ID = process.env.FB_APP_ID || '1053212748114006';
export const FB_AUTH_REDIRECT_URI = process.env.FB_AUTH_REDIRECT_URI || '/';

/* STRIPE */
export const STRIPE_API_KEY = process.env.STRIPE_API_KEY || 'pk_test_6pRNASCoBOKtIshFeQd4XMUh';

/* REACT-GOOGLE-MAP */
export const DEFAULT_CENTER = {
  lat: 35.6857933,
  lng: 139.7501793,
};

/* REDUX ACTION TYPES */
// Top
export const INITIALIZE_EVENT_DATA = 'INITIALIZE_EVENT_DATA';
export const SET_SELECTED_EVENT = 'SET_SELECTED_EVENT';
export const CLEAR_SELECTED_EVENT = 'CLEAR_SELECTED_EVENT';
export const SET_USER_LOCATION = 'SET_USER_LOCATION';
// Event
export const FETCH_EVENT_DETAILS = 'FETCH_EVENT_DETAILS';
export const FETCH_EVENT_DETAILS_SUCCESS = 'FETCH_EVENT_DETAILS_SUCCESS';
export const FETCH_EVENT_DETAILS_FAILURE = 'FETCH_EVENT_DETAILS_FAILURE';
export const SHOW_MAP = 'SHOW_MAP';
// AddEvent
export const SET_EVENT_NAME_FIELD = 'SET_EVENT_NAME_FIELD';
export const SET_ARTIST_FIELD = 'SET_ARTIST_FIELD';
export const SET_VENUE_FIELD = 'SET_VENUE_FIELD';
export const SET_ADDRESS_FIELD = 'SET_ADDRESS_FIELD';
export const SET_PRICE_FIELD = 'SET_PRICE_FIELD';
export const SET_DATE_FIELD = 'SET_DATE_FIELD';
export const SET_START_TIME_FIELD = 'SET_START_TIME_FIELD';
export const SET_END_TIME_FIELD = 'SET_END_TIME_FIELD';
export const SET_ADD_EVENT_RESPONSE = 'SET_ADD_EVENT_RESPONSE';
// Pay
export const SET_CHARGE_RESPONSE = 'SET_CHARGE_RESPONSE';
export const SET_CREDIT_CARD_ERROR = 'SET_CREDIT_CARD_ERROR';
export const SET_NAME_ERROR_TEXT = 'SET_NAME_ERROR_TEXT';
export const SET_ADDRESS_ERROR_TEXT = 'SET_ADDRESS_ERROR_TEXT';
export const SET_EMAIL_ERROR_TEXT = 'SET_EMAIL_ERROR_TEXT';
// User
export const SET_SELECTED_TAB = 'SET_SELECTED_TAB';
export const SET_ORDER_HISTORY = 'SET_ORDER_HISTORY';
// Header
export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const CLEAR_USER_PROFILE = 'CLEAR_USER_PROFILE';
export const SET_JWT = 'SET_JWT';
