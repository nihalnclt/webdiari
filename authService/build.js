const { build } = require("esbuild");

// This function helps to build the project.
// It converts typescript to javascript.
const buildProject = async () => {
    try {
        console.log("starting building..!");
        await build({
            platform: "node",
            bundle: true,
            entryPoints: ["src/index.ts"],
            outdir: "build",
        });
        console.log("Build completed successfully..!");
    } catch (error) {
        console.error("Build Failed:", error);
    }
};

buildProject();
