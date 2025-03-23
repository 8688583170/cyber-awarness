import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Link } from '@material-ui/core';

const resources = [
  {
    title: 'Educational Resources',
    items: [
      {
        name: 'Cybersecurity Basics Guide',
        url: 'https://www.staysafeonline.org/online-safety-basics/',
        description: 'Learn the fundamentals of online safety and security.'
      },
      {
        name: 'Digital Citizenship Resources',
        url: 'https://www.commonsense.org/education/digital-citizenship',
        description: 'Resources for teaching digital citizenship in schools.'
      }
    ]
  },
  {
    title: 'Tools & Software',
    items: [
      {
        name: 'Password Manager Guide',
        url: 'https://www.consumerreports.org/password-managers/best-password-manager-2021-a7382842725/',
        description: 'Learn about password managers and how to use them.'
      },
      {
        name: 'Antivirus Software Guide',
        url: 'https://www.pcmag.com/picks/the-best-antivirus-protection',
        description: 'Find the best antivirus software for your needs.'
      }
    ]
  }
];

function Resources() {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Cybersecurity Resources
      </Typography>
      {resources.map((section, index) => (
        <Card key={index} style={{ marginBottom: '20px' }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {section.title}
            </Typography>
            <List>
              {section.items.map((item, idx) => (
                <ListItem key={idx}>
                  <ListItemText
                    primary={
                      <Link href={item.url} target="_blank" rel="noopener noreferrer">
                        {item.name}
                      </Link>
                    }
                    secondary={item.description}
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Resources; 