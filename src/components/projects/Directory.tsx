import {
  Stack,
  Box,
  Divider,
} from "@mui/joy";
import React from "react";
import projects from "@/assets/Projects";
import { useMobileMode } from "@/components/Responsive";
import { ProjectCard } from "../sections/Featured";

export default function Directory() {

  const mobile = useMobileMode();

  return (
    <Stack
      paddingY={1}
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gap: 4,
          gridTemplateColumns: mobile ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))",
          alignItems: "stretch",
        }}
      >
        {
          projects.map((project, index) => (
            <React.Fragment
              key={`$${project.title}-${Date.now().toString()}`}
            >
              <ProjectCard
                project={project}
              />
              {index < projects.length - 1 && (
                <Divider
                  sx={{
                    display: mobile ? "block" : "none",
                  }}
                />
              )}
            </React.Fragment>
          ))
        }
      </Box>
    </Stack>
  );
}
