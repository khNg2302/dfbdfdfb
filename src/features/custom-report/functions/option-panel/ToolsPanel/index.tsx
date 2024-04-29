import { Box } from "@mui/material";
import ToolSelector from "./ToolSelector";

const ToolsPanel = ({}) => {
  const tools =[
    {
      uuid:'1',
      name:'Text',
      type:'text',
      props: {
        content: 'content',
        text_align:'text-left'
      }
    },
    {
      uuid:'2',
      name:'Image',
      type:'image'
    },
    {
      uuid:'3',
      name:'Table',
      type:'table'
    },
    {
      uuid:'4',
      name:'Logo',
      type:'logo'
    }
  ] as any
    return <Box display='flex' marginLeft={-1} marginRight={-1} marginTop={1} flexWrap='wrap'>
      {tools.map(tool=>(
        <ToolSelector key={tool.uuid} itemProps={tool} />
      ))}
    </Box>;
  };
  
  export default ToolsPanel;
  