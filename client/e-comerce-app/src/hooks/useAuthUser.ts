import { useAppDispatch } from "@src/hooks/reduxHooks";
import { setUserConfig } from "@src/store/reducers/userConfigReducer";

function useAuthUser(res: any) {
  const dispatch = useAppDispatch();

  localStorage.setItem("authToken", res.data.token);
  dispatch(setUserConfig(res.data.user));
  return;
}

export default useAuthUser;