# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


File                        Concept 
Child.jsx                    basics like to know how are props passed from parent to child.
DiffdataTypesProps.jsx       covering diff.data types of js to be passed as props.           
DefaultProps.jsx            passing default values; tried undefined scenarios as well
RenamingPropsDestructuring.jsx      -- while destructuring, renaming the props; used default values + renaming 
NestedObjects_Props.jsx -- passing nested objects as props; renaming; default values; default objects
PassingFunctionsAsProps/jsx -- passing function as a prop 