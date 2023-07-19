
import { styled } from '@stitches/react';
import { colors } from '@poke-ui/tokens';

export const StyledButton = styled('button', {
    backgroundColor: colors.red,
    color: colors.blue,
    borderRadius: '9999px',
    fontSize: '13px',
    padding: '10px 15px',
    '&:hover': {
      backgroundColor: 'lightgray',
    },
  });