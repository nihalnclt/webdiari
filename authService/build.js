const { build } = require("esbuild");

// This function helps to build the project.
// It converts typescript to javascript.
const buildProject = async () => {
    try {
        await build({
            platform: "node",
            bundle: true,
            entryPoints: ["src/index.ts"],
            outdir: "dist",
        });
    } catch (error) {
        console.error("Build Failed:", error);
    }
};

buildProject();
