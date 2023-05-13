import { useContext } from "react";
import { ToastContext } from "../ToastContext";

export const useToastContext = () => useContext(ToastContext);
