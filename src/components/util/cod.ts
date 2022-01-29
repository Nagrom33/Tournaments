import API from "@callofduty/api";

const cod = async () => {
  const CallOfDutyAPI = new API();
  const { xsrf, sso, atkn } =await CallOfDutyAPI.Authorize('XXX', 'XXX');
  CallOfDutyAPI.UseTokens({ xsrf, sso, atkn });

  return CallOfDutyAPI;
};

export default cod;
