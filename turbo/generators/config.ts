import type { PlopTypes } from "@turbo/gen";
 
export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // create a generator
  plop.setGenerator("package", {
    description: "Adds a new package to the workspace",
    // gather information from the user
    prompts: [
      {
        type: "input",
        name: "name",
        message:"What is the name of the package?"
      }
    ],
    // perform actions based on the prompts
    actions: [
      {
        type: "add",
        path: "packages/{{name}}/package.json",
        templateFile:"templates/package.json.hbs"
      },
      {
        type: "add",
        path: "packages/{{name}}/tsconfig.json",
        templateFile:"templates/tsconfig.json.hbs"
      },
      {
        type: "add",
        path: "packages/{{name}}/eslint.config.mjs",
        templateFile:"templates/eslint.config.mjs.hbs"
      }
    ],
  });
}