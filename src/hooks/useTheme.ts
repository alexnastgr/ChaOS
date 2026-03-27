import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/store/reducers/themeSlice";
import { type RootState } from "@/store";

const useTheme = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.theme.mode);

  const toggle = () => {
    dispatch(toggleTheme());
  };
  return { darkMode, toggle };
};

export default useTheme;
