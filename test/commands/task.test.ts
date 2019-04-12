import { expect, test } from "@oclif/test";
import { today } from "../../src/utils/date";
import { db } from "../../src/utils/db";

describe("task", () => {
  db.setState({});
  test
    .stdout()
    .command(["in"])
    .command(["task", "Test Task 1"])
    .command(["task", "Test Task 2"])
    .command(["report"])
    .it("runs task", ctx => {
      expect(ctx.stdout).to.contain("Adding new task: Test Task 1") &&
        expect(ctx.stdout).to.contain("Adding new task: Test Task 2") &&
        expect(ctx.stdout).to.contain("- Test Task 1") &&
        expect(ctx.stdout).to.contain("- Test Task 2");
    });

  test
    .stdout()
    .command(["task", "--remove-last"])
    .command(["report"])
    .it("runs task --remove-last", ctx => {
      expect(ctx.stdout).to.contain("Removing last task of the day") &&
        expect(ctx.stdout).to.contain("- Test Task 1") &&
        expect(ctx.stdout).to.not.contain("- Test Task 2");
    });

  test
    .stdout()
    .command(["task", "Test Task 2"])
    .it("adds task 2", ctx => {
      expect(ctx.stdout).to.contain("Adding new task: Test Task 2");
    });
});
