import React, { useState } from 'react';
import { Stack, Autocomplete, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const topLinks = [
  { title: 'Bảng điều khiển', path: '/' },
  { title: 'In ấn tài liệu', path: '/print-document' },
  { title: 'Lịch sử in ấn', path: '/history' },
  { title: 'Báo cáo chỉ tiêu', path: '/report' },
  { title: 'Máy in', path: '/printer' },
  // Add more items with paths here...
];

export default function SearchBar() {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate(); // Hook to navigate to a new route

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      // Find the path for the selected option
      const link = topLinks.find(item => item.title === selectedOption);
      if (link) {
        navigate(link.path); // Navigate to the path
      }
    }
  };

  return (
    <Stack spacing={2} sx={{ width: 250,border:"none !important" }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={topLinks.map((option) => option.title)}
        value={selectedOption}
        onChange={(event, newValue) => setSelectedOption(newValue || '')} // Update selected option
        onInputChange={(event, newInputValue) => setSelectedOption(newInputValue)} // Update on input change
        renderInput={(params) => (
          <TextField
            {...params}
            label="Tìm kiếm"
            onKeyDown={handleKeyDown} // Handle Enter key press
            slotProps={{
              input: {
                ...params.InputProps,
                type: 'search',
              },
            }}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        )}
        renderOption={(props, option) => {
          const link = topLinks.find(item => item.title === option);
          return (
            <li {...props}>
              <Link to={link ? link.path : '#'}>{option}</Link>
            </li>
          );
        }}
      />
    </Stack>
  );
}
