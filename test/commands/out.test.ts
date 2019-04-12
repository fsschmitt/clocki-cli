import { expect, test } from "@oclif/test";
import { db } from "../../src/utils/db";

describe("out", () => {
  db.setState({});
  test
    .stdout()
    .command(["out"])
    .it("runs out", ctx => {
      expect(ctx.stdout).to.contain("stopped working on");
    });

  test
    .stdout()
    .command(["in", "-d", "01-01-2020"])
    .it('runs in -d "01-01-2020"', ctx => {
      expect(ctx.stdout).to.contain("started working on 01-01-2020");
    });
  test
    .stdout()
    .command(["out", "-d", "01-01-2020"])
    .it('runs out -d "01-01-2020"', ctx => {
      expect(ctx.stdout).to.contain("stopped working on 01-01-2020");
    });

  test
    .stdout()
    .command(["out", "-t", "07:38"])
    .it('runs out -t "07:38"', ctx => {
      expect(ctx.stdout).to.contain("at 07:38");
    });

  test
    .stdout()
    .command(["out", "-d", "01-01-2020", "-t", "07:38"])
    .it('runs out -d "01-01-2020" -t "07:38"', ctx => {
      expect(ctx.stdout).to.contain("stopped working on 01-01-2020 at 07:38");
    });
});
