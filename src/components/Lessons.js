import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

const lessons = [
  {
    title: 'Password Security',
    content: 'Learn how to create strong passwords and why they are important.',
    topics: ['Password complexity', 'Password managers', 'Two-factor authentication']
  },
  {
    title: 'Online Privacy',
    content: 'Understanding digital footprints and protecting personal information.',
    topics: ['Social media privacy', 'Data protection', 'Safe browsing']
  },
  {
    title: 'Cyberbullying Prevention',
    content: 'Identifying and preventing cyberbullying.',
    topics: ['Recognition', 'Reporting', 'Support resources']
  },
  {
    title: 'Internet Safety',
    content: 'Safe internet usage practices and identifying online threats.',
    topics: ['Phishing awareness', 'Safe downloads', 'Secure websites']
  }
];

function Lessons() {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Cybersecurity Lessons
      </Typography>
      <Grid container spacing={3}>
        {lessons.map((lesson, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {lesson.title}
                </Typography>
                <Typography color="textSecondary">
                  {lesson.content}
                </Typography>
                <ul>
                  {lesson.topics.map((topic, idx) => (
                    <li key={idx}>{topic}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Lessons;