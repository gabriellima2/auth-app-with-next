"use client";
import { createContext } from "react";
import type { ToastProperties } from "./@types/ToastProperties";

export const ToastContext = createContext({} as ToastProperties);
