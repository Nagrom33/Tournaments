import API from '@callofduty/api'

const cod = async (email:string, password:string) => {
  const CallOfDutyAPI=new API();
  const { xsrf, sso, atkn } = await CallOfDutyAPI.Authorize(email, password);
  CallOfDutyAPI.UseTokens({ xsrf, sso, atkn });
  // const { titleIdentities } = await CallOfDutyAPI.Identity()
  // const { username, platform } = titleIdentities.find(identity => identity.title === 'mw')

  return CallOfDutyAPI;
};

export default cod;
