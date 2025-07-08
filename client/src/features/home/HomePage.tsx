import { Box, Button, Container, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 10 }}>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        textAlign="center"
        py={8}
      >
        <img
          src="/coursestore-icon.png"
          alt="CourseStore Logo"
          style={{ width: 100, marginBottom: '1rem' }}
        />

        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Welcome to CourseStore
        </Typography>

        <Typography variant="h6" color="text.secondary" mb={4}>
          Explore top-rated courses, curated for learners like you.
        </Typography>

        <Button
          component={NavLink}
          to="/catalog"
          variant="contained"
          size="large"
          sx={{
            background: 'linear-gradient(90deg, #7b3fe4 0%, #ba68c8 100%)',
            color: '#fff',
            px: 5,
            py: 1.5,
            fontSize: '1rem',
            borderRadius: '8px',
            textTransform: 'none',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
            '&:hover': {
              background: 'linear-gradient(90deg, #682dc6 0%, #ab47bc 100%)'
            }
          }}
        >
          Browse Courses
        </Button>
      </Box>
    </Container>
  );
}
