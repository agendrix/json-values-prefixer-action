import * as core from "@actions/core";
import { readFileSync, writeFileSync } from "fs";
import { validateRequiredInputs } from "../helpers/action/validateRequiredInputs";

async function run() {
  try {
    validateRequiredInputs(["file_path", "prefix"]);

    const filePath = core.getInput("file_path", { required: true });
    const prefix = core.getInput("prefix", { required: true });
    const key: string = core.getInput("key", { required: false });

    const array = JSON.parse(readFileSync(filePath).toString());
    array.reduce(
      (accumulator: Array<string>, element: string | Record<string, any>) => {
        if (key && typeof element == "object") {
          element[key] = prefix + element[key];
        } else {
          element = prefix + element;
        }
        return [...accumulator, element];
      },
      []
    );

    writeFileSync(filePath, JSON.stringify(array));
  } catch (error) {
    core.setFailed(`Action failed with error ${error}`);
  }
}

run();
