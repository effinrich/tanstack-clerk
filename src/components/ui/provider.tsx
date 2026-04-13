import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        disableTransitionOnChange
        enableColorScheme
        enableSystem
        storageKey="theme"
      >
        {children}
      </ThemeProvider>
    </ChakraProvider>
  );
}
