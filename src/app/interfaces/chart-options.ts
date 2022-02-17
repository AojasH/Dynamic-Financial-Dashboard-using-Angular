import {
	ApexAnnotations,
	ApexChart,
	ApexDataLabels,
	ApexFill,
	ApexForecastDataPoints,
	ApexGrid,
	ApexLegend,
	ApexMarkers,
	ApexNoData,
	ApexPlotOptions,
	ApexResponsive,
	ApexNonAxisChartSeries,
	ApexStates,
	ApexStroke,
	ApexTheme,
	ApexTooltip,
	ApexXAxis,
	ApexYAxis,
} from 'ng-apexcharts';

export interface ChartOptions {
	annotations?: ApexAnnotations;
	chart?: ApexChart;
	colors?: Array<string>;
	dataLabels?: ApexDataLabels;
	fill?: ApexFill;
	forecastDataPoints?: ApexForecastDataPoints;
	grid?: ApexGrid;
	labels?: Array<string>;
	legend?: ApexLegend;
	markers?: ApexMarkers;
	noData?: ApexNoData;
	plotOptions?: ApexPlotOptions;
	responsive?: ApexResponsive[];
	series?: any;
	states?: ApexStates;
	stroke?: ApexStroke;
	subtitle?: ApexTitle;
	theme?: ApexTheme;
	tooltip?: ApexTooltip;
	xaxis?: ApexXAxis;
	yaxis?: ApexYAxis;
}

interface ApexTitle {
	text?: string | undefined;
	align?: string;
	margin?: number;
	offsetX?: number;
	offsetY?: number;
	floating?: boolean;
	style?: {
		fontSize?: string;
		fontWeight?: string;
		fontFamily?: undefined | string;
		color?: string;
	};
}
