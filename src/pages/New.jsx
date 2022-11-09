import React from 'react';
import { Box } from '@chakra-ui/react';
import Loader from './../components/Loader';
import Years from './../components/filter type/Years';



const New = () => {
  return (
    <Box
      pt={{ base: '7rem', md: '7rem', lg: '7rem', xl: '4rem' }}
      px={{ base: '4', lg: '4', xl: '4.7rem' }}
    >
      fdd
      <Loader />
      <Years/>
      
    </Box>
  );
};

export default New;
