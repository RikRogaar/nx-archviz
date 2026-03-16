import { createProjectGraphAsync, ProjectGraph } from "@nx/devkit";

export async function readNxGraph(): Promise<ProjectGraph> {
    const graph = await createProjectGraphAsync();
    
    return graph;
}
