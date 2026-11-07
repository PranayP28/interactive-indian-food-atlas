// Cross-platform Python runner (invokes 'python' on Windows, 'python3' or 'python' on Unix)
const { spawnSync } = require("child_process");
const isWin = process.platform === "win32";
const pyCmd = isWin ? "python" : (process.env.PYTHON || "python3");
const result = spawnSync(pyCmd, process.argv.slice(2), { stdio: "inherit", shell: isWin });
if (result.error) {
  if (!isWin && pyCmd === "python3") {
    // fallback to 'python'
    const fallback = spawnSync("python", process.argv.slice(2), { stdio: "inherit" });
    process.exit(fallback.status ?? 0);
  }
  console.error(result.error);
  process.exit(1);
}
process.exit(result.status ?? 0);
