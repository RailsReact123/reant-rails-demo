import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {useTheme} from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Divider} from "@mui/material";
import ClickAwayListener from '@mui/base/ClickAwayListener';
import {useState} from "react";

const navbarObject = [
  {
    id: 1, label: 'MX Team', options: {}},
  {id: 2, label: 'MI Team', options: []},
  {id: 3, label: 'MC Team', options: []},
  {id: 4, label: 'MV Team', options: []},
  {id: 5, label: 'MR Team', options: {'Test Results': ['BET Tests', 'DES Tests', 'InterOP Tests', 'Litepoint Tests', 'Mesh Tests', 'Performance Tests', 'Roaming Tests', 'Upgrade Tests', 'Location Tests', 'VoIP Tests'],
      'Graphs': ['Historical Performance', 'Performance Aggregator'],
      'Analysis': ['BFT Comparison Tool', 'InterOP Failure Summary Analysis'],
      'CR Validations': ['Jenkins Verify']}},
  {id: 6, label: 'MS Team', options: []},
  {id: 7, label: 'MT Team', options: []},
  {id: 8, label: 'MG Team', options: []},
]

export default () => {
  const theme = useTheme();
  const [iconClicked, setIconClicked] = useState(null)

  const showDropdown = (objectId) => {
    setIconClicked(objectId)
  }

  return (
    <Box sx={{flexGrow: 1}} color={theme.palette.primary.main}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{display: {xs: 'none', sm: 'block'}}}
          >
            MX Taco (DEVEL)
          </Typography>
          <Box sx={{display: 'flex'}}>
            {
              navbarObject.map((object) => (
                <Box sx={{position: 'relative', display: 'flex', alignItems: 'center', cursor: 'pointer'}}
                     onClick={() => showDropdown(object.id)}>
                  <Typography
                    key={object.id}
                    variant="h8"
                    noWrap
                    component="div"
                    sx={{marginLeft: '20px'}}
                  >
                    {object.label}
                  </Typography>
                  <ArrowDropDownIcon/>
                  {iconClicked === object.id &&
                    <ClickAwayListener onClickAway={()=>setIconClicked(null)}>
                     <Paper sx={{position: 'absolute', minWidth: '300px', maxHeight: '500px', top: '44px', left: '20px', overflowY: 'scroll'}}>
                       <Box sx={{display: 'flex', flexDirection: 'column'}}>
                         {Object.keys(object.options).map((key)=>(
                           <Box key={key} sx={{display: 'flex', flexDirection: 'column'}}>
                           <Typography sx={{fontSize: '14px', marginTop: '10px', marginBottom: '10px', paddingLeft: '20px', color: 'grey'}}>{key}</Typography>
                             <Divider sx={{width: '100%'}} />
                           {Object.keys(object.options).indexOf(key) === 0 &&
                             <>
                             <Typography sx={{fontSize: '18px', marginTop: '10px', marginBottom: '10px', paddingLeft: '20px'}}>All</Typography>
                               <Divider sx={{width: '100%'}} />
                             </>
                           }

                           {object.options[key].map((option)=>(
                             <Typography sx={{fontSize: '18px', marginTop: '10px', paddingLeft: '20px'}} key={option}>{option}</Typography>
                           ))}
                             <Divider sx={{width: '100%', marginTop: '10px'}} />
                           </Box>
                           ))}
                       </Box>
                     </Paper>
                    </ClickAwayListener>
                  }
                </Box>
              ))
            }
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
