import { expect, test } from "@oclif/test";
import { db } from "../../src/utils/db";

describe("in", () => {
  db.setState({});
  test
    .stdout()
    .command(["in"])
    .it("runs in", ctx => {
      expect(ctx.stdout).to.contain("started working on");
    });

  test
    .stdout()
    .command(["in", "-d", "01-01-2020"])
    .it('runs in -d "01-01-2020"', ctx => {
      expect(ctx.stdout).to.contain("started working on 01-01-2020");
    });

  test
    .stdout()
    .command(["in", "-t", "07:38"])
    .it('runs in -t "07:38"', ctx => {
      expect(ctx.stdout).to.contain("at 07:38");
    });

  test
    .stdout()
    .command(["in", "-d", "01-01-2020", "-t", "07:38"])
    .it('runs in -d "01-01-2020" -t "07:38"', ctx => {
      expect(ctx.stdout).to.contain("started working on 01-01-2020 at 07:38");
    });
});
