// Importando o módulo de temas do Storybook
import { themes } from '@storybook/theming';

// Definindo os parâmetros globais para o Storybook
export const parameters = {
 // Configurando ações para filtrar os argumentos que começam com "on" seguido de uma letra maiúscula
 actions: { argTypesRegex: "^on[A-Z].*" },
 // Configurando os controles para filtrar cores e datas
 controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
 },
 // Definindo o tema para o modo escuro
 docs: {
    theme: themes.dark,
 },
};