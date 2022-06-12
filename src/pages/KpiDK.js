// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';

// sections
import { AppWebsiteVisits } from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function KpiDK() {
  const theme = useTheme();

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          KPI
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <AppWebsiteVisits
              title="KPI các tháng trong năm"
              chartLabels={[
                'tháng 1',
                'tháng 2',
                'tháng 3',
                'tháng 4',
                'tháng 5',
                'tháng 6',
                'tháng 7',
                'tháng 8',
                'tháng 9',
                'tháng 10',
                'tháng 11',
                'tháng 12',
              ]}
              chartData={[
                {
                  name: 'Số căn đã bán',
                  type: 'column',
                  fill: 'solid',
                  data: [3, 3, 4, 5, 3, 3, 4, 4, 5, 0, 0, 0],
                },
                {
                  name: 'KPI',
                  type: 'column',
                  fill: 'gradient',
                  data: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
                },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
