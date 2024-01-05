import { tests } from '@mantine-tests/core';
import { DonutChart, DonutChartProps, DonutChartStylesNames } from './DonutChart';

const data = [
  { name: 'Group A', value: 400, color: 'indigo.6' },
  { name: 'Group B', value: 300, color: 'yellow.6' },
  { name: 'Group C', value: 300, color: 'teal.6' },
  { name: 'Group D', value: 200, color: 'pink.6' },
];

const defaultProps: DonutChartProps = {
  data,
};

describe('@mantine/charts/DonutChart', () => {
  tests.itSupportsSystemProps<DonutChartProps, DonutChartStylesNames>({
    component: DonutChart,
    props: defaultProps,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/charts/DonutChart',
    stylesApiSelectors: ['root'],
  });
});
