import React from 'react';
import { Typography, Card, CardContent, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h3" gutterBottom>
        Welcome to CyberSafe Schools
      </Typography>
      <Typography variant="h6" color="textSecondary" paragraph>
        Empowering students with cybersecurity knowledge and skills
      </Typography>

      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                About Our Program
              </Typography>
              <Typography paragraph>
                CyberSafe Schools is designed to educate students about cybersecurity,
                online safety, and digital citizenship. Our comprehensive program
                includes interactive lessons, quizzes, and valuable resources to help
                students navigate the digital world safely.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/lessons"
              >
                Start Learning
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Key Features
              </Typography>
              <ul>
                <li>Interactive cybersecurity lessons</li>
                <li>Knowledge assessment quizzes</li>
                <li>Educational resources and guides</li>
                <li>Best practices for online safety</li>
                <li>Digital citizenship training</li>
              </ul>
              <Button
                variant="contained"
                color="secondary"
                component={Link}
                to="/quiz"
              >
                Take a Quiz
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home; 