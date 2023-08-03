import { Box, SimpleGrid } from "@chakra-ui/react";
import AddTask from "./AddTask";
import SearchAndSortTask from "./SearchAndSort";
import TaskList from "./Tasks";

const TaskGrid = () => {
  return (
    <Box margin={4}>
      <SimpleGrid
        templateColumns="100px 1fr"
        marginTop={8}
        marginBottom={8}
        spacing={2}
      >
        <Box>
          <AddTask />
        </Box>
        <Box>
          <SearchAndSortTask />
        </Box>
      </SimpleGrid>
      <TaskList />
    </Box>
  );
};

export default TaskGrid;