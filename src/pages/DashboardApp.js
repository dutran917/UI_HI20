// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';

// sections
import { AppWebsiteVisits } from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
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
              title="Biểu đồ doanh thu"
              subheader="(+43%) so với năm trước (2021)"
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
                  name: 'Đầu chủ',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 12],
                },
                {
                  name: 'Đầu khách',
                  type: 'column',
                  fill: 'gradient',
                  color: 'green',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 15],
                },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
