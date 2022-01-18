import * as React from 'react';
import { Box, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function LoadMorePosts({ result, page, load, handleLoadMore }) {
    return (<Box sx={{ mt: 1, display: 'flex', justifyContent: 'center' }}>
        {result < 9 * (page - 1) ? '' : !load && <Button
            variant="outlined"
            color='info'
            endIcon={<ExpandMoreIcon />}
            onClick={handleLoadMore}
        >Load more</Button>}
    </Box>);
}