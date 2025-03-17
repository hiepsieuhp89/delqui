"use client"

import type React from "react"
import { Pagination, PaginationItem } from "@mui/material"
import { styled } from "@mui/material/styles"
import { mdiTriangleSmallUp } from "@mdi/js"
import Icon from "@mdi/react"

// Custom styled components to match the design
const StyledPagination = styled(Pagination)(({ theme }) => ({
    "& .MuiPagination-ul": {
        display: "flex",
        padding: 0,
        margin: '0px 2px',
        borderRadius: 0,
        overflow: "hidden",
        gap: "0.25rem"
    },
    "& .MuiPaginationItem-root": {
        color: "#AFAFAF",
        margin: 0,
        borderRadius: 0,
        minWidth: "26px",
        height: "26px",
        fontSize: "14px",
        border: '1px solid #505459',
        "&:hover": {
            backgroundColor: "#2c3540",
        },
        "&.Mui-selected": {
            backgroundColor: "transparent",
            color: "#8CCF3E",
            position: "relative",
            fontWeight: "bold",
            "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                width: "100%",
                height: "2px",
                backgroundColor: "#8CCF3E",
            },
        },
    },
    "& .MuiPaginationItem-ellipsis": {
        color: "white",
        backgroundColor: "#383C42",
    },
    "& .MuiPaginationItem-previousNext": {
        color: "white",
        border: '1px solid #505459',
        backgroundColor: "#383C42",
        padding: "0 16px",
        borderRadius: 0,
        height: '26px',
        "&:hover": {
            backgroundColor: "#2c3540",
        },

    },
}))

interface CustomPaginationProps {
    count: number
    page: number
    onChange: (event: React.ChangeEvent<unknown>, value: number) => void
}

const CustomPagination: React.FC<CustomPaginationProps> = ({ count, page, onChange }) => {
    return (
        <StyledPagination
            count={count}
            page={page}
            onChange={onChange}
            renderItem={(item) => (
                <PaginationItem
                    components={{
                        previous: () => <div className="flex items-center gap-1">
                            <Icon path={mdiTriangleSmallUp} size={0.7} className="-rotate-90 flex-shrink-0" />
                            Trước</div>,
                        next: () =>
                            <div className="flex items-center gap-1">
                                Tiếp
                                <Icon path={mdiTriangleSmallUp} size={0.7} className="rotate-90 flex-shrink-0" />
                            </div>,
                    }}
                    {...item}
                />
            )}
            siblingCount={0}
            boundaryCount={1}
        />
    )
}

export default CustomPagination

