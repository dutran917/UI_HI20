// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';

// sections
import { AppWebsiteVisits } from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function KpiDC() {
  const theme = useTheme();

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Quản lý doanh thu
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
                  name: 'Số bài đăng',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'KPI',
                  type: 'column',
                  fill: 'gradient',
                  color: 'red',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
