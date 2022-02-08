import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './style.scss';


const PaginationComponent = ({ data, onChange }) => {

    const { total_count } = data;
    const [page, setPage] = useState(1);

    const handleChange = (e, value) => {
        setPage(value)
        onChange(value)
    }

    return (
        <div className="pagination">
            <Stack spacing={1}>
                <Pagination
                    count={total_count}
                    color="primary"
                    page={page}
                    onChange={handleChange}
                />
            </Stack>
        </div>
    );
};

export default PaginationComponent;