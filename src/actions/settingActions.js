import {
  DISABLE_BALANCE_ON_ADD,
  DISABLE_BALANCE_ON_EDIT,
  ALLOW_REGISTRATION,
} from "./types";

export const setDisableBalanceOnAdd = () => {
  //Get settings from local storage
  const setting = JSON.parse(localStorage.getItem("setting"));

  //Toggle
  setting.disableBalanceOnAdd = !setting.disableBalanceOnAdd;

  //Write it back to local storage
  localStorage.setItem("setting", JSON.stringify(setting));

  return {
    type: DISABLE_BALANCE_ON_ADD,
    payload: setting.disableBalanceOnAdd,
  };
};

export const setDisableBalanceOnEdit = () => {
  //Get settings from local storage
  const setting = JSON.parse(localStorage.getItem("setting"));

  //Toggle
  setting.disableBalanceOnEdit = !setting.disableBalanceOnEdit;

  //Write it back to local storage
  localStorage.setItem("setting", JSON.stringify(setting));

  return {
    type: DISABLE_BALANCE_ON_EDIT,
    payload: setting.disableBalanceOnEdit,
  };
};

export const setAllowRegistration = () => {
  //Get settings from local storage
  const setting = JSON.parse(localStorage.getItem("setting"));

  //Toggle
  setting.allowRegistration = !setting.allowRegistration;

  //Write it back to local storage
  localStorage.setItem("setting", JSON.stringify(setting));
  return {
    type: ALLOW_REGISTRATION,
    payload: setting.allowRegistration,
  };
};
