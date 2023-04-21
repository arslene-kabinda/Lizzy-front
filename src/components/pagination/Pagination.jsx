import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
export default function BasicPagination({ query, setPage, numberOfPage = 10 }) {
  // Scroll to top when page changes

  const router = useRouter();

  const handlePageChange = (page) => {
    router.push(query);
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <Stack spacing={2}>
        <Pagination
          onChange={(event) => handlePageChange(event.target.textContent)}
          count={numberOfPage}
          color="primary"
        />
      </Stack>
    </div>
  );
}
