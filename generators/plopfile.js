module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a full component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.ts",
        templateFile: "templates/Index.ts.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.types.ts",
        templateFile: "templates/types.ts.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.viewmodel.ts",
        templateFile: "templates/viewmodel.ts.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.spec.ts",
        templateFile: "templates/Test.spec.ts.hbs",
      },
      {
        type: "append",
        path: "../src/components/index.ts",
        template: "export { {{pascalCase name}} } from './{{pascalCase name}}';",
      }
    ],
  }),
  plop.setGenerator("layout", {
    description: "Create a full layout",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your layout name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/layouts/{{pascalCase name}}/index.ts",
        templateFile: "templates/Index.ts.hbs",
      },
      {
        type: "add",
        path: "../src/layouts/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/layouts/{{pascalCase name}}/{{pascalCase name}}.types.ts",
        templateFile: "templates/types.ts.hbs",
      },
      {
        type: "add",
        path: "../src/layouts/{{pascalCase name}}/{{pascalCase name}}.viewmodel.ts",
        templateFile: "templates/viewmodel.ts.hbs",
      },
      {
        type: "append",
        path: "../src/layouts/index.ts",
        template: "export { {{pascalCase name}} } from './{{pascalCase name}}';",
      }
    ],
  })
  };
