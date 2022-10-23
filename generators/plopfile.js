module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a component",
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
        path: "../src/components/{{pascalCase name}}/index.tsx",
        templateFile: "templates/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.types.ts",
        templateFile: "templates/types.ts.hbs",
      },
      {
        type: "append",
        path: "../src/components/index.ts",
        template: "export { {{pascalCase name}} } from './{{pascalCase name}}';",
      }
    ],
  }),
  plop.setGenerator("full component", {
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
  })
  };
